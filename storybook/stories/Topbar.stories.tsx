import React from "react";

import { storiesOf } from "@storybook/react-native";
import { GTopBar } from "../../src/components";

storiesOf("TopBar", module)
    .add("GTopBar", () => <GTopBar title="Hello" />);
