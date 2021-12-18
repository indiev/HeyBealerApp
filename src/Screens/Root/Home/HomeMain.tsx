import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity} from 'react-native';

import HeyBealer from '~/Assets/Svg/HeyBealer';
import {Text, View} from '~/Components';
import {useThemeContext} from '~/Context';
import {RootStack, RootStackNavigationProps} from '~/Types';

export default () => {
  const {theme} = useThemeContext();
  const navigation =
    useNavigation<RootStackNavigationProps[RootStack.HomeMain]>();

  return (
    <View fill safe>
      <View
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 20,
        }}
        row
      >
        <HeyBealer size={0.125} />
        <View
          style={{
            borderWidth: 2,
            borderColor: 'var(--gray-dark)',
            borderRadius: 5,
            paddingHorizontal: 5,
          }}
        >
          <Text
            style={{
              color: theme.colors.text,
              fontFamily: 'RobotoMonoBlack',
            }}
            black
          >
            2021타경12345
          </Text>
        </View>
      </View>
      <View style={{padding: 30}} fill>
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() => navigation.navigate(RootStack.LawyerMain)}
        >
          <View
            style={{
              backgroundColor: 'lightgray',
              borderRadius: 20,
              padding: 20,
              justifyContent: 'space-between',
            }}
            fill
          >
            <Text black xxLarge>
              법무서비스
            </Text>
            <View>
              <Text black xLarge>
                간편하고 안전하게
              </Text>
              <Text black xLarge>
                법무사와 만나보세요
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={{height: 30}} />
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() => navigation.navigate(RootStack.InvestToken)}
        >
          <View
            style={{
              backgroundColor: '#007AFF',
              borderRadius: 20,
              padding: 20,
              justifyContent: 'space-between',
            }}
            fill
          >
            <Text color="white" black xxLarge>
              P2P 대출
            </Text>
            <View>
              <Text color="white" black xLarge>
                신용심사 없이 빠르게
              </Text>
              <Text color="white" black xLarge>
                대출해보세요
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
