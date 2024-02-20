import CryptoJS from 'crypto-js';
import { Base64 } from 'js-base64';

import { isNully } from '../general';

export type EncryptMode = 'CBC' | 'CTR' | 'CTRGladman' | 'OFB' | 'ECB' | 'AES-256-CBC' /* deprecated */;
export type EncryptPadding = 'Pkcs7' | 'Iso97971' | 'AnsiX923' | 'Iso10126' | 'ZeroPadding' | 'NoPadding';

// eslint-disable-next-line max-params
export function strEncrypt(
  str: string,
  key = '',
  iv = '',
  mode: EncryptMode = 'CBC',
  padding: EncryptPadding = 'Pkcs7',
): string {
  if (isNully(str)) {
    return '';
  }

  const secretKey = CryptoJS.enc.Utf8.parse(
    CryptoJS.SHA256(key || 'random')
      .toString()
      .slice(0, 32),
  );
  const secretIv = CryptoJS.enc.Utf8.parse(
    CryptoJS.SHA256(iv || 'random')
      .toString()
      .slice(0, 16),
  );

  let methodMode;
  switch (mode) {
    case 'CBC':
      methodMode = CryptoJS.mode.CBC;
      break;
    case 'CTR':
      methodMode = CryptoJS.mode.CTR;
      break;
    case 'CTRGladman':
      methodMode = CryptoJS.mode.CTRGladman;
      break;
    case 'OFB':
      methodMode = CryptoJS.mode.OFB;
      break;
    case 'ECB':
      methodMode = CryptoJS.mode.ECB;
      break;
    default:
      methodMode = CryptoJS.mode.CBC;
  }

  let methodPadding;
  switch (padding) {
    case 'Pkcs7':
      methodPadding = CryptoJS.pad.Pkcs7;
      break;
    case 'Iso97971':
      methodPadding = CryptoJS.pad.Iso97971;
      break;
    case 'AnsiX923':
      methodPadding = CryptoJS.pad.AnsiX923;
      break;
    case 'Iso10126':
      methodPadding = CryptoJS.pad.Iso10126;
      break;
    case 'ZeroPadding':
      methodPadding = CryptoJS.pad.ZeroPadding;
      break;
    case 'NoPadding':
      methodPadding = CryptoJS.pad.NoPadding;
      break;
    default:
      methodPadding = CryptoJS.pad.Pkcs7;
  }

  return Base64.encode(
    CryptoJS.AES.encrypt(String(str), secretKey, {
      iv: secretIv,
      mode: methodMode,
      padding: methodPadding,
    }).toString(),
  );
}
