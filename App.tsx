import {FontDisplay, useFonts} from 'expo-font';
import {StatusBar} from 'expo-status-bar';
import React from 'react';

// import {Text, View} from '~/Components';
import {RootProvider} from '~/Context';
import RootNavigator from '~/Navigation/RootNavigator';

export default () => {
  const [loaded] = useFonts({
    NanumGothicCoding: require('./src/Assets/Fonts/NanumGothicCoding-Regular.ttf'),

    'NanumGothicCoding-Bold': {
      uri: require('./src/Assets/Fonts/NanumGothicCoding-Bold.ttf'),
      display: FontDisplay.FALLBACK,
    },
  });

  if (!loaded) {
    return null;
  }

  return (
    <RootProvider>
      <StatusBar style="auto" translucent />
      <RootNavigator />
    </RootProvider>
  );
};
