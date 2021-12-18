import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';

import {RootStack, RootStackNavigationProps} from '../../../Types';

import TransferAnimationLottie from '~/Assets/Lotties/TransferAnimationLottie';
import {Text, View} from '~/Components';

export default () => {
  const navigation =
    useNavigation<RootStackNavigationProps[RootStack.LawyerTransferLoading]>();

  useEffect(() => {
    const timeoutPointer = setTimeout(() => {
      navigation.navigate(RootStack.LawyerTransferSuccess);
    }, 3000);
    return () => {
      if (timeoutPointer) {
        clearTimeout(timeoutPointer);
      }
    };
  }, [navigation]);

  return (
    <View fill safe>
      <View style={{justifyContent: 'center', alignItems: 'center'}} fill>
        <View style={{position: 'absolute', top: '15%', left: 20}}>
          <Text bold xLarge>
            송금하는 중이에요
          </Text>
        </View>
        <TransferAnimationLottie />
      </View>
    </View>
  );
};
