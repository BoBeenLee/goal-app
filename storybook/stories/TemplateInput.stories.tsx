import React from "react";
import moment from "moment";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { TodoTemplateInput, OXTemplateInput, TableTemplateInput, TimeTemplateInput, DiaryTemplateInput } from "../../src/components";

storiesOf("TemplateInput", module)
    .add("TodoTemplateInput", () => <TodoTemplateInput defaultTodos={[
        {
            label: "영어 지문 5개 해석하기",
            isActive: false
        },
        {
            label: "수학 23p까지 풀기",
            isActive: false
        },
        {
            label: "학원 숙제 잊지 않기",
            isActive: false
        }
    ]} onToggle={action("onToggle")} onBlur={action("onBlur")} />)
    .add("DiaryTemplateInput", () => <DiaryTemplateInput defaultValue="Hello" onBlur={action("onBlur")} />)
    .add("OXTemplateInput", () => <OXTemplateInput defaultValue="O" onOXPress={action("oxPress")} />)
    .add("TimeTemplateInput", () => <TimeTemplateInput startTime={moment()} endTime={moment()} />)
    .add("TableTemplateInput", () => <TableTemplateInput items={[
        {
            label: "apple",
            value: "사과"
        },
        {
            label: "bear",
            value: "곰"
        },
        {
            label: "cap",
            value: "모자"
        }
    ]} />)
    ;
