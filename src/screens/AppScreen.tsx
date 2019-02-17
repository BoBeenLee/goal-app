import Images from "assets-image";
import React, { Component } from "react";
import styled from "styled-components/native";
import { Q } from '@nozbe/watermelondb';
import withObservables from '@nozbe/with-observables';

import { push } from "../utils/navigator";
import { SCREEN_IDS } from "./constant";


interface IProps {
  currentProjects: any;
  componentId: string;
}

const Container = styled.View`
  flex: 1;
`;

const Splash = styled.Image`
  flex: 1;
`;

class AppScreen extends Component<IProps> {
  public async componentDidMount() {
    const { currentProjects } = this.props;
    if (currentProjects.length > 0) {
      this.naviateProject();
      return;
    }
    this.naviateStart();
  }

  public render() {
    return (
      <Container>
        <Splash source={Images.splash} />
      </Container>
    );
  }

  private naviateProject = () => {
    const { componentId } = this.props;
    push(componentId, SCREEN_IDS.ProjectScreen);
  }

  private naviateStart = () => {
    const { componentId } = this.props;
    push(componentId, SCREEN_IDS.StartScreen);
  }
}

const enhance = withObservables([], ({ database }) => ({
  currentProjects: database.collections
    .get('project')
    .query(Q.where('status', "DOING"))
    .observe(),
}))

export default enhance(AppScreen);
