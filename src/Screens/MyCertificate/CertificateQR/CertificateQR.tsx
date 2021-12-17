import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Dimensions, TouchableOpacity} from 'react-native';
import QR from 'react-native-qrcode-svg';

import {Header, Icon, Text, View} from '~/Components';
import Tag, {TagTypes} from '~/Components/Tag/Tag';
import {MyCertificateStack, MyCertificateStackNavigationProps} from '~/Types';

const {width: WIDTH} = Dimensions.get('window');

export const CertificateQR = () => {
  const navigation =
    useNavigation<
      MyCertificateStackNavigationProps[MyCertificateStack.CertificateQR]
    >();
  const tagStyle = {
    marginHorizontal: 3,
    marginBottom: 5,
    paddingHorizontal: 9,
  };

  return (
    <View fill>
      <Header
        right={
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate(MyCertificateStack.CertificateDetails, {})
            }
          >
            <Text color="#007AFF" medium xSmall>
              상세보기
            </Text>
          </TouchableOpacity>
        }
        title="증명서 QR코드"
        back
      />
      <View style={{alignItems: 'center'}} fill>
        <Text style={{marginTop: '20%'}} xxSmall>
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
            padding: 30,
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
          <QR size={WIDTH * 0.4} value="Hello My name is Peter Son." />
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
            <Tag style={tagStyle} text="백신" type={TagTypes.Info} />
            <Tag style={tagStyle} text="백신제조사" type={TagTypes.Info} />
            <Tag style={tagStyle} text="로트번호" type={TagTypes.Info} />
          </View>
          <View style={{justifyContent: 'center'}} row>
            <Tag style={tagStyle} text="접종차수" type={TagTypes.Info} />
            <Tag style={tagStyle} text="접종일자" type={TagTypes.Info} />
            <Tag style={tagStyle} text="접종국가" type={TagTypes.Info} />
          </View>
          <View style={{justifyContent: 'center'}} row>
            <Tag style={tagStyle} text="접종기관" type={TagTypes.Info} />
          </View>
        </View>
        <Text style={{marginTop: 20}} xSmall>
          추가 제출 정보
        </Text>
        <View style={{flex: 1, justifyContent: 'flex-end', marginBottom: 10}}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{alignItems: 'center'}}
            onPress={() =>
              navigation.push(MyCertificateStack.CertificateShareList, {})
            }
          >
            <Icon name="list" />
            <Text style={{marginTop: 4}} xxSmall>
              정보 제공 설정
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
