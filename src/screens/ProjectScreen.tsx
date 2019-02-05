import React, { Component } from 'react';
import styled from "styled-components/native";

import { ContainerWithStatusBar, AchieveCard, Title, AchieveHistoryCard } from '../components';
import { push } from '../utils/navigator';
import { SCREEN_IDS } from './constant';

interface IProps {
    componentId: string;
}

const Container = styled(ContainerWithStatusBar)`
    flex: 1;
`;

const Content = styled.View`
padding-horizontal: 16px;
`;

const AchieveTitle = styled(Title)``;

const AchieveCardView = styled(AchieveCard)`
    height: 176px;
`;

const AchieveHistoriesList = styled.View`
    flex-direction: row;
`;

const AchieveHistoryTitle = styled(Title)``;

const AchieveHistoryCardView = styled(AchieveHistoryCard)`
    width: 150px;
    height: 300px;
`;

class ProjectScreen extends Component<IProps> {
    public render() {
        return (
            <Container>
                <Content>
                    <AchieveTitle>지금의 목표</AchieveTitle>
                    <AchieveCardView
                        title={`어플 완성하고
런칭하기`}
                        onAchievePress={this.navigateProjectDays}
                    />
                    <AchieveHistoryTitle>지나간 목표</AchieveHistoryTitle>
                    <AchieveHistoriesList>
                        <AchieveHistoryCardView title={`하루에 열장
씩 책읽기`} />
                    </AchieveHistoriesList>
                </Content>
            </Container>
        );
    }

    private navigateProjectDays = () => {
        const { componentId } = this.props;
        push(componentId, SCREEN_IDS.ProjectDaysScreen);
    }
}

export default ProjectScreen;
