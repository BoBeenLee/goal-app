import Images from 'assets-image';
import _ from "lodash";
import React, { Component } from 'react';
import styled from "styled-components/native";
import { ViewProps } from 'react-native';

import { GButton, RegisterStep, ContainerWithStatusBar, OXTemplate, IconButton, GText, SelectedTemplate, TodoTemplate, DiaryTemplate, TimeTemplate, TableTemplate } from "../../components";
import { ITemplateProps, TemplateType } from '../../model/Project';
import { push, pop } from '../../utils/navigator';
import { SCREEN_IDS } from '../constant';
import { colors } from '../../styles';

const SELECTED_TEMPLATE_MAX_COUNT = 3;

interface IProps {
    database: any;
    componentId: string;
    projectName: string;
    motivateText: string;
}

interface IStates {
    selectedTemplates: ITemplateProps[];
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

const SelectedTemplateImage = styled.Image`
    width: 44px;
    height: 44px;
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

const SELECT_TEMPLATE_ITEM_STYLE_MAP = new Map<string, ViewProps["style"]>()
    .set("1", {
        borderColor: "#ff834e",
        backgroundColor: "#ff834e33"
    })
    .set("2", {
        borderColor: "#2aacfc",
        backgroundColor: "#2aacfc4c"
    })
    .set("3", {
        borderColor: "#ffdf4d",
        backgroundColor: "#ffdf4d4c"
    })

class TemplateRegisterScreen extends Component<IProps, IStates> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            selectedTemplates: []
        };
    }

    public render() {
        const { selectedTemplates } = this.state;

        return (
            <Container>
                <Content>
                    <BackButton type="opacity" source={Images.btn_back} onPress={this.back} />
                    <RegisterStepView currentStep={3} />
                    <ContentScrollView>
                        <Title>탬플릿을 선택해주세요</Title>
                        <TemplateDiscoveryButton onPress={this.navigateDiscovery}>
                            <TemplateDiscoveryText>탬플릿 둘러보기</TemplateDiscoveryText>
                            <TemplateBackIcon source={Images.btn_blue_back} />
                        </TemplateDiscoveryButton>
                        <TemplateList>
                            {_.map(TEMPLATE_LIST, (templateItem) => {
                                const { Component, type } = templateItem;
                                const selectedIndex = _.findIndex(selectedTemplates, selectedTemplate => selectedTemplate.type === type);
                                if (selectedIndex === -1) {
                                    return (<TemplateItemView key={type} onPress={_.partial(this.onSelected, type)}><Component /></TemplateItemView>);
                                }
                                return (
                                    <TemplateItemView key={type} onPress={_.partial(this.onSelected, type)}>
                                        <SelectedTemplate overlayStyle={SELECT_TEMPLATE_ITEM_STYLE_MAP.get(`${selectedIndex + 1}`)} SelectedComponent={this.renderSelectedNumber(selectedIndex)}>
                                            <Component />
                                        </SelectedTemplate>
                                    </TemplateItemView>);
                            })}
                        </TemplateList>
                        <NextButton type={this.isValidate ? "cerulean" : "disabled"} onPress={this.next}>다음</NextButton>
                    </ContentScrollView>
                </Content>
            </Container>
        );
    }

    private get isValidate() {
        const { selectedTemplates } = this.state;
        return selectedTemplates.length >= 1;
    }

    private renderSelectedNumber = (selectedIndex: number) => {
        return (<SelectedTemplateImage
            source={Images[`select_number_${selectedIndex + 1}`]}
        />);
    }

    private onSelected = (type: TemplateType) => {
        const { selectedTemplates: templates } = this.state;
        const selectedTemplate = _.find(templates, template => template.type === type);
        if (selectedTemplate) {
            this.setState({
                selectedTemplates: _.filter(templates, template => template.type !== type)
            });
            return;
        }
        if (templates.length >= SELECTED_TEMPLATE_MAX_COUNT) {
            return;
        }
        this.setState({
            selectedTemplates: [...templates, { type }]
        });
    };

    private navigateDiscovery = () => {
        const { componentId } = this.props;
        push(componentId, SCREEN_IDS.TemplateDiscoveryScreen);
    };

    private next = async () => {
        const { database, componentId, projectName, motivateText } = this.props;
        const { selectedTemplates } = this.state;

        await database.action(async () => {
            const projectCollection = database.collections.get('project')
            const newProject = await projectCollection.create(project => {
                project.projectName = projectName;
                project.motivateText = motivateText;
                project.status = "DOING";
                project.templates = JSON.stringify(selectedTemplates);
            });
            console.log(newProject);
        });
        push(componentId, SCREEN_IDS.ProjectScreen);
    }

    private back = () => {
        const { componentId } = this.props;
        pop(componentId);
    }
}

export default (TemplateRegisterScreen);
