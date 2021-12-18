import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  NativeSyntheticEvent,
  TextInput as RNTextInput,
  TextInputChangeEventData,
} from 'react-native';

import {Text, TextInput, View} from '~/Components';
import {useThemeContext, useUIContext} from '~/Context';
import {RootStack, RootStackNavigationProps} from '~/Types';

type DrawerContentProps = {onDismiss?: () => void};
const DrawerContent = (props: DrawerContentProps) => {
  const {onDismiss} = props;
  const {theme} = useThemeContext();

  useEffect(() => {
    const timeoutPointer = setTimeout(() => {
      if (onDismiss) {
        onDismiss();
      }
    }, 3000);
    return () => {
      if (timeoutPointer) {
        clearTimeout(timeoutPointer);
      }
    };
  }, [onDismiss]);

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
        경매 매물 정보를
      </Text>
      <Text color="white" bold>
        불러올게요
      </Text>
      <View style={{justifyContent: 'flex-start', marginTop: 10}} row>
        <ActivityIndicator color="white" />
      </View>
    </View>
  );
};

export default () => {
  const {theme} = useThemeContext();
  const [auctionId, setAuctionId] = useState<string>();
  const {createDrawer} = useUIContext();
  const textInputRef = useRef<RNTextInput>(null);
  const navigation =
    useNavigation<RootStackNavigationProps[RootStack.AuctionRegister]>();

  const onChagneTextInput = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    const value = e.nativeEvent.text;
    setAuctionId(value);
    if (value.length === 11) {
      textInputRef.current?.blur();
      createDrawer(
        ({onDismiss: propOnDismiss}) => {
          const onDismiss = () => {
            if (propOnDismiss) {
              propOnDismiss();
            }
            navigation.navigate(RootStack.AuctionDetail);
          };
          return <DrawerContent onDismiss={onDismiss} />;
        },
        {backdropHidden: true},
      );
    }
  };

  return (
    <View fill keyboardAvoiding safe>
      <View fill={0.2} />
      <View style={{paddingHorizontal: 40}} fill>
        <Text extraBold xLarge>
          부동산 사건번호를
        </Text>
        {/* <Text style={{marginTop: 10}} extraBold xLarge>

        </Text> */}
        <Text extraBold xLarge>
          조회해볼까요?
        </Text>
        <View
          style={{
            marginTop: 20,
            borderWidth: 4,
            borderColor: theme.colors.border,
            borderRadius: 10,
            padding: 10,
          }}
        >
          <TextInput
            ref={textInputRef}
            maxLength={11}
            placeholder="2021타경12345"
            style={{
              fontSize: 40,
              fontWeight: '800',
              color: theme.colors.text,
              fontFamily: 'RobotoMonoBlack',
            }}
            value={auctionId}
            onChange={onChagneTextInput}
          />
        </View>
      </View>
    </View>
  );
};
