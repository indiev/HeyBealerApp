import React from 'react';
import {Switch} from 'react-native';

import {Text, View} from '~/Components';

type Props = {
  category: string;
  switchState?: boolean;
  switchSetState?: React.Dispatch<React.SetStateAction<boolean>>;
};

export const CertificateShareItem = ({
  category,
  switchState,
  switchSetState,
}: Props) => {
  return (
    <View
      style={{
        justifyContent: 'space-between',
        marginTop: 20,
        alignItems: 'center',
      }}
      row
    >
      <Text small>{category}</Text>
      {switchSetState ? (
        <Switch
          ios_backgroundColor="#D5D5D5"
          trackColor={{false: '#D5D5D5', true: '#007AFF'}}
          value={switchState}
          onChange={() => switchSetState(prev => !prev)}
        />
      ) : (
        <Text color="#007AFF" small>
          필수
        </Text>
      )}
    </View>
  );
};
