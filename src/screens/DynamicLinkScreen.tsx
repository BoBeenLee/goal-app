import React, { Component } from 'react';
import styled from "styled-components/native";

import { GButton } from "../components";

const Container = styled.View``;

const LinkButton = styled(GButton)``;

class DynamicLinkScreen extends Component {
    public render() {
        return (
            <Container>
                <LinkButton type="default" onPress={this.shareLink}>Share Link</LinkButton>
            </Container>
        );
    }

    private shareLink = () => {
        // NOTHING
    }
}

export default DynamicLinkScreen;
