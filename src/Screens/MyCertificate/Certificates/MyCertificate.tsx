import React from 'react';

import {CertificateItem} from './CertificateItem';
import {CertificateListItemType} from './interface';

import {QuestionMarkIcon} from '~/Assets/Svg';
import {Icon, Text, View} from '~/Components';

const IssuedCertificateItems: CertificateListItemType[] = [
  {
    type: 'Vaccine',
    status: '접종완료',
  },
  {
    type: 'PCR',
    status: '만료일 2021.11.19',
  },
  {type: 'Personal', status: '성인'},
];

const NotIssuedCertificateItems: CertificateListItemType[] = [
  {
    type: 'Confirmation',
  },
  {
    type: 'Recovery',
  },
  {
    type: 'Exception',
  },
  {
    type: 'Global',
  },
];

type Props = {};

export const MyCertificate = (props: Props) => {
  return (
    <View fill safe>
      <View style={{paddingHorizontal: 20}} fill scroll>
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 35,
          }}
          row
        >
          <Text large semiBold>
            증명서
          </Text>
          <View
            style={{
              backgroundColor: '#F3F3F3',
              alignItems: 'center',
              paddingHorizontal: 13,
              paddingVertical: 5,
              borderRadius: 15,
            }}
            row
          >
            <Icon name="refresh" size={18} isStroke />
            <Text color="#B4B4B4" style={{marginLeft: 6}} xxSmall>
              재발급
            </Text>
          </View>
        </View>
        <View
          key={1}
          style={{
            marginTop: 15,
            paddingBottom: 30,
            backgroundColor: '#FAFAFA',
            paddingHorizontal: 14,
            borderRadius: 20,
            shadowOffset: {
              width: 3,
              height: 3,
            },
            shadowColor: '#000000',
            shadowOpacity: 0.2,
          }}
        >
          {IssuedCertificateItems.map(item => (
            <CertificateItem {...props} item={item} />
          ))}
        </View>
        <View>
          <View
            style={{
              marginTop: 30,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
            row
          >
            <Text bold>미발급된 증명서예요</Text>
            <QuestionMarkIcon />
          </View>
          {NotIssuedCertificateItems.map(item => (
            <CertificateItem {...props} item={item} />
          ))}
        </View>
      </View>
    </View>
  );
};
