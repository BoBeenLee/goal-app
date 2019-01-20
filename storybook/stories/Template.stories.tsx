import React from "react";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { OXTemplate } from "../../src/components";

storiesOf("Template", module)
    .add("OXTemplate", () => <OXTemplate />);
