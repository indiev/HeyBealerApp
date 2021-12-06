import React from 'react';
import {Path} from 'react-native-svg';

type IconMapType = {
  [key: string]: {
    filled?: React.ReactChild;
    outlined?: React.ReactChild;
  };
};

const IconMap: IconMapType = {
  refresh: {
    outlined: (
      <>
        <Path
          d="M15.75 1.5V6h-4.5"
          stroke="#B4B4B4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <Path
          d="M2.25 9A6.75 6.75 0 0 1 13.5 3.975L15.75 6M2.25 16.5V12h4.5"
          stroke="#B4B4B4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <Path
          d="M15.75 9A6.75 6.75 0 0 1 4.5 14.025L2.25 12"
          stroke="#B4B4B4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </>
    ),
  },
};

export default IconMap;
