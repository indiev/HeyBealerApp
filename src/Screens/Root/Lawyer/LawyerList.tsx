import React from 'react';

import {Text, View} from '~/Components';

type LawyerItemProps = {};
const LawyerItem = (props: LawyerItemProps) => {
  return (
    <View>
      <Text>1</Text>
    </View>
  );
};

export default () => {
  return (
    <View style={{padding: 20}} fill safe>
      <Text>상담 제안한 법무사</Text>
      <View style={{padding: 20}}>
        <LawyerItem />
        <LawyerItem />
      </View>
    </View>
  );
};
