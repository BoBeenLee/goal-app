package com.nexters.goal;

import android.app.Application;


import io.invertase.firebase.RNFirebasePackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.github.yamill.orientation.OrientationPackage;
import com.babisoft.ReactNativeLocalization.ReactNativeLocalizationPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;

import com.reactnativenavigation.NavigationApplication;
import com.reactnativenavigation.react.NavigationReactNativeHost;
import com.reactnativenavigation.react.ReactGateway;
import com.brentvatne.react.ReactVideoPackage;
import com.airbnb.android.react.lottie.LottiePackage;
import io.invertase.firebase.fabric.crashlytics.RNFirebaseCrashlyticsPackage;

import java.util.Arrays;
import java.util.List;
import com.nozbe.watermelondb.WatermelonDBPackage;

public class MainApplication extends NavigationApplication {

    @Override
    protected ReactGateway createReactGateway() {
        ReactNativeHost host = new NavigationReactNativeHost(this, isDebug(), createAdditionalReactPackages()) {
            @Override
            protected String getJSMainModuleName() {
                return "index";
            }
        };
        return new ReactGateway(this, isDebug(), host);
    }

    @Override
    public boolean isDebug() {
        return BuildConfig.DEBUG;
    }

    protected List<ReactPackage> getPackages() {
        // Add additional packages you require here
        // No need to add RnnPackage and MainReactPackage
        return Arrays.<ReactPackage>asList(
                new VectorIconsPackage(),
                new OrientationPackage(),
                new ReactNativeLocalizationPackage(),
                new WatermelonDBPackage(),
                new RNFirebasePackage(),
                new ReactVideoPackage(),
                new LottiePackage(),
                new RNFirebaseCrashlyticsPackage()
        );
    }

    @Override
    public List<ReactPackage> createAdditionalReactPackages() {
        return getPackages();
    }
}
