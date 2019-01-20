import React, { Component } from "react";
import { TextProps, TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

import { GText } from "../text";

interface IProps {
  style?: TouchableOpacityProps["style"];
  textStyle?: TextProps["style"];
  type: "default" | "primary";
  children: string;
  onPress?: () => void;
}

const TouchabledContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

const Container = styled(GText)``;

class GButton extends Component<IProps> {
  public render() {
    const { style, textStyle, children, onPress } = this.props;
    return (
      <TouchabledContainer style={style} onPress={onPress}>
        <Container style={textStyle}>{children}</Container>
      </TouchabledContainer>
    );
  }
}

export default GButton;
