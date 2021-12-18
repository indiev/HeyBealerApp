import React from 'react';
import {
  ActivityIndicator,
  ActivityIndicatorProps as RNActivityIndicatorProps,
} from 'react-native';

type ActivityIndicatorProps = RNActivityIndicatorProps & {};
export default (props: ActivityIndicatorProps) => {
  return <ActivityIndicator {...props} />;
};
