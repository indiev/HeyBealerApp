import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity} from 'react-native';

import Icon from '../Icon/Icon';
import Text from '../Text/Text';
import View from '../View/View';

type Props = {
  title?: string;
  right?: React.ReactNode;
  back?: boolean;
};

export default (props: Props) => {
  const navigation = useNavigation();

  const {right, back, title} = props;
  return (
    <View safe>
      <View
        style={{
          paddingVertical: 8,
          paddingHorizontal: 10,
          alignItems: 'center',
        }}
        row
      >
        {back && (
          <View style={{alignItems: 'flex-start'}} fill>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.goBack()}
            >
              <Icon name="back" />
            </TouchableOpacity>
          </View>
        )}
        <Text semiBold>{title}</Text>
        <View style={{alignItems: 'flex-end'}} fill>
          {right}
        </View>
      </View>
    </View>
  );
};
