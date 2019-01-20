import React, { Component } from 'react';
import styled from "styled-components/native";

import { GButton, Title } from "../../components";
import { push } from '../../utils/navigator';
import { SCREEN_IDS } from '../constant';

interface IProps {
    componentId: string;
}

const Container = styled.View`
    
`;

const TitleView = styled(Title)``;

class MotivationRegisterScreen extends Component<IProps> {
    public render() {
        return (
            <Container>
                <TitleView>작심삼십일의 동기를 설정해주세요</TitleView>
                <GButton type="default" onPress={this.next}>다음</GButton>
            </Container>
        );
    }

    private next = () => {
        const { componentId } = this.props;
        push(componentId, SCREEN_IDS.TemplateRegisterScreen);
    }
}

export default MotivationRegisterScreen;
