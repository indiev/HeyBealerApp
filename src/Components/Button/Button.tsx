import React from 'react';
import {
  StyleProp,
  TextStyle,
  TouchableHighlight,
  TouchableOpacity,
  useWindowDimensions,
  ViewStyle,
} from 'react-native';

import {View} from '../View';

import {useThemeContext} from '~/Context';

type Props = {
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void | (() => Promise<void>);
  children?: React.ReactNode;
  round?: boolean;
  highlight?: boolean;
  activeOpacity?: number;
};

export default (props: Props): React.ReactElement => {
  const {
    round,
    highlight,
    containerStyle,
    style,
    onPress: onPressProp,
    children,
    activeOpacity,
  } = props;
  const {theme} = useThemeContext();
  const TouchableComponent =
    (highlight && TouchableHighlight) || TouchableOpacity;

  const {height} = useWindowDimensions();

  const onPress = () => {
    if (onPressProp) {
      onPressProp();
    }
  };

  const borderRadius = round ? height / 2 : 15;

  const customStyle: StyleProp<ViewStyle & TextStyle> = {
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius,
    backgroundColor: theme.colors.primary,
  };

  return (
    <View style={containerStyle}>
      <TouchableComponent
        activeOpacity={activeOpacity}
        style={{borderRadius}}
        onPress={onPress}
      >
        <View style={[customStyle, style]}>{children}</View>
      </TouchableComponent>
    </View>
  );
};
