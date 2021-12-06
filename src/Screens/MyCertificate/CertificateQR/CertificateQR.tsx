import React from 'react';
import {TouchableOpacity} from 'react-native';
import QR from 'react-native-qrcode-svg';

import {QuestionMarkIcon} from '~/Assets/Svg';
import {Header, Icon, Text, View} from '~/Components';

type TagProps = {
  name: string;
};

const Tag = (props: TagProps) => {
  const {name} = props;

  return (
    <View
      style={{
        paddingVertical: 2,
        paddingHorizontal: 9,
        backgroundColor: '#F7F7F7',
        borderRadius: 2,
        borderWidth: 0.7,
        borderColor: '#D5D5D5',
        marginHorizontal: 2.5,
        marginBottom: 5,
      }}
    >
      <Text color="#797979" medium xxSmall>
        {name}
      </Text>
    </View>
  );
};

export const CertificateQR = () => {
  return (
    <View fill>
      <Header
        right={
          <TouchableOpacity
            activeOpacity={0.8}
            // onPress={() => console.log('Question Mark Icon')}
          >
            <QuestionMarkIcon />
          </TouchableOpacity>
        }
        title="증명서 QR코드"
        back
      />
      <View style={{alignItems: 'center'}} fill>
        <Text style={{marginTop: 76, textAlign: 'center'}} xxSmall>
          남은 시간
          <Text color="#FF0000" xxSmall>
            {' '}
            15초
          </Text>
        </Text>
        <View
          style={{
            borderWidth: 10,
            borderColor: '#007CAE',
            borderRadius: 30,
            marginTop: 14,
            padding: 28,
            backgroundColor: '#FFFFFF',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowRadius: 4,
            shadowColor: 'rgba(0, 0, 0, 0.25)',
            shadowOpacity: 1,
          }}
        >
          <QR size={150} value="Hello My name is Peter Son." />
        </View>
        <Text style={{marginTop: 16}} xSmall>
          필수 제출 정보
        </Text>
        <View
          style={{
            justifyContent: 'center',
            marginTop: 10,
          }}
        >
          <View style={{justifyContent: 'center'}} row>
            <Tag name="백신" />
            <Tag name="백신제조사" />
            <Tag name="로트번호" />
          </View>
          <View style={{justifyContent: 'center'}} row>
            <Tag name="접종차수" />
            <Tag name="접종일자" />
            <Tag name="접종국가" />
          </View>
          <View style={{justifyContent: 'center'}} row>
            <Tag name="접종기관" />
          </View>
        </View>
        <Text style={{marginTop: 20}} xSmall>
          추가 제출 정보
        </Text>
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            justifyContent: 'flex-end',
            alignItems: 'center',
            flex: 1,
            marginBottom: 10,
          }}
          // onPress={() => console.log('List Icon')}
        >
          <Icon name="list" />
          <Text style={{marginTop: 4}} xxSmall>
            정보 제공 설정
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
