import Images from 'assets-image';
import React, { Component } from 'react';
import styled from "styled-components/native";
import { Q } from '@nozbe/watermelondb';
import withObservables from '@nozbe/with-observables';

import { GButton, RegisterStep, ContainerWithStatusBar, GText, IconButton, UnderLineInputText } from "../../components";
import { push, pop } from '../../utils/navigator';
import { SCREEN_IDS } from "../constant";
import { colors } from '../../styles';


interface IInject {
    projects: any;
}

interface IProps extends IInject {
    componentId: string;
}

interface IStates {
    projectName: string;
}

const Container = styled(ContainerWithStatusBar)``;

const Content = styled.View`
    flex: 1;
`;

const RegisterStepView = styled(RegisterStep)`
    margin-horizontal: 26px;
`;

const Title = styled(GText).attrs({
    weightType: "light"
})`
    font-size: 30px;
    color: ${colors.gunmetal};
    letter-spacing: -0.5;
    margin-top: 30px;
    margin-bottom: 15px;
    padding-horizontal: 26px;
`;

const BackButton = styled(IconButton)`
    width: 10px;
    height: 18px;
    margin-top: 23px;
    margin-bottom: 18px;
    margin-horizontal: 26px;
`;

const ProductNameInput = styled(UnderLineInputText).attrs({
    containerStyle: {
        marginLeft: 26,
        marginRight: 26
    }
})`
    height: 40px;
`;

const CharacterView = styled.View`
    flex: 1;
    align-items: flex-end;
    padding-top: 20px;
`;

const CharacterImage = styled.Image`
    width: 240px;
    height: 261px;
`;

const NextButton = styled(GButton)`
    margin-horizontal: 26px;
    margin-bottom: 19px;
`;


class ProjectRegisterScreen extends Component<IProps, IStates> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            projectName: ""
        };
    }

    public render() {
        const { projectName } = this.state;
        console.log(this.props.projects);
        return (
            <Container>
                <Content>
                    <BackButton type="opacity" source={Images.btn_back} onPress={this.back} />
                    <RegisterStepView currentStep={1} />
                    <Title>당신의 목표는 무엇인가요?</Title>
                    <ProductNameInput
                        name="projectName"
                        onChangeText={this.onProjectNameChangeText}
                        value={projectName}
                        placeholder={"목표를 적어주세요"}
                        placeholderTextColor={colors.cloudyBlue}
                    />
                    <CharacterView>
                        <CharacterImage source={Images.project_red_character} />
                    </CharacterView>
                    <NextButton type="cerulean" onPress={this.next}>다음</NextButton>
                </Content>
            </Container>
        );
    }

    private onProjectNameChangeText = (text: string) => {
        this.setState({
            projectName: text
        });
    }

    private next = () => {
        const { projectName } = this.state;
        const { componentId } = this.props;
        push(componentId, SCREEN_IDS.MotivationRegisterScreen, {
            projectName
        });
    }

    private back = () => {
        const { componentId } = this.props;
        pop(componentId);
    }
}

const enhance = withObservables([], ({ database }) => ({
    projects: database.collections
        .get('project')
        .query(Q.where('project_name', "Hello3"))
        .observe(),
}))

export default enhance(ProjectRegisterScreen);
