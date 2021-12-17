import React from 'react';
import {Circle, ClipPath, Defs, G, Path} from 'react-native-svg';

const IconMap = {
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
          stroke="#797979"
          strokeLinecap="round"
          strokeWidth={1.6}
        />
        <Path
          d="M16 20L9 12"
          stroke="#797979"
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
  kdca: {
    outlined: (
      <>
        <Path
          d="M23 11.5C23 17.853 17.853 23 11.5 23S0 17.853 0 11.5 5.147 0 11.5 0C17.849 0 23 5.147 23 11.5Z"
          fill="#fff"
        />
        <Path
          d="M16.903 10.7c-1.831-1.245-4.171-.74-5.404 1.13a3.814 3.814 0 0 1-3.172 1.758c-1.96 0-3.297-1.376-3.694-2.803l-.011-.04-.012-.046a4.888 4.888 0 0 1-.194-1.508c0-3.406 3.495-7.196 8.525-7.196 5.156 0 8.103 3.922 8.865 6.103a2.124 2.124 0 0 1-.04-.116C20.302 3.712 16.259.646 11.497.646 5.503.646.644 5.5.644 11.496c0 5.358 3.864 9.941 9.225 9.941 4.273 0 7.146-2.395 8.464-5.7.723-1.803.21-3.926-1.43-5.038Z"
          fill="#003964"
        />
        <Path
          d="M21.872 8.304c-.634-2.127-3.604-6.314-8.934-6.314-5.03 0-8.526 3.79-8.526 7.196 0 .63.039.914.194 1.509a3.148 3.148 0 0 1-.097-.774c0-3.545 3.55-6.002 7.2-6.002 4.942 0 8.95 4.004 8.95 8.945a9.862 9.862 0 0 1-5.466 8.837v.004c4.175-1.512 7.157-5.513 7.157-10.205a10.922 10.922 0 0 0-.478-3.196Z"
          fill="#ED193A"
        />
      </>
    ),
  },
  shield: {
    outlined: (
      <>
        <Circle cx={12} cy={12} fill="#000" fillOpacity={0.3} r={12} />
        <G clipPath="url(#a)" fill="#76DD51">
          <Path d="m12 20.576-.107-.062c-.248-.133-6.111-3.393-6.689-8.208L5 6.496 12 4l7 2.496-.204 5.792c-.578 4.833-6.44 8.093-6.69 8.226l-.106.062ZM5.47 6.816l.196 5.454c.507 4.211 5.534 7.311 6.343 7.782.808-.47 5.836-3.571 6.343-7.8l.186-5.436L12 4.489 5.47 6.816Z" />
          <Path d="M12 5.057 5.906 7.224l.178 5.064c.515 4.281 5.916 7.23 5.916 7.23s5.401-2.958 5.916-7.23l.178-5.064L12 5.057Zm3.331 5.8-3.775 3.776a.647.647 0 0 1-.906 0L8.669 12.66a.654.654 0 0 1 0-.915.654.654 0 0 1 .915 0l1.519 1.519 3.322-3.323a.654.654 0 0 1 .915 0c.24.25.24.658-.009.915Z" />
        </G>
        <Defs>
          <ClipPath id="a">
            <Path d="M0 0h18v21.576H0z" fill="#fff" />
          </ClipPath>
        </Defs>
      </>
    ),
  },
  question: {
    outlined: (
      <>
        <Path
          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
          stroke="#B4B4B4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <Path
          d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3M12 17h.01"
          stroke="#B4B4B4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </>
    ),
  },
  qr: {
    outlined: (
      <Path
        d="M10 2H2v8h8V2ZM6 6h.01M22 2h-8v8h8V2ZM18 6h.01M10 14H2v8h8v-8ZM6 18h.01M14 14h.01M18 18h.01M18 22h4v-4M14 18v4M22 14h-4"
        stroke="#797979"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      />
    ),
  },
};

export default IconMap;
