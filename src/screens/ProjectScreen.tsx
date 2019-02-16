import React, { Component } from 'react';
import styled from "styled-components/native";

import { ContainerWithStatusBar, AchieveCard, Title, AchieveHistoryCard, GText } from '../components';
import { push } from '../utils/navigator';
import { SCREEN_IDS } from './constant';
import { colors } from '../styles';

interface IProps {
    componentId: string;
}

const Container = styled(ContainerWithStatusBar)`
    flex: 1;
`;

const HeaderTitle = styled(GText).attrs({
    weightType: "kreonBold"
})`
    font-size: 36px;
    color: ${colors.gunmetal};
    margin-top: 58px;
    margin-bottom: 67px;
`;

const Content = styled.View`
    padding-horizontal: 16px;
`;

const AchiveView = styled.View`
    flex-direction: row;
    align-items: center;
`;

const AchieveTitle = styled(GText).attrs({
    weightType: "bold"
})`
    font-size: 18px;
    color: ${colors.gunmetal};
`;

const AchiveDayView = styled.View`
    padding: 4px 8px;
    background-color: ${colors.orangePink};
    border-radius: 13px;
`;

const AchiveDay = styled(GText).attrs({
    weightType: "bold"
})`
    font-size: 12px;
    color: ${colors.white};
`;

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
                    <HeaderTitle>
                        30days list
                    </HeaderTitle>
                    <AchiveView>
                        <AchieveTitle>진행중 목표</AchieveTitle>
                        <AchiveDayView>
                            <AchiveDay>D-13</AchiveDay>
                        </AchiveDayView>
                    </AchiveView>

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
