import React, { Component } from 'react';
import styled from "styled-components/native";
import { Q } from '@nozbe/watermelondb';
import withObservables from '@nozbe/with-observables';

import { GButton, Title, RegisterStep, ContainerWithStatusBar, GInputText } from "../../components";
import { push } from '../../utils/navigator';
import { SCREEN_IDS } from "../constant";

interface IInject {
    projects: any;
}

interface IProps extends IInject {
    componentId: string;
}

const Container = styled(ContainerWithStatusBar)``;

const Content = styled.View`
    flex: 1;
`;

const RegisterStepView = styled(RegisterStep)``;

const TitleView = styled(Title)``;

const ProductNameInput = styled(GInputText)`
    flex: 1;
`;

const NextButton = styled(GButton)`
`;


class ProjectRegisterScreen extends Component<IProps> {
    public render() {
        console.log(this.props.projects);
        return (
            <Container>
                <Content>
                    <RegisterStepView totalStep={3} currentStep={1} />
                    <TitleView>작심삼십일의 목표를 설정해주세요</TitleView>
                    <ProductNameInput />
                </Content>
                <NextButton type="default" onPress={this.next}>다음</NextButton>
            </Container>
        );
    }

    private next = () => {
        const { componentId } = this.props;
        push(componentId, SCREEN_IDS.MotivationRegisterScreen);
    }
}

const enhance = withObservables([], ({ database }) => ({
    projects: database.collections
        .get('project')
        .query(Q.where('project_name', "Hello3"))
        .observe(),
}))

export default enhance(ProjectRegisterScreen);
