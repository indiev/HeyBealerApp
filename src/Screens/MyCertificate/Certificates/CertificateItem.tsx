import {LinearGradient} from 'expo-linear-gradient';
import React from 'react';
import {TouchableOpacity} from 'react-native';

import {
  CertificateItemType,
  CertificateListItemType,
  VerifiableCredentialTypes,
} from './interface';

import {RightArrowIcon} from '~/Assets/Svg';
import {Text, View} from '~/Components';
import {MyCertificateStack, MyCertificateStackScreenProps} from '~/Types';

const VerifiableCredentialInfoObj: {
  [key in VerifiableCredentialTypes]: CertificateItemType;
} = {
  Vaccine: {
    name: '코로나19 예방접종증명서',
    color: '#0036AF',
  },
  Confirmation: {
    name: '코로나19 해외접종확인서',
    color: '#007CAE',
  },
  PCR: {
    name: '코로나19 PCR 음성확인서',
    color: '#2F8B58',
  },
  Recovery: {
    name: '코로나19 완치증명서',
    color: '#8BCDFB',
  },
  Exception: {
    name: '접종증명·음성확인제 예외 확인서',
    color: '#007CAE',
  },
  Global: {
    name: '국제증명서',
    color: '#0036AF',
    icon: '',
  },
  Personal: {
    name: '본인인증 증명서',
    color: '#B4B4B4',
  },
};

type NavigationProps =
  MyCertificateStackScreenProps[MyCertificateStack.MyCertificate];

type Props = {
  item: CertificateListItemType;
} & NavigationProps;

export const CertificateItem = (props: Props) => {
  const {
    item: {type, status, onPress},
    navigation,
  } = props;
  return (
    <TouchableOpacity
      key={type}
      activeOpacity={0.8}
      onPress={() => {
        if (onPress) navigation.push(onPress);
        else navigation.push(MyCertificateStack.CertificateCard);
      }}
    >
      <View
        style={{
          marginTop: 30,
          alignItems: 'center',
          opacity: status ? undefined : 0.3,
        }}
        row
      >
        <View style={{width: 70, paddingHorizontal: 18}}>
          <View
            style={{
              backgroundColor:
                (status && VerifiableCredentialInfoObj[type].color) ||
                '#FFFFFF',
              shadowOffset: {
                width: 3,
                height: 3,
              },
              shadowColor: '#000000',
              shadowOpacity: 0.2,
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
            {status || '미발급'}
          </Text>
        </View>
        {status && <RightArrowIcon />}
      </View>
    </TouchableOpacity>
  );
};
