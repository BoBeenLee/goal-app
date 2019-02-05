import React from "react";
import styled from "styled-components/native";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { AchieveCard, AchieveHistoryCard, DayCard, PhraseCard, DaysCard } from "../../src/components";

const Container = styled.View`
  flex: 1;
`;

const AchieveCardView = styled(AchieveCard)`
  height: 200px;
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
    <AchieveCardView
      title={`어플 완성하고
런칭하기`}
      onAchievePress={action("onAchievePress")}
    />
  ))
  .add("AchieveHistoryCard", () => (
    <AchieveHistoryCard
      title={`어플 완성하고
런칭하기`}
    />
  ))
  .add("DaysCard", () => (
    <DayView>
      <DaysCard />
    </DayView>
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
