import moment, { Moment } from "moment";
import _ from "lodash";
import React, { Component } from 'react';
import styled from "styled-components/native";
import ActionSheet from 'react-native-actionsheet';
import { Q } from '@nozbe/watermelondb';
import withObservables from '@nozbe/with-observables';

import { ContainerWithStatusBar, AchieveCard, AchieveHistoryCard, GText, DDay, AddAchieveCard } from '../components';
import { push } from '../utils/navigator';
import { SCREEN_IDS } from './constant';
import { colors } from '../styles';
import { transformStringToFormat, tranformDateToFormat, add30Days, getDDay } from "../utils/date";

interface IProps {
    database: any;
    doneProjectDay: any;
    currentProjects: any;
    historyProjects: any;
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

const AchieveCardView = styled.View`
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
        const { historyProjects } = this.props;
        const currentProject = this.currentProject;

        return (
            <Container>
                <Content>
                    <HeaderTitle>
                        30days list
                    </HeaderTitle>
                    <AchiveView>
                        <AchieveTitle>진행중 목표</AchieveTitle>
                        {currentProject ? <AchiveDDay day={`${getDDay(currentProject.createdAt)}`} /> : null}
                    </AchiveView>
                    <AchieveCardView>
                        {currentProject ? <AchieveCard
                            title={currentProject.projectName}
                            startDate={transformStringToFormat(currentProject.createdAt)}
                            endDate={tranformDateToFormat(add30Days(moment(currentProject.createdAt)))}
                            percent={this.projectPercentageById(currentProject.id)}
                            onAchievePress={this.navigateProjectDays}
                            onMorePress={this.showActionSheetMore}
                        /> : <AddAchieveCard onPress={this.navigateRegisterProject} />}
                    </AchieveCardView>

                    <AchieveHistoryTitle>지나간 목표</AchieveHistoryTitle>
                    <AchieveHistoriesList>
                        {_.map(historyProjects, project => {
                            return (<AchieveHistoryCardView
                                key={`history${project.id}`}
                                title={project.projectName}
                                startDate={transformStringToFormat(project.createdAt)}
                                endDate={tranformDateToFormat(add30Days(moment(project.createdAt)))}
                                percent={this.projectPercentageById(project.id)}
                            />)
                        })}
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

    private projectPercentageById = (projectId) => {
        const { doneProjectDay } = this.props;
        const doneDays = _.filter(doneProjectDay, projectDay => projectDay.project.id === projectId);
        return Math.round((doneDays.length / 30) * 100);
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

    private deleteProject = async () => {
        const { database } = this.props;
        const currentProject = this.currentProject!;
        await database.action(async () => {
            const projectCollection = database.collections.get('project')
            const project = await projectCollection.find(currentProject.id)
            await project.deleteProject();
        })
    }

    private get currentProject(): any {
        const { currentProjects } = this.props;
        return _.first(currentProjects);
    }

    private settingAlaram = async () => {
        // NOTHING
    }

    private navigateRegisterProject = async () => {
        const { componentId } = this.props;
        push(componentId, SCREEN_IDS.ProjectRegisterScreen);
    }

    private navigateProjectDays = async () => {
        const { componentId } = this.props;
        push(componentId, SCREEN_IDS.ProjectDaysScreen, {
            projectId: this.currentProject.id
        });
    }
}

const enhance = withObservables([], ({ database }) => ({
    currentProjects: database.collections
        .get('project')
        .query(Q.where('status', "DOING"))
        .observe(),
    historyProjects: database.collections
        .get('project')
        .query(Q.where('status', Q.oneOf(['DONE', 'DELETE'])))
        .observe(),
    doneProjectDay: database.collections
        .get('project_day')
        .query(Q.where('status', "DONE"))
        .observe(),
}))

export default enhance(ProjectScreen);
