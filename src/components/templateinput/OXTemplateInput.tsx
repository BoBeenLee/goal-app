import _ from "lodash";
import React, { Component } from 'react';
import styled from "styled-components/native";

import { TemplateContainer } from "./style";
import { GText } from '../text';
import { colors } from '../../styles';
import { ViewProps } from 'react-native';

type OXType = "O" | "X";

interface IProps {
    title?: string;
    style?: ViewProps["style"];
    defaultValue?: OXType;
    onOXPress?: (value: OXType) => void;
}

interface IStates {
    value: OXType;
}

const Container = styled(TemplateContainer)`
    
`;

const Content = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const TemplateInputTitle = styled(GText).attrs({
    weightType: "kreonBold"
})`
    font-size: 24px;
    color: ${colors.gunmetal};
    margin-bottom: 8px;
`;


const OTouchabledView = styled.TouchableOpacity`
    margin-right: 40px;
`;

const XTouchabledView = styled.TouchableOpacity``;


const OXText = styled(GText).attrs<{ isActive: boolean }>({
    weightType: "kreonBold"
})`
    font-size: 60px;
    color: ${({ isActive }) => isActive ? colors.darkSkyBlue : colors.cloudyBlueTwo};
`;

class OXTemplateInput extends Component<IProps, IStates> {
    constructor(props) {
        super(props);
        this.state = {
            value: props.defaultValue
        };
    }

    public render() {
        const { style, title } = this.props;
        const { value } = this.state;

        return (
            <Container style={style}>
                {title ? <TemplateInputTitle>{title}</TemplateInputTitle> : null}
                <Content>
                    <OTouchabledView onPress={_.partial(this.onChangeValue, "O")}>
                        <OXText isActive={"O" === value}>O</OXText>
                    </OTouchabledView>
                    <XTouchabledView onPress={_.partial(this.onChangeValue, "X")}>
                        <OXText isActive={"X" === value}>X</OXText>
                    </XTouchabledView>
                </Content>
            </Container>
        );
    }

    private onChangeValue = (value: OXType) => {
        this.setState({
            value
        }, () => {
            const { onOXPress } = this.props;
            if (onOXPress) {
                onOXPress(value);
            }
        })
    };
}

export default OXTemplateInput;
