package com.catadana;

import com.facebook.react.ReactActivity;

<<<<<<< HEAD
import com.facebook.react.ReactActivityDelegate;

// React Navigation
import com.facebook.react.ReactRootView;
import com.swmansion.gesturehandler.react.RNGestureHandlerEnabledRootView;

=======
>>>>>>> Restarting the project and alter the UI using NativeBase
public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "catadana";
  }
<<<<<<< HEAD

  // React Navigation
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {
      @Override
      protected ReactRootView createRootView() {
       return new RNGestureHandlerEnabledRootView(MainActivity.this);
      }
    };
  }
=======
>>>>>>> Restarting the project and alter the UI using NativeBase
}
