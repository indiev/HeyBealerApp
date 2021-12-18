import React from 'react';

import {PortalProvider} from './PortalContext';
import {ThemeProvider} from './ThemeContext';
import {UIProvider} from './UIContext';

type Props = {
  children: React.ReactNode;
};

export const RootProvider = (props: Props): React.ReactElement => {
  const {children} = props;

  return (
    <ThemeProvider>
      <PortalProvider>
        <UIProvider>{children}</UIProvider>
      </PortalProvider>
    </ThemeProvider>
  );
};
