import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {Button, Text, View} from '~/Components';
import {useThemeContext} from '~/Context';
import {RootStack, RootStackNavigationProps} from '~/Types';

export default () => {
  const {theme} = useThemeContext();
  const navigation =
    useNavigation<RootStackNavigationProps[RootStack.LawyerTransfer]>();
  return (
    <View fill safe>
      <View fill={0.2} />
      <View style={{paddingHorizontal: 20}} fill>
        <Text bold xLarge>
          법무비용{' '}
          <Text color={theme.colors.primary} bold xLarge>
            1,000만원
          </Text>
          을
        </Text>
        <Text bold xLarge>
          에스크로 지갑에 전송합니다
        </Text>
        <Text style={{marginTop: 20}} bold>
          입금 주소
        </Text>
        <Text xSmall>0x3c4ad65f5b4884397e1f09596c7ac7f8f95b3ff3</Text>
      </View>
      <Button
        containerStyle={{paddingHorizontal: 20}}
        onPress={() => navigation.navigate(RootStack.LawyerTransferLoading)}
      >
        전송하기
      </Button>
    </View>
  );
};
