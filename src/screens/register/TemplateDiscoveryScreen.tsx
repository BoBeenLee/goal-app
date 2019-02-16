import Images from 'assets-image';
import React, { Component } from 'react';
import styled from "styled-components/native";

import { ContainerWithStatusBar, IconButton, BackTopBar } from '../../components';
import { pop } from '../../utils/navigator';

interface IProps {
    componentId: string;
}

const Container = styled(ContainerWithStatusBar)``;



class TemplateDiscoveryScreen extends Component<IProps> {
    public render() {
        return (
            <Container>
                <BackTopBar title="탬플릿 둘러보기" onBackPress={this.back} />
            </Container>
        );
    }
    private back = () => {
        const { componentId } = this.props;
        pop(componentId);
    }
}

export default TemplateDiscoveryScreen;
