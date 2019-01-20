import React, { Component } from 'react';
import styled from "styled-components/native";

import { CommentTemplate, ContainerWithStatusBar, DayCard, GText, PhraseCard, OXTemplate } from '../components';

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

const DayView = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 25px;
`;

const ActiveDayView = styled(DayCard)`
  margin-horizontal: 25px;
`;

const PhraseView = styled(PhraseCard)`
  margin-vertical: 22px;
  margin-horizontal: 46px;
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
                <DayView>
                    <DayCard
                        day="26"
                    />
                    <ActiveDayView
                        isActive={true}
                        day="27"
                    />
                    <DayCard
                        day="28"
                    />
                </DayView>
                <PhraseView title="“내 어플이 사용되는 모습을 보고싶어”" />
                <TemplateView>
                    <OXTemplate />
                    <CommentView />
                </TemplateView>
            </Container>
        );
    }
}

export default ProjectScreen;
