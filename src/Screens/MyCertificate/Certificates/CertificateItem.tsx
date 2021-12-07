import {StackNavigationProp} from '@react-navigation/stack';
import {LinearGradient} from 'expo-linear-gradient';
import React from 'react';
import {TouchableOpacity} from 'react-native';

import {
  CertificateListItemType,
  VerifiableCredentialInfoObj,
  VerifiableCredentialTypes,
} from './interface';

import {RightArrowIcon} from '~/Assets/Svg';
import {Text, View} from '~/Components';
import {MyCertificateParamList, MyCertificateStack} from '~/Types';

type Props = {
  item: CertificateListItemType;
  onPress?: React.Dispatch<
    React.SetStateAction<VerifiableCredentialTypes | undefined>
  >;
  navigation: StackNavigationProp<MyCertificateParamList, 'MyCertificate'>;
};

export const CertificateItem = ({
  item,
  onPress: setNotIssuedModalVisible,
  navigation,
}: Props) => {
  const {type, status} = item;

  return (
    <TouchableOpacity
      key={type}
      activeOpacity={0.8}
      onPress={() => {
        if (!status && setNotIssuedModalVisible) setNotIssuedModalVisible(type);
        else
          navigation.push(MyCertificateStack.CertificateCard, {
            type,
          });
      }}
    >
      <View
        style={{
          marginTop: 40,
          alignItems: 'center',
          opacity: status ? undefined : 0.3,
        }}
        row
      >
        <View style={{width: 70, paddingHorizontal: 18}}>
          <View
            style={{
              backgroundColor:
                VerifiableCredentialInfoObj[type].color || '#FFFFFF',
              shadowOffset: {
                width: 1,
                height: 2,
              },
              shadowRadius: 3,
              shadowOpacity: 0.25,
              borderTopLeftRadius: 5,
              borderTopRightRadius: 5,
            }}
            fill
          >
            <LinearGradient
              colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.6)']}
              end={{x: 0, y: 1}}
              start={{x: 0, y: 0}}
              style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                zIndex: -2,
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              shadowOffset: {
                width: 3,
                height: 3,
              },
              shadowColor: '#000000',
              shadowOpacity: 0.2,
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
              flex: 0.3,
            }}
          />
        </View>
        <View style={{marginLeft: 10}} fill>
          <Text color="#58595B" bold>
            {VerifiableCredentialInfoObj[type].name}
          </Text>
          <Text style={{color: '#58595B', lineHeight: 22.4}} medium xSmall>
            {status || '-'}
          </Text>
        </View>
        <RightArrowIcon />
      </View>
    </TouchableOpacity>
  );
};
