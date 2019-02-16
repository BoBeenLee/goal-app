import React, { Component } from 'react';
import styled from "styled-components/native";
import moment from "moment";

import { GText } from '../text';
import { colors } from '../../styles';
import { DiaryTemplateInput, TimeTemplateInput, TableTemplateInput } from '../templateinput';


const Container = styled.View``;

const Header = styled.View`
    flex-direction: row;
    align-items: flex-end;
`;

const Title = styled(GText).attrs({
    weightType: "kreonBold"
})`
    font-size: 24px;
    color: ${colors.gunmetal};
    margin-right: 30px;
`;

const DescriptionView = styled.View`
    flex: 1;
    align-items: center;
`;

const Description = styled(GText)`
    font-size: 16px;
    color: ${colors.cloudyBlueTwo};
    margin-bottom: 3px;
`;

const Content = styled.View`
    padding-top: 8px;
`;

const TableTemplateInputView = styled(TableTemplateInput)`
    width: 325px;
    margin-bottom: 16px;
`;

class TableDiscovery extends Component {
    public render() {
        return (
            <Container>
                <Header>
                    <Title>Table</Title>
                    <DescriptionView>
                        <Description>
                            하루에 영어단어 5개씩 외우기, 돈 30000원 이상 쓰지 않기 등의 목표를 세우셨다면 Table은 어떠세요?
                        </Description>
                    </DescriptionView>
                </Header>
                <Content>
                    <TableTemplateInputView
                        items={[
                            {
                                label: "apple",
                                value: "사과"
                            },
                            {
                                label: "bear",
                                value: "곰"
                            },
                            {
                                label: "cap",
                                value: "모자"
                            }
                        ]}
                    />
                    <TableTemplateInputView
                        items={[
                            {
                                label: "점심",
                                value: "7000"
                            },
                            {
                                label: "커피",
                                value: "4500"
                            },
                            {
                                label: "퇴근길 맥주",
                                value: "14000"
                            }
                        ]}
                    />
                </Content>
            </Container>
        );
    }
}

export default TableDiscovery;
