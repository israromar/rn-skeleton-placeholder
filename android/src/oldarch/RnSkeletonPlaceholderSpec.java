package com.rnskeletonplaceholder;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.Promise;

abstract class RnSkeletonPlaceholderSpec extends ReactContextBaseJavaModule {
  RnSkeletonPlaceholderSpec(ReactApplicationContext context) {
    super(context);
  }

  public abstract void multiply(double a, double b, Promise promise);
}
