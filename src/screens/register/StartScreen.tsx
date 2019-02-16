import React, { Component } from 'react';
import styled from "styled-components/native";

import { GButton, ContainerWithStatusBar, GText } from '../../components';
import { push } from '../../utils/navigator';
import { SCREEN_IDS } from '../constant';

interface IProps {
    componentId: string;
}

const Container = styled(ContainerWithStatusBar)`
    flex: 1;
    align-items: center;
`;

const Title = styled(GText).attrs({
    weightType: "light"
})`
    font-size: 30px;
    letter-spacing: -0.6;
    padding-top: 104px;
`;

const HighlightTitle = styled(GText).attrs({
    weightType: "regular"
})`
    font-size: 30px;
    letter-spacing: -0.6;
`;

const CharacterView = styled.View`
    flex: 1;
`;

const CharacterImage = styled.View``;

const StartButtonView = styled.View`
    width: 100%;
    height: 60px;
    padding-horizontal: 24px;
    margin-bottom: 19px;
`;

const StartButton = styled(GButton)`
    width: 100%;
    height: 60px;
    
`;
class StartScreen extends Component<IProps> {
    public render() {
        return (
            <Container>
                <Title>
                    <HighlightTitle>30일의 여정</HighlightTitle>을{"\n"}저와 함께 시작해볼까요?
                </Title>
                <CharacterView>
                    <CharacterImage />
                </CharacterView>
                <StartButtonView>
                    <StartButton type="cerulean" onPress={this.navigateRegister}>시작하기</StartButton>
                </StartButtonView>
            </Container>
        );
    }

    private navigateRegister = () => {
        const { componentId } = this.props;
        push(componentId, SCREEN_IDS.ProjectRegisterScreen);
    }
}

export default StartScreen;
