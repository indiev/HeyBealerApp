import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, TouchableOpacity} from 'react-native';

import {RootStack, RootStackNavigationProps} from '../../../Types';

import {Button, Icon, Text, View} from '~/Components';
import {useThemeContext} from '~/Context';

export default () => {
  const {theme} = useThemeContext();
  const [checked, setChecked] = useState(false);
  const navigation =
    useNavigation<RootStackNavigationProps[RootStack.LawyerGuide]>();

  return (
    <View fill safe>
      <View fill={0.1} />
      <View style={{padding: 20}} fill>
        <Text bold xLarge>
          간편하고 안전한
        </Text>
        <Text bold xLarge>
          <Text color={theme.colors.primary} bold xLarge>
            법무서비스
          </Text>
          을 위해
        </Text>
        <Text bold xLarge>
          내용에 동의해주세요
        </Text>
        <View style={{marginTop: 40, alignItems: 'center'}} row>
          <View style={{paddingRight: 15}}>
            <Icon name="shieldV" />
          </View>
          <View>
            <Text bold>에스크로 서비스</Text>
            <Text small>고객의 법무비용과 법무사의 계약금을 헤이빌러</Text>
            <Text small>
              <Text color={theme.colors.primary} bold small>
                에스크로 컨트랙트 지갑
              </Text>
              에서 안전하게 보관합니다
            </Text>
          </View>
        </View>
        <View style={{marginTop: 20, alignItems: 'center'}} row>
          <View style={{paddingRight: 15}}>
            <Icon name="contract-paper" />
          </View>
          <View style={{paddingHorizontal: 10}}>
            <Text bold>계약서 보관</Text>
            <Text small>
              계약서에 서명한 정보는{' '}
              <Text color={theme.colors.primary} bold small>
                블록체인
              </Text>
              에 보관되어
            </Text>
            <Text small>검증하는데 사용됩니다</Text>
          </View>
        </View>
      </View>
      <View style={{paddingVertical: 25, paddingHorizontal: 20}}>
        <View style={{marginTop: 30, justifyContent: 'space-between'}} row>
          <TouchableOpacity onPress={() => setChecked(v => !v)}>
            <View style={{alignItems: 'center'}} row>
              <Icon
                color={checked ? '#358CFE' : '#D3D4D5'}
                name="check"
                style={{marginRight: 10}}
                isStroke
              />
              <Text>
                <Text color="#358CFE">(필수)</Text> 법무서비스 계약서
              </Text>
            </View>
          </TouchableOpacity>
          <Text color="gray" bold>
            보기
          </Text>
        </View>
      </View>
      <Button
        containerStyle={{paddingHorizontal: 20}}
        disabled={!checked}
        onPress={() => navigation.navigate(RootStack.LawyerTransfer)}
      >
        계약하기
      </Button>
    </View>
  );
};
