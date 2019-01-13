import React, { Component } from 'react';
import styled from "styled-components/native";

import { GText } from "../../components";

const Container = styled.View``;

const Text = styled(GText)``;

class ProjectRegisterScreen extends Component {
    render() {
        return (
            <Container>
                <Text>ProjectRegister</Text>
            </Container>
        );
    }
}

export default ProjectRegisterScreen;
