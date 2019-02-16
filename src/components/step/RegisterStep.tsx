import React, { Component } from 'react';
import styled from "styled-components/native";
import _ from 'lodash';
import { ViewProps } from 'react-native';

import { GText } from '../text';
import { colors } from '../../styles';

const LABELS = ["목표입력", "다짐입력", "탬플릿선택"];
const TOTAL_STEP = 3;

interface IProps {
    style?: ViewProps["style"];
    currentStep: number;
}

interface IStates {
    width: number;
    height: number;
}

const ContainerOutterView = styled.View``;

const Container = styled.View`
    width: 100%;
    flex-direction: row;
`;

const StepsView = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

const StepView = styled.View.attrs<{ isActive: boolean }>({})`
    flex: 1;
    flex-direction: row;
    height: 40px;
    border-radius: 8px;
    justify-content: flex-end;
    align-items: center;
`;

const StepBarsView = styled.View`
    position: absolute;
    flex-direction: row;
    width: 100%;
    top: 6px;
`;

const ActiveStepBar = styled.View`
    flex-direction: row;
    height: 5px;
    background-color: ${colors.cerulean};
    border-radius: 2.5px;
`;

const InActiveStepBar = styled.View`
    flex-direction: row;
    height: 5px;
    background-color: #a7afc832;
    border-radius: 2.5px;
`;


const StepName = styled(GText).attrs<{ isActive: boolean }>({})`
    font-size: 12px;
    letter-spacing: -0.7;
    color: ${({ isActive }) => isActive ? colors.cerulean : colors.cloudyBlue};
`;

class RegisterStep extends Component<IProps, IStates> {

    constructor(props) {
        super(props);

        this.state = {
            width: 0,
            height: 0
        }
    }

    public render() {
        const { style, currentStep } = this.props;
        return (
            <ContainerOutterView style={style} >
                <Container onLayout={this.onStepLayout}>
                    <StepBarsView>
                        <ActiveStepBar
                            style={{
                                flex: (currentStep)
                            }}
                        />
                        <InActiveStepBar
                            style={{
                                flex: (TOTAL_STEP) - (currentStep)
                            }}
                        />
                    </StepBarsView>
                    <StepsView>
                        {_.times(TOTAL_STEP, stepIndex => {
                            const isActive = stepIndex === (currentStep - 1);
                            return (<StepView key={`step${stepIndex}`} isActive={isActive} >
                                <StepName isActive={isActive} >{stepIndex < (currentStep - 1) ? "" : LABELS[stepIndex]}</StepName>
                            </StepView>);
                        })}
                    </StepsView>
                </Container>
            </ContainerOutterView>
        );
    }

    private onStepLayout = (event: any) => {
        const { width, height } = event.nativeEvent.layout;
        this.setState({
            height,
            width
        });
    };
}

export default RegisterStep;
