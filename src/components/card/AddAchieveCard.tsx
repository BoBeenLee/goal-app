import Images from "assets-image";
import React, { Component } from 'react';
import styled from "styled-components/native";

import { GText } from '../text';
import { colors } from '../../styles';
import { IconButton } from '../button';

interface IProps {
    onPress: () => void;
}

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    border-radius: 7px;
    background-color: ${colors.white};
    shadow-color: #e7e7e7c0;
    shadow-offset: 0px 3px;
    shadow-opacity: 0.8;
    shadow-radius: 8px;
`;

const AddButton = styled(IconButton)`
    width: 68px;
    height: 68px;
    margin-bottom: 11px;
`;

const Description = styled(GText).attrs({
    weightType: "bold"
})`
    font-size: 16px;
    color: ${colors.gunmetal};
`;

class AddAchieveCard extends Component<IProps> {
    public render() {
        const { onPress } = this.props;
        return (
            <Container>
                <AddButton type="opacity" source={Images.btn_add_achieve} onPress={onPress} />
                <Description>30일 시작하기</Description>
            </Container>
        );
    }
}

export default AddAchieveCard;
