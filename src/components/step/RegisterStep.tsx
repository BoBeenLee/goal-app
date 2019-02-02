import React, { Component } from 'react';
import styled from "styled-components/native";
import { GText } from '../text';
import _ from 'lodash';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

interface IProps {
    totalStep: number;
    currentStep: number;
}

interface IStates {
    width: number;
    height: number;
}

const Container = styled.View`
    flex-direction: row;
    width: 100%;
`;

const StepsView = styled.View`
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

const StepView = styled.View.attrs<{ isActive: boolean }>({})`
    width: 16px;
    height: 16px;
    border-radius: 8px;
    background-color: ${({ isActive }) => isActive ? "#404040" : "#eee"} ;
    justify-content: center;
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
    background-color: #404040;
`;

const InActiveStepBar = styled.View`
    flex-direction: row;
    height: 5px;
    background-color: #eee;
`;


const StepName = styled(GText)``;

class RegisterStep extends Component<IProps, IStates> {

    constructor(props) {
        super(props);

        this.state = {
            width: 0,
            height: 0
        }
    }

    public render() {
        const { totalStep, currentStep } = this.props;
        return (
            <Container onLayout={this.onStepLayout}>
                <StepBarsView>
                    <ActiveStepBar
                        style={{
                            flex: (currentStep - 1)
                        }}
                    />
                    <InActiveStepBar
                        style={{
                            flex: (totalStep - 1) - (currentStep - 1)
                        }}
                    />
                </StepBarsView>
                <StepsView>
                    {_.times(totalStep, stepIndex => {
                        const isActive = stepIndex <= (currentStep - 1);
                        return (<StepView key={`step${stepIndex}`} isActive={isActive} >
                            <StepName>{stepIndex + 1}</StepName>
                        </StepView>);
                    })}
                </StepsView>
            </Container>
        );
    }

    private getStepWidthByStepIndex = (index: number) => {
        const totalStepWidth = this.state.width;
        if (!totalStepWidth) {
            return;
        }
        const { totalStep } = this.props;
        console.log(index, totalStepWidth * (index / totalStep), totalStepWidth);
        return totalStepWidth * (index / totalStep);
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
