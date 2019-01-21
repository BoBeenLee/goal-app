import _ from "lodash";
import { Navigation } from "react-native-navigation";

import AppScreen from "./AppScreen";
import TutorialScreen from "./TutorialScreen";
import ProjectRegisterScreen from "./register/ProjectRegisterScreen";
import TemplateRegisterScreen from "./register/TemplateRegisterScreen";
import MotivationRegisterScreen from "./register/MotivationRegisterScreen";
import ProjectScreen from "./ProjectScreen";
import withStore from "../hoc/withStore";
import withDatabase from "../hoc/withDatabase";
import { SCREEN_IDS } from "./constant";
import { withOverlay } from "../../ReactotronConfig";

interface IRegisterScreenProps {
  id: string;
  Component: any;
}


const REGISTER_SCREENS: IRegisterScreenProps[] = [
  {
    id: SCREEN_IDS.AppScreen,
    Component: AppScreen
  },
  {
    id: SCREEN_IDS.ProjectRegisterScreen,
    Component: ProjectRegisterScreen
  },
  {
    id: SCREEN_IDS.TemplateRegisterScreen,
    Component: TemplateRegisterScreen
  },
  {
    id: SCREEN_IDS.TutorialScreen,
    Component: TutorialScreen
  },
  {
    id: SCREEN_IDS.MotivationRegisterScreen,
    Component: MotivationRegisterScreen
  },
  {
    id: SCREEN_IDS.ProjectScreen,
    Component: ProjectScreen
  }
]

function registerScreens(store) {
  const withStoreAndOverlay = _.flow([
    withDatabase,
    _.partial(withStore, _, store),
    withOverlay
  ]);

  _.forEach(REGISTER_SCREENS, screenData => {
    Navigation.registerComponent(screenData.id, () =>
      withStoreAndOverlay(screenData.Component)
    );
  })
}

export { registerScreens };
