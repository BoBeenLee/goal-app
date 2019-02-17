import Images from 'assets-image';
import React, { Component } from 'react';
import styled from "styled-components/native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

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

const Content = styled(KeyboardAwareScrollView)`
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

const MotivationNameInput = styled(UnderLineInputText).attrs({
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
    width: 225px;
    height: 262px;
`;

const NextButton = styled(GButton)`
    margin-horizontal: 26px;
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
                        <CharacterImage source={Images.motivate_blue_character} />
                    </CharacterView>
                    <NextButton type={this.isMotivateTextLength ? "cerulean" : "disabled"} onPress={this.next}>다음</NextButton>
                </Content>
            </Container>
        );
    }

    private onMotivateChangeText = (text: string) => {
        this.setState({
            motivateText: text
        });
    }

    private get isMotivateTextLength() {
        return this.state.motivateText.length > 0;
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
