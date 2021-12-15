import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';

import {Button, Text, View} from '~/Components';
import {RootStack, RootStackScreenProps} from '~/Types';

type NavigationProps = RootStackScreenProps[RootStack.PinScreen];
type Props = {} & NavigationProps;

export const PinScreen = (props: Props) => {
  const {navigation} = props;

  return (
    <View fill safe>
      <View style={{backgroundColor: 'pink'}} fill />
      <View style={{backgroundColor: 'blue', flex: 8}} />
      <View style={{backgroundColor: 'red', flex: 8}} />
    </View>
  );
};
