import React, { Component } from 'react';
import styled from "styled-components/native";

import { GButton, Title, RegisterStep, ContainerWithStatusBar, GInputText } from "../../components";
import { push } from '../../utils/navigator';
import { SCREEN_IDS } from '../constant';

interface IProps {
    componentId: string;
}

const Container = styled(ContainerWithStatusBar)``;

const RegisterStepView = styled(RegisterStep)``;

const TitleView = styled(Title)``;

const Content = styled.View`
    flex: 1;
`;

const MotivationNameInput = styled(GInputText)`
    flex: 1;
`;

const NextButton = styled(GButton)`
`;

class MotivationRegisterScreen extends Component<IProps> {
    public render() {
        return (
            <Container>
                <Content>
                    <RegisterStepView totalStep={3} currentStep={2} />
                    <TitleView>작심삼십일의 동기를 설정해주세요</TitleView>
                    <MotivationNameInput />
                </Content>
                <NextButton type="default" onPress={this.next}>다음</NextButton>
            </Container>
        );
    }

    private next = () => {
        const { componentId } = this.props;
        push(componentId, SCREEN_IDS.TemplateRegisterScreen);
    }
}

export default MotivationRegisterScreen;
