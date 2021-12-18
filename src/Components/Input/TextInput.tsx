import React, {forwardRef, RefObject} from 'react';
import {TextInputProps as RNTextInputProps, TextInput} from 'react-native';

type TextInputProps = RNTextInputProps & {
  ref?: RefObject<TextInput>;
};

export default forwardRef<TextInput, TextInputProps>(
  (props: TextInputProps, ref) => {
    return <TextInput ref={ref} {...props} />;
  },
);
