import Images from "assets-image";
import React, { Component } from "react";
import styled from "styled-components/native";


interface IProps {
  componentId: string;
}

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

const GifImage = styled.Image`
  width: 100px;
  height: 100px;
`;

const Text = styled.Text``;

class AppScreen extends Component<IProps> {
  public render() {
    return (
      <Container>
        <Text>Hello World</Text>
        <GifImage source={Images.select_number_1} />
      </Container>
    );
  }
}

export default AppScreen;
