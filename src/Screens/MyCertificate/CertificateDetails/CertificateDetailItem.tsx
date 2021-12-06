import React from 'react';
import {TouchableOpacity} from 'react-native';

import {Icon, Text, View} from '~/Components';

type Props = {
  title: string;
  start?: boolean;
  end?: boolean;
  index: number;
};

export const CertificateDetailItem = (props: Props) => {
  const {title, start, end, index} = props;

  return (
    <>
      <View
        key={index}
        style={[
          {
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: 15,
            paddingHorizontal: 10,
          },
          start && {
            paddingTop: 18,
          },
          end && {
            paddingBottom: 18,
          },
        ]}
        row
      >
        <Text color="#797979" semiBold small>
          {title}
        </Text>
        <TouchableOpacity activeOpacity={0.8}>
          <Icon name="downArrow" />
        </TouchableOpacity>
      </View>
      {!end && (
        <View
          style={{
            borderColor: 'rgba(196, 196, 196, 0.5)',
            borderWidth: 0.5,
            marginHorizontal: 10,
          }}
        />
      )}
    </>
  );
};
