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
          <TouchableOpacity
            activeOpacity={0.8}
            style={{alignItems: 'flex-start', flex: 1}}
          >
            <Icon name="back" />
          </TouchableOpacity>
        )}
        <Text semiBold>{title}</Text>
        <View style={{alignItems: 'flex-end', flex: 1}}>{right && right}</View>
      </View>
    </View>
  );
};
