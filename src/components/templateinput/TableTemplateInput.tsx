import _ from "lodash";
import React, { Component } from 'react';
import styled from "styled-components/native";

import { TemplateContainer } from "./style";
import { GText } from '../text';
import { colors } from '../../styles';

interface ITableItem {
    label: string;
    value: string;
}

interface IProps {
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

const HighlightTableText = styled(TableText).attrs({
    weightType: "bold"
})``;



class TableTemplate extends Component<IProps> {
    public render() {
        const { items } = this.props;

        return (
            <Container>
                {_.map(items, (item, index) => {
                    return (<Row key={`tableItem${index}`}>
                        <HighlightTableText>{item.label}</HighlightTableText>
                        <TableText>{"  |  "}</TableText>
                        <TableText>{item.value}</TableText>
                    </Row>);
                })}
            </Container>
        );
    }
}

export default TableTemplate;
