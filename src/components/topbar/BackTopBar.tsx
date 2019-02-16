import Images from "assets-image";
import React, { Component } from 'react';
import styled from "styled-components/native";

import GTopBar from './GTopBar';
import { GText } from '../text';
import { IconButton } from "../button";
import { colors } from "../../styles";

interface IProps {
    title: string;
    onBackPress: () => void;
}

const Container = styled(GTopBar)`
    border-bottom-width: 1px;
    border-bottom-color: ${colors.paleGrey};
`;

const HeaderLeftView = styled.View`
    flex: 1;
    height: 60px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const HeaderBackIcon = styled(IconButton)`
    position: absolute;
    top: 10px;
    left: 24px;
    width: 23px;
    height: 18px;
`;

const HeaderTitle = styled(GText).attrs({
    weightType: "bold"
})`
    flex: 1;
    font-size: 20px;
    color: ${colors.black};
`;

class BackTopBar extends Component<IProps> {
    public render() {
        return (
            <Container HeaderComponent={this.renderHeaderComponent()} />
        );
    }

    private renderHeaderComponent = () => {
        const { title, onBackPress } = this.props;
        return (<HeaderLeftView>
            <HeaderBackIcon type="opacity" source={Images.btn_back_arrow} onPress={onBackPress} />
            <HeaderTitle>{title}</HeaderTitle></HeaderLeftView>);
    }
}

export default BackTopBar;
