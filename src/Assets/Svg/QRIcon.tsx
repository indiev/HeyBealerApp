import * as React from 'react';
import {Path} from 'react-native-svg';

import {Svg} from '~/Components';

export default () => (
  <Svg height={24} width={24}>
    <Path
      d="M10 2H2v8h8V2ZM6 6h.01M22 2h-8v8h8V2ZM18 6h.01M10 14H2v8h8v-8ZM6 18h.01M14 14h.01M18 18h.01M18 22h4v-4M14 18v4M22 14h-4"
      stroke="#797979"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </Svg>
);
