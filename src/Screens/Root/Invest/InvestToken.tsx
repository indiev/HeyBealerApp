import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {useThemeContext} from '../../../Context';
import {RootStack, RootStackNavigationProps} from '../../../Types';

import {Button, Text, View} from '~/Components';

export default () => {
  const {theme} = useThemeContext();
  const navigation =
    useNavigation<RootStackNavigationProps[RootStack.InvestToken]>();

  return (
    <View fill safe>
      <View fill={0.1} />
      <View style={{paddingHorizontal: 20}} fill>
        <Text bold xLarge>
          경매 받은 매물을 담보로
        </Text>
        <Text bold xLarge>
          토큰을 발행하실건가요?
        </Text>
        <View style={{paddingTop: 30}} fill>
          <Text bold large>
            <Text bold xLarge>
              300,000
            </Text>
            만원 매물을 담보로
          </Text>
          <Text bold large>
            <Text color={theme.colors.primary} bold xLarge>
              1,000
            </Text>
            원 가치의 스테이블 토큰
          </Text>
          <Text bold large>
            <Text color={theme.colors.primary} bold xLarge>
              3,000
            </Text>
            만개를 토큰을 발행해요
          </Text>
        </View>
        <View>
          <Text>경매가를 기준으로 담보물로 토큰을</Text>
          <Text>발행하시는 것에 동의하시나요?</Text>
          <View style={{marginTop: 20}} row>
            <Button
              containerStyle={{flex: 0.6}}
              type="secondary"
              onPress={() => navigation.goBack()}
            >
              다음에 할게요
            </Button>
            <Button
              containerStyle={{flex: 1}}
              onPress={() => navigation.navigate(RootStack.InvestMain)}
            >
              네, 동의해요
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
};
