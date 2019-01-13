import React, { Component } from 'react';
import { TextInputProps } from 'react-native';
import styled from "styled-components/native";

const Container = styled.TextInput``;

class GInputText extends Component<TextInputProps> {
    render() {
        return (
            <Container {...this.props} />
        );
    }
}

export default GInputText;
