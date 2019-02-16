import React, { Component } from 'react';
import styled from "styled-components/native";
import { ViewProps } from 'react-native';

interface IProps {
    overlayStyle?: ViewProps["style"];
    SelectedComponent: JSX.Element;
    children: JSX.Element | JSX.Element[];
}

const Container = styled.View``;

const OverlayView = styled.View`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    justify-content: center;
    align-items: center;
    background-color: #ff834e33;
    border-width: 2px;
    border-color: #ff834e;
    border-radius: 5px;
`;


class SelectedTemplate extends Component<IProps> {
    public render() {
        const { children, SelectedComponent } = this.props;
        return (
            <Container>
                {children}
                <OverlayView>
                    {SelectedComponent}
                </OverlayView>
            </Container>
        );
    }
}

export default SelectedTemplate;
