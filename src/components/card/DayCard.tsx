import React, { Component } from 'react';
import styled, { css } from "styled-components/native";
import { TouchableHighlightProps } from 'react-native';

import { GText } from '../text';

interface IProps {
    style?: TouchableHighlightProps["style"];
    isActive?: boolean;
    day: string;
}

const ActiveCSS = css`
    padding: 23px;
    border-radius: 50px;
    background-color: #eee;
`;

const InActiveTextCSS = css`
    font-size: 40px;
    color: #eee;
`;

const ActiveTextCSS = css`
    font-size: 54px;
    color: #000;
`;

const Container = styled.TouchableHighlight.attrs<{ isActive?: boolean }>({})`
    justify-content: center;
    align-items: center;
    ${({ isActive }) => isActive ? ActiveCSS : ''}
`;

const DayText = styled(GText).attrs<{ isActive?: boolean }>({})`
    ${({ isActive }) => isActive ? ActiveTextCSS : InActiveTextCSS}
`;

class DayCard extends Component<IProps> {
    render() {
        const { style, isActive, day } = this.props;

        return (
            <Container style={style} isActive={isActive} activeOpacity={1}>
                <DayText isActive={isActive}>{day}</DayText>
            </Container>
        );
    }
}

export default DayCard;
