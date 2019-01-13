import React, { Component } from 'react';
import { ViewStyle } from 'react-native';
import styled from "styled-components/native";

import { GText } from "./text";

interface IProps {
    style: ViewStyle;
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
    public static defaultProps = {
        title: null,
        HeaderComponent: null,
        HeaderRightComponent: null,
    }
    public render() {
        const { title, HeaderComponent, HeaderRightComponent } = this.props;

        return (
            <Container>
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
