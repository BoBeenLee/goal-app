import React from "react";
import styled from "styled-components/native";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { GoalSlider } from "../../src/components";

const Container = styled.View`
    margin-top: 50px;
`;


storiesOf("Slider", module)
    .addDecorator((getStory: any) => <Container>{getStory()}</Container>)
    .add("GoalSlider", () => <GoalSlider current={5} total={10} />);
