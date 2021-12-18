import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, TouchableOpacity} from 'react-native';

// import LaywerImage1 from '~/Assets/Images/lawyer1.jepg';

import {Button, Text, TextInput, View} from '~/Components';
import {useThemeContext, useUIContext} from '~/Context';
import {RootStack, RootStackNavigationProps} from '~/Types';

const image =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR31j2GXo0gRX6Wan1EtI8XF8Ko2YthP7-dUhbANAvwqjW7fLj0bfcw9cioR_MogCHeTk0&usqp=CAU';

type DrawerContentProps = {onDismiss?: () => void; onSubmit?: () => void};
const DrawerContent = (props: DrawerContentProps) => {
  const {onDismiss, onSubmit} = props;
  const {theme} = useThemeContext();

  return (
    <View
      style={{
        backgroundColor: theme.colors.primary,
        borderRadius: 10,
        padding: 20,
        margin: 20,
      }}
    >
      <Text color="white" bold>
        박유철 변호사님과
      </Text>
      <Text color="white" bold>
        법무서비스를 진행할까요?
      </Text>
      <View style={{justifyContent: 'flex-start', marginTop: 20}} row>
        <Button
          containerStyle={{flex: 0.6}}
          type="secondary"
          onPress={onDismiss}
        >
          <Text color="white" small>
            아니요
          </Text>
        </Button>
        <Button
          containerStyle={{flex: 1}}
          style={{backgroundColor: 'white'}}
          onPress={onSubmit}
        >
          <Text color={theme.colors.primary} small>
            네, 진행할게요
          </Text>
        </Button>
      </View>
    </View>
  );
};

const LayerItems = [
  {
    company: '법무법인 지평',
    lawyer: '박유철',
    price: '200',
    date: '2021.12.17',
    profile:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwWHRlQHJaBU_K8Zb5lo6UABTkPGMZgWB39GPdcFnKauqyeCWPW7aVfk-SVgodR61U7PE&usqp=CAU',
  },
  {
    company: '유혁재법무사사무소',
    lawyer: '이유미',
    price: '205',
    date: '2021.12.16',
    profile:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXaj_KFgEcKKIFDB5tNS5TmSM9iZm4hfNj75dTGW5ZNUtjp3c-apCzr8-i16_6tM3243U&usqp=CAU',
  },
  {
    company: '더나은 법무사사무소',
    lawyer: '심민성',
    price: '210',
    date: '2021.12.17',
    profile:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9RlkZZBe2OWNnUDvME-VjEivGKDBtIgC654HQfq-BRagqNvOMS9pRI3DoAXXOc4n_g1I&usqp=CAU',
  },
  {
    company: '공감법무사사무소',
    lawyer: '이규찬',
    price: '220',
    date: '2021.12.15',
    profile:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuyAHq3_V6KJResS60KkSOmt28Aig3362RMvN3AK7oZuU3A2sFpuxs6qehzrNQY_R-hKk&usqp=CAU',
  },
  {
    company: '하나로법무사사무소',
    lawyer: '김경헌',
    price: '230',
    date: '2021.12.13',
    profile:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4tbHJzCmGajhj_ZljQINO_06lAcKHQ_a1Pg&usqp=CAU',
  },
  {
    company: '김옥태법무사행정사무소',
    lawyer: '강민주',
    price: '300',
    date: '2021.12.12',
    profile:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbldthHTYkqNR9q_yst20tCPVgUBdW7xP8mGUZKfQhPF9iUU7ZsK1tiP4wwAHjmaznPms&usqp=CAU',
  },
];
const LawyerItem = (props: {
  company: string;
  lawyer: string;
  price: string;
  date: string;
  profile: string;
}) => {
  const {company, lawyer, price, date, profile} = props;
  const {theme} = useThemeContext();
  const {createDrawer} = useUIContext();
  const navigation =
    useNavigation<RootStackNavigationProps[RootStack.LawyerMain]>();

  const onPress = () => {
    createDrawer(({onDismiss}) => {
      const onSubmit = () => {
        if (onDismiss) {
          onDismiss();
          navigation.navigate(RootStack.LawyerGuide);
        }
      };
      return <DrawerContent onDismiss={onDismiss} onSubmit={onSubmit} />;
    });
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          marginTop: 20,
          alignItems: 'center',
          borderRadius: 5,
          borderWidth: 1,
          borderColor: 'lightgray',
          padding: 15,
        }}
        row
      >
        <Image
          source={{
            uri: profile,
          }}
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            // backgroundColor: 'red',
          }}
        />
        <View style={{marginLeft: 15, justifyContent: 'space-between'}} fill>
          <Text color="gray" xSmall>
            {company}
          </Text>
          <Text bold small>
            {lawyer} 변호사
          </Text>
        </View>
        <View style={{justifyContent: 'space-between'}}>
          <Text color={theme.colors.primary} bold>
            {price}만원
          </Text>
          <Text color="gray" style={{textAlign: 'right'}} xSmall>
            {date}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default () => {
  return (
    <View fill safe>
      <View style={{paddingHorizontal: 20, paddingTop: 20}} fill>
        <Text bold large>
          제안 받은 법무사
        </Text>
        <View
          style={{
            paddingHorizontal: 20,
            backgroundColor: 'white',
            borderRadius: 5,
            marginTop: 10,
            paddingVertical: 10,
            borderWidth: 1,
            borderColor: 'lightgray',
            alignItems: 'center',
          }}
          row
        >
          <TextInput
            placeholder="검색어를 입력하세요"
            style={{fontSize: 20, flex: 1}}
          />
          <TouchableOpacity>
            <Text color="gray" bold small>
              검색
            </Text>
          </TouchableOpacity>
        </View>
        {LayerItems.map(value => (
          <LawyerItem key={`${value.company}${value.lawyer}`} {...value} />
        ))}
      </View>
    </View>
  );
};
