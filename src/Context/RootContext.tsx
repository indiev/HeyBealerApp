import React from 'react';

import {ThemeProvider} from './ThemeContext';

type Props = {
  children: React.ReactNode;
};

export const RootProvider = (props: Props): React.ReactElement => {
  const {children} = props;

  return <ThemeProvider>{children}</ThemeProvider>;
};
