import React, { Component } from 'react';
import styled from "styled-components/native";

import { GText } from '../text';
import { colors } from '../../styles';
import { DiaryTemplateInput } from '../templateinput';

const Container = styled.View`
    padding-top: 20px;
    padding-bottom: 31px;
`;

const Header = styled.View`
    flex-direction: row;
    align-items: flex-end;
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

const DiaryTemplateInputView = styled(DiaryTemplateInput)`
    width: 325px;
    margin-bottom: 16px;
`;

class DiaryDiscovery extends Component {
    public render() {
        return (
            <Container>
                <Header>
                    <DescriptionView>
                        <Description>
                            목표를 위해 한 일을 기록하거나 독후감, 관찰 기록 일지 등으로 다양하게 활용해보세요.
                    </Description>
                    </DescriptionView>
                </Header>
                <Content>
                    <DiaryTemplateInputView
                        defaultValue="오늘은 할 일을 전부 끝냈다! 앞으로 남은 13일도 오늘처럼!!"
                    />
                    <DiaryTemplateInputView
                        defaultValue="‘빽넘버’를 읽고 여러 생각을 하게 되었다. 죽음의 날을 알게 되는 기분은 어떤 기분일까."
                    />
                </Content>
            </Container>
        );
    }
}

export default DiaryDiscovery;
