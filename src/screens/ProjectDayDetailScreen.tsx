import _ from "lodash";
import moment from "moment";
import React, { Component } from 'react';
import styled from "styled-components/native";
import { Q } from '@nozbe/watermelondb';
import withObservables from '@nozbe/with-observables';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { ContainerWithStatusBar, GText, BackTopBar, OXTemplateInput, DiaryTemplateInput, TodoTemplateInput } from '../components';
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

const Content = styled(KeyboardAwareScrollView)`
    flex: 1;
    padding: 25px;
    background-color: #f9f9f9;
`;

const TemplateInputView = styled.View`
    margin-bottom: 25px;
`;

const TemplateInputTitle = styled(GText).attrs({
    weightType: "kreonBold"
})`
    font-size: 24px;
    color: ${colors.gunmetal};
`;

class ProjectDayDetailScreen extends Component<IProps> {
    public render() {
        const { templates: templatesJSON } = this.currentProjectDay;
        const templates = JSON.parse(templatesJSON);

        return (
            <Container>
                <BackTopBarView title={`day ${this.currentProjectDay.day}`} onBackPress={this.back} />
                <Header>
                    <DateView>
                        <DateText>{this.dayText}</DateText>
                    </DateView>
                </Header>
                <Content>
                    {_.map(templates, (template, index) => {
                        return <TemplateInputView key={`templateInput${index}`}>
                            {this.renderByType(template, index)}</TemplateInputView>
                    })}
                </Content>
            </Container>
        );
    }

    private titleByType = (type) => {
        switch (type) {
            case "TODO":
                return "To do list";
            case "OX":
                return "OX";
            case "Diary":
                return "Diary";
            case "Time":
                return "Time";
            case "Table":
                return "Table";
            case "Photo":
                return "Photo";
        }
    }

    private renderByType = (template: any, index) => {
        switch (template.type) {
            case "TODO":
                return <TodoTemplateInput
                    title={this.titleByType(template.type)}
                    defaultTodos={_.defaultTo(template.defaultTodos, [{ label: "", isActive: false }])}
                    onBlur={_.partial(this.onTodoBlur, index)}
                />;
            case "OX":
                return <OXTemplateInput
                    title={this.titleByType(template.type)}
                    defaultValue={_.defaultTo(template.defaultValue, "")}
                    onOXPress={_.partial(this.onOXPress, index)}
                />;
            case "Diary":
                return <DiaryTemplateInput
                    title={this.titleByType(template.type)}
                    defaultValue={_.defaultTo(template.defaultValue, "")}
                    onBlur={_.partial(this.onDiaryBlurText, index)} />;
            case "Time":
                return <TemplateInputTitle>준비중입니당</TemplateInputTitle>;
            case "Table":
                return <TemplateInputTitle>준비중입니당</TemplateInputTitle>;
            case "Photo":
                return <TemplateInputTitle>준비중입니당</TemplateInputTitle>;
        }
    }

    private onOXPress = async (index, value: string) => {
        await this.currentProjectDay.updateTemplate(index, "defaultValue", value);
        await this.doneStatus();
    }

    private onDiaryBlurText = async (index, text: string) => {
        if (_.isEmpty(text)) {
            return;
        }
        await this.currentProjectDay.updateTemplate(index, "defaultValue", text);
        await this.doneStatus();
    }

    private onTodoBlur = async (templateIndex: number, todos) => {
        if (_.isEmpty(todos)) {
            return;
        }
        await this.currentProjectDay.updateTemplate(templateIndex, "defaultTodos", todos);
        await this.doneStatus();
    };

    private doneStatus = async () => {
        await this.currentProjectDay.done();
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
