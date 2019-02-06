import React, { Component } from 'react';
import styled, { css } from "styled-components/native";
import { TouchableHighlightProps } from 'react-native';

import { GText } from '../text';

interface IProps {
    style?: TouchableHighlightProps["style"];
    isActive?: boolean;
    day: string;
    onPress: () => void;
}

const ActiveCSS = css`
    background-color: #787878;
`;

const InActiveCSS = css`
    border-width: 1px;
    border-color: #eee;
`;

const InActiveTextCSS = css`
    color: #000;
`;

const ActiveTextCSS = css`
    color: #fff;
`;

const Container = styled.TouchableHighlight.attrs<{ isActive?: boolean }>({})`
    width: 64px;
    height: 64px;
    border-radius: 32px;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    ${({ isActive }) => isActive ? ActiveCSS : InActiveCSS}
`;

const DayText = styled(GText).attrs<{ isActive?: boolean }>({})`
    font-size: 27px;
    ${({ isActive }) => isActive ? ActiveTextCSS : InActiveTextCSS}
`;

class DayCard extends Component<IProps> {
    public render() {
        const { style, isActive, day, onPress } = this.props;

        return (
            <Container style={style} isActive={isActive} activeOpacity={1} onPress={onPress}>
                <DayText isActive={isActive}>{day}</DayText>
            </Container>
        );
    }
}

export default DayCard;
