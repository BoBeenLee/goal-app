import Images from "assets-image";
import React, { Component } from 'react';
import styled from "styled-components/native";

import { ContainerWithStatusBar, GTopBar, GText, IconButton, ProjectDaysCard } from '../components';
import { colors } from '../styles';
import { getStatusBarHeight } from "../utils/device";
import { pop, push } from "../utils/navigator";
import { SCREEN_IDS } from "./constant";

interface IProps {
    componentId: string;
    projectId: string;
}

const Container = styled.View`
    flex: 1;
`;

const TopBar = styled(GTopBar)`
    padding-top: 24px;
    padding-bottom: 25px;
    padding-horizontal: 25px;
`;

const Header = styled.View`
    height: 289px;
    background-color: ${colors.ceruleanBlueTwo};
    padding-top: ${getStatusBarHeight(false)};
`;

const DateText = styled(GText)`
    font-size: 14px;
    color: ${colors.paleSkyBlue};
`;

const MenuButton = styled(IconButton).attrs({})`
    width: 20px;
    height: 20px;
`;

const Title = styled(GText).attrs({})`
    font-size: 32px;
    color: ${colors.white};
    line-height: 38px;
    margin-left: 25px;
`;

const MotivateText = styled(GText)`
    font-size: 16px;
    color: ${colors.twilightBlue};
    line-height: 24px;
    letter-spacing: -0.3;
    margin-top: 10px;
    margin-left: 25px;
`;

const Content = styled.View`
    flex: 1;
`;

const ProjectDaysCardView = styled(ProjectDaysCard)`
    margin-top: -67px;
    margin-bottom: 20px;
    margin-horizontal: 15px;
`;

class ProjectDaysScreen extends Component<IProps> {
    public render() {
        return (
            <Container>
                <Header>
                    <TopBar HeaderComponent={<MenuButton type="opacity" source={Images.btn_menu} onPress={this.back} />} HeaderRightComponent={<DateText>2월 4일 금요일</DateText>} />
                    <Title>{`어플 완성하고\n런칭하기`}</Title>
                    <MotivateText>런칭이 코앞! 꼭 올려보아요</MotivateText>
                </Header>
                <Content>
                    <ProjectDaysCardView currentDay={13} onPress={this.onPressDay} />
                </Content>
            </Container>
        );
    }

    private onPressDay = (index: number) => {
        const { componentId, projectId } = this.props;
        push(componentId, SCREEN_IDS.ProjectDayDetailScreen, {
            projectId,
            day: index
        });
    }

    private back = () => {
        const { componentId } = this.props;
        pop(componentId);
    }
}

export default ProjectDaysScreen;
