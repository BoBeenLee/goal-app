import React, { Component } from 'react';
import styled from "styled-components/native";

import { GText } from "../text";

const Container = styled.View`
    flex:1;
    background-color: yellow;
`;

class First extends Component {
    render() {
        return (
            <Container>
                <GText>First</GText>
            </Container>
        );
    }
}

export default First;
