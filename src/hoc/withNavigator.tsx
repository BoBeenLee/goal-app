import hoistNonReactStatic from "hoist-non-react-statics";
import React, { Component } from "react";
import firebase from "react-native-firebase";
import { Navigation } from "react-native-navigation";

import { setCurrentComponent } from "../utils/navigator";

interface IProps {
  componentId: string;
}

const withNavigator = <P extends object>(
  TargetComponent: React.ComponentType<P>,
  componentName: string
): any => {
  const WithNavigator = class extends Component<P & IProps> {
    constructor(props: P & IProps) {
      super(props);
      Navigation.events().bindComponent(this);
    }

    public componentDidAppear() {
      const { componentId } = this.props;
      setCurrentComponent(componentId, componentName);
      firebase.crashlytics().setStringValue("screenName", componentName);
    }

    public render() {
      return <TargetComponent {...this.props} />;
    }
  };
  hoistNonReactStatic(WithNavigator, TargetComponent as any);
  return WithNavigator;
};

export default withNavigator;
