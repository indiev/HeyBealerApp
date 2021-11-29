import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';

import {Button, Text, View} from '~/Components';
import {RootStackParamList} from '~/Types';

type NavigationProps = StackScreenProps<RootStackParamList, 'OnboardingFirst'>;
type Props = {} & NavigationProps;

export const OnboardingFirst = (props: Props) => {
  const {navigation} = props;

  return (
    <View fill safe>
      <View style={{padding: 20}} fill>
        <Text>Onboarding First</Text>
      </View>
      <View style={{padding: 20}}>
        <Button onPress={() => navigation.navigate('Main')}>
          <Text style={{color: 'white'}}>Button</Text>
        </Button>
      </View>
    </View>
  );
};
