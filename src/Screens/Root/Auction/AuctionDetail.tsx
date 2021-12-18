import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Image, TouchableOpacity} from 'react-native';

import {RootStack, RootStackNavigationProps} from '../../../Types';

import {ActivityIndicator, Text, TextInput, View} from '~/Components';
import {useThemeContext, useUIContext} from '~/Context';

type ItemProps = {label: string; value: string};
const Item = (props: ItemProps) => {
  const {label, value} = props;
  return (
    <View style={{marginTop: 10}} row>
      <Text color="gray" style={{width: 100}} small>
        {label}
      </Text>
      <Text xSmall>{value}</Text>
    </View>
  );
};

type DrawerContentProps = {onDismiss?: () => void};
const DrawerContent = (props: DrawerContentProps) => {
  const {onDismiss} = props;
  const {theme} = useThemeContext();
  const [loading, setLoading] = useState(false);
  const fetchName = () => {
    setLoading(true);
    setTimeout(() => {
      if (onDismiss) {
        onDismiss();
      }
    }, 3000);
  };

  // useEffect(() => {
  //   const timeoutPointer = setTimeout(() => {
  //     if (onDismiss) {
  //       onDismiss();
  //     }
  //   }, 3000);
  //   return () => {
  //     if (timeoutPointer) {
  //       clearTimeout(timeoutPointer);
  //     }
  //   };
  // }, [onDismiss]);

  return (
    <View
      style={{
        backgroundColor: theme.colors.primary,
        borderRadius: 10,
        padding: 20,
        margin: 20,
      }}
    >
      <Text color="white" bold>
        소유자명을
      </Text>
      <Text color="white" bold>
        입력해주세요
      </Text>
      {!loading ? (
        <View
          style={{
            paddingHorizontal: 20,
            backgroundColor: 'white',
            borderRadius: 5,
            marginTop: 10,
            paddingVertical: 10,
            alignItems: 'center',
          }}
          row
        >
          <TextInput
            style={{
              flex: 1,
              fontSize: 20,
              fontFamily: 'RobotoMonoBlack',
              letterSpacing: 1,
            }}
          />
          <TouchableOpacity onPress={fetchName}>
            <Text bold small>
              조회하기
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{justifyContent: 'flex-start', marginTop: 10}} row>
          <ActivityIndicator color="white" />
        </View>
      )}
      <View>
        <Text color="white" style={{textAlign: 'right', marginTop: 20}} xSmall>
          경매영수증에 기입된 이름을 입력해주세요
        </Text>
      </View>
    </View>
  );
};

export default () => {
  const {theme} = useThemeContext();
  const {createDrawer} = useUIContext();
  const navigation =
    useNavigation<RootStackNavigationProps[RootStack.AuctionDetail]>();

  useEffect(() => {
    createDrawer(
      ({onDismiss: propOnDismiss}) => {
        const onDismiss = () => {
          if (propOnDismiss) {
            propOnDismiss();
          }
          navigation.navigate(RootStack.HomeMain);
        };
        return <DrawerContent onDismiss={onDismiss} />;
      },
      {backdropHidden: true},
    );
  }, [createDrawer, navigation]);

  return (
    <View fill safe>
      <View style={{padding: 20}} fill>
        <Text color="gray" small>
          사건번호
        </Text>
        <View row>
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
        <View style={{marginTop: 20}} fill>
          <View>
            <Image
              source={{
                uri: 'https://t1.daumcdn.net/cfile/tistory/999AB4425BD46B1132',
              }}
              style={{width: '100%', aspectRatio: 1.5}}
            />
          </View>
          <Item label="건물명" value="드림플러스" />
          <Item label="주소" value="서울시 강남구 311" />
          <Item label="경매일" value="2021.12.18 (일) 11:00" />
          <Item label="낙찰가" value="300,000,000원 (30억원)" />
        </View>
      </View>
    </View>
  );
};
