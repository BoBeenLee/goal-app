import React, { SFC } from "react";
import { RegisteredStyle, SafeAreaView, ViewStyle } from "react-native";
import styled from "styled-components/native";

interface IProps {
    children?: React.ReactNode;
    style?: RegisteredStyle<ViewStyle> | ViewStyle;
    statusBarColor?: string;
}

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: #fff;
`;

const OutterContainer = styled.View`
  flex: 1;
`;

const StatusBar = styled(SafeAreaView).attrs<{ bgColor: string }>({})`
  background-color: ${({ bgColor }) => bgColor};
`;

const ContainerWithStatusBar: SFC<IProps> = ({
    children,
    statusBarColor,
    style
}) => {
    return (
        <OutterContainer>
            <StatusBar bgColor={statusBarColor!} />

            <Container style={style}>{children}</Container>
        </OutterContainer>
    );
};

ContainerWithStatusBar.defaultProps = {
    statusBarColor: "white"
};

export default ContainerWithStatusBar;
