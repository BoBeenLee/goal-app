import React, { Component } from 'react';
import styled from "styled-components/native";
import { ViewProps } from 'react-native';

import { Title, GText } from '../text';

interface IProps {
    style?: ViewProps["style"];
    title: string;
}

const Container = styled.View`
    padding: 15px;
    justify-content: space-between;
    border-width: 1px;
    border-color: #eee;
`;

const TitleView = styled(Title)`
    font-size: 16px;
`;

const Content = styled.View`
    flex-direction: row;
`;

const AchievePercent = styled(GText)`
    font-size: 40px;
`;

const AchievePercentSign = styled(GText)`
    font-size: 16px;
    color: #656565;
`;

class AchieveHistoryCard extends Component<IProps>{
    public render() {
        const { style, title } = this.props;
        return (
            <Container style={style}>
                <TitleView>{title}</TitleView>
                <Content>
                    <AchievePercent>90<AchievePercentSign>%</AchievePercentSign></AchievePercent>
                </Content>
            </Container>
        );
    }
}

export default AchieveHistoryCard;
