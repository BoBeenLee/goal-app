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
                <CrashButton title="test" onPress={this.test} />
            </Container>
        );
    }

    private crash = () => {
        firebase.crashlytics().setStringValue("name", "bobeenlee");
        firebase.crashlytics().setUserIdentifier("seed");
        firebase.crashlytics().log("Hello Error");
        firebase.crashlytics().crash();
    };

    private test = () => {
        // firebase.crash().log('Some SDK failed to boot!');
        // firebase.crash().report(e);
    }
}

export default CrashScreen;
