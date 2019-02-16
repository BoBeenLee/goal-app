import React, { Component } from 'react';
import styled from "styled-components/native";

import { TemplateContainer } from "./style";
import { GText } from '../text';
import { colors } from '../../styles';
import { ViewProps } from 'react-native';

interface IProps {
    style?: ViewProps["style"];
    content: string;
}

const Container = styled(TemplateContainer)``;

const DiaryText = styled(GText).attrs({})`
    font-size: 16px;
    color: ${colors.cloudyBlueTwo};
`;


class DiaryTemplateInput extends Component<IProps> {
    public render() {
        const { style, content } = this.props;
        return (
            <Container style={style}>
                <DiaryText>{content}</DiaryText>
            </Container>
        );
    }
}

export default DiaryTemplateInput;
