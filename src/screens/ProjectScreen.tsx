import React, { Component } from 'react';
import styled from "styled-components/native";

import { ContainerWithStatusBar, GText } from '../components';

const TitleView = styled.View`
    margin-horizontal: 22px;
    padding-vertical: 13px;
    border-bottom-width: 1px;
    border-bottom-color: #000;
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
