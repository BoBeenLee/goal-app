import React, { Component } from 'react';
import styled from "styled-components/native";

import { ContainerWithStatusBar, Title } from '../components';

const Container = styled(ContainerWithStatusBar)``;

class ProjectDayDetailScreen extends Component {
    public render() {
        return (
            <Container>
                <Title>Title</Title>
            </Container>
        );
    }
}

export default ProjectDayDetailScreen;
