import React, { Component } from 'react';
import styled from "styled-components/native";

import { GButton, ContainerWithStatusBar } from "../components";

const Container = styled(ContainerWithStatusBar)``;

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
