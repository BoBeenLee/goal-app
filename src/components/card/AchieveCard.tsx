import React, { Component } from 'react';
import styled from "styled-components/native";
import { ViewProps } from 'react-native';

import { GText } from "../text";
import { GButton } from '../button';
import { colors } from '../../styles';

interface IProps {
    style?: ViewProps["style"];
    title: string;
    onAchievePress: () => void;
}

const Container = styled.TouchableOpacity`
    background-color: ${colors.orangish};
    justify-content: space-between;
    padding-top: 29px;
    padding-bottom: 25px;
    padding-horizontal: 30px;
    border-radius: 7px;
`;

const AchieveTitle = styled(GText).attrs({})`
    font-size: 26px;
    line-height: 31px;
    color: ${colors.white};
    padding-horizontal: 0;
`;

const AchiveDate = styled(GText)`
    font-size: 15px;
    color: ${colors.sepia};
`;

const ContentRightView = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`;

const AchievePercent = styled(GText).attrs({
    weightType: "kreonRegular"
})`
    font-size: 34px;
    color: ${colors.dark};
`;

class AchieveCard extends Component<IProps> {
    public render() {
        const { style, title, onAchievePress } = this.props;
        return (
            <Container style={style} onPress={onAchievePress}>
                <AchieveTitle>{title}</AchieveTitle>
                <AchiveDate>
                    18.2.12~3.12
                </AchiveDate>
                <ContentRightView>
                    <AchievePercent>90%</AchievePercent>
                </ContentRightView>
            </Container>
        );
    }
}

export default AchieveCard;
