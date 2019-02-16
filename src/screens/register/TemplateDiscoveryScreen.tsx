import Images from 'assets-image';
import React, { Component } from 'react';
import styled from "styled-components/native";

import { ContainerWithStatusBar, IconButton, BackTopBar, GText } from '../../components';
import { pop } from '../../utils/navigator';
import { colors } from '../../styles';

interface IProps {
    componentId: string;
}

const Container = styled(ContainerWithStatusBar)``;

const ContentScrollView = styled.ScrollView.attrs({})``;

const Title = styled(GText).attrs({
    weightType: "kreonBold"
})`
    font-size: 24px;
    color: ${colors.gunmetal};
    padding-horizontal: 25px;
    margin-top: 30px;
    margin-bottom: 8px;
`;

const Description = styled(GText).attrs({
    weightType: "regular"
})`
    font-size: 16px;
    color: ${colors.gunmetal};
    padding-horizontal: 25px;
`;


class TemplateDiscoveryScreen extends Component<IProps> {
    public render() {
        return (
            <Container>
                <BackTopBar title="탬플릿 둘러보기" onBackPress={this.back} />
                <ContentScrollView>
                    <Title>Example</Title>
                    <Description>
                        템플릿 활용이 어려우신가요?
                    </Description>
                </ContentScrollView>
            </Container>
        );
    }
    private back = () => {
        const { componentId } = this.props;
        pop(componentId);
    }
}

export default TemplateDiscoveryScreen;
