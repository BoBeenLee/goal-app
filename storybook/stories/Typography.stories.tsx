import React from "react";
import styled from "styled-components/native";
import { storiesOf } from "@storybook/react-native";

import { GText } from "../../src/components";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Content = styled.View`
    flex: 1;
`;

storiesOf("Typography", module)
    .addDecorator((getStory: any) => <Container>{getStory()}</Container>)
    .add("Typography", () => <Content>
        <GText weightType="light">Hello World</GText>
        <GText weightType="regular">Hello World</GText>
        <GText weightType="bold">Hello World</GText>
        <GText weightType="kreonRegular">Hello World</GText>
        <GText weightType="kreonBold">Hello World</GText>
    </Content>);
