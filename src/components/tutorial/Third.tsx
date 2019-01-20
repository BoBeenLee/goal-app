import React, { Component } from 'react';
import styled from "styled-components/native";

import { GText, Title } from "../text";
import { GButton } from "../button";

interface IProps {
    navigateTo: () => void;
}

const Container = styled.View`
    flex: 1;
    align-items: center;
`;

const TitleView = styled(Title)``;

const StartButton = styled(GButton).attrs({
    textStyle: {
        fontSize: 20,
        fontWeight: "bold"
    }
})`
    width: 295px;
    height: 66px;
    justify-content: center;
    align-items: center;
    background-color: #eee;
`;

class Third extends Component<IProps> {
    public render() {
        const { navigateTo } = this.props;
        return (
            <Container>
                <TitleView>완벽보단 완성, 작심삼십일</TitleView>
                <StartButton type="default" onPress={navigateTo}>시작하기</StartButton>
            </Container>
        );
    }
}

export default Third;
