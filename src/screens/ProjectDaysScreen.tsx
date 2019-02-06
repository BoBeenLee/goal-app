import React, { Component } from 'react';
import _ from 'lodash';
import styled from "styled-components/native";

import { ContainerWithStatusBar, Title, GText, DaysCard, DayCard } from '../components';
import { push } from '../utils/navigator';
import { SCREEN_IDS } from './constant';

interface IProps {
    componentId: string;
}

interface IStates {
    currentDay: number;
}

const Container = styled(ContainerWithStatusBar)``;

const TitleView = styled(Title)`
    padding-horizontal: 0px;
`;

const Description = styled(GText)`
    margin-top: 20px;
    margin-bottom: 60px;
`;

const DaysScrollView = styled.ScrollView.attrs({
    contentContainerStyle: {
        padding: 20
    }
})``;

class ProjectDaysScreen extends Component<IProps, IStates> {
    constructor(props) {
        super(props);

        this.state = {
            currentDay: 1
        }
    }

    public render() {
        const { currentDay } = this.state;
        const thirtyDaysChunk = _.chunk(_.times(30, _.identity), 3);
        return (
            <Container>
                <DaysScrollView>
                    <TitleView>어플 완성하고 런칭하기</TitleView>
                    <Description>내 어플이 사용되는 모습을 보고 싶어</Description>
                    {_.map(thirtyDaysChunk, (daysChunk, index) => {
                        const verticalType = index === daysChunk.length - 1 ? "none" : index % 2 === 0 ? "right" : "left";
                        return (<DaysCard key={`days${index}`} verticalType={verticalType} DayCards={<React.Fragment>
                            {_.map(daysChunk, (day) => {
                                return <DayCard
                                    key={`day${day}`}
                                    isActive={currentDay === day! + 1} day={`${day! + 1}`}
                                    onPress={this.navigateDay}
                                />
                            })}</React.Fragment>} />);
                    })}
                </DaysScrollView>
            </Container>
        );
    }

    private navigateDay = () => {
        const { componentId } = this.props;
        push(componentId, SCREEN_IDS.ProjectDayDetailScreen);
    }
}

export default ProjectDaysScreen;
