import React, {memo, useEffect} from 'react';

import {usePortalContext} from '~/Context';

type props = {children?: React.ReactNode};

export default memo((props: props) => {
  const {children} = props;
  const {addPortal, removePortal} = usePortalContext();

  useEffect(() => {
    const key = addPortal(() => children);

    return () => {
      removePortal(key);
    };
  }, [addPortal, children, removePortal]);

  return null;
});
