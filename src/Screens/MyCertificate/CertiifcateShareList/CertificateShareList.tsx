import React from 'react';
import {Switch} from 'react-native';

import {Header, Text, View} from '~/Components';

export const CertificateShareList = () => {
  const [shareName, setShareName] = React.useState<boolean>(false);
  const [shareDob, setShareDob] = React.useState<boolean>(false);

  return (
    <View>
      <Header title="정보 제공 설정" back />
      <View style={{paddingHorizontal: 20, paddingTop: 35}}>
        <Text medium>필수 정보</Text>
        <View style={{justifyContent: 'space-between', marginTop: 20}} row>
          <Text small>백신</Text>
          <Text color="#007AFF" small>
            필수
          </Text>
        </View>
        <View style={{justifyContent: 'space-between', marginTop: 20}} row>
          <Text small>백신제조사</Text>
          <Text color="#007AFF" small>
            필수
          </Text>
        </View>
        <View style={{justifyContent: 'space-between', marginTop: 20}} row>
          <Text small>로트번호</Text>
          <Text color="#007AFF" small>
            필수
          </Text>
        </View>
        <View style={{justifyContent: 'space-between', marginTop: 20}} row>
          <Text small>접종차수</Text>
          <Text color="#007AFF" small>
            필수
          </Text>
        </View>
        <View style={{justifyContent: 'space-between', marginTop: 20}} row>
          <Text small>접종일자</Text>
          <Text color="#007AFF" small>
            필수
          </Text>
        </View>
        <View style={{justifyContent: 'space-between', marginTop: 20}} row>
          <Text small>접종국가</Text>
          <Text color="#007AFF" small>
            필수
          </Text>
        </View>
        <View style={{justifyContent: 'space-between', marginTop: 20}} row>
          <Text small>접종기관</Text>
          <Text color="#007AFF" small>
            필수
          </Text>
        </View>
      </View>
      <View style={{paddingHorizontal: 20, paddingTop: 30}}>
        <Text medium>추가 정보</Text>
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 20,
          }}
          row
        >
          <Text small>성명</Text>
          <Switch
            ios_backgroundColor="#D5D5D5"
            trackColor={{
              false: '#D5D5D5',
              true: '#007AFF',
            }}
            value={shareName}
            onChange={() => setShareName(prev => !prev)}
          />
        </View>
        <View
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 20,
          }}
          row
        >
          <Text small>생년월일</Text>
          <Switch
            ios_backgroundColor="#D5D5D5"
            trackColor={{
              false: '#D5D5D5',
              true: '#007AFF',
            }}
            value={shareDob}
            onChange={() => setShareDob(prev => !prev)}
          />
        </View>
      </View>
    </View>
  );
};
