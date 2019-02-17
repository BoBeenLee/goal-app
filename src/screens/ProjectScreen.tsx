import React, { Component } from 'react';
import styled from "styled-components/native";
import ActionSheet from 'react-native-actionsheet';

import { ContainerWithStatusBar, AchieveCard, Title, AchieveHistoryCard, GText, DDay } from '../components';
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
    margin-bottom: 16px;
`;

const AchieveTitle = styled(GText).attrs({
    weightType: "bold"
})`
    font-size: 18px;
    color: ${colors.gunmetal};
    margin-right: 10px;
`;

const AchiveDDay = styled(DDay)``;

const AchieveCardView = styled(AchieveCard)`
    height: 190px;
`;

const AchieveHistoryTitle = styled(GText).attrs({
    weightType: "bold"
})`
    font-size: 18px;
    color: ${colors.gunmetal};
    margin-right: 10px;
    margin-top: 30px;
    margin-bottom: 20px;
`;

const AchieveHistoriesList = styled.ScrollView.attrs({
    horizontal: true
})`
    flex-direction: row;
`;

const AchieveHistoryCardView = styled(AchieveHistoryCard)`
    width: 200px;
    margin-right: 15px;
`;

class ProjectScreen extends Component<IProps> {
    public ActionSheet: any;
    public render() {
        return (
            <Container>
                <Content>
                    <HeaderTitle>
                        30days list
                    </HeaderTitle>
                    <AchiveView>
                        <AchieveTitle>진행중 목표</AchieveTitle>
                        <AchiveDDay day="13" />
                    </AchiveView>
                    <AchieveCardView
                        title={`어플 완성하고
런칭하기`}
                        onAchievePress={this.navigateProjectDays}
                        onMorePress={this.showActionSheetMore}
                    />
                    <AchieveHistoryTitle>지나간 목표</AchieveHistoryTitle>
                    <AchieveHistoriesList>
                        <AchieveHistoryCardView title={`하루에 열장
씩 책읽기`} />
                        <AchieveHistoryCardView title={`하루에 열장
씩 책읽기`} />
                    </AchieveHistoriesList>
                </Content>
                <ActionSheet
                    ref={o => this.ActionSheet = o}
                    options={['알람 설정', '목표 삭제', 'Cancel']}
                    cancelButtonIndex={2}
                    destructiveButtonIndex={1}
                    onPress={this.actionSheetMore}
                />
            </Container>
        );
    }

    private showActionSheetMore = () => {
        this.ActionSheet.show();
    }

    private actionSheetMore = (index: number) => {
        if (index === 0) {
            this.settingAlaram();
        } else if (index === 1) {
            this.deleteProject();
        }
    }

    private deleteProject = () => {
        alert("Delete");
    }

    private settingAlaram = () => {
        alert("Setting Alarm");
    }

    private navigateProjectDays = () => {
        const { componentId } = this.props;
        push(componentId, SCREEN_IDS.ProjectDaysScreen);
    }
}

export default ProjectScreen;
