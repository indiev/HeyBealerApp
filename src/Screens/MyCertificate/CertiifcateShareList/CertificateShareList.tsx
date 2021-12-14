import React from 'react';
import {Switch} from 'react-native';

import {CertificateShareItem} from './CertificateShareItem';

import {Header, Text, View} from '~/Components';

const necessaryItems = [
  {
    id: 1,
    category: '백신',
  },
  {
    id: 2,
    category: '백신제조사',
  },
  {
    id: 3,
    category: '로트번호',
  },
  {
    id: 4,
    category: '접종차수',
  },
  {
    id: 5,
    category: '접종일자',
  },
  {
    id: 6,
    category: '접종국가',
  },
  {
    id: 7,
    category: '접종기관',
  },
];

export const CertificateShareList = () => {
  const [shareName, setShareName] = React.useState<boolean>(false);
  const [shareDob, setShareDob] = React.useState<boolean>(false);

  const additionalItems = [
    {
      id: 1,
      category: '성명',
      switchState: shareName,
      switchSetState: setShareName,
    },
    {
      id: 2,
      category: '생년월일',
      switchState: shareDob,
      switchSetState: setShareDob,
    },
  ];

  return (
    <View>
      <Header title="정보 제공 설정" back />
      <View style={{paddingHorizontal: 20, paddingTop: 35}}>
        <Text medium>필수 정보</Text>
        {necessaryItems.map(item => (
          <CertificateShareItem key={item.id} category={item.category} />
        ))}
      </View>
      <View style={{paddingHorizontal: 20, paddingTop: 30}}>
        <Text medium>추가 정보</Text>
        {additionalItems.map(item => (
          <CertificateShareItem
            key={item.id}
            category={item.category}
            switchSetState={item.switchSetState}
            switchState={item.switchState}
          />
        ))}
      </View>
    </View>
  );
};
