import {LinearGradient} from 'expo-linear-gradient';
import React from 'react';
import {TouchableOpacity} from 'react-native';

import {TagTypes} from '../../../Components/Tag/Tag';
import {VerifiableCredentialInfoObj} from '../Certificates/interface';

import {CoovLogo, KDCALogo, ShieldIcon} from '~/Assets/Svg';
import {Tag, Text, View} from '~/Components';
import {MyCertificateStack, MyCertificateStackScreenProps} from '~/Types';

type NavigationProps =
  MyCertificateStackScreenProps[MyCertificateStack.CertificateCard];

export const CertificateCard = ({navigation, route}: NavigationProps) => {
  const {type} = route.params;
  const {color, name, startColor, endColor} = VerifiableCredentialInfoObj[type];

  return (
    <View fill safe>
      <View style={{paddingHorizontal: 20, flex: 1}}>
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
        </View>
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
              width: '74%',
              height: '76%',
              backgroundColor: '#000000',
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
              navigation.push(MyCertificateStack.CertificateDetails, {})
            }
          >
            <View
              style={{
                flex: 0.8,
                backgroundColor: color || '#007CAE',
                borderTopLeftRadius: 16,
                borderTopRightRadius: 16,
                overflow: 'hidden',
              }}
            >
              <View
                style={{
                  paddingLeft: 25,
                  paddingBottom: 25,
                  justifyContent: 'flex-end',
                }}
                fill
              >
                <Text color="#FFFFFF" large semiBold>
                  {name || '코로나19\n예방접종확인서'}
                </Text>
                <View style={{alignItems: 'center', marginTop: 10}} row>
                  <KDCALogo />
                  <Text
                    color="#FFFFFF"
                    style={{marginLeft: 5}}
                    semiBold
                    xxSmall
                  >
                    질병관리청
                  </Text>
                </View>
              </View>
              <View
                style={{
                  top: 29,
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
                  alignItems: 'flex-end',
                  position: 'absolute',
                  zIndex: -1,
                }}
              >
                <ShieldIcon />
              </View>
              <LinearGradient
                colors={[startColor || '#0036AF', endColor || '#000000']}
                end={{x: 0, y: 1}}
                start={{x: 0, y: 0}}
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  zIndex: -2,
                }}
              />
            </View>
            <View
              style={{
                flex: 0.2,
                backgroundColor: '#FFFFFF',
                borderBottomLeftRadius: 16,
                borderBottomRightRadius: 16,
                paddingTop: 7.5,
                justifyContent: 'space-between',
              }}
              row
            >
              <View style={{flex: 0.5, paddingLeft: 25}}>
                <Text color="#797979" xxSmall>
                  접종차수
                </Text>
                <Text>1차</Text>
                <Tag
                  style={{marginTop: 2}}
                  text="접종완료"
                  type={TagTypes.Success}
                />
                <Tag
                  style={{marginTop: 2}}
                  text="14일 경과"
                  type={TagTypes.Success}
                />
              </View>
              <View style={{flex: 0.5, paddingLeft: 25}}>
                <View>
                  <Text color="#797979" xxSmall>
                    백신제조사
                  </Text>
                  <Text xxSmall>화이자</Text>
                </View>
                <View style={{marginTop: 5}}>
                  <Text color="#797979" xxSmall>
                    접종일자
                  </Text>
                  <Text xxSmall>2021.05.25</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
