import React, { Component } from 'react';
import styled from "styled-components/native";

import { Title, Date, GText } from "../text";

const Container = styled.TouchableOpacity`
    flex: 1;
    background-color: #E2E2E2;
    justify-content: space-between;
    padding-vertical: 54px; 
    padding-horizontal: 30px;
    border-radius: 19px;
`;

const Header = styled.View`
    
`;

const AchieveTitle = styled(Title)`
    padding-horizontal: 0;
`;

const AchieveDate = styled(Date)``;

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

class AchieveCard extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <AchieveTitle>하루에 10분간 책 읽기</AchieveTitle>
                    <AchieveDate>2018.10.12 ~ 11.10</AchieveDate>
                </Header>
                <AchievePercentView>
                    <AchievePercentName>달성률</AchievePercentName>
                    <AchievePercent>90<AchievePercentSign>%</AchievePercentSign></AchievePercent>
                </AchievePercentView>
            </Container>
        );
    }
}

export default AchieveCard;
