import _ from "lodash";
import React, { Component } from 'react';
import styled from "styled-components/native";

import { GButton, Title, RegisterStep, ContainerWithStatusBar, OXTemplate } from "../../components";
import { ITemplateProps, TemplateType } from '../../model/Project';
import { push } from '../../utils/navigator';
import { SCREEN_IDS } from '../constant';

interface IProps {
    componentId: string;
    projectName: string;
    motivateText: string;
}

interface IStates {
    templates: ITemplateProps[];
}

const Container = styled(ContainerWithStatusBar)``;

const Content = styled.View`
    flex: 1;
`;

const RegisterStepView = styled(RegisterStep)``;

const TitleView = styled(Title)``;

const SelectTemplateView = styled.View``;

const NextButton = styled(GButton)``;

class TemplateRegisterScreen extends Component<IProps, IStates> {
    public render() {
        return (
            <Container>
                <Content>
                    <RegisterStepView totalStep={3} currentStep={3} />
                    <TitleView>목표에 활용할 탬플릿을 선택해주세요.</TitleView>
                    <SelectTemplateView>
                        <OXTemplate />
                    </SelectTemplateView>
                </Content>
                <NextButton type="default" onPress={this.next}>다음</NextButton>
            </Container>
        );
    }

    private onSelected = (type: TemplateType) => {
        const { templates } = this.state;
        const selectedTemplate = _.find(templates, template => template.type === type);
        if (selectedTemplate) {
            this.setState({
                templates: _.filter(templates, template => template.type !== type)
            });
            return;
        }
        this.setState({
            templates: [...templates, { type }]
        });
    };

    private next = () => {
        const { componentId } = this.props;
        push(componentId, SCREEN_IDS.CompleteScreen);
    }
}

export default TemplateRegisterScreen;
