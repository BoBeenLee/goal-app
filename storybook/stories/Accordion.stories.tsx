import React from "react";
import styled from "styled-components/native";
import { storiesOf } from "@storybook/react-native";

import { DiscoveryAccordion } from "../../src/components";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

storiesOf("Accordion", module)
    .addDecorator((getStory: any) => <Container>{getStory()}</Container>)
    .add("Accordion", () => <DiscoveryAccordion />);
