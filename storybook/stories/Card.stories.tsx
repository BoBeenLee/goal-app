import React from "react";
import styled from "styled-components/native";

import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { AchieveCard, AchieveHistoryCard, DayCard, PhraseCard, ProjectDaysCard, AddAchieveCard } from "../../src/components";

const Container = styled.View`
  flex: 1;
`;

const AchieveCardView = styled(AchieveCard)`
  height: 200px;
`;

const DayView = styled.View`
  margin-top: 20px;
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
`;

const DayBG = styled.View`
  flex:1;
  padding: 20px;
  background-color: #007ef2;
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
  .add("DayCard", () => (
    <React.Fragment>
      <DayView>
        <DayCard type="circle" status="complete" day={"1"} onPress={action("onDay")} />
        <DayCard type="circle" status="fail" day={"1"} onPress={action("onDay")} />
        <DayCard type="circle" status="current" day={"1"} onPress={action("onDay")} />
        <DayCard type="circle" status="ready" day={"1"} onPress={action("onDay")} />
      </DayView>
      <DayView>
        <DayCard type="hexagon" status="complete" day={"1"} onPress={action("onDay")} />
        <DayCard type="hexagon" status="fail" day={"1"} onPress={action("onDay")} />
        <DayCard type="hexagon" status="current" day={"1"} onPress={action("onDay")} />
        <DayCard type="hexagon" status="ready" day={"1"} onPress={action("onDay")} />
      </DayView>
      <DayView>
        <DayCard type="square" status="complete" day={"1"} onPress={action("onDay")} />
        <DayCard type="square" status="fail" day={"1"} onPress={action("onDay")} />
        <DayCard type="square" status="current" day={"1"} onPress={action("onDay")} />
        <DayCard type="square" status="ready" day={"1"} onPress={action("onDay")} />
      </DayView>
    </React.Fragment>
  ))
  .add("PhraseCard", () => (
    <PhraseCard
      title={"“내 어플이 사용되는 모습을 보고싶어”"}
    />
  ))
  .add("ProjectDaysCard", () => (
    <DayBG>
      <ProjectDaysCard currentDay={13} onPress={action("onPress")} />
    </DayBG>
  ))
  .add("AddAchieveCard", () => (
    <AddAchieveCard onPress={action("onPress")} />
  ));
