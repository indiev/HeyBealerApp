import React, {useCallback, useMemo} from 'react';

import {usePortalContext} from './PortalContext';

import Drawer from '~/Components/Drawer/Drawer';
import {createContext} from '~/Utils/context';

type Props = {
  children: React.ReactNode;
};

type Context = {
  createDrawer: (
    render: ({onDismiss}: {onDismiss: () => void}) => React.ReactNode,
    options?: {backdropHidden: boolean},
  ) => void;
};

const [useContext, Provider] = createContext<Context>();

const UIProvider = (props: Props): React.ReactElement => {
  const {children} = props;
  const {addPortal} = usePortalContext();

  const createDrawer = useCallback(
    (
      render: ({
        onDismiss,
      }: {
        onDismiss: () => void;
        backdropHidden?: boolean;
      }) => React.ReactNode = () => null,
      options: {backdropHidden?: boolean} = {},
    ) => {
      addPortal(portalKey => (
        <Drawer
          backdropHidden={options.backdropHidden}
          portalKey={portalKey}
          render={render}
        />
      ));
    },
    [addPortal],
  );

  const context = useMemo(() => ({createDrawer}), [createDrawer]);

  return <Provider value={context}>{children}</Provider>;
};

export {useContext as useUIContext, UIProvider};
