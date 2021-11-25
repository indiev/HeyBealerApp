import {StatusBar} from 'expo-status-bar';
import React from 'react';

// import {Text, View} from '~/Components';
import {RootProvider} from '~/Context';
import RootNavigator from '~/Navigation/RootNavigator';

export default () => {
  return (
    <RootProvider>
      <StatusBar style="auto" translucent />
      <RootNavigator />
    </RootProvider>
  );
};
