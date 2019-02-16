import React, { Component } from 'react';
import styled from "styled-components/native";
import { Moment } from 'moment';

import { TemplateContainer } from "./style";
import { GText } from '../text';
import { colors } from '../../styles';

interface IProps {
    startTime: Moment;
    endTime: Moment;
}

const Container = styled(TemplateContainer)``;

const TimeText = styled(GText).attrs({})`
    font-size: 16px;
    color: ${colors.cloudyBlueTwo};
`;

const HighlightTimeText = styled(TimeText).attrs({
    weightType: "bold"
})``;



class TimeTemplate extends Component<IProps> {
    public render() {
        const { startTime, endTime } = this.props;

        return (
            <Container>
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
