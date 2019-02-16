import React, { Component } from 'react';
import styled from "styled-components/native";

import { TemplateContainer } from "./style";
import { GText } from '../text';
import { colors } from '../../styles';

const Container = styled(TemplateContainer)``;

const Title = styled(GText).attrs({
    weightType: "kreonBold"
})`
    font-size: 24px;
    color: ${colors.gunmetal};
`;

const Content = styled.View`
    padding-top: 8px;
`;




class PhotoTemplate extends Component {
    public render() {
        return (
            <Container>
                <Title>Photo</Title>
                <Content>
                </Content>
            </Container>
        );
    }
}

export default PhotoTemplate;
