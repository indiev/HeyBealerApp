import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';

import MyCertificateNavigator from '~/Navigation/MyCertificateNavigator';

const BottomTab = createBottomTabNavigator();

export default () => {
  return (
    <BottomTab.Navigator
      initialRouteName="MyCertificateMain"
      screenOptions={{headerShown: false}}
    >
      <BottomTab.Screen
        component={MyCertificateNavigator}
        name="MyCertificate"
      />
    </BottomTab.Navigator>
  );
};
