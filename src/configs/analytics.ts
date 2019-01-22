import firebase from "react-native-firebase";

import { isDevelopment } from "./environment";

function initAnalytics() {
    if (isDevelopment()) {
        firebase.analytics().setAnalyticsCollectionEnabled(false);
    }
}

export { initAnalytics };
