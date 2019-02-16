import React, { Component } from 'react';
import styled from "styled-components/native";

import { GText } from '../text';
import { colors } from '../../styles';
import { DiaryTemplateInput, OXTemplateInput } from '../templateinput';

const Container = styled.View`
    padding-top: 20px;
    padding-bottom: 31px;
`;

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

const OXTemplateInputView = styled(OXTemplateInput)`
    width: 325px;
    margin-bottom: 16px;
`;

class OXDiscovery extends Component {
    public render() {
        return (
            <Container>
                <Header>
                    <Title>OX</Title>
                    <DescriptionView>
                        <Description>
                            했는지 안했는지만 깔끔하게 체크하고 싶을 때 이용해보세요.
                    </Description>
                    </DescriptionView>
                </Header>
                <Content>
                    <OXTemplateInputView
                        defaultValue="O"
                    />
                </Content>
            </Container>
        );
    }
}

export default OXDiscovery;
