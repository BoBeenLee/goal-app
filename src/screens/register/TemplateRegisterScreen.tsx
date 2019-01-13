import React, { Component } from 'react';
import styled from "styled-components/native";

import { GText } from "../../components";

const Container = styled.View``;

const Text = styled(GText)``;

class TemplateRegisterScreen extends Component {
    public render() {
        return (
            <Container>
                <Text>Hello</Text>
            </Container>
        );
    }
}

export default TemplateRegisterScreen;
