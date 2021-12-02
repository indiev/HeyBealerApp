import {NavigatorScreenParams, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

// import {RootStack} from '~/Constants';
import * as MyCertificateScreens from '~/Screens/MyCertificate';
import * as RootScreens from '~/Screens/Root';

// const RootStack: {[P in keyof typeof RootScreens]: string} = {
//   OnboardingFirst: RootScreens.OnboardingFirst.name,
// };

export type RootStackParamList = {} & {
  [P in keyof typeof RootScreens]: undefined;
};

export type RootStackNavigationProp<T extends keyof RootStackParamList> =
  StackNavigationProp<RootStackParamList, T>;

export type RootStackRouteProp<T extends keyof RootStackParamList> = RouteProp<
  RootStackParamList,
  T
>;

export type MyCertificateParamList = {} & {
  [P in keyof typeof MyCertificateScreens]: undefined;
};

export type MyCertificateStackNavigationProp<
  T extends keyof MyCertificateParamList,
> = StackNavigationProp<MyCertificateParamList, T>;

export type MyCertificateStackRouteProp<
  T extends keyof MyCertificateParamList,
> = RouteProp<MyCertificateParamList, T>;
