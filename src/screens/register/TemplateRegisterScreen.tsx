import Images from 'assets-image';
import _ from "lodash";
import React, { Component } from 'react';
import styled from "styled-components/native";

import { GButton, RegisterStep, ContainerWithStatusBar, OXTemplate, IconButton, GText, SelectedTemplate, TodoTemplate, DiaryTemplate, TimeTemplate, TableTemplate } from "../../components";
import { ITemplateProps, TemplateType } from '../../model/Project';
import { push, pop } from '../../utils/navigator';
import { SCREEN_IDS } from '../constant';
import { colors } from '../../styles';

interface IProps {
    componentId: string;
    projectName: string;
    motivateText: string;
}

interface IStates {
    templates: ITemplateProps[];
}

interface ITemplateItem extends ITemplateProps {
    Component: any;
}

const Container = styled(ContainerWithStatusBar)``;

const Content = styled.View`
    flex: 1;
`;

const BackButton = styled(IconButton)`
    width: 10px;
    height: 18px;
    margin-top: 23px;
    margin-bottom: 18px;
    margin-left: 26px;
`;

const RegisterStepView = styled(RegisterStep)`
    padding-horizontal: 26px;
`;

const Title = styled(GText).attrs({})`
    font-size: 30px;
    color: ${colors.gunmetal};
    letter-spacing: -0.5;
    margin-top: 33px;
    padding-bottom: 5px;
`;

const TemplateDiscoveryButton = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    padding-left: 3px;
    margin-bottom: 35px;
`;

const TemplateDiscoveryText = styled(GText).attrs({})`
    font-size: 16px;
    color: ${colors.ceruleanBlue};
`;

const TemplateBackIcon = styled.Image`
    width: 7px;
    height: 11px;
    margin-top: 3px;
    margin-left: 5px;
`;


const TemplateList = styled.View``;

const TemplateItemView = styled.TouchableOpacity`
    margin-bottom: 25px;
`;

const ContentScrollView = styled.ScrollView.attrs({
    contentContainerStyle: {
        paddingHorizontal: 26
    }
})`
    flex: 1;
`;

const NextButton = styled(GButton)`
    margin-bottom: 19px;
`;

const TEMPLATE_LIST: ITemplateItem[] = [
    {
        type: "TODO",
        Component: TodoTemplate
    },
    {
        type: "Diary",
        Component: DiaryTemplate
    },
    {
        type: "OX",
        Component: OXTemplate
    },
    {
        type: "Time",
        Component: TimeTemplate
    },
    {
        type: "Table",
        Component: TableTemplate
    }
];

class TemplateRegisterScreen extends Component<IProps, IStates> {
    public render() {
        return (
            <Container>
                <Content>
                    <BackButton type="opacity" source={Images.btn_back} onPress={this.back} />
                    <RegisterStepView currentStep={3} />
                    <ContentScrollView>
                        <Title>탬플릿을 선택해주세요</Title>
                        <TemplateDiscoveryButton>
                            <TemplateDiscoveryText>탬플릿 둘러보기</TemplateDiscoveryText>
                            <TemplateBackIcon source={Images.btn_blue_back} />
                        </TemplateDiscoveryButton>
                        <TemplateList>
                            {_.map(TEMPLATE_LIST, (templateItem) => {
                                const { Component, type } = templateItem;
                                return (<TemplateItemView key={type} onPress={_.partial(this.onSelected, type)}><Component /></TemplateItemView>);
                            })}
                        </TemplateList>
                        <NextButton type="cerulean" onPress={this.next}>다음</NextButton>
                    </ContentScrollView>
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
