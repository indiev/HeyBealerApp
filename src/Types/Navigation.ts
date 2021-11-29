import {NavigatorScreenParams, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

// import {RootStack} from '~/Constants';
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
