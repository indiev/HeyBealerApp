import * as React from 'react';
import {Circle, ClipPath, Defs, G, Path} from 'react-native-svg';

import {Svg} from '~/Components';

export default () => (
  <Svg height={24} width={24}>
    <Circle cx={12} cy={12} fill="#000" fillOpacity={0.3} r={12} />
    <G clipPath="url(#a)" fill="#76DD51">
      <Path d="m12 20.576-.107-.062c-.248-.133-6.111-3.393-6.689-8.208L5 6.496 12 4l7 2.496-.204 5.792c-.578 4.833-6.44 8.093-6.69 8.226l-.106.062ZM5.47 6.816l.196 5.454c.507 4.211 5.534 7.311 6.343 7.782.808-.47 5.836-3.571 6.343-7.8l.186-5.436L12 4.489 5.47 6.816Z" />
      <Path d="M12 5.057 5.906 7.224l.178 5.064c.515 4.281 5.916 7.23 5.916 7.23s5.401-2.958 5.916-7.23l.178-5.064L12 5.057Zm3.331 5.8-3.775 3.776a.647.647 0 0 1-.906 0L8.669 12.66a.654.654 0 0 1 0-.915.654.654 0 0 1 .915 0l1.519 1.519 3.322-3.323a.654.654 0 0 1 .915 0c.24.25.24.658-.009.915Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path d="M0 0h14v16.576H0z" fill="#fff" transform="translate(5 4)" />
      </ClipPath>
    </Defs>
  </Svg>
);
