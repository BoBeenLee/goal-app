import React, { Component } from 'react';
import styled from "styled-components/native";

import { ContainerWithStatusBar, Title, GButton } from '../../components';
import { setStackRoot } from '../../utils/navigator';
import { SCREEN_IDS } from '../constant';

interface IProps {
    componentId: string;
}

const Container = styled(ContainerWithStatusBar)``;

const Content = styled.View`
    flex: 1;
`;

const CompleteButton = styled(GButton)``;

class CompleteScreen extends Component<IProps> {
    public render() {
        return (
            <Container>
                <Content>
                    <Title>{`이제 함께
30일간 목표의
형태를 만들어봐요`}</Title>
                </Content>
                <CompleteButton type="disabled" onPress={this.next}>시작하기</CompleteButton>
            </Container>
        );
    }

    private next = () => {
        const { componentId } = this.props;
        setStackRoot(componentId, SCREEN_IDS.ProjectScreen);
    }
}

export default CompleteScreen;
