import { Provider } from "mobx-react/native";
import React, { Component } from "react";

import database from "../model/schema";

const withDatabase = <P extends object>(
    TargetComponent: React.ComponentType<P>
): any => {
    return class WithStore extends Component<P> {
        public render() {
            return (
                <TargetComponent {...this.props} database={database} />
            );
        }
    };
};

export default withDatabase;
