import React from "react";
import { Text } from "react-native";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { RegisterStep } from "../../src/components";

storiesOf("Step", module)
    .add("RegisterStep", () => <RegisterStep currentStep={1} />);
