import React, { Component } from "react";
import { TextProps, TouchableOpacityProps } from "react-native";
import styled, { css } from "styled-components/native";

import { GText } from "../text";
import { colors } from "../../styles";

export type ButtonType =
  | "cerulean" | "disabled";

interface IProps {
  style?: TouchableOpacityProps["style"];
  textStyle?: TextProps["style"];
  type: ButtonType;
  children: string | undefined;
  onPress?: TouchableOpacityProps["onPress"];
}

const BUTTON_STYLE_BY_TYPE = new Map<
  ButtonType,
  {
    containerStyle: any;
    textStyle: any;
  }
>()
  .set("cerulean", {
    containerStyle: css`
      border-radius: 7px;
      background-color: ${colors.cerulean};
    `,
    textStyle: css`
      color: ${colors.white};
    `
  }).set("disabled", {
    containerStyle: css`
      border-radius: 7px;
      background-color: ${colors.veryLightPink};
    `,
    textStyle: css`
      color: ${colors.brownGrey};
    `
  });

const Container = styled.TouchableOpacity.attrs<{
  type: ButtonType;
}>({})`
    height: 44px;
    padding: 12px;
    align-items: center;
    justify-content: center;
    ${({ type }) => BUTTON_STYLE_BY_TYPE.get(type)!.containerStyle};
  `;

const ButtonText = styled(GText).attrs<{
  type: ButtonType;
}>({
  weightType: "bold"
})`
    font-size: 14px;
    ${({ type }) => BUTTON_STYLE_BY_TYPE.get(type)!.textStyle};
  `;

class GButton extends Component<IProps> {
  public render() {
    const { style, type, onPress, children } = this.props;
    return (
      <Container
        style={style}
        type={type}
        onPress={onPress}
        disabled={type === "disabled"}
      >
        <ButtonText type={type}>{children}</ButtonText>
      </Container>
    );
  }
}

export default GButton;
