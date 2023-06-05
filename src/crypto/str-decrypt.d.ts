import { EncryptMode, EncryptPadding } from './str-encrypt';

export type strDecrypt = (
    str: string,
    key?: string,
    iv?: string,
    mode?: EncryptMode,
    padding?: EncryptPadding,
) => string;