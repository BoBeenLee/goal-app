import React, { Component } from 'react';
import styled from "styled-components/native";

import { GInputText } from '.';
import { colors } from '../../styles';
import { GInputTextProps } from './GInputText';
import { ViewProps } from 'react-native';

interface IProps extends GInputTextProps {
    containerStyle?: ViewProps["style"];
}

const Container = styled.View`
    padding: 5px 7px;
    border-bottom-width: 1px;
    border-bottom-color: ${colors.gunmetal};
`;

const TextInput = styled(GInputText).attrs({
    weightType: "light",
})`
    font-size: 24px;
    color: ${colors.cerulean};
    letter-spacing: -0.6;
`;

class UnderLineInputText extends Component<IProps> {
    render() {
        const { containerStyle, ...rest } = this.props;
        return (
            <Container style={containerStyle}>
                <TextInput {...rest} placeholderTextColor={colors.cloudyBlue} />
            </Container>
        );
    }
}

export default UnderLineInputText;
