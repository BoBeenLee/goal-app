import React, { Component } from 'react';
import styled from "styled-components/native";

import { TemplateContainer } from "./style";
import { GText } from '../text';
import { colors } from '../../styles';
import { ViewProps } from 'react-native';
import { GInputText } from '../input';

interface IProps {
    title?: string;
    style?: ViewProps["style"];
    defaultValue: string;
    onBlur?: (text: string) => void;
}

interface IStates {
    content: string;
}

const Container = styled(TemplateContainer)``;

const TemplateInputTitle = styled(GText).attrs({
    weightType: "kreonBold"
})`
    font-size: 24px;
    color: ${colors.gunmetal};
    margin-bottom: 8px;
`;


const DiaryInputText = styled(GInputText).attrs({})`
    font-size: 16px;
    color: ${colors.cloudyBlueTwo};
`;

class DiaryTemplateInput extends Component<IProps, IStates> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            content: props.defaultValue
        }
    }
    public render() {
        const { style, title } = this.props;
        const { content } = this.state;

        return (
            <Container style={style}>
                {title ? <TemplateInputTitle>{title}</TemplateInputTitle> : null}
                <DiaryInputText
                    name="diary"
                    value={content}
                    placeholder="오늘 하루의 일어난 기록을 작성하세요"
                    placeholderTextColor={colors.cloudyBlueTwo}
                    onChangeText={this.onChangeText}
                />
            </Container>
        );
    }

    private onChangeText = (text: string) => {
        this.setState({
            content: text
        });
    }
}

export default DiaryTemplateInput;
