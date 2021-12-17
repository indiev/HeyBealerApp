import React from 'react';
import {ViewStyle} from 'react-native';

import {Text, View} from '..';

export enum TagTypes {
  Success = 'Success',
  Fail = 'Fail',
  Info = 'Info',
}

type Props = {
  text: string;
  type?: TagTypes;
  style?: ViewStyle;
};

const tagTypeViewStyle: {[key in TagTypes]: ViewStyle} = {
  Success: {
    backgroundColor: '#F6FFED',
    borderColor: '#B7EB8F',
  },
  Fail: {
    backgroundColor: '#F8C5C5',
    borderColor: '#F38585',
  },
  Info: {
    backgroundColor: '#F7F7F7',
    borderColor: '#D5D5D5',
  },
};

const tagTypeTextStyle: {[key in TagTypes]: string} = {
  Success: '#69CB00',
  Fail: '#F74545',
  Info: '#797979',
};

export default (props: Props): React.ReactElement => {
  const {text, type = TagTypes.Success, style: customStyle} = props;

  return (
    <View
      style={[
        {
          paddingVertical: 2,
          borderRadius: 2,
          borderWidth: 0.7,
        },
        tagTypeViewStyle[type],
        customStyle,
      ]}
    >
      <Text
        color={tagTypeTextStyle[type]}
        style={{fontSize: 11, textAlign: 'center'}}
        medium
        xxSmall
      >
        {text && text}
      </Text>
    </View>
  );
};
