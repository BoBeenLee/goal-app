import React, { Component } from 'react';
import styled from "styled-components/native";

import { CommentTemplate, ContainerWithStatusBar, DayCard, GText, PhraseCard, OXTemplate, AchieveCard } from '../components';

const Container = styled(ContainerWithStatusBar)`
    flex: 1;
`;

const TitleView = styled.View`
    margin-horizontal: 22px;
    padding-vertical: 13px;
    border-bottom-width: 1px;
    border-bottom-color: #000;
`;
const Title = styled(GText)`
    font-size: 18px;
    font-weight: bold;
`;

const AchiveCardView = styled(AchieveCard)`
    height: 176px;
`;

const TemplateView = styled.View`
    flex: 1;
    padding: 40px;
    background-color: #eee;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
`;

const CommentView = styled(CommentTemplate)`
    margin-top: 26px;
`;

class ProjectScreen extends Component {
    public render() {
        return (
            <Container>
                <TitleView>
                    <Title>하루에 30분씩 홀트</Title>
                </TitleView>
                <AchiveCardView />
            </Container>
        );
    }
}

export default ProjectScreen;
