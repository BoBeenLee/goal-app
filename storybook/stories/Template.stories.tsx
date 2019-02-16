import React from "react";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { DiaryTemplate, OXTemplate, TableTemplate, TimeTemplate, TodoTemplate } from "../../src/components";

storiesOf("Template", module)
    .add("OXTemplate", () => <OXTemplate />)
    .add("DiaryTemplate", () => <DiaryTemplate />)
    .add("TodoTemplate", () => <TodoTemplate />)
    .add("TimeTemplate", () => <TimeTemplate />)
    .add("TableTemplate", () => <TableTemplate />);
