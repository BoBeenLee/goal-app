import _ from "lodash";
import { Navigation } from "react-native-navigation";
import firebase from "react-native-firebase";

import RootStore from "./stores/RootStore";
import { start as startNavigator, navigateDynamicLink } from "./utils/navigator";
import { setup } from "../ReactotronConfig";
import { registerScreens } from "./screens";
import database from "./model/schema";
import { SCREEN_IDS } from "./screens/constant";

const rootStore = RootStore.create();

setup(rootStore);
registerScreens(rootStore);

firebase.links().onLink(url => {
  console.log("onLink", url);
});

async function start() {
  firebase.links().getInitialLink().then(url => {
    console.log("start", url);
  });
  Navigation.events().registerAppLaunchedListener(() => {
    startNavigator();
  });
}

start();
