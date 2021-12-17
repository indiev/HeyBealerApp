import {useNavigation, useRoute} from '@react-navigation/native';
import {LinearGradient} from 'expo-linear-gradient';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {TagTypes} from '../../../Components/Tag/Tag';
import {VerifiableCredentialInfoObj} from '../Certificates/interface';

import {CoovLogo} from '~/Assets/Svg';
import {Header, Icon, Tag, Text, View} from '~/Components';
import {
  MyCertificateRouteProps,
  MyCertificateStack,
  MyCertificateStackNavigationProps,
} from '~/Types';

export const CertificateCard = () => {
  const navigation =
    useNavigation<
      MyCertificateStackNavigationProps[MyCertificateStack.CertificateCard]
    >();
  const route =
    useRoute<MyCertificateRouteProps[MyCertificateStack.CertificateCard]>();
  const {type} = route.params;
  const {color, name, startColor, endColor} = VerifiableCredentialInfoObj[type];

  return (
    <View fill safe>
      <Header back />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
        fill
      >
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            flex: 0.8,
            aspectRatio: 0.55,
            borderRadius: 16,
            shadowOffset: {
              width: 4,
              height: 10,
            },
            shadowOpacity: 0.25,
            shadowColor: '#000000',
            shadowRadius: 16,
          }}
          onPress={() =>
            navigation.navigate(MyCertificateStack.CertificateQR, {})
          }
        >
          <View
            style={{
              flex: 0.8,
              backgroundColor: color || '#007CAE',
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              overflow: 'hidden',
              justifyContent: 'flex-end',
            }}
          >
            <Text
              color="#FFFFFF"
              style={{marginBottom: 10, marginLeft: 25}}
              large
              semiBold
            >
              {name || '코로나19\n예방접종확인서'}
            </Text>
            <View
              style={{alignItems: 'center', marginBottom: 25, marginLeft: 25}}
              row
            >
              <Icon name="kdca" />
              <Text color="#FFFFFF" style={{marginLeft: 5}} semiBold xxSmall>
                질병관리청
              </Text>
            </View>
            <View
              style={{
                top: 30,
                position: 'absolute',
                zIndex: -1,
              }}
            >
              <CoovLogo />
            </View>
            <View
              style={{
                right: 25,
                top: 25,
                position: 'absolute',
                zIndex: -1,
              }}
            >
              <Icon name="shield" />
            </View>
            <LinearGradient
              colors={[startColor || '#0036AF', endColor || '#000000']}
              end={{x: 0, y: 1}}
              start={{x: 0, y: 0}}
              style={[
                StyleSheet.absoluteFill,
                {
                  zIndex: -2,
                },
              ]}
            />
          </View>
          <View
            style={{
              flex: 0.2,
              backgroundColor: '#FFFFFF',
              borderBottomLeftRadius: 16,
              borderBottomRightRadius: 16,
              paddingTop: 7,
            }}
            row
          >
            <View style={{paddingLeft: 25}} fill>
              <Text color="#797979" xxSmall>
                접종차수
              </Text>
              <Text>1차</Text>
              <Tag
                style={{marginTop: 2, width: 59}}
                text="접종완료"
                type={TagTypes.Success}
              />
              <Tag
                style={{marginTop: 2, width: 59}}
                text="14일 경과"
                type={TagTypes.Success}
              />
            </View>
            <View style={{paddingLeft: 25}} fill>
              <Text color="#797979" xxSmall>
                백신제조사
              </Text>
              <Text xxSmall>화이자</Text>
              <Text color="#797979" style={{marginTop: 5}} xxSmall>
                접종일자
              </Text>
              <Text xxSmall>2021.05.25</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
