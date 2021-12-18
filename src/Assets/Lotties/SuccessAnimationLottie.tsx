import React from 'react';

import AnimationSource from './json/SuccessAnimation.json';

import {LottieView} from '~/Components';

export default () => <LottieView loop={false} source={AnimationSource} />;
