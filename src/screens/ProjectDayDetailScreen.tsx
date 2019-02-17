import _ from "lodash";
import moment from "moment";
import React, { Component } from 'react';
import styled from "styled-components/native";
import { Q } from '@nozbe/watermelondb';
import withObservables from '@nozbe/with-observables';

import { ContainerWithStatusBar, GText, BackTopBar } from '../components';
import { colors } from '../styles';
import { pop } from "../utils/navigator";
import { tranformDateToFormat } from "../utils/date";

interface IProps {
    currentProject: any;
    currentProjectDays: any;
    componentId: string;
    projectId: string;
    day: number;
}

const Container = styled(ContainerWithStatusBar)``;

const BackTopBarView = styled(BackTopBar)`
    border-bottom-width: 0px;
    border-bottom-color: ${colors.paleGrey};
`;

const Header = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-bottom-color: #f0f2f6;
    border-bottom-width: 1;
`;

const DateView = styled.View`
    padding-bottom: 12px;
    border-bottom-color: ${colors.ceruleanBlueTwo};
    border-bottom-width: 1px;
`;

const DateText = styled(GText)`
    font-size: 15px;
    letter-spacing: -0.32;
    color: ${colors.ceruleanBlueTwo};
`;

const Content = styled.View`
    flex: 1;
    background-color: #f9f9f9;
`;

class ProjectDayDetailScreen extends Component<IProps> {
    public render() {
        return (
            <Container>
                <BackTopBarView title={`day ${this.currentProjectDay.day}`} onBackPress={this.back} />
                <Header>
                    <DateView>
                        <DateText>{this.dayText}</DateText>
                    </DateView>
                </Header>
                <Content />
            </Container>
        );
    }

    private get currentProjectDay(): any {
        const { currentProjectDays } = this.props;
        return _.first(currentProjectDays);
    }

    private get dayText() {
        const { createdAt } = this.props.currentProject;
        const { day } = this.currentProjectDay;
        return tranformDateToFormat(moment(createdAt).add(day, "day"));
    }

    private back = () => {
        const { componentId } = this.props;
        pop(componentId);
    }
}

const enhance = withObservables([], ({ database, projectId = "1", day = "1" }) => {
    return ({
        currentProject: database.collections.get('project').findAndObserve(projectId),
        currentProjectDays: database.collections.get('project_day')
            .query(
                Q.where('project_id', projectId),
                Q.where('day', `${day}`))
            .observe(),
    })
})

export default enhance(ProjectDayDetailScreen);
