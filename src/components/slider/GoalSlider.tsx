import React, { Component } from 'react';
import styled from "styled-components/native";

interface IProps {
    current: number;
    total: number;
}

interface IStates {
    totalWidth: number;
}

const Container = styled.View`
`;

const Total = styled.View`
    width: 100%;
    height: 7px;
    background-color: #eee;
`;

const Current = styled.View.attrs<{ currentWidth: number }>({})`
    width: ${({ currentWidth }) => currentWidth}px;
    height: 7px;
    background-color: #000;
`;

const CurrentIndicator = styled.View`
    position: absolute;
    top: -14px;
    right: -7px;
    width: 14px;
    height: 14px;
    border-radius: 7px;
    background-color: #000;
`;

class GoalSlider extends Component<IProps, IStates> {
    constructor(props) {
        super(props);
        this.state = {
            totalWidth: 0
        };
    }

    public render() {
        return (
            <Container>
                <Total onLayout={this.onSliderLayout}>
                    <Current currentWidth={this.currentWidth}>
                        <CurrentIndicator />
                    </Current>
                </Total>
            </Container>
        );
    }

    private get currentWidth() {
        const { totalWidth } = this.state;
        const { current, total } = this.props;
        return Math.round((current * totalWidth) / total);
    }

    private onSliderLayout = (event: any) => {
        const { width } = event.nativeEvent.layout;
        this.setState({
            totalWidth: width
        });
    };
}

export default GoalSlider;
