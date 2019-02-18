import React, { Component } from 'react';
import styled from "styled-components/native";
import { Moment } from 'moment';

import { TemplateContainer } from "./style";
import { GText } from '../text';
import { colors } from '../../styles';
import { ViewProps } from 'react-native';
import { GInputText } from '../input';

interface IProps {
    style?: ViewProps["style"];
    startTime: string;
    endTime: string;
    onStartTimeBlur?: (text: string) => void;
    onEndTimeBlur?: (text: string) => void;
}

const Container = styled(TemplateContainer)`
    flex-direction: row;
`;

const TimeText = styled(GText).attrs({})`
    font-size: 16px;
    color: ${colors.blueyGreyTwo};
`;

const HighlightTimeText = styled(TimeText).attrs({
    weightType: "bold"
})``;

const TimeInputText = styled(GInputText)`
    font-size: 16px;
    color: ${colors.blueyGreyTwo};
`;

class TimeTemplate extends Component<IProps> {
    public render() {
        const { style, startTime, endTime, onStartTimeBlur, onEndTimeBlur } = this.props;

        return (
            <Container style={style}>
                <HighlightTimeText>START </HighlightTimeText>
                <TimeInputText name="startTimeInput" defaultValue={startTime} placeholder={"22:22 pm"} placeholderTextColor={colors.cloudyBlueTwo} onTextBlur={onStartTimeBlur} />
                <TimeText>{"  -  "}</TimeText>
                <HighlightTimeText>END </HighlightTimeText>
                <TimeInputText name="endTimeInput" defaultValue={endTime} placeholder={"22:24 pm"} placeholderTextColor={colors.cloudyBlueTwo} onTextBlur={onEndTimeBlur} />
            </Container>
        );
    }
}

export default TimeTemplate;
