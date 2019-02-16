import React from "react";
import { Text } from "react-native";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { GButton } from "../../src/components";

storiesOf("Button", module)
  .add("Normal GButton", () => <GButton type="cerulean">Default</GButton>)
  .add("Primary GButton", () => <GButton type="cerulean">Perimary</GButton>);
