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
  startColor?: string;
  endColor?: string;
  name: string;
  icon?: string;
};

export const VerifiableCredentialInfoObj: {
  [key in VerifiableCredentialTypes]: CertificateItemType;
} = {
  Vaccine: {
    name: '코로나19 예방접종증명서',
    color: '#0036AF',
    startColor: '#0036AF',
    endColor: '#011747',
  },
  Confirmation: {
    name: '코로나19 해외접종확인서',
    color: '#007CAE',
  },
  PCR: {
    name: '코로나19 PCR 음성확인서',
    color: '#2F8B58',
  },
  Recovery: {
    name: '코로나19 완치증명서',
    color: '#8BCDFB',
  },
  Exception: {
    name: '의학적 사유 예외 확인서',
    color: '#007CAE',
  },
  Global: {
    name: '국제증명서',
    color: '#0036AF',
    icon: '',
    startColor: '#0036AF',
    endColor: '#011747',
  },
  Personal: {
    name: '본인인증 증명서',
    color: '#B4B4B4',
    startColor: '#B4B4B4',
    endColor: '#494949',
  },
};
