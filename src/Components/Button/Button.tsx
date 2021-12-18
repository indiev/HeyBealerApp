import React from 'react';
import {
  StyleProp,
  TextStyle,
  TouchableHighlight,
  TouchableOpacity,
  useWindowDimensions,
  ViewStyle,
} from 'react-native';

import {Light} from '../../Constants';
import {Text} from '../Text';
import {View} from '../View';

import {useThemeContext} from '~/Context';

type ButtonType = 'primary' | 'secondary' | 'disabled';

type Props = {
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void | (() => Promise<void>);
  children?: React.ReactNode;
  round?: boolean;
  highlight?: boolean;
  activeOpacity?: number;
  radius?: number;
  disabled?: boolean;
  type?: ButtonType;
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
    radius,
    disabled,
    type = 'primary',
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

  const borderRadius = round ? height / 2 : radius || 15;

  const BackgroundColors: {[key in ButtonType]: string | undefined} = {
    primary: theme.colors.primary,
    secondary: undefined,
    disabled: '#F4F4F4',
  };

  const TextColors: {[key in ButtonType]: string} = {
    primary: 'white',
    secondary: 'gray',
    disabled: '#d4d4d5',
  };

  const customStyle: StyleProp<ViewStyle & TextStyle> = {
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius,
    backgroundColor: BackgroundColors[disabled ? 'disabled' : type],
  };

  const textColor = TextColors[disabled ? 'disabled' : type];

  return (
    <View style={containerStyle}>
      <TouchableComponent
        activeOpacity={activeOpacity}
        style={{borderRadius}}
        onPress={onPress}
      >
        <View style={[customStyle, style]}>
          {typeof children === 'string' ? (
            <Text color={textColor} small>
              {children}
            </Text>
          ) : (
            children
          )}
        </View>
      </TouchableComponent>
    </View>
  );
};
