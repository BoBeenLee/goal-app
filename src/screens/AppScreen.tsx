import assetsJson from "assets-json";
import React, { Component } from "react";
import { Navigation } from "react-native-navigation";
import styled from "styled-components/native";
import LottieView from 'lottie-react-native';

import { pushTransition } from "./styles/animation";

interface IProps {
  componentId: string;
}

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const NavigateButton = styled.Button``;

const Text = styled.Text``;

class AppScreen extends Component<IProps> {
  public render() {
    return (
      <Container>
        <NavigateButton title="Throw Error" onPress={this.navigateThrowError} />
        <Text>Hello World</Text>
        <LottieView
          style={{
            width: 100,
            height: 100
          }}
          source={assetsJson.success}
          autoPlay={true}
          loop={true}
        />
      </Container>
    );
  }

  private navigateThrowError = () => {
    const { componentId } = this.props;
    Navigation.push(componentId, {
      component: {
        name: "ErrorScreen",
        options: {
          animations: pushTransition as any
        }
      }
    });
  }
}

export default AppScreen;
