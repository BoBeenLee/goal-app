import React, { Component } from 'react';
import styled from "styled-components/native";
import firebase from "react-native-firebase";

const Container = styled.View``;

const CrashButton = styled.Button``;

class CrashScreen extends Component {
    public render() {
        return (
            <Container>
                <CrashButton title="crash" onPress={this.crash} />
            </Container>
        );
    }

    private crash = () => {
        firebase.crashlytics().crash();
    };
}

export default CrashScreen;
