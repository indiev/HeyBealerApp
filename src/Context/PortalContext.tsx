import React, {memo, ReactNode, useMemo, useState} from 'react';
import {StyleSheet} from 'react-native';

import View from '~/Components/View/View';
import {createContext} from '~/Utils/context';

type Props = {
  children: React.ReactNode;
};

type Context = {
  addPortal: (addComponent: (portalKey: number) => ReactNode) => number;
  removePortal: (key: number) => void;
};

type PortalType = {
  key?: number;
  children?: React.ReactNode;
};

const [useContext, Provider] = createContext<Context>();

let key = 0;

const PortalProvider = memo((props: Props): React.ReactElement => {
  const {children} = props;

  const [portals, setPortals] = useState<PortalType[]>([]);

  const addPortal = (addComponent: (portalKey: number) => ReactNode) => {
    setPortals(portals => [...portals, {key, children: addComponent(key)}]);
    return key++;
  };

  const removePortal = (key: number) => {
    setPortals(portals => portals.filter(value => value.key !== key));
  };

  const context = useMemo(
    () => ({
      addPortal,
      removePortal,
    }),
    [],
  );

  return (
    <Provider value={context}>
      {children}
      {portals.map(({key, children: portal}) => (
        <View
          key={key}
          collapsable={false}
          pointerEvents="box-none"
          style={StyleSheet.absoluteFill}
        >
          {portal}
        </View>
      ))}
    </Provider>
  );
});

export {useContext as usePortalContext, PortalProvider};
