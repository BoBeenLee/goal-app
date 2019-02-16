import React from "react";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { TodoDiscovery, DiaryDiscovery, OXDiscovery, TimeDiscovery, TableDiscovery } from "../../src/components";

storiesOf("Discovery", module)
    .add("TodoDiscovery", () => <TodoDiscovery />)
    .add("DiaryDiscovery", () => <DiaryDiscovery />)
    .add("OXDiscovery", () => <OXDiscovery />)
    .add("TimeDiscovery", () => <TimeDiscovery />)
    .add("TableDiscovery", () => <TableDiscovery />)
    ;
