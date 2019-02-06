import React, { Component } from 'react';
import { ViewProps } from 'react-native';
import styled from "styled-components/native";

import { GText } from "../text";

interface IProps {
    style?: ViewProps["style"];
    title?: string;
    HeaderComponent?: JSX.Element;
    HeaderRightComponent?: JSX.Element;
}

const Container = styled.View`
    flex-direction: row;
    align-items: center;
`;

const HeaderView = styled.View`
    flex: 1;
`;

const HeaderRightView = styled.View`
    
`;

class GTopBar extends Component<IProps> {
    public render() {
        const { style, title, HeaderComponent, HeaderRightComponent } = this.props;

        return (
            <Container style={style}>
                <HeaderView>
                    {HeaderComponent ? HeaderComponent : <GText>{title}</GText>}
                </HeaderView>
                <HeaderRightView>
                    {HeaderRightComponent}
                </HeaderRightView>
            </Container>
        );
    }
}

export default GTopBar;
