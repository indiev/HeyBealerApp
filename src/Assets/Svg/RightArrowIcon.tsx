import * as React from 'react';
import {Path} from 'react-native-svg';

import {Svg} from '~/Components';

export default () => (
  <Svg height={17} width={9}>
    <Path
      d="m1 16 7-7M1 1l7 8"
      stroke="#58595B"
      strokeLinecap="round"
      strokeWidth={1.6}
    />
  </Svg>
);
