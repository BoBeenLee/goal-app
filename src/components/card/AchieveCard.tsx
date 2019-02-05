import React, { Component } from 'react';
import styled from "styled-components/native";
import { ViewProps } from 'react-native';

import { Title, Date, GText } from "../text";
import { GButton } from '../button';

interface IProps {
    style?: ViewProps["style"];
}

const Container = styled.TouchableOpacity`
    background-color: #fff;
    justify-content: space-between;
    padding-horizontal: 30px;
    border-radius: 19px;
    shadow-color: #330000;
    shadow-offset: 0px 1px;
    shadow-opacity: 0.4;
    shadow-radius: 2;
`;

const Header = styled.View``;

const AchieveTitle = styled(Title)`
    padding-horizontal: 0;
`;

const Content = styled.View`
    flex-direction: row;
`;

const AchievePercentView = styled.View``;

const AchievePercentName = styled(GText)`
    font-size: 20px;
    color: #606060;
`;

const AchievePercent = styled(GText)`
    font-size: 72px;
    color: #606060;
`;

const AchievePercentSign = styled(GText)`
    font-size: 30px;
    color: #656565;
`;

const ContentRightView = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`;


const CommonButtonStyled = styled(GButton).attrs({
    textStyle: {
        color: "#E0B8B8"
    }
})`
    background-color: transparent;
`;
const AlarmButton = styled(CommonButtonStyled)``;
const MidTermAbandonButton = styled(CommonButtonStyled)``;

class AchieveCard extends Component<IProps> {
    public render() {
        const { style } = this.props;
        return (
            <Container style={style}>
                <AchieveTitle>지금의 목표</AchieveTitle>
                <Content>

                    <AchievePercentView>
                        <AchievePercentName>달성률</AchievePercentName>
                        <AchievePercent>90<AchievePercentSign>%</AchievePercentSign></AchievePercent>
                    </AchievePercentView>
                    <ContentRightView>
                        <AlarmButton type="default">알람</AlarmButton>
                        <MidTermAbandonButton type="default">중도포기</MidTermAbandonButton>
                    </ContentRightView>
                </Content>
            </Container>
        );
    }
}

export default AchieveCard;
