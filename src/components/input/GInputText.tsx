import _ from "lodash";
import React from "react";
import { TextInputProps, TextStyle } from "react-native";
import styled from "styled-components/native";

import { colors } from "../../styles";

type WeightType = "light" | "regular" | "medium" | "bold";

const WEIGHT_MAP = {
    bold: "SpoqaHanSans-Bold",
    light: "SpoqaHanSans-Light",
    regular: "SpoqaHanSans-Regular"
};

const Container = styled.TextInput.attrs<IProps>({})`
  font-family: ${({ weightType }) => WEIGHT_MAP[weightType!]};
  padding: 0;
  margin: 0;
  color: black;
`;

interface IProps extends TextInputProps {
    name: string;
    focusStyle?: TextStyle;
    weightType?: WeightType;
    onChangeFormikText?: (name: string, text: string) => void;
    onTextBlur?: (text: string) => void;
}
export type GInputTextProps = IProps;

interface IStates {
    currentStyle?: TextStyle | null;
}

class GInputText extends React.Component<IProps, IStates> {
    public static defaultProps: Partial<IProps> = {
        focusStyle: {
            color: colors.cerulean
        },
        weightType: "regular"
    };

    public state = {
        currentStyle: null
    };

    public root: any = null;

    public render() {
        const { onChangeText, style, ...otherProps } = this.props;
        const { currentStyle } = this.state;
        return (
            <Container
                innerRef={this.setRef}
                style={[style, currentStyle]}
                placeholderTextColor={colors.black}
                underlineColorAndroid={"transparent"}
                onChangeText={onChangeText ? onChangeText : this.handleChange}
                onFocus={this.onFocus}
                onBlur={this.onBlur}
                allowFontScaling={false}
                {..._.omit(otherProps, ["onFocus", "onBlur"])}
            />
        );
    }

    private setRef = (ref: any) => {
        this.root = ref;
    };

    private clearText = () => {
        this.root.clear();
    };

    private onFocus = (event: any) => {
        const { onFocus, focusStyle } = this.props;
        if (onFocus) {
            onFocus(event);
        }
        this.setState({
            currentStyle: focusStyle
        });
    };

    private onBlur = (__: any) => {
        const { onTextBlur } = this.props;

        if (onTextBlur) {
            onTextBlur(this.nativeText());
        }
        this.setState({
            currentStyle: null
        });
    };

    private handleChange = (value: string) => {
        const { onChangeFormikText } = this.props;
        if (onChangeFormikText) {
            onChangeFormikText(this.props.name, value);
        }
    };

    private nativeText = () => {
        const { defaultValue } = this.props;
        if (_.get(this.root, ["_lastNativeText"]) === undefined) {
            return defaultValue;
        }
        return _.get(this.root, ["_lastNativeText"]);
    };
}

export default GInputText;
