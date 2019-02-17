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
    dayStatusMap?: any;
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
                    <Title>{currentDay === 30 ? `30일 종료` : `${currentDay}일차`}</Title>
                    <ProjectDDay day={`${currentDay}`} />
                </Header>
                <Content>
                    {_.map(DAYS_ROW_TYPE, (type, rowIndex) => {
                        return <Row key={`rowDayCard${rowIndex}`}>{_.times(ROW_COUNT, index => {
                            const currentIndex = `${rowIndex * ROW_COUNT + (index + 1)}`;
                            return <DayCard key={`dayCard${currentIndex}`}
                                type={type}
                                status={this.dayCardStatus(rowIndex * ROW_COUNT + (index + 1))}
                                day={currentIndex}
                                onPress={_.partial(onPress, currentIndex)} />
                        })}</Row>
                    })}
                </Content>
            </Container>
        );
    }

    private dayCardStatus = (day: number) => {
        const { currentDay, dayStatusMap } = this.props;
        if (currentDay === day) {
            return "current";
        } else if (day < currentDay) {
            const status = _.get(dayStatusMap, day, "DOING");
            return status === "DOING" ? "fail" : "complete";
        }
        return "ready";
    };
}

export default ProjectDaysCard;
