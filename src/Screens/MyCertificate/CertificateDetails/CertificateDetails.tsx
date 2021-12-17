import React from 'react';

import {Header, Text, View} from '~/Components';

const VaccinationInformationArr = [
  {
    id: 1,
    category: '성명',
    value: '김쿠브',
  },
  {
    id: 2,
    category: '생년월일',
    value: '1980.01.02',
  },
  {
    id: 3,
    category: '검사일자',
    value: '2021.11.15',
  },
  {
    id: 4,
    category: '검사의뢰기관',
    value: '연세하나병원',
  },
  {
    id: 5,
    category: '검사기관',
    value: '연세하나병원',
  },
  {
    id: 6,
    category: '검체종류',
    value: 'NP Swab',
  },
  {
    id: 7,
    category: '검사방법',
    value: 'PCR',
  },
  {
    id: 8,
    category: '검사결과',
    value: '음성',
  },
  {
    id: 9,
    category: '검사결과등록일시',
    value: '2021.11.15. 15.:38PM',
  },
];

type Props = {
  category: string;
  value: string;
};

const CertificateDetailItem = ({category, value}: Props) => {
  return (
    <View style={{justifyContent: 'space-between', marginVertical: 10}} row>
      <Text color="#797979" medium small>
        {category}
      </Text>
      <Text medium small>
        {value}
      </Text>
    </View>
  );
};

export const CertificateDetails = () => {
  return (
    <View fill safe>
      <Header back />
      <View fill>
        <Text style={{marginTop: 45, paddingHorizontal: 20}} medium xLarge>
          <Text color="#0036AF" medium xLarge>
            코로나19
          </Text>
          {'\n예방접종증명서의\n상세 정보입니다'}
        </Text>
        <View style={{marginTop: 40, paddingHorizontal: 20}}>
          {VaccinationInformationArr.map(item => (
            <CertificateDetailItem
              key={item.id}
              category={item.category}
              value={item.value}
            />
          ))}
        </View>
      </View>
    </View>
  );
};
