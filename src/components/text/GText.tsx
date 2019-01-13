import React, { Component } from 'react';
import { TextProperties } from 'react-native';
import styled from "styled-components/native";

const Container = styled.Text``;

class GText extends Component<TextProperties> {
    public render() {
        const { children } = this.props;
        return (
            <Container {...this.props}>{children}</Container>
        );
    }
}

export default GText;
