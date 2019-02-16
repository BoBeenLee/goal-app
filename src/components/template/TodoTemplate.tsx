import Images from "assets-image";
import React, { Component } from 'react';
import styled from "styled-components/native";

import { GText } from '../text';
import { colors } from '../../styles';
import { TemplateContainer } from "./style";

const Container = styled(TemplateContainer)``;

const Title = styled(GText).attrs({
    weightType: "kreonBold"
})`
    font-size: 24px;
    color: ${colors.gunmetal};
`;

const Content = styled.View`
    padding-top: 15px;
`;

const Row = styled.View`
    flex-direction: row;
    align-items: center;
`;

const CheckBox = styled.Image`
    width: 14px;
    height: 14px;
    margin-right: 8px;
`;

const TodoText = styled(GText).attrs({})`
    font-size: 16px;
    color: ${colors.cloudyBlueTwo};
    margin-bottom: 3px;
`;

class TodoTemplate extends Component {
    public render() {
        return (
            <Container>
                <Title>To do list</Title>
                <Content>
                    <Row>
                        <CheckBox source={Images.check_box_inactive} />
                        <TodoText>
                            to do
                        </TodoText>
                    </Row>
                    <Row>
                        <CheckBox source={Images.check_box_inactive} />
                        <TodoText>
                            to do
                        </TodoText>
                    </Row>
                    <Row>
                        <CheckBox source={Images.check_box_inactive} />
                        <TodoText>
                            to do
                        </TodoText>
                    </Row>
                </Content>
            </Container>
        );
    }
}

export default TodoTemplate;
