import React, { Component } from 'react';
import styled from "styled-components/native";

import GTopBar from './GTopBar';
import { Title } from '../text';

interface IProps {
    title: string;
    onBackPress: () => void;
}

const Container = styled(GTopBar)``;



const HeaderLeftView = styled.View`
    flex-direction: row;
`;

const HeaderTitle = styled(Title)``;

class BackTopBar extends Component<IProps> {
    public render() {
        const { title, onBackPress } = this.props;

        return (
            <Container HeaderComponent={this.renderHeaderComponent()} />
        );
    }

    private renderHeaderComponent = () => {
        const { title } = this.props;
        return (<HeaderLeftView><HeaderTitle>{title}</HeaderTitle></HeaderLeftView>);
    }
}

export default BackTopBar;
