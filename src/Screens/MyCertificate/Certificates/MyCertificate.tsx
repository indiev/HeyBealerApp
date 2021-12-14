import React from 'react';
import {ReactNativeModal as Modal} from 'react-native-modal';

import {CertificateItem} from './CertificateItem';
import {
  CertificateListItemType,
  VerifiableCredentialInfoObj,
  VerifiableCredentialTypes,
} from './interface';

import {Button, Icon, Text, View} from '~/Components';
import {MyCertificateStack, MyCertificateStackScreenProps} from '~/Types';

const IssuedCertificateItems: CertificateListItemType[] = [
  {
    type: 'Vaccine',
    status: '접종완료',
  },
  {type: 'Personal', status: '성인', onPress: 'CertificateQR'},
];

const NotIssuedCertificateItems: CertificateListItemType[] = [
  {
    type: 'PCR',
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

type NavigationProps =
  MyCertificateStackScreenProps[MyCertificateStack.MyCertificate];

export const MyCertificate = ({navigation}: NavigationProps) => {
  const [notIssuedModalVisible, setNotIssuedModalVisible] = React.useState<
    VerifiableCredentialTypes | undefined
  >(undefined);

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
            나의 증명서
          </Text>
          <View
            style={{
              backgroundColor: '#F3F3F3',
              alignItems: 'center',
              paddingHorizontal: 10,
              paddingVertical: 5,
              borderRadius: 15,
            }}
            row
          >
            <Icon name="refresh" size={24} isStroke />
            <Text color="#797979" style={{marginLeft: 6}} semiBold xSmall>
              최신 업데이트
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 40,
            paddingBottom: 21,
            backgroundColor: '#FAFAFA',
            paddingHorizontal: 14,
            borderRadius: 20,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowRadius: 2,
            shadowOpacity: 0.25,
          }}
        >
          {IssuedCertificateItems.map(item => (
            <CertificateItem item={item} navigation={navigation} />
          ))}
        </View>
        <View style={{paddingBottom: 20, paddingHorizontal: 14}}>
          {NotIssuedCertificateItems.map(item => (
            <CertificateItem
              item={item}
              navigation={navigation}
              onPress={setNotIssuedModalVisible}
            />
          ))}
        </View>
      </View>

      <Modal
        isVisible={!!notIssuedModalVisible}
        style={{justifyContent: 'flex-end', margin: 0}}
        onBackdropPress={() => setNotIssuedModalVisible(undefined)}
      >
        <View
          style={{
            backgroundColor: '#FFFFFF',
            paddingVertical: 40,
            paddingHorizontal: 20,
            borderTopLeftRadius: 28,
            borderTopRightRadius: 28,
          }}
        >
          <Text bold large>
            발급대상안내
          </Text>
          <Text style={{marginTop: 20}} bold>
            {notIssuedModalVisible &&
              VerifiableCredentialInfoObj[notIssuedModalVisible].name}
          </Text>
          <Text style={{marginTop: 20}} medium xSmall>
            코로나19 유전자 진단검사(PCR) 결과 음성 판정을 받은 자
          </Text>
          <Text style={{marginTop: 10}}>
            <Text color="#F2994A" bold xxSmall>
              유효기간{' '}
            </Text>
            <Text color="#797979" bold xxSmall>
              음성 결과 통보받은 시점으로부터 48시간이 되는 날의 자정까지 효력이
              인정됩니다.
            </Text>
          </Text>
          <Button
            activeOpacity={0.8}
            style={{
              marginTop: 50,
              backgroundColor: '#0036AF',
              borderRadius: 10,
            }}
            onPress={() => setNotIssuedModalVisible(undefined)}
          >
            <Text color="#FFFFFF" small>
              닫기
            </Text>
          </Button>
        </View>
      </Modal>
    </View>
  );
};
