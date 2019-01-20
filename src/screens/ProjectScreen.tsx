import React, { Component } from 'react';
import styled from "styled-components/native";

import { ContainerWithStatusBar, GText } from '../components';

const TitleView = styled.View`
    padding-bottom: 13px;
`;
const Title = styled(GText)`
    font-size: 18px;
    font-weight: bold;
`;

class ProjectScreen extends Component {
    public render() {
        return (
            <ContainerWithStatusBar>
                <TitleView>
                    <Title>하루에 30분씩 홀트</Title>
                </TitleView>
            </ContainerWithStatusBar>
        );
    }
}

export default ProjectScreen;
