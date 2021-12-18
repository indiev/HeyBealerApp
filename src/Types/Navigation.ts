import {CompositeNavigationProp, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {VerifiableCredentialTypes} from '../Screens/MyCertificate/Certificates/interface';

export enum RootStack {
  Main = 'Main',
  OnboardingFirst = 'OnboardingFirst',
  PinScreen = 'PinScreen',
  AuctionRegister = 'AuctionRegister',
  AuctionDetail = 'AuctionDetail',
  HomeMain = 'HomeMain',
  // lawyer
  LawyerMain = 'LawyerMain',
  LawyerList = 'LawyerList',
  LawyerGuide = 'LawyerGuide',
  LawyerTransfer = 'LawyerTransfer',
  LawyerTransferLoading = 'LawyerTransferLoading',
  LawyerTransferSuccess = 'LawyerTransferSuccess',
  LawyerDetail = 'LawyerDetail',
  // invest
  InvestMain = 'InvestMain',
  InvestToken = 'InvestToken',
  InvestList = 'InvestList',
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
  [P in RootStack]?: {};
};

export type MyCertificateParamList = {
  // [MyCertificateStack.MyCertificate]: undefined;
  [MyCertificateStack.CertificateCard]: {
    type: VerifiableCredentialTypes;
  };
} & {
  [P in MyCertificateStack]?: {};
};

export type RootStackNavigationProps = {
  [P in RootStack]: StackNavigationProp<RootStackParamList, P>;
};

export type RootRouteProps = {
  [P in RootStack]: RouteProp<RootStackParamList, P>;
};

export type MyCertificateStackNavigationProps = {
  [P in MyCertificateStack]: CompositeNavigationProp<
    StackNavigationProp<MyCertificateParamList, P>,
    StackNavigationProp<RootStackParamList>
  >;
};

export type MyCertificateRouteProps = {
  [P in MyCertificateStack]: RouteProp<MyCertificateParamList, P>;
};
