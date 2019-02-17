import _ from "lodash";
import React, { Component } from 'react';
import styled from "styled-components/native";

import { colors } from '../../styles';
import { GText, DDay } from '../text';
import DayCard, { ShapeType } from './DayCard';
import { ViewProps } from "react-native";

interface IProps {
    style?: ViewProps["style"];
    currentDay: number;
    onPress: (index: number) => void;
}

const Container = styled.View`
    flex: 1;
    padding: 20px;
    background-color: ${colors.white};
    border-radius: 8px;
    shadow-color: #91959762;
    shadow-offset: 0px 8px;
    shadow-opacity: 0.8;
    shadow-radius: 8px;
`;

const Header = styled.View`
    padding-bottom: 18px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const Title = styled(GText).attrs({
    weightType: "bold"
})`
    font-size: 18px;
    color: ${colors.gunmetal};
`;

const ProjectDDay = styled(DDay).attrs({
    textStyle: {
        color: "#006ee5"
    }
})`
    background-color: #e4f2ff;
`;

const Content = styled.View`
    flex: 1;
    flex-direction: column;
`;

const Row = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
`;

const DAYS_ROW_TYPE: ShapeType[] = ["circle", "hexagon", "square", "circle", "hexagon", "square"];
const ROW_COUNT = 5;

class ProjectDaysCard extends Component<IProps> {
    public render() {
        const { style, currentDay, onPress } = this.props;
        return (
            <Container style={style}>
                <Header>
                    <Title>{currentDay === 30 ? `${currentDay}일차` : `30일 종료`}</Title>
                    <ProjectDDay day={`${currentDay}`} />
                </Header>
                <Content>
                    {_.map(DAYS_ROW_TYPE, (type, rowIndex) => {
                        return <Row key={`rowDayCard${rowIndex}`}>{_.times(ROW_COUNT, index => {
                            const currentIndex = `${rowIndex * ROW_COUNT + (index + 1)}`;
                            return <DayCard key={`dayCard${currentIndex}`} type={type} status={"complete"} day={currentIndex} onPress={_.partial(onPress, currentIndex)} />
                        })}</Row>
                    })}
                </Content>
            </Container>
        );
    }
}

export default ProjectDaysCard;
