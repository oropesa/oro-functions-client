export type EncryptMode = 'CBC' | 'CTR' | 'CTRGladman' | 'OFB' | 'ECB';
export type EncryptPadding = 'Pkcs7' | 'Iso97971' | 'AnsiX923' | 'Iso10126' | 'ZeroPadding' | 'NoPadding';

export type strEncrypt = (
    str: string,
    key?: string,
    iv?: string,
    mode?: EncryptMode,
    padding?: EncryptPadding,
) => string;