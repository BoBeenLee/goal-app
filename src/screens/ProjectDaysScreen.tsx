import _ from "lodash";
import Images from "assets-image";
import React, { Component } from 'react';
import styled from "styled-components/native";
import { Q } from '@nozbe/watermelondb';
import { StatusBar, Platform } from "react-native";
import withObservables from '@nozbe/with-observables';

import { GTopBar, GText, IconButton, ProjectDaysCard } from '../components';
import { colors } from '../styles';
import { getStatusBarHeight } from "../utils/device";
import { pop, push } from "../utils/navigator";
import { SCREEN_IDS } from "./constant";
import { today, getDDay } from "../utils/date";

interface IProps {
    database: any;
    currentProject: any;
    currentProjectDays: any;
    componentId: string;
    projectId: string;
}

const Container = styled.View`
    flex: 1;
`;

const TopBar = styled(GTopBar)`
    padding-top: ${Platform.OS === "ios" ? 24 : 0}px;
    padding-bottom: 25px;
    padding-horizontal: 25px;
`;

const Header = styled.View`
    height: 289px;
    background-color: ${colors.ceruleanBlueTwo};
    padding-top: ${getStatusBarHeight(false)};
`;

const DateText = styled(GText)`
    font-size: 14px;
    color: ${colors.paleSkyBlue};
`;

const MenuButton = styled(IconButton).attrs({})`
    width: 20px;
    height: 20px;
`;

const Title = styled(GText).attrs({})`
    font-size: 32px;
    color: ${colors.white};
    line-height: 38px;
    margin-left: 25px;
`;

const MotivateText = styled(GText)`
    font-size: 16px;
    color: ${colors.twilightBlue};
    line-height: 24px;
    letter-spacing: -0.3;
    margin-top: 10px;
    margin-left: 25px;
`;

const Content = styled.View`
    flex: 1;
`;

const ProjectDaysCardView = styled(ProjectDaysCard)`
    margin-top: -67px;
    margin-bottom: 20px;
    margin-horizontal: 15px;
`;

class ProjectDaysScreen extends Component<IProps> {
    public static options() {
        return {
            statusBar: {
                backgroundColor: colors.ceruleanBlueTwo,
                drawBehind: true
            }
        };
    }

    public render() {
        const { currentProject } = this.props;
        return (
            <Container>
                <StatusBar backgroundColor={colors.ceruleanBlueTwo} />
                <Header>
                    <TopBar HeaderComponent={<MenuButton type="opacity" source={Images.btn_menu} onPress={this.back} />} HeaderRightComponent={<DateText>{this.isClose ? "종료된 프로젝트" : today()}</DateText>} />
                    <Title>{currentProject.projectName}</Title>
                    <MotivateText>{currentProject.motivateText}</MotivateText>
                </Header>
                <Content>
                    <ProjectDaysCardView isClose={this.isClose} currentDay={getDDay(currentProject.createdAt)} dayStatusMap={this.dayCardStatusMap} onPress={this.onPressDay} />
                </Content>
            </Container>
        );
    }

    private get isClose() {
        const { currentProject } = this.props;
        return currentProject.status === "DELETE" || currentProject.status === "DONE";
    }

    private get dayCardStatusMap() {
        const { currentProjectDays } = this.props;
        return _.reduce(currentProjectDays, (res, projectDay) => {
            return {
                ...res,
                [projectDay.day]: projectDay.status
            };
        }, {});
    }

    private onPressDay = async (index: number) => {
        const { componentId, currentProject, database, projectId } = this.props;
        const projectDayCollection = database.collections.get('project_day')
        const projectDays = await projectDayCollection
            .query(
                Q.where('project_id', projectId),
                Q.where('day', `${index}`)).fetch();
        if (projectDays.length === 0) {
            await database.action(async () => {
                const newProjectDay = await projectDayCollection.create(projectDay => {
                    projectDay.day = `${index}`;
                    projectDay.templates = currentProject.templates;
                    projectDay.status = "DOING";
                    projectDay.project.set(currentProject);
                });
            });
        }
        push(componentId, SCREEN_IDS.ProjectDayDetailScreen, {
            projectId,
            day: index
        });
    }

    private back = () => {
        const { componentId } = this.props;
        pop(componentId);
    }
}

const enhance = withObservables(["currentProject"], ({ database, projectId = "1" }) => {
    return ({
        currentProject: database.collections.get('project').findAndObserve(projectId),
        currentProjectDays: database.collections.get('project_day').query(Q.where('project_id', projectId)).observe()
    })
})


export default enhance(ProjectDaysScreen);
