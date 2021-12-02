import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {Dimensions, TouchableWithoutFeedback} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';

import {OnboardingQR} from '~/Assets/Svg';
import {Button, Text, View} from '~/Components';
import {RootStackParamList} from '~/Types';

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

type NavigationProps = StackScreenProps<RootStackParamList, 'OnboardingFirst'>;
type Props = {} & NavigationProps;

export const OnboardingFirst = (props: Props) => {
  const {navigation} = props;

  const data = [
    {
      title: '코로나 증명서 발급과 보관',
      subtitle: '다양한 코로나19 전자 증명서를 발급받고\n보관할 수 있어요',
    },
    {
      title: '방역패스와 QR 체크인의 통합',
      subtitle:
        'COOV QR 체크인은 방역패스와\n전자출입명부 인증을 함께 할 수 있어요',
    },
    {
      title: '완벽한 개인정보 보호',
      subtitle:
        '블록체인 기술을 이용해 서버에 사용 기록이\n남지 않아 개인정보를 안전하게 보호할 수 있어요',
    },
    {
      title: '선택에 따른 추가 정보 제공',
      subtitle: '개인정보를 사용자의 선택에 의해\n제공할 수 있어요',
    },
    {
      title: '세계 각국에서 사용 가능',
      subtitle: 'PASS INFRA를 통해 세계 각국에서\n상호 호환이 가능해요',
    },
  ];

  const iconArray = [];

  const carouselRef = React.useRef<any>();
  const [active, setActive] = React.useState(0);

  const renderCarousel = ({item, index}: any) => {
    return (
      <View style={{flex: 6}}>
        <View
          style={{
            flex: 5,
            margin: 40,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <OnboardingQR />
        </View>
        <View fill>
          <Text style={{textAlign: 'center', padding: 10}} large semiBold>
            {item.title}
          </Text>
          <Text
            style={{
              color: '#797979',
              textAlign: 'center',
              padding: 10,
            }}
            small
          >
            {item.subtitle}
          </Text>
        </View>
      </View>
    );
  };

  const goFoward = () => {
    if (active !== data.length - 1) carouselRef?.current?.snapToNext();
    // else navigation.push('Permission', { type: 'permission' });
  };

  return (
    <View fill safe>
      <Carousel
        ref={carouselRef}
        data={data}
        firstItem={0}
        inactiveSlideOpacity={0.1}
        itemHeight={HEIGHT * 0.62}
        itemWidth={WIDTH + 10}
        layoutCardOffset={18}
        renderItem={renderCarousel}
        sliderHeight={HEIGHT * 0.62}
        sliderWidth={WIDTH}
        slideStyle={{height: HEIGHT * 0.6}}
        onSnapToItem={index => setActive(index)}
      />
      <View>
        <Pagination
          activeDotIndex={active}
          animatedDuration={0}
          dotsLength={data.length}
          dotStyle={{
            width: 8,
            height: 8,
            borderRadius: 5,
            marginHorizontal: -10,
            marginBottom: HEIGHT * 0,
            backgroundColor: '#0036AF',
          }}
          inactiveDotOpacity={0.4}
          inactiveDotScale={1}
        />

        <Text
          style={{
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
            marginBottom: 5,
          }}
          xxxSmall
        >
          시작하기 버튼 클릭 시,{' '}
          <TouchableWithoutFeedback
            style={{
              backgroundColor: 'yellow',
            }}
          >
            <Text
              style={{
                color: '#003DAA',
              }}
              xxxSmall
            >
              사용자 이용약관{' '}
            </Text>
          </TouchableWithoutFeedback>
          및{' '}
          <TouchableWithoutFeedback
            style={{
              backgroundColor: 'yellow',
              display: 'flex',
            }}
          >
            <Text
              style={{
                color: '#003DAA',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 0,
                margin: 0,
              }}
              xxxSmall
            >
              개인정보 보호방침
            </Text>
          </TouchableWithoutFeedback>
          에 동의합니다.
        </Text>
      </View>
      <View style={{padding: 20}}>
        <Button
          style={{backgroundColor: '#0036AF'}}
          onPress={() => navigation.navigate('Main')}
        >
          <Text style={{color: 'white'}}>시작하기</Text>
        </Button>
      </View>
    </View>
  );
};
