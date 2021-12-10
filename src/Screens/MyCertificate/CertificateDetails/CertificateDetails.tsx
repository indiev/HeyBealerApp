import React from 'react';

import {Header, Text, View} from '~/Components';

export const CertificateDetails = () => {
  return (
    <View fill safe>
      <Header back />
      <View fill>
        <Text style={{marginTop: 45, paddingHorizontal: 20}} medium xLarge>
          <Text color="#0036AF" medium xLarge>
            코로나19
          </Text>
          {'\n예방접종증명서의\n상세 정보입니다'}
        </Text>
      </View>
    </View>
  );
};
