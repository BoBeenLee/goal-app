import React from "react";
import styled from "styled-components/native";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { AchieveCard, DayCard, PhraseCard } from "../../src/components";

const Container = styled.View`
  flex: 1;
`;

const DayView = styled.View`
  flex-direction: row;
`;

const ActiveDayView = styled(DayCard)`
  margin-horizontal: 25px;
`;

storiesOf("Card", module)
  .addDecorator((getStory: any) => <Container>{getStory()}</Container>)
  .add("AchieveCard", () => (
    <AchieveCard
    />
  ))
  .add("DayCard", () => (
    <DayView>
      <DayCard
        day="26"
      />
      <ActiveDayView
        isActive={true}
        day="27"
      />
      <DayCard
        day="28"
      />
    </DayView>
  ))
  .add("PhraseCard", () => (
    <PhraseCard
      title={"“내 어플이 사용되는 모습을 보고싶어”"}
    />
  ));
