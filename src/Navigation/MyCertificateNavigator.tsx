import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import * as MyCertificateScreens from '~/Screens/MyCertificate';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {Object.entries(MyCertificateScreens).map(([name, component]) => (
        <Stack.Screen
          key={name}
          component={component}
          name={name as keyof typeof MyCertificateScreens}
        />
      ))}
    </Stack.Navigator>
  );
};
