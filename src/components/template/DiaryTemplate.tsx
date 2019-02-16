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

const DiaryText = styled(GText).attrs({})`
    font-size: 16px;
    color: ${colors.cloudyBlueTwo};
`;


class DiaryTemplate extends Component {
    public render() {
        return (
            <Container>
                <Title>Diary</Title>
                <Content>
                    <DiaryText>{`줄글로 자신의 하루를 남기고 싶을 때\n 사용하는 템플릿입니다.`}</DiaryText>
                </Content>
            </Container>
        );
    }
}

export default DiaryTemplate;
