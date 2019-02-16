import React, { Component } from 'react';
import styled from "styled-components/native";

import { GText } from "../text";
import { GButton } from '../button';
import { colors } from '../../styles';
import { TemplateContainer } from "./style";

const Container = styled(TemplateContainer)``;

const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const Title = styled(GText).attrs({
    weightType: "kreonBold"
})`
    font-size: 24px;
    color: ${colors.gunmetal};
`;


const Content = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;


const OTouchabledView = styled.TouchableOpacity`
    margin-right: 40px;
`;

const XTouchabledView = styled.TouchableOpacity``;


const OXText = styled(GText).attrs({
    weightType: "kreonBold"
})`
    font-size: 60px;
    color: ${colors.cloudyBlueTwo};
`;

class OXTemplate extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Title>OX</Title>
                </Header>
                <Content>
                    <OTouchabledView>
                        <OXText>O</OXText>
                    </OTouchabledView>
                    <XTouchabledView>
                        <OXText>X</OXText>
                    </XTouchabledView>
                </Content>
            </Container>
        );
    }
}

export default OXTemplate;
