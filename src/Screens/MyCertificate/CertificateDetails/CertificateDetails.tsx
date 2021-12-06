import React from 'react';
import {TouchableOpacity} from 'react-native';

import {CertificateDetailItem} from './CertificateDetailItem';
import {CertificateVaccinationItem} from './CertificateVaccinationItem';

import {QRIcon} from '~/Assets/Svg';
import {Header, Text, View} from '~/Components';
// import {MyCertificateStack, MyCertificateStackScreenProps} from '~/Types';

const vaccinationDataArr = ['1차접종', '2차접종', '추가접종'];

const detailDataArr = ['1차 접종내역', '2차 접종내역'];

// type Props =
//   MyCertificateStackScreenProps[MyCertificateStack.CertificateDetails] & {};

export const CertificateDetails = () => {
  return (
    <View fill safe>
      <Header
        right={
          <TouchableOpacity
            activeOpacity={0.8}
            // onPress={() => console.log('QR Icon')}
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
                doseNum={item}
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
          {detailDataArr.map((item, index) => (
            <CertificateDetailItem
              end={index === detailDataArr.length - 1}
              index={index}
              start={index === 0}
              title={item}
            />
          ))}
        </View>
      </View>
    </View>
  );
};
