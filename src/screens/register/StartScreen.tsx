import React, { Component } from 'react';
import styled from "styled-components/native";

import { GButton, Title, ContainerWithStatusBar } from '../../components';
import { push } from '../../utils/navigator';
import { SCREEN_IDS } from '../constant';

interface IProps {
    componentId: string;
}

const Container = styled(ContainerWithStatusBar)`
    flex: 1;
    justify-content: space-between;
`;

const StartButton = styled(GButton)`
    margin-bottom: 100px;
`;
class StartScreen extends Component<IProps> {
    public render() {
        return (
            <Container>
                <Title>{`작심삼일도
열번이면
삼십일`}</Title>
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
