import React from 'react';
import {Image} from 'react-native';

import {Text, View} from '~/Components';
import {useThemeContext} from '~/Context';

export default () => {
  const {theme} = useThemeContext();
  return (
    <View fill safe>
      <View style={{paddingHorizontal: 20, paddingTop: 20}}>
        <Text bold large>
          매칭된 법무사
        </Text>
        <View
          style={{
            marginTop: 20,
            alignItems: 'center',
            borderRadius: 5,
            borderWidth: 1,
            borderColor: 'lightgray',
            padding: 15,
          }}
          row
        >
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwWHRlQHJaBU_K8Zb5lo6UABTkPGMZgWB39GPdcFnKauqyeCWPW7aVfk-SVgodR61U7PE&usqp=CAU',
            }}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              // backgroundColor: 'red',
            }}
          />
          <View style={{marginLeft: 15}} fill>
            <Text color="gray" xSmall>
              법무법인 지평
            </Text>
            <Text bold small>
              박유철 변호사
            </Text>
          </View>
          <Text color={theme.colors.primary} bold>
            등기신청 중
          </Text>
        </View>

        <View
          style={{
            marginTop: 15,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          row
        >
          <Text color="gray" small>
            법무비용
          </Text>
          <View style={{alignItems: 'flex-end'}}>
            <Text bold small>
              10,000,000원
            </Text>
            <Text xSmall>(일천만원)</Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 15,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          row
        >
          <View>
            <Text color="gray" small>
              예치된 금액
            </Text>
            <Text color="gray" small>
              (비용의 10%)
            </Text>
          </View>
          <View style={{alignItems: 'flex-end'}}>
            <Text bold small>
              10,00,000원
            </Text>
            <Text xSmall>(일백만원)</Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 15,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
          row
        >
          <Text color="gray" small>
            예상 등기일
          </Text>
          <Text small>2022.01.17</Text>
        </View>
      </View>
    </View>
  );
};
