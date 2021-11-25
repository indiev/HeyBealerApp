import React from 'react';
import {Text, TextProps} from 'react-native';

type Props = TextProps & {};

export default (props: Props) => {
  return <Text {...props} />;
};
