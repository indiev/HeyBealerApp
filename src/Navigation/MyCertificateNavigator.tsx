import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {MyCertificateParamList} from '../Types';

import * as MyCertificateScreens from '~/Screens/MyCertificate';

const Stack = createStackNavigator<MyCertificateParamList>();

export default () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {Object.entries(MyCertificateScreens).map(([name, component]) => {
        return (
          <Stack.Screen
            key={name}
            component={component}
            name={name as keyof typeof MyCertificateScreens}
          />
        );
      })}
    </Stack.Navigator>
  );
};
