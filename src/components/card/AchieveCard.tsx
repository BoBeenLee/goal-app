import React, { Component } from 'react';
import styled from "styled-components/native";
import { ViewProps } from 'react-native';

import { Title, Date, GText } from "../text";
import { GButton } from '../button';

interface IProps {
    style?: ViewProps["style"];
}

const Container = styled.TouchableOpacity`
    background-color: #E2E2E2;
    justify-content: space-between;
    padding-horizontal: 30px;
    border-radius: 19px;
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

const AlarmButton = styled(GButton)``;
const MidTermAbandonButton = styled(GButton)``;

class AchieveCard extends Component<IProps> {
    public render() {
        const { style } = this.props;
        return (
            <Container style={style}>
                <Content>
                    <AchieveTitle>지금의 목표</AchieveTitle>
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
