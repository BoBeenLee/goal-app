import React, { Component } from 'react';
import styled from "styled-components/native";

import { ContainerWithStatusBar, Title, GText } from '../components';

interface IProps {
    componentId: string;
}

const Container = styled(ContainerWithStatusBar)``;

const TitleView = styled(Title)``;

const Description = styled(GText)``;

const DaysScrollView = styled.ScrollView``;

class ProjectDaysScreen extends Component<IProps> {
    render() {
        return (
            <Container>
                <DaysScrollView>
                    <TitleView>어플 완성하고 런칭하기</TitleView>
                    <Description>내 어플이 사용되는 모습을 보고 싶어</Description>
                    <TitleView>어플 완성하고 런칭하기</TitleView>
                </DaysScrollView>
            </Container>
        );
    }
}

export default ProjectDaysScreen;
