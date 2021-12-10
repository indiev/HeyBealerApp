import React from 'react';
import {ColorValue} from 'react-native';

import {Svg} from '../Svg';
import {View} from '../View';

import IconMap from './IconMap';

type IconShapeType = 'filled' | 'outlined';

type Props = React.ComponentProps<typeof Svg> & {
  name: keyof typeof IconMap;
  size?: number;
  shape?: IconShapeType;
  color?: ColorValue;
  isStroke?: boolean;
};

type IconMapType = {
  [key: string]: {
    filled?: React.ReactNode;
    outlined?: React.ReactNode;
  };
};

export default (props: Props) => {
  const {
    name,
    shape = 'filled',
    size = 24,
    isStroke,
    color = '#000000',
  } = props;

  const iconMap = IconMap as IconMapType;
  const icon = iconMap[name][shape] || iconMap[name].outlined;

  return (
    <View
      style={{
        width: size,
        height: size,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Svg
        style={{width: '100%', height: '100%'}}
        {...props}
        fill={!isStroke ? color : undefined}
        stroke={isStroke ? color : undefined}
      >
        {icon}
      </Svg>
    </View>
  );
};
