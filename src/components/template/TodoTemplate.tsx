import React, { Component } from 'react';
import styled from "styled-components/native";
import { GText } from '../text';

const Container = styled.View``;

const Title = styled(GText)``;

const Content = styled.View``;

const Row = styled.View`
    flex-direction: row;
`;

class TodoTemplate extends Component {
    public render() {
        return (
            <Container>
                <Title>To do list</Title>
                <Content>
                    <Title>To do list</Title>
                </Content>
            </Container>
        );
    }
}

export default TodoTemplate;
