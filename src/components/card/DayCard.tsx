import React, { Component } from 'react';
import styled, { css } from "styled-components/native";
import { TouchableHighlightProps, View } from 'react-native';

import { GText } from '../text';
import { colors } from '../../styles';

export type ShapeType = "hexagon" | "circle" | "square";
export type StatusType = "complete" | "current" | "fail" | "ready";

interface IProps {
    style?: TouchableHighlightProps["style"];
    status: StatusType;
    activeColor?: string;
    type: ShapeType;
    day: string;
    onPress: () => void;
}

const Container = styled.TouchableOpacity``;

const DayText = styled(GText).attrs<{ isActive?: boolean }>({
    weightType: "kreonBold"
})`
    font-size: 19px;
`;

const HexagonView = styled.View`
    width: 24px;
    height: 44px;
    margin-horizontal: 11px;
`;

const HexagonInner = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: red;
`;


const HexagonRight = styled.View`
    position: absolute;
    right: -25px;
    top: 0px;
    width: 0px;
    height: 0px;
    border-style: solid;
    border-top-width: 22px;
    border-top-color: transparent;
    border-bottom-width: 22px;
    border-bottom-color: transparent;
    border-left-width: 25px;
    border-left-color: red;
`;

const HexagonLeft = styled.View`
    position: absolute;
    left: -25px;
    top: 0px;
    width: 0px;
    height: 0px;
    border-style: solid;
    border-top-width: 22px;
    border-top-color: transparent;
    border-bottom-width: 22px;
    border-bottom-color: transparent;
    border-right-width: 25px;
    border-right-color: red;
`;

const CircleView = styled.View`
    width: 44px;
    height: 44px;
    border-radius: 22px;
    justify-content: center;
    align-items: center;
`;

const SqaureView = styled.View`
    width: 44px;
    height: 44px;
    border-radius: 3px;
    justify-content: center;
    align-items: center;
`;


const ShapeColorMap = new Map<ShapeType, { backgroundColor: string, color: string }>()
    .set("hexagon", {
        backgroundColor: "#ff844e",
        color: "#812700"
    })
    .set("circle", {
        backgroundColor: "#ffdf3c",
        color: "#756205"
    })
    .set("square", {
        backgroundColor: "#2aacfc",
        color: "#0e6092"
    })

class DayCard extends Component<IProps> {
    public render() {
        const { onPress } = this.props;
        return <Container onPress={onPress}>{this.renderByType}</Container>
    }

    private get renderByType() {
        const { type } = this.props;
        if (type === "hexagon") {
            return this.renderHexagon();
        } else if (type === "circle") {
            return this.renderCircle();
        }
        return this.renderSqaure();
    }

    private renderHexagon = () => {
        const { day, type } = this.props;
        const { backgroundColor } = ShapeColorMap.get(type)!
        return (
            <HexagonView>
                <HexagonInner style={this.containerStyle}>
                    <DayText style={this.textStyle}>{day}</DayText>
                </HexagonInner>
                <HexagonRight style={{ borderLeftColor: backgroundColor }} />
                <HexagonLeft style={{ borderRightColor: backgroundColor }} />
            </HexagonView>
        );
    }

    private renderCircle = () => {
        const { day, type } = this.props;
        const { backgroundColor, color } = ShapeColorMap.get(type)!

        return (<CircleView style={this.containerStyle}>
            <DayText style={this.textStyle}>{day}</DayText>
        </CircleView>)
    }

    private renderSqaure = () => {
        const { day, type } = this.props;
        const { backgroundColor, color } = ShapeColorMap.get(type)!

        return (<SqaureView style={this.containerStyle}>
            <DayText style={this.textStyle}>{day}</DayText>
        </SqaureView>)
    }

    private get containerStyle() {
        const { type, status } = this.props;
        const { backgroundColor, color } = ShapeColorMap.get(type)!

        if (status === "fail") {
            return {
                backgroundColor: "#f2f2f2"
            }
        } else if (status === "ready") {
            return {
                backgroundColor: colors.white,
                borderWidth: 1,
                borderColor: "#e2e2e2"
            }
        } else if (status === "current") {
            return {
                backgroundColor: colors.white,
                borderWidth: 1,
                borderColor: backgroundColor
            };
        }
        return {
            backgroundColor
        };
    }

    private get textStyle() {
        const { type, status } = this.props;
        const { backgroundColor, color } = ShapeColorMap.get(type)!

        if (status === "fail") {
            return {
                color: "#a4a4a4"
            }
        } else if (status === "ready") {
            return {
                color: "#e2e2e2"
            }
        } else if (status === "current") {
            return {
                color: backgroundColor
            };
        }
        return {
            color
        };
    }
}



export default DayCard;
