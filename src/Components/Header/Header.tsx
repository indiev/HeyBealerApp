import React from 'react';
import {TouchableOpacity} from 'react-native';

import {Icon, Text, View} from '~/Components';

type Props = {
  title?: string;
  right?: React.ReactNode;
  back?: boolean;
};

export default (props: Props) => {
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
            <TouchableOpacity activeOpacity={0.8}>
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
