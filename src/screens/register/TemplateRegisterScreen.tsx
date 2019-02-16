import Images from 'assets-image';
import _ from "lodash";
import React, { Component } from 'react';
import styled from "styled-components/native";

import { GButton, Title, RegisterStep, ContainerWithStatusBar, OXTemplate, IconButton } from "../../components";
import { ITemplateProps, TemplateType } from '../../model/Project';
import { push, pop } from '../../utils/navigator';
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
    padding-horizontal: 26px;
`;

const RegisterStepView = styled(RegisterStep)``;

const TitleView = styled(Title)``;

const BackButton = styled(IconButton)`
    width: 10px;
    height: 18px;
    margin-top: 23px;
    margin-bottom: 18px;
`;

const SelectTemplateView = styled.View`
    flex: 1;
`;

const NextButton = styled(GButton)`
    margin-bottom: 19px;
`;

class TemplateRegisterScreen extends Component<IProps, IStates> {
    public render() {
        return (
            <Container>
                <Content>
                    <BackButton type="opacity" source={Images.btn_back} onPress={this.back} />
                    <RegisterStepView currentStep={3} />
                    <TitleView>목표에 활용할 탬플릿을 선택해주세요.</TitleView>
                    <SelectTemplateView>
                        <OXTemplate />
                    </SelectTemplateView>
                    <NextButton type="cerulean" onPress={this.next}>다음</NextButton>
                </Content>
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

    private back = () => {
        const { componentId } = this.props;
        pop(componentId);
    }
}

export default TemplateRegisterScreen;
