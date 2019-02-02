import React, { Component } from 'react';
import styled from "styled-components/native";

import { GText } from "../text";
import { GButton } from '../button';

const Container = styled.View``;

const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 10px;
`;

const Title = styled(GText)`
    font-size: 16px;
    font-weight: bold;
`;

const EditButton = styled(GButton)`
    font-size: 16px;
`;

const Content = styled.View`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 18px;
    border-bottom-width: 1px;
    border-bottom-color: #000;
`;

const OXTouchabledView = styled.TouchableOpacity``;

const OXText = styled(GText)`
    font-size: 50px;
    font-weight: bold;
`;

class OXTemplate extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Title>체크하기</Title>
                </Header>
                <Content>
                    <OXTouchabledView>
                        <OXText>O</OXText>
                    </OXTouchabledView>
                    <OXTouchabledView>
                        <OXText>X</OXText>
                    </OXTouchabledView>
                </Content>
            </Container>
        );
    }
}

export default OXTemplate;
