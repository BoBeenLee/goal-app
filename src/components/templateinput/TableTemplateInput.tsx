import _ from "lodash";
import React, { Component } from 'react';
import styled from "styled-components/native";

import { TemplateContainer } from "./style";
import { GText } from '../text';
import { colors } from '../../styles';
import { ViewProps } from "react-native";
import { GInputText } from "../input";

interface ITableItem {
    label: string;
    value: string;
}

interface IProps {
    style?: ViewProps["style"];
    items: ITableItem[];
    onBlurItems?: (items: ITableItem[]) => void;
}

interface IStates {
    items: ITableItem[];
}

const Container = styled(TemplateContainer)``;

const Row = styled.View`
    flex-direction: row;
`;

const TableText = styled(GText).attrs({})`
    font-size: 16px;
    color: ${colors.cloudyBlueTwo};
`;

const TableInputText = styled(GInputText)`
    font-size: 16px;
    color: ${colors.cloudyBlueTwo};
`;

const HighlightTableInputText = styled(TableInputText).attrs({
    weightType: "bold"
})``;

class TableTemplateInput extends Component<IProps, IStates> {
    constructor(props) {
        super(props);

        this.state = {
            items: props.items
        }
    }
    public render() {
        const { style } = this.props;
        const { items } = this.state;

        return (
            <Container style={style}>
                {_.map(items, (item, index) => {
                    return (<Row key={`tableItem${index}`}>
                        <HighlightTableInputText
                            name={`tableInput${index}`}
                            defaultValue={item.label}
                            onTextBlur={_.partial(this.onBlurLabelText, index)}
                        />
                        <TableText>{"  |  "}</TableText>
                        <TableInputText
                            name={`tableInput1${index}`}
                            defaultValue={item.value}
                            onTextBlur={_.partial(this.onBlurValueText, index)}
                        />
                    </Row>);
                })}
            </Container>
        );
    }

    private onBlurLabelText = (index, label) => {
        this.setState((prevState) => ({
            items: _.map(prevState.items, (item, itemIndex) => {
                if (itemIndex === index) {
                    return {
                        label,
                        value: item.value
                    }
                }
                return item;
            })
        }), this.afterBlurItems)
    };

    private onBlurValueText = (index, value) => {
        this.setState((prevState) => ({
            items: _.map(prevState.items, (item, itemIndex) => {
                if (itemIndex === index) {
                    return {
                        label: item.label,
                        value
                    }
                }
                return item;
            })
        }), this.afterBlurItems)
    };

    private afterBlurItems = () => {
        const { onBlurItems } = this.props;
        const { items } = this.state;
        if (onBlurItems) {
            onBlurItems(items);
        }
    }
}

export default TableTemplateInput;
