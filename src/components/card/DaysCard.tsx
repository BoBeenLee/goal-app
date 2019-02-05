import React, { Component } from 'react';
import styled from "styled-components/native";
import { ViewProps } from 'react-native';

import DayCard from './DayCard';

interface IProps {
    style?: ViewProps["style"];
    
}

const Container = styled.View`
    flex: 1;
    height: 96px;
    flex-direction: row;
    justify-content: space-between;
`;

const DayCardView = styled(DayCard)``;

const HorizontalLineView = styled.View`
    position: absolute;
    top: 32px;
    left: 0px;
    right: 0px;
    height: 1px;
    background-color: #eee;
`;

const VerticalLineView = styled.View`
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 32px;
    width: 1px;
    background-color: #eee;
`;

class DaysCard extends Component<IProps> {
    public render() {
        return (
            <Container>
                <HorizontalLineView />
                <VerticalLineView />
                <DayCardView day={"1"} />
                <DayCardView day={"2"} />
                <DayCardView day={"3"} />
            </Container>
        );
    }
}

export default DaysCard;
