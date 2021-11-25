import React from 'react';
import {View, ViewProps} from 'react-native';

type Props = ViewProps & {};

export default (props: Props) => {
  return <View {...props} />;
};
