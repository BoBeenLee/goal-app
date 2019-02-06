import React from "react";
import { ImageProps, TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

type IconButtonType = "opacity" | "withoutfeedback";

interface IProps {
    type: IconButtonType;
    style?: TouchableOpacityProps["style"];
    onPress?: TouchableOpacityProps["onPress"];
    activeOpacity?: TouchableOpacityProps["activeOpacity"];
    source: ImageProps["source"];
    iconStyle?: ImageProps["style"];
}

const ContainerTouchabledOpacity = styled.TouchableOpacity.attrs({
    activeOpacity: 0.2
})``;

const ContainerTouchabledWithoutFeedback = styled.TouchableWithoutFeedback``;

const ContainerMapByType = new Map<IconButtonType, any>()
    .set("opacity", ContainerTouchabledOpacity)
    .set("withoutfeedback", ContainerTouchabledWithoutFeedback);

const Icon = styled.Image.attrs({ resizeMode: "contain" })`
  width: 100%;
  flex: 1;
`;

function IconButton({ type, source, iconStyle, ...props }: IProps) {
    const Container = ContainerMapByType.get(type)!;
    return (
        <Container {...props}>
            <Icon style={iconStyle} source={source} />
        </Container>
    );
}

export default IconButton;
