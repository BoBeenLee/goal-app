import React, { Component } from 'react';
import styled from "styled-components/native";
import { ViewProps } from 'react-native';

type VerticalType = "left" | "right" | "none";

interface IProps {
    style?: ViewProps["style"];
    verticalType: VerticalType;
    DayCards: JSX.Element;
}

const Container = styled.View`
    flex: 1;
    height: 96px;
    flex-direction: row;
    justify-content: space-between;
`;

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
    width: 1px;
    background-color: #eee;
`;

class DaysCard extends Component<IProps> {
    public render() {
        const { DayCards, verticalType } = this.props;
        return (
            <Container>
                <HorizontalLineView />
                <VerticalLineView style={{
                    left: verticalType === "left" ? 32 : undefined,
                    right: verticalType === "right" ? 32 : undefined
                }} />
                {DayCards}
            </Container>
        );
    }
}

export default DaysCard;
