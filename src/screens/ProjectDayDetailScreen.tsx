import Images from "assets-image";
import React, { Component } from 'react';
import styled from "styled-components/native";

import { ContainerWithStatusBar, GTopBar, GText, IconButton } from '../components';
import { colors } from '../styles';
import { getStatusBarHeight } from "../utils/device";

interface IProps {
    componentId: string;
    projectId: string;
}

const Container = styled.View``;

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

class ProjectDayDetailScreen extends Component<IProps> {
    public render() {
        return (
            <Container>
                <Header>
                    <TopBar HeaderComponent={<MenuButton type="opacity" source={Images.btn_menu} />} HeaderRightComponent={<DateText>2월 4일 금요일</DateText>} />
                    <Title>{`어플 완성하고\n런칭하기`}</Title>
                    <MotivateText>런칭이 코앞! 꼭 올려보아요</MotivateText>
                </Header>
            </Container>
        );
    }
}

export default ProjectDayDetailScreen;
