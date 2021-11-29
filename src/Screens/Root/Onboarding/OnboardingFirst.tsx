import React from 'react';

import {Button, Text, View} from '~/Components';

export const OnboardingFirst = () => {
  return (
    <View fill safe>
      <View style={{padding: 20}} fill>
        <Text>Onboarding First</Text>
      </View>
      <View style={{padding: 20}}>
        <Button>
          <Text style={{color: 'white'}}>Button</Text>
        </Button>
      </View>
    </View>
  );
};
