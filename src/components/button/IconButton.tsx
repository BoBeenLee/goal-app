import React from "react";
import { ImageProps, TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

import { getHitSlop } from "../../utils/view";

type IconButtonType = "opacity" | "withoutfeedback";

interface IProps {
    type: IconButtonType;
    style?: TouchableOpacityProps["style"];
    onPress?: TouchableOpacityProps["onPress"];
    activeOpacity?: TouchableOpacityProps["activeOpacity"];
    source: ImageProps["source"];
    iconStyle?: ImageProps["style"];
}

interface IStates {
    size: number;
}

const ContainerTouchabledOpacity = styled.TouchableOpacity.attrs({
    activeOpacity: 0.2,
})``;

const ContainerTouchabledWithoutFeedback = styled.TouchableWithoutFeedback``;

const ContainerMapByType = new Map<IconButtonType, any>()
    .set("opacity", ContainerTouchabledOpacity)
    .set("withoutfeedback", ContainerTouchabledWithoutFeedback);

const Icon = styled.Image.attrs({ resizeMode: "contain" })`
  width: 100%;
  flex: 1;
`;

class IconButton extends React.Component<IProps, IStates> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            size: 0
        };
    }

    public render() {
        const { type, source, iconStyle, ...rest } = this.props;
        const { size } = this.state;
        const Container = ContainerMapByType.get(type)!;
        return (
            <Container {...rest} hitSlop={getHitSlop(size + 5)} onLayout={this.onLayout} >
                <Icon style={iconStyle} source={source} />
            </Container>
        );
    }

    private onLayout = (event: any) => {
        const { width } = event.nativeEvent.layout;
        this.setState({
            size: width
        });
    };
}

export default IconButton;
