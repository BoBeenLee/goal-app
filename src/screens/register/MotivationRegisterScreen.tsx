import Images from 'assets-image';
import React, { Component } from 'react';
import styled from "styled-components/native";

import { GButton, RegisterStep, ContainerWithStatusBar, GInputText, IconButton, GText, UnderLineInputText } from "../../components";
import { push, pop } from '../../utils/navigator';
import { SCREEN_IDS } from '../constant';
import { colors } from '../../styles';

interface IProps {
    componentId: string;
    projectName: string;
}

interface IStates {
    motivateText: string;
}

const Container = styled(ContainerWithStatusBar)``;

const Content = styled.View`
    flex: 1;
    padding-horizontal: 26px;
`;


const RegisterStepView = styled(RegisterStep)``;

const Title = styled(GText).attrs({
    weightType: "light"
})`
    font-size: 30px;
    color: ${colors.gunmetal};
    letter-spacing: -0.5;
    margin-top: 33px;
    margin-bottom: 35px;
`;


const BackButton = styled(IconButton)`
    width: 10px;
    height: 18px;
    margin-top: 23px;
    margin-bottom: 18px;
`;

const MotivationNameInput = styled(UnderLineInputText)`
    height: 40px;
`;

const CharacterView = styled.View`
    flex: 1;
`;

const CharacterImage = styled.View``;


const NextButton = styled(GButton)`
    margin-bottom: 19px;
`;

class MotivationRegisterScreen extends Component<IProps, IStates> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            motivateText: ""
        };
    }
    public render() {
        const { motivateText } = this.state;
        return (
            <Container>
                <Content>
                    <BackButton type="opacity" source={Images.btn_back} onPress={this.back} />
                    <RegisterStepView currentStep={2} />
                    <Title>당신의 다짐은 무엇인가요?</Title>
                    <MotivationNameInput
                        name={"motivateText"}
                        onChangeText={this.onMotivateChangeText}
                        value={motivateText}
                        placeholder={"다짐을 적어주세요"}
                        placeholderTextColor={colors.cloudyBlue}
                    />
                    <CharacterView>
                        <CharacterImage />
                    </CharacterView>
                    <NextButton type="cerulean" onPress={this.next}>다음</NextButton>
                </Content>
            </Container>
        );
    }

    private onMotivateChangeText = (text: string) => {
        this.setState({
            motivateText: text
        });
    }

    private next = () => {
        const { componentId, projectName } = this.props;
        const { motivateText } = this.state;
        push(componentId, SCREEN_IDS.TemplateRegisterScreen, {
            projectName,
            motivateText
        });
    }

    private back = () => {
        const { componentId } = this.props;
        pop(componentId);
    }
}

export default MotivationRegisterScreen;
