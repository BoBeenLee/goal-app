import { Navigation } from "react-native-navigation";
import { pushTransition } from "../screens/styles/animation";
import { SCREEN_IDS } from "../screens/constant";

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
        topBar: {
            visible: false
        }
    });

    Navigation.setRoot({
        root: {
            stack: {
                children: [
                    {
                        component: {
                            name: SCREEN_IDS.ProjectScreen
                        }
                    }
                ]
            }
        }
    });
};


const setStackRoot = (componentId: string, nextComponentId: string, params?: object) => {
    Navigation.setStackRoot(componentId, {
        component: {
            name: nextComponentId,
            options: {
                animations: pushTransition as any
            },
            passProps: params
        }
    });
};


const push = (componentId: string, nextComponentId: string, params?: object) => {
    Navigation.push(componentId, {
        component: {
            name: nextComponentId,
            options: {
                animations: pushTransition as any
            },
            passProps: params
        }
    });
};


export { start, setStackRoot, push };
