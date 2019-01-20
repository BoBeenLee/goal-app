import React, { Component } from 'react';
import styled from "styled-components/native";
import { ViewProps } from 'react-native';

import { GText } from "../text";

interface IProps {
    style?: ViewProps["style"];
    title: string;
}

const Container = styled.View`
    justify-content: center;
    align-items: center;
    padding-vertical: 13px;
    padding-horizontal: 30px;
    background-color: #eee;
    border-radius: 23px;
`;

const Title = styled(GText)``;

class PhraseCard extends Component<IProps> {
    render() {
        const { style, title } = this.props;
        return (
            <Container style={style}>
                <Title>{title}</Title>
            </Container>
        );
    }
}

export default PhraseCard;
