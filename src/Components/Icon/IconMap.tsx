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
          d="M21 2V8H15"
          stroke="#797979"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <Path
          d="M3 11.9996C3.00158 10.2629 3.5056 8.5638 4.45125 7.10715C5.39691 5.65051 6.74382 4.49858 8.32951 3.79031C9.9152 3.08203 11.6719 2.84766 13.3879 3.11547C15.1038 3.38328 16.7056 4.14183 18 5.29962L21 7.99962"
          stroke="#797979"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <Path
          d="M3 22V16H9"
          stroke="#797979"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <Path
          d="M21 12C20.9984 13.7367 20.4944 15.4358 19.5487 16.8925C18.6031 18.3491 17.2562 19.501 15.6705 20.2093C14.0848 20.9176 12.3281 21.152 10.6121 20.8841C8.89623 20.6163 7.29445 19.8578 6 18.7L3 16"
          stroke="#797979"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </>
    ),
  },
  back: {
    outlined: (
      <>
        <Path
          d="M16 5L9 12"
          stroke="#007AFF"
          strokeLinecap="round"
          strokeWidth={1.6}
        />
        <Path
          d="M16 20L9 12"
          stroke="#007AFF"
          strokeLinecap="round"
          strokeWidth={1.6}
        />
      </>
    ),
  },
  downArrow: {
    outlined: (
      <>
        <Path
          d="M5 8L12 15"
          stroke="#797979"
          strokeLinecap="round"
          strokeWidth={1.6}
        />
        <Path
          d="M20 8L12 15"
          stroke="#797979"
          strokeLinecap="round"
          strokeWidth={1.6}
        />
      </>
    ),
  },
  list: {
    outlined: (
      <>
        <Path
          d="M7.78906 5H22.2335"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <Path
          d="M7.78906 11.667H22.2335"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <Path
          d="M7.78906 18.333H22.2335"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <Path
          d="M2.23242 5H2.24353"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <Path
          d="M2.23242 11.667H2.24353"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <Path
          d="M2.23242 18.333H2.24353"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </>
    ),
  },
};

export default IconMap;
