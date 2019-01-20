import React, { Component } from 'react';
import styled from "styled-components/native";

import { GText } from "../text";

interface IProps {
    title: string;
}

const Container = styled.View`
    padding-vertical: 13px;
    padding-horizontal: 30px;
    background-color: #eee;
    border-radius: 23px;
`;

const Title = styled(GText)``;

class PhraseCard extends Component<IProps> {
    render() {
        const { title } = this.props;
        return (
            <Container>
                <Title>{title}</Title>
            </Container>
        );
    }
}

export default PhraseCard;
