import React, { Component } from 'react';
import styled from "styled-components/native";

import { colors } from '../../styles';
import GText from './GText';
import { TextProps, ViewProps } from 'react-native';

interface IProps {
    style?: ViewProps["style"];
    textStyle?: TextProps["style"];
    day: string;
}

const DDayView = styled.View`
    padding: 4px 8px;
    background-color: ${colors.orangePink};
    border-radius: 13px;
`;

const DDayText = styled(GText).attrs({
    weightType: "bold"
})`
    font-size: 12px;
    color: ${colors.white};
`;

class DDay extends Component<IProps> {
    public render() {
        const { style, textStyle, day } = this.props;
        return (
            <DDayView style={style}>
                <DDayText style={textStyle}>D-{day}</DDayText>
            </DDayView>
        );
    }
}

export default DDay;
