import { Navigation } from "react-native-navigation";

import { pushTransition } from "../screens/styles/animation";
import { SCREEN_IDS } from "../screens/constant";
import { delay } from "./common";
import topbars from "../screens/styles/topbar";

let isLoading = false;

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
                            name: SCREEN_IDS.TutorialScreen
                        }
                    }
                ]
            }
        }
    });
};

const protectedMultiClick = (func: any) => async (...args) => {
    if (!isLoading) {
        isLoading = true;
    }
    func(...args);
    await delay(300);
    isLoading = false;
}

const setStackRoot = protectedMultiClick((componentId: string, nextComponentId: string, params?: object) => {
    Navigation.setStackRoot(componentId, {
        component: {
            name: nextComponentId,
            options: {
                animations: pushTransition as any
            },
            passProps: params
        }
    });
});


const push = protectedMultiClick(async (componentId: string, nextComponentId: string, params?: object) => {
    Navigation.push(componentId, {
        component: {
            name: nextComponentId,
            options: {
                animations: pushTransition as any
            },
            passProps: params
        }
    });
});


export { start, setStackRoot, push };
