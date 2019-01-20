import _ from "lodash";
import React, { Component } from 'react';
import Carousel from 'react-native-snap-carousel';
import styled from "styled-components/native";
import { Dimensions } from 'react-native';

import { First, Second, Third } from "../components/tutorial";
import { getStatusBarHeight } from "../utils/device";
import { push } from "../utils/navigator";
import { SCREEN_IDS } from "./constant";
import topbars from "./styles/topbar";

const WINDOW_WIDTH = Dimensions.get("window").width;

interface IProps {
    componentId: string;
}

interface IStates {
    currentIndex: number;
}

interface ITutorialItem {
    TargetComponent: React.ReactNode;
    last: boolean;
    navigateTo: (componentId: string) => void;
}

const Container = styled.View`
    flex: 1;
    padding-top: ${getStatusBarHeight(false)};
`;

const IndicatorView = styled.View`
    position: absolute;
    flex-direction: row;
    bottom: 10px;
`;

const IndicatorText = styled.Text``;

const TUTORIAL_ITEMS: ITutorialItem[] = [{
    TargetComponent: First,
    last: false,
    navigateTo: (__: string) => { }
}, {
    TargetComponent: Second,
    last: false,
    navigateTo: (__: string) => { }
}, {
    TargetComponent: Third,
    last: true,
    navigateTo: (componentId: string) => {
        push(componentId, SCREEN_IDS.ProjectRegisterScreen);
    }
}]

class TutorialScreen extends Component<IProps, IStates> {
    public render() {
        return (
            <Container>
                <Carousel<ITutorialItem>
                    data={TUTORIAL_ITEMS}
                    renderItem={this.renderItem}
                    sliderWidth={WINDOW_WIDTH}
                    itemWidth={WINDOW_WIDTH}
                    slideInterpolatedStyle={this.animatedStyles}
                    onSnapToItem={this.onSnapToItem}
                />
                <IndicatorView>
                    {_.map(TUTORIAL_ITEMS, (__, index) => {
                        return <IndicatorText key={`indicator${index}`}>{index}</IndicatorText>;
                    })}
                </IndicatorView>
            </Container>
        );
    }

    private renderItem = ({ item, index }) => {
        const { componentId } = this.props;
        const TargetComponent = item.TargetComponent;
        return (
            <TargetComponent key={index} navigateTo={_.partial(item.navigateTo, componentId)} />
        );
    }

    private animatedStyles = () => {
        return {};
    };

    private onSnapToItem = (index: number) => {
        this.setState(
            {
                currentIndex: index
            }
        );
    };
}

export default TutorialScreen;
