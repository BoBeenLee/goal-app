import React, { Component } from 'react';
import styled from "styled-components/native";
import { Moment } from 'moment';

import { TemplateContainer } from "./style";
import { GText } from '../text';
import { colors } from '../../styles';
import { ViewProps } from 'react-native';

interface IProps {
    style?: ViewProps["style"];
    startTime: Moment;
    endTime: Moment;
}

const Container = styled(TemplateContainer)``;

const TimeText = styled(GText).attrs({})`
    font-size: 16px;
    color: ${colors.blueyGreyTwo};
`;

const HighlightTimeText = styled(TimeText).attrs({
    weightType: "bold"
})``;



class TimeTemplate extends Component<IProps> {
    public render() {
        const { style, startTime, endTime } = this.props;

        return (
            <Container style={style}>
                <TimeText>
                    <HighlightTimeText>START</HighlightTimeText>{" "}
                    {startTime.format("HH:mm a")}
                    {"  -  "}
                    <HighlightTimeText>END</HighlightTimeText>{" "}
                    {endTime.format("HH:mm a")}
                </TimeText>
            </Container>
        );
    }
}

export default TimeTemplate;
