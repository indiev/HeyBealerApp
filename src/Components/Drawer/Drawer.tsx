import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Animated,
  LayoutChangeEvent,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

import {View} from '../View';

import {usePortalContext} from '~/Context/PortalContext';

type DrawerProps = {
  portalKey: number;
  backdropHidden?: boolean;
  // visible?: boolean;
  onDismiss?: () => void;
  // onSubmit?: () => void;
  render: ({onDismiss}: {onDismiss: () => void}) => React.ReactNode;
  // children: React.ReactNode;
};

export default (props: DrawerProps) => {
  const {
    portalKey,
    backdropHidden,
    // visible,
    onDismiss: onDismissProp,
    // onSubmit: onSubmitProp,
    render = () => null,
    // children,
  } = props;

  // const showAnimation = useRef(new Animated.Value(410)).current;
  const fadeAnimation = useRef(new Animated.Value(0)).current;
  const [parentHeight, setParentHeight] = useState(0);
  const duration = 500;

  const onLayout = (event: LayoutChangeEvent) => {
    const {height} = event.nativeEvent.layout;
    // console.log(height);
    setParentHeight(height);
  };

  const fadeIn = useCallback(() => {
    Animated.timing(fadeAnimation, {
      toValue: 1,
      duration,
      useNativeDriver: true,
    }).start();
  }, [fadeAnimation]);

  const fadeOut = useCallback(() => {
    Animated.timing(fadeAnimation, {
      toValue: 0,
      duration,
      useNativeDriver: true,
    }).start();
  }, [fadeAnimation]);

  const {removePortal} = usePortalContext();

  const onDismiss = () => {
    if (onDismissProp) {
      onDismissProp();
    }
    fadeOut();
    setTimeout(() => {
      removePortal(portalKey);
    }, duration + 50);
  };

  // const onSubmit = () => {
  //   if (onSubmitProp) {
  //     onDismiss();
  //     onSubmitProp();
  //   }
  // };

  useEffect(() => {
    fadeIn();

    return () => {
      fadeOut();
    };
  }, [fadeIn, fadeOut]);

  return (
    <View style={{justifyContent: 'flex-end'}} fill>
      {!backdropHidden && (
        <>
          <Animated.View
            style={[
              StyleSheet.absoluteFillObject,
              {
                backgroundColor: '#000000',
                opacity: Animated.multiply(fadeAnimation, 0.5),
              },
            ]}
          />
          <TouchableWithoutFeedback style={{flex: 1}} onPress={onDismiss}>
            <View fill />
          </TouchableWithoutFeedback>
        </>
      )}
      <Animated.View
        style={{
          transform: [
            {
              translateY: Animated.multiply(
                Animated.add(fadeAnimation, -1),
                -parentHeight,
              ),
            },
          ],
          // bottom: -fadeAnimation,
          opacity: fadeAnimation,
        }}
        onLayout={onLayout}
      >
        {render({onDismiss})}
      </Animated.View>
    </View>
  );
};
