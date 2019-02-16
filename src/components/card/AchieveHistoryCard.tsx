import React, { Component } from 'react';
import styled from "styled-components/native";
import { ViewProps } from 'react-native';

import { GText } from '../text';
import { colors } from '../../styles';

interface IProps {
    style?: ViewProps["style"];
    title: string;
}

const Container = styled.View`
    padding: 15px;
    justify-content: space-between;
    background-color: ${colors.wheat};
    border-radius: 8px;
    shadow-color: #e7e7e7c0;
    shadow-offset: 0px 3px;
    shadow-opacity: 0.8;
    shadow-radius: 8px;
`;

const Title = styled(GText)`
    font-size: 17px;
    color: ${colors.charcoalGrey};
`;

const Date = styled(GText).attrs({})`
    font-size: 12px;
    color: ${colors.hazel};
    margin-top: 10px;
`;

const ContentRightView = styled.View`
    flex-direction: row;
    justify-content: flex-end;
`;

const AchievePercent = styled(GText)`
    font-size: 24px;
    color: ${colors.dark};
`;

class AchieveHistoryCard extends Component<IProps>{
    public render() {
        const { style, title } = this.props;
        return (
            <Container style={style}>
                <Title>{title}</Title>
                <Date>18.2.12~3.12</Date>
                <ContentRightView>
                    <AchievePercent>90%</AchievePercent>
                </ContentRightView>
            </Container>
        );
    }
}

export default AchieveHistoryCard;
