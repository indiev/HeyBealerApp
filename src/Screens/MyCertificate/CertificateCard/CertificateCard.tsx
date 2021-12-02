import {LinearGradient} from 'expo-linear-gradient';
import React from 'react';

import {CoovLogo, KDCALogo, ShieldIcon} from '~/Assets/Svg';
import {Text, View} from '~/Components';

export const CertificateCard = () => {
  return (
    <View fill safe>
      <View style={{paddingHorizontal: 20}} fill>
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
          <View
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
          >
            <View
              style={{
                flex: 0.8,
                backgroundColor: '#007CAE',
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
                  {'코로나19\n예방접종확인서'}
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
                colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.6)']}
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
                paddingTop: 20,
                justifyContent: 'space-between',
              }}
              row
            >
              <View style={{flex: 0.5, paddingLeft: 25}}>
                <Text color="#797979" xxSmall>
                  접종차수
                </Text>
                <Text>1차</Text>
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
          </View>
        </View>
      </View>
    </View>
  );
};
