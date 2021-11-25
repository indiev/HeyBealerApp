import React from 'react';
import {Text, TextProps, TextStyle} from 'react-native';

import {useThemeContext} from '~/Context/ThemeContext';

export enum FontFamily {
  Roboto = 'Roboto',
}

export enum FontWeight {
  Thin = '100',
  ExtraLight = '200',
  Light = '300',
  Normal = '400',
  Medium = '500',
  SemiBold = '600',
  Bold = '700',
  ExtraBold = '800',
  Black = '900',
}

export enum FontSize {
  xxSmall = 'xx-small',
  xSmall = 'x-small',
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
  xLarge = 'x-large',
  xxLarge = 'xx-large',
  xxxLarge = 'xxx-large',
  xxxxLarge = 'xxxx-large',
}

const Size = {
  [FontSize.xxSmall]: {
    fontSize: 12,
    lineHeight: 12 * 1.66, // 2.66(overline)
    letterSpacing: 0.4,
  },
  [FontSize.xSmall]: {
    fontSize: 14,
    lineHeight: 14 * 1.43, // 1.57(subtitle2), 1.75(button)
    letterSpacing: 0.15,
  },
  [FontSize.Small]: {
    fontSize: 16,
    lineHeight: 16 * 1.5, // 1.75(subtitle1)
    letterSpacing: 0.15,
  },
  [FontSize.Medium]: {
    fontSize: 20,
    lineHeight: 20 * 1.6,
    letterSpacing: 0.15,
  },
  [FontSize.Large]: {
    fontSize: 24,
    lineHeight: 24 * 1.334,
    letterSpacing: 0,
  },
  [FontSize.xLarge]: {
    fontSize: 34,
    lineHeight: 34 * 1.235,
    letterSpacing: 0.25,
  },
  [FontSize.xxLarge]: {
    fontSize: 48,
    lineHeight: 48 * 1.167,
    letterSpacing: 0,
  },
  [FontSize.xxxLarge]: {
    fontSize: 60,
    lineHeight: 60 * 1.2,
    letterSpacing: -0.5,
  },
  [FontSize.xxxxLarge]: {
    fontSize: 96,
    lineHeight: 96 * 1.167,
    letterSpacing: -1.5,
  },
};

type Props = TextProps & {
  children?: React.ReactNode;
  weight?: TextStyle['fontWeight'];
  size?: keyof typeof Size;
  // weight
  thin?: boolean;
  extraLight?: boolean;
  light?: boolean;
  medium?: boolean;
  semiBold?: boolean;
  bold?: boolean;
  extraBold?: boolean;
  black?: boolean;
  // size
  xxSmall?: boolean;
  xSmall?: boolean;
  small?: boolean;
  large?: boolean;
  xLarge?: boolean;
  xxLarge?: boolean;
  xxxLarge?: boolean;
  xxxxLarge?: boolean;
  // decoration
  underline?: boolean;
  color?: string;
};

export default (props: Props): React.ReactElement => {
  const {
    children,
    style: customStyle,
    weight,
    thin,
    extraLight,
    light,
    medium,
    semiBold,
    bold,
    extraBold,
    black,
    size,
    xxSmall,
    xSmall,
    small,
    large,
    xLarge,
    xxLarge,
    xxxLarge,
    xxxxLarge,
    underline,
    color: textColor,
    ...rest
  } = props;

  const {theme} = useThemeContext();

  const fontWeight =
    weight ||
    (thin && FontWeight.Thin) ||
    (extraLight && FontWeight.ExtraLight) ||
    (light && FontWeight.Light) ||
    (medium && FontWeight.Medium) ||
    (semiBold && FontWeight.SemiBold) ||
    (bold && FontWeight.Bold) ||
    (extraBold && FontWeight.ExtraBold) ||
    (black && FontWeight.Black) ||
    FontWeight.Normal;
  const fontSize =
    Size[
      size ||
        (xxSmall && FontSize.xxSmall) ||
        (xSmall && FontSize.xSmall) ||
        (small && FontSize.Small) ||
        (large && FontSize.Large) ||
        (xLarge && FontSize.xLarge) ||
        (xxLarge && FontSize.xxLarge) ||
        (xxxLarge && FontSize.xxxLarge) ||
        (xxxxLarge && FontSize.xxxxLarge) ||
        FontSize.Medium
    ];
  const textDecorationLine = underline ? 'underline' : 'none';
  const color = textColor || theme.colors.text;

  const style: TextStyle = {
    fontWeight,
    ...fontSize,
    textDecorationLine,
    color,
  };

  const componentProps: Props = {
    style: [style, customStyle],
    children,
    ...rest,
  };

  return <Text {...componentProps} />;
};
