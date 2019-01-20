import React, { Component } from 'react';
import styled from "styled-components/native";

import { GText } from "../text";

const Container = styled.View`
    flex: 1;
`;

class Second extends Component {
    render() {
        return (
            <Container>
                <GText>Second</GText>
            </Container>
        );
    }
}

export default Second;
