import React, { Component } from 'react';
import styled from "styled-components/native";
import firebase from 'react-native-firebase';

import { GButton, ContainerWithStatusBar } from "../components";

const Container = styled(ContainerWithStatusBar)``;

const LinkButton = styled(GButton)``;

class DynamicLinkScreen extends Component {
    public render() {
        return (
            <Container>
                <LinkButton type="cerulean" onPress={this.shareLink}>Share Link</LinkButton>
            </Container>
        );
    }

    private shareLink = () => {
        const link = new firebase.links.DynamicLink('https://cosmee.co/', 'goalnexters.page.link')
            .android.setPackageName('com.nexters.goal')
            .ios.setBundleId('com.nexters.goal')
            .analytics.setCampaign("facebook")
            .analytics.setContent("cosmee ad")
            .analytics.setSource("https://cosmee.co/")
            .social.setImageUrl("https://cosmee.co/images/meta-image.png")
            .social.setTitle("facebook social ad")
            .social.setDescriptionText("hello cosmee");

        firebase.links()
            .createShortDynamicLink(link, 'UNGUESSABLE')
            .then((url) => {
                console.log(url);
            });
    }
}

export default DynamicLinkScreen;
