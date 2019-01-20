import React, { Component } from 'react';
import styled from "styled-components/native";
import { GText } from '../text';
import { ViewProps } from 'react-native';

interface IProps {
    style?: ViewProps["style"];
}

const Container = styled.View``;

const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 19px;
`;

const Title = styled(GText)``;

const CheckText = styled(GText)``;

const CommentText = styled(GText)``;

class CommentTemplate extends Component<IProps> {
    public render() {
        const { style } = this.props;
        return (
            <Container style={style}>
                <Header>
                    <Title>Comment</Title>
                    <CheckText>체크하기</CheckText>
                </Header>
                <CommentText>
                    오늘도 이걸 완료했다니 정말이지 장합니다!!!!!!!
                    조금만더힘내보쟈아
                </CommentText>
            </Container>
        );
    }
}

export default CommentTemplate;
