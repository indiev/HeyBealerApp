import React from 'react';
import Svg, {SvgProps} from 'react-native-svg';

type Props = SvgProps & {};

export default (props: Props) => {
  return <Svg focusable={false} pointerEvents="none" {...props} />;
};
