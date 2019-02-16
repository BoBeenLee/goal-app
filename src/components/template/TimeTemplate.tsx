import React, { Component } from 'react';
import styled from "styled-components/native";

import { TemplateContainer } from "./style";
import { GText } from '../text';
import { colors } from '../../styles';

const Container = styled(TemplateContainer)``;

const Title = styled(GText).attrs({
    weightType: "kreonBold"
})`
    font-size: 24px;
    color: ${colors.gunmetal};
`;

const Content = styled.View`
    padding-top: 8px;
`;

const TimeText = styled(GText).attrs({})`
    font-size: 16px;
    color: ${colors.cloudyBlueTwo};
`;

const HighlightTimeText = styled(TimeText).attrs({
    weightType: "bold"
})``;



class TimeTemplate extends Component {
    public render() {
        return (
            <Container>
                <Title>Time</Title>
                <Content>
                    <TimeText>
                        <HighlightTimeText>시작</HighlightTimeText>{" "}
                        {"오전 11:30"}
                        {"  -  "}
                        <HighlightTimeText>종료</HighlightTimeText>{" "}
                        {"오후 12:30"}
                    </TimeText>
                </Content>
            </Container>
        );
    }
}

export default TimeTemplate;
