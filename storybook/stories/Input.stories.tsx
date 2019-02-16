import React from "react";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";

import { GInputText, UnderLineInputText } from "../../src/components";

storiesOf("Input", module)
    .add("GInputText", () => <GInputText />)
    .add("UnderLineInputText", () => <UnderLineInputText name="underline" />);
