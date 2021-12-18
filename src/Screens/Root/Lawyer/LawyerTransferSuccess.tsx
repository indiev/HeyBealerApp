import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {RootStack, RootStackNavigationProps} from '../../../Types';

import SuccessAnimationLottie from '~/Assets/Lotties/SuccessAnimationLottie';
import {Button, Text, View} from '~/Components';

export default () => {
  const navigation =
    useNavigation<RootStackNavigationProps[RootStack.LawyerTransferSuccess]>();
  return (
    <View style={{justifyContent: 'center'}} fill safe>
      <View style={{position: 'absolute', top: '15%', left: 20}}>
        <Text bold xLarge>
          송금이 완료되었어요
        </Text>
      </View>
      <View
        style={{justifyContent: 'center', alignItems: 'center', marginTop: 30}}
        fill
      >
        <View style={{width: 150}}>
          <SuccessAnimationLottie />
        </View>
      </View>
      <Button
        containerStyle={{paddingHorizontal: 20}}
        onPress={() => navigation.navigate(RootStack.HomeMain)}
      >
        확인
      </Button>
    </View>
  );
};
