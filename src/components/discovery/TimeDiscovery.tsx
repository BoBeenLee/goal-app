import React, { Component } from 'react';
import styled from "styled-components/native";
import moment from "moment";

import { GText } from '../text';
import { colors } from '../../styles';
import { DiaryTemplateInput, TimeTemplateInput } from '../templateinput';


const Container = styled.View``;

const Header = styled.View`
    flex-direction: row;
    align-items: flex-end;
`;

const Title = styled(GText).attrs({
    weightType: "kreonBold"
})`
    font-size: 24px;
    color: ${colors.gunmetal};
    margin-right: 30px;
`;

const DescriptionView = styled.View`
    flex: 1;
    align-items: center;
`;

const Description = styled(GText)`
    font-size: 16px;
    color: ${colors.cloudyBlueTwo};
    margin-bottom: 3px;
`;

const Content = styled.View`
    padding-top: 8px;
`;

const TimeTemplateInputView = styled(TimeTemplateInput)`
    width: 325px;
    margin-bottom: 16px;
`;

class TimeDiscovery extends Component {
    public render() {
        return (
            <Container>
                <Header>
                    <Title>Time</Title>
                    <DescriptionView>
                        <Description>
                            운동을 한 시간, 공부를 한 시간을 기록하고 싶을 때 ‘Time’을 활용해보세요.
                    </Description>
                    </DescriptionView>
                </Header>
                <Content>
                    <TimeTemplateInputView startTime={moment()} endTime={moment()} />
                </Content>
            </Container>
        );
    }
}

export default TimeDiscovery;
