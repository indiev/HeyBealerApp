import React from 'react';

import {Text, View} from '~/Components';

type Props = {
  doseNum: number;
  start: boolean;
  end: boolean;
};

export const CertificateVaccinationItem = (props: Props) => {
  const {doseNum, start, end} = props;

  const title = doseNum > 2 ? '추가접종' : `${doseNum}차접종`;

  return (
    <>
      <View
        key="doseNum"
        style={[
          {
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            paddingVertical: 10,
          },
          start && {
            marginTop: 3,
          },
          end && {
            marginBottom: 3,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          },
        ]}
        row
      >
        <Text color="#58595B" medium xSmall>
          {title}
        </Text>
        <Text medium xSmall>
          접종완료
        </Text>
      </View>
      {!end && (
        <View
          style={{
            marginHorizontal: 10,
            backgroundColor: '#F7F7F7',
            height: 1,
          }}
        />
      )}
    </>
  );
};
