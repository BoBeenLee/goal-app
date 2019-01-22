import { Navigation } from "react-native-navigation";
import firebase from "react-native-firebase";

import { pushTransition } from "../screens/styles/animation";
import { SCREEN_IDS } from "../screens/constant";
import { delay } from "./common";
import topbars from "../screens/styles/topbar";

let isLoading = false;
let currentComponentId: string | null = null;

const start = () => {
    Navigation.setDefaultOptions({
        layout: {
            backgroundColor: "#fff",
            orientation: ["portrait"]
        },
        statusBar: {
            backgroundColor: "white",
            style: "dark"
        },
        topBar: topbars.emptyTopBar()
    });

    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: SCREEN_IDS.CrashScreen
                        }
                    }
                ]
            }
        }
    });
};

const setCurrentComponent = (componentId: string, componentName: string) => {
    currentComponentId = componentId;
    firebase.analytics().setCurrentScreen(componentName);
};

const getCurrentComponent = () => {
    return currentComponentId;
}

const protectedMultiClick = (func: any) => async (...args) => {
    if (!isLoading) {
        isLoading = true;
    }
    func(...args);
    await delay(300);
    isLoading = false;
}

const setStackRoot = (componentId: string, nextComponentId: string, params?: object) => protectedMultiClick(() => {
    Navigation.setStackRoot(componentId, {
        component: {
            name: nextComponentId,
            options: {
                animations: pushTransition as any
            },
            passProps: params
        }
    });
})(componentId, nextComponentId, params);


const push = async (componentId: string, nextComponentId: string, params?: object) => await protectedMultiClick(async () => {
    Navigation.push(componentId, {
        component: {
            name: nextComponentId,
            options: {
                animations: pushTransition as any
            },
            passProps: params
        }
    });
})(componentId, nextComponentId, params);

const pop = (componentId: string) => {
    Navigation.pop(componentId);
}


export { setCurrentComponent, start, setStackRoot, getCurrentComponent, push, pop };
