import _ from "lodash";
import { Navigation } from "react-native-navigation";

import AppScreen from "./AppScreen";
import TodoScreen from "./TodoScreen";
import SwapiScreen from "./SwapiScreen";
import ErrorScreen from "./ErrorScreen";
import TutorialScreen from "./TutorialScreen";
import ProjectRegisterScreen from "./register/ProjectRegisterScreen";
import TemplateRegisterScreen from "./register/TemplateRegisterScreen";
import withStore from "../hoc/withStore";
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
    id: SCREEN_IDS.TodoScreen,
    Component: TodoScreen
  },
  {
    id: SCREEN_IDS.SwapiScreen,
    Component: SwapiScreen
  },
  {
    id: SCREEN_IDS.ErrorScreen,
    Component: ErrorScreen
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
  }
]

function registerScreens(store) {
  const withStoreAndOverlay = _.flow([
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
