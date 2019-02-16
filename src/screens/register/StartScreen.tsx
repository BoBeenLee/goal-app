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
    justify-content: space-between;
`;

const Title = styled(GText).attrs({
    weightType: "regular"
})`
    font-size: 15px;
    line-height: 12px;
    letter-spacing: -0.31;
    padding-top: 10px;
`;

const HighlightTitle = styled(GText).attrs({
    weightType: "light"
})`
    font-size: 15px;
    line-height: 12px;
    letter-spacing: -0.31;
`;

const StartButton = styled(GButton)`
    margin-bottom: 100px;
`;
class StartScreen extends Component<IProps> {
    public render() {
        return (
            <Container>
                <Title>
                    <HighlightTitle>30일의 여정</HighlightTitle>을 저와 함께 시작해볼까요?
                </Title>
                <StartButton type="default" onPress={this.navigateRegister}>시작하기</StartButton>
            </Container>
        );
    }

    private navigateRegister = () => {
        const { componentId } = this.props;
        push(componentId, SCREEN_IDS.ProjectRegisterScreen);
    }
}

export default StartScreen;
