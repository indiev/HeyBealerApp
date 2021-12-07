import {StackScreenProps} from '@react-navigation/stack';

// import {RootStack} from '~/Constants';
import * as MyCertificateScreens from '~/Screens/MyCertificate';
import * as RootScreens from '~/Screens/Root';

export enum RootStack {
  Main = 'Main',
  OnboardingFirst = 'OnboardingFirst',
}

export enum MyCertificateStack {
  MyCertificate = 'MyCertificate',
  CertificateCard = 'CertificateCard',
  CertificateDetails = 'CertificateDetails',
  CertificateQR = 'CertificateQR',
  CertificateShareList = 'CertificateShareList',
}

export type RootStackParamList = {
  // [RootStack.Main]: undefined;
  // [RootStack.OnboardingFirst]: undefined;
} & {
  [P in keyof typeof RootScreens]: undefined;
};

export type MyCertificateParamList = {
  // [MyCertificateStack.MyCertificate]: undefined;
  [MyCertificateStack.CertificateCard]: {
    type: string;
  };
} & {
  [P in keyof typeof MyCertificateScreens]: undefined;
};

export type RootStackScreenProps = {
  [P in keyof typeof RootScreens]: StackScreenProps<RootStackParamList, P>;
};

export type MyCertificateStackScreenProps = {
  [P in keyof typeof MyCertificateScreens]: StackScreenProps<
    MyCertificateParamList,
    P
  >;
};
