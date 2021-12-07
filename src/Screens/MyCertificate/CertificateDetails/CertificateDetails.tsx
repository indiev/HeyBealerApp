import React from 'react';
import {TouchableOpacity} from 'react-native';

import {
  MyCertificateStack,
  MyCertificateStackScreenProps,
} from '../../../Types';

import {CertificateDetailItem} from './CertificateDetailItem';
import {CertificateVaccinationItem} from './CertificateVaccinationItem';

import {QRIcon} from '~/Assets/Svg';
import {Header, Text, View} from '~/Components';

const vaccinationDataArr = [
  {
    doseNum: 1,
  },
  {
    doseNum: 2,
  },
  {
    doseNum: 3,
  },
];

type NavigationProps =
  MyCertificateStackScreenProps[MyCertificateStack.CertificateDetails];

export const CertificateDetails = ({navigation}: NavigationProps) => {
  return (
    <View fill safe>
      <Header
        right={
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.push(MyCertificateStack.CertificateQR, {})
            }
          >
            <QRIcon />
          </TouchableOpacity>
        }
        title="코로나19 예방접종증명서"
        back
      />
      <View style={{paddingHorizontal: 20, width: '100%'}} scroll>
        <View style={{marginTop: 16}}>
          <View
            style={{
              borderRadius: 10,
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowRadius: 2,
              shadowOpacity: 0.25,
              backgroundColor: '#FFFFFF',
            }}
          >
            <View
              style={{
                paddingVertical: 8,
                alignItems: 'center',
                backgroundColor: 'rgba(196, 196, 196, 0.1)',
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
              }}
            >
              <Text color="#007AFF" bold small>
                접종완료자
              </Text>
            </View>
            {vaccinationDataArr.map((item, index) => (
              <CertificateVaccinationItem
                doseNum={item.doseNum}
                end={index === vaccinationDataArr.length - 1}
                start={index === 0}
              />
            ))}
          </View>
        </View>
        <Text style={{marginVertical: 40}} semiBold>
          상세정보
        </Text>
        <View
          style={{
            backgroundColor: 'rgba(196, 196, 196, 0.1)',
            borderRadius: 10,
          }}
        >
          {vaccinationDataArr.map((item, index) => (
            <CertificateDetailItem
              end={index === vaccinationDataArr.length - 1}
              item={item}
              start={index === 0}
            />
          ))}
        </View>
      </View>
    </View>
  );
};
