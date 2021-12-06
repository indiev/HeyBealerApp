export type VerifiableCredentialTypes =
  | 'Vaccine'
  | 'Confirmation'
  | 'PCR'
  | 'Recovery'
  | 'Exception'
  | 'Global'
  | 'Personal';

export type CertificateListItemType = {
  type: VerifiableCredentialTypes;
  status?: string;
  onPress?: any;
};

export type CertificateItemType = {
  color: string;
  name: string;
  icon?: string;
};
