import Images from "assets-image";
import React, { Component } from 'react';
import styled from "styled-components/native";

import GTopBar from './GTopBar';
import { Title, GText } from '../text';
import { IconButton } from "../button";

interface IProps {
    title: string;
    onBackPress: () => void;
}

const Container = styled(GTopBar)``;

const HeaderLeftView = styled.View`
    flex-direction: row;
`;

const HeaderBackIcon = styled(IconButton)`
    width: 10px;
    height: 18px;
`;

const HeaderTitle = styled(GText)`
    flex: 1;
`;

class BackTopBar extends Component<IProps> {
    public render() {
        const { title, onBackPress } = this.props;

        return (
            <Container HeaderComponent={this.renderHeaderComponent()} />
        );
    }

    private renderHeaderComponent = () => {
        const { title } = this.props;
        return (<HeaderLeftView>
            <HeaderBackIcon type="opacity" source={Images.btn_back} />
            <HeaderTitle>{title}</HeaderTitle></HeaderLeftView>);
    }
}

export default BackTopBar;
