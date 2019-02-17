import Images from "assets-image";
import React, { Component } from 'react';
import styled from "styled-components/native";

import { ContainerWithStatusBar, GText, BackTopBar } from '../components';
import { colors } from '../styles';
import { pop } from "../utils/navigator";

interface IProps {
    componentId: string;
    projectId: string;
    day: number;
}

const Container = styled(ContainerWithStatusBar)``;

const BackTopBarView = styled(BackTopBar)`
    border-bottom-width: 0px;
    border-bottom-color: ${colors.paleGrey};
`;

const Header = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-bottom-color: #f0f2f6;
    border-bottom-width: 1;
`;

const DateView = styled.View`
    padding-bottom: 12px;
    border-bottom-color: ${colors.ceruleanBlueTwo};
    border-bottom-width: 1px;
`;

const DateText = styled(GText)`
    font-size: 15px;
    letter-spacing: -0.32;
    color: ${colors.ceruleanBlueTwo};
`;

const Content = styled.View`
    flex: 1;
    background-color: #f9f9f9;
`;

class ProjectDayDetailScreen extends Component<IProps> {
    public render() {
        return (
            <Container>
                <BackTopBarView title="탬플릿 둘러보기" onBackPress={this.back} />
                <Header>
                    <DateView>
                        <DateText>2월 4일 월요일</DateText>
                    </DateView>
                </Header>
                <Content />
            </Container>
        );
    }

    private back = () => {
        const { componentId } = this.props;
        pop(componentId);
    }
}

export default ProjectDayDetailScreen;
