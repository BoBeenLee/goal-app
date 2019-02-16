import React, { Component } from 'react';
import styled from "styled-components/native";

import { TemplateContainer } from "./style";
import { GText } from '../text';
import { colors } from '../../styles';

const Container = styled(TemplateContainer)``;

const Title = styled(GText).attrs({
    weightType: "kreonBold"
})`
    font-size: 24px;
    color: ${colors.gunmetal};
`;

const Content = styled.View`
    padding-top: 8px;
`;

const Row = styled.View`
    flex-direction: row;
`;

const TableText = styled(GText).attrs({})`
    font-size: 16px;
    color: ${colors.cloudyBlueTwo};
`;

const HighlightTableText = styled(TableText).attrs({
    weightType: "bold"
})``;



class TableTemplate extends Component {
    public render() {
        return (
            <Container>
                <Title>Table</Title>
                <Content>
                    <Row>
                        <HighlightTableText>항목 1</HighlightTableText>
                        <TableText>{"  |  "}</TableText>
                        <TableText>상세내용</TableText>
                    </Row>
                    <Row>
                        <HighlightTableText>항목 2</HighlightTableText>
                        <TableText>{"  |  "}</TableText>
                        <TableText>상세내용</TableText>
                    </Row>
                    <Row>
                        <HighlightTableText>항목 3</HighlightTableText>
                        <TableText>{"  |  "}</TableText>
                        <TableText>상세내용</TableText>
                    </Row>
                </Content>
            </Container>
        );
    }
}

export default TableTemplate;
