import React, {useState} from 'react';
import {TouchableWithoutFeedback} from 'react-native';

import {Text, View} from '~/Components';
import {useThemeContext} from '~/Context';

type InvestItemType = {address: string; date: string; amount: number};

const InvestItem = (props: InvestItemType) => {
  const {address, date, amount} = props;
  return (
    <View
      style={{
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'lightgray',
        marginTop: 10,
        padding: 10,
      }}
      row
    >
      <View style={{paddingRight: 20}} fill>
        <Text xxSmall>{address}</Text>
        <Text color="gray" small>
          {date}
        </Text>
      </View>
      <Text bold>
        {amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      </Text>
    </View>
  );
};

const InvestItems = [
  {
    address: '0xEE5CE06aCcCE11BC77c5A93723C8032D9108f22d',
    date: '2021.12.19',
    amount: 980000,
  },
  {
    address: '0xf7875F0Ff958270B7BD5fA7CFdb8F42C0CF5B11A',
    date: '2021.12.19',
    amount: 850000,
  },
  {
    address: '0x926b72097DA9BC4E0619eE62393a79e4D1B0EB4A',
    date: '2021.12.19',
    amount: 75000,
  },
  {
    address: '0x68848fdc367162E12E382f9D05bd41781421D11e',
    date: '2021.12.19',
    amount: 60000,
  },
];

export default () => {
  const {theme} = useThemeContext();
  const [investItems, setInvestItems] = useState([] as InvestItemType[]);
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(30000000);

  const action = () => {
    setInvestItems(() => {
      const items = InvestItems.slice(0, count + 1);
      const sum = items.reduce(
        (pv: number, cv: InvestItemType) => pv + cv.amount,
        0,
      );
      setAmount(v => v - sum);
      return items;
    });
    setCount(count => count + 1);
  };

  return (
    <View fill safe>
      <View style={{paddingHorizontal: 20, marginTop: 50}}>
        <Text bold xLarge>
          토큰 현황
        </Text>
        <View
          style={{
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            marginTop: 20,
          }}
          row
        >
          <Text color={theme.colors.primary} style={{paddingLeft: 10}} bold>
            보유 토큰
          </Text>
          <Text
            color={theme.colors.primary}
            style={{paddingRight: 50, textAlign: 'right'}}
            black
            xLarge
          >
            {amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          </Text>
        </View>
        <View
          style={{alignItems: 'flex-end', justifyContent: 'space-between'}}
          row
        >
          <Text style={{paddingLeft: 30}} bold>
            발행 토큰
          </Text>
          <Text style={{textAlign: 'right'}} black xLarge>
            / 30,000,000
          </Text>
        </View>
      </View>
      <View style={{paddingHorizontal: 20, marginTop: 50}} fill>
        <TouchableWithoutFeedback onPress={action}>
          <Text bold large>
            투자자
          </Text>
        </TouchableWithoutFeedback>
        <View fill>
          {investItems.length === 0 && (
            <Text style={{marginTop: 20}}>투자자가 없습니다</Text>
          )}
          {investItems.map(value => (
            <InvestItem key={value.address} {...value} />
          ))}
        </View>
      </View>
    </View>
  );
};
