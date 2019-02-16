import React from "react";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";

import { GTopBar, BackTopBar } from "../../src/components";

storiesOf("TopBar", module)
    .add("GTopBar", () => <GTopBar title="Hello" />)
    .add("BackTopBar", () => <BackTopBar title="Hello" onBackPress={action("Back")} />);
