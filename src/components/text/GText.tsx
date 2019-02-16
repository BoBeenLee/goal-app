import React, { SFC } from "react";
import { StyleSheet, TextProperties } from "react-native";
import styled from "styled-components/native";

export type WeightType = "bold" | "medium" | "regular" | "light";

interface IProps extends TextProperties {
    weightType?: WeightType;
}
export type ICMTextProps = IProps;

const styles = StyleSheet.create({
    textStyle: {
        includeFontPadding: false,
        textAlignVertical: "center"
    }
});

const WEIGHT_MAP = {
    bold: "SpoqaHanSans-Bold",
    light: "SpoqaHanSans-Light",
    regular: "SpoqaHanSans-Regular"
};

const Text = styled.Text.attrs<IProps>({})`
  font-family: ${({ weightType }) => WEIGHT_MAP[weightType!]};
`;

const GText: SFC<IProps> = ({ children, style, ...props }) => {
    return (
        <Text {...props} style={[styles.textStyle, style]}>
            {children}
        </Text>
    );
};

GText.defaultProps = {
    allowFontScaling: false,
    weightType: "regular"
};

export default GText;
