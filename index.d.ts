import {
  // General
  issetGet,
  type,
  isArray,
  isBoolean,
  isClass,
  isDate,
  isFunction,
  isNull,
  isNully,
  isNumber,
  isObject,
  isRegexp,
  isString,
  isUndefined,

  // Numbers
  isNumberic,
  isNumeric,
  isEven,
  isOdd,
  numberFixDecimals,
  numberPrintDecimals,
  randomMinMax,

  // Strings
  capitalize,
  chunkStringByCharSize,
  escAttr,
  isStringJson,
  jsonParse,
  jsonStringify,
  jsonize,
  arrayize,
  randomString,
  slugify,
  snakeify,
  splitStringNumber,
  strPad,
  substrCount,
  textTruncate,
  trimAll,

  // Crypto
  md5,
  strEncrypt,
  strDecrypt,

  // Functions
  sleep,
  getFunctionName,

  // Classes
  getClassName,
  getClassMethods,
  getClassStaticMethods,

  // Objects
  cloneObject,
  cloneObjectWithKeys,
  cloneObjectWithoutKeys,
  getObjectMissedKeys,
  mergeObjectsDeep,
  objGetMethods,
  objHasKeys,
  objIsEmpty,
  objToStringAttr,
  objToStringAttrData,
  objToStringAttrJs,
  objToStringSqlSet,

  // Arrays
  cloneArray,
  arrayCountByKey,
  arrayGetUnique,
  arrayGroupByKey,
  arraySortByKey,
  arrayToObjectByKey,
  arrayValuesByKey,
  arraysDifference,
  arraysDifferenceAll,
  arraysIntersection,

  // Dates
  dateObjByToday,
  dateObjByTimestamp,
  dateObjBySql,
  dateObjByHtml,
  dateObjByDate,
  dateObjPlusDays,
  isDateObj,
  dateIsObj,
  datesCompare,
  dateIsBetween,
  datesDiffDays,
  datesDiffMonths,
  datesDiffMonthsArray,
  dateCheckString,

  // Urls
  urlDecode,
  urlEncode,
  urlGetBase,
  urlGetCurrentByReq,
  urlGetHostByReq,
  urlGetParams,
  urlIsValid,
  urlObjByUrl,
  urlPlainToString,
  urlStringToPlain,

  // Files
  getFilenameExtByName,
  getFilenameWOutExtByName,
  getFilenameByPath,
  getFolderByPath,
  slugifyFilename,
  sanitizePath,
  sanitizeFilename,

  // PHP Serialize
  phpSerialize,
  phpUnserialize,
  phpIsSerialized,

  // Response
  setResponseKO,
  setResponseOK,

} from './src/';

export {
  EncryptMode,
  EncryptPadding,
  DateObj,
  DateDiffMonth,
  SResponseKO,
  SResponseOK,
} from './src/';

declare class Ofn {

  // region General

  static issetGet: issetGet;
  static type: type;
  static isArray: isArray;
  static isBoolean: isBoolean;
  static isClass: isClass;
  static isDate: isDate;
  static isFunction: isFunction;
  static isNull: isNull;
  static isNully: isNully;
  static isNumber: isNumber;
  static isObject: isObject;
  static isRegexp: isRegexp;
  static isString: isString;
  static isUndefined: isUndefined;

  // endregion
  // region Numbers

  static isNumberic: isNumberic;
  static isNumeric: isNumeric;
  static isEven: isEven;
  static isOdd: isOdd;
  static numberFixDecimals: numberFixDecimals;
  static numberPrintDecimals: numberPrintDecimals;
  static randomMinMax: randomMinMax;

  // endregion
  // region Strings

  static capitalize: capitalize;
  static chunkStringByCharSize: chunkStringByCharSize;
  static escAttr: escAttr;
  static isStringJson: isStringJson;
  static jsonParse: jsonParse;
  static jsonStringify: jsonStringify;
  static jsonize: jsonize;
  static arrayize: arrayize;
  static randomString: randomString;
  static slugify: slugify;
  static snakeify: snakeify;
  static splitStringNumber: splitStringNumber;
  static strPad: strPad;
  static substrCount: substrCount;
  static textTruncate: textTruncate;
  static trimAll: trimAll;

  // endregion
  // region Crypto

  static md5: md5;
  static strEncrypt: strEncrypt;
  static strDecrypt: strDecrypt;

  // endregion
  // region Functions

  static sleep: sleep;
  static getFunctionName: getFunctionName;

  // endregion
  // region Classes

  static getClassName: getClassName;
  static getClassMethods: getClassMethods;
  static getClassStaticMethods: getClassStaticMethods;

  // endregion
  // region Objects

  static cloneObject: cloneObject;
  static cloneObjectWithKeys: cloneObjectWithKeys;
  static cloneObjectWithoutKeys: cloneObjectWithoutKeys;
  static getObjectMissedKeys: getObjectMissedKeys;
  static mergeObjectsDeep: mergeObjectsDeep;
  static objGetMethods: objGetMethods;
  static objHasKeys: objHasKeys;
  static objIsEmpty: objIsEmpty;
  static objToStringAttr: objToStringAttr;
  static objToStringAttrData: objToStringAttrData;
  static objToStringAttrJs: objToStringAttrJs;
  static objToStringSqlSet: objToStringSqlSet;

  // endregion
  // region Arrays

  static cloneArray: cloneArray;
  static arrayCountByKey: arrayCountByKey;
  static arrayGetUnique: arrayGetUnique;
  static arrayGroupByKey: arrayGroupByKey;
  static arraySortByKey: arraySortByKey;
  static arrayToObjectByKey: arrayToObjectByKey;
  static arrayValuesByKey: arrayValuesByKey;
  static arraysDifference: arraysDifference;
  static arraysDifferenceAll: arraysDifferenceAll;
  static arraysIntersection: arraysIntersection;

  // endregion
  // region Dates

  static dateObjByToday: dateObjByToday;
  static dateObjByTimestamp: dateObjByTimestamp;
  static dateObjBySql: dateObjBySql;
  static dateObjByHtml: dateObjByHtml;
  static dateObjByDate: dateObjByDate;
  static dateObjPlusDays: dateObjPlusDays;
  static isDateObj: isDateObj;
  static dateIsObj: dateIsObj;
  static datesCompare: datesCompare;
  static dateIsBetween: dateIsBetween;
  static datesDiffDays: datesDiffDays;
  static datesDiffMonths: datesDiffMonths;
  static datesDiffMonthsArray: datesDiffMonthsArray;
  static dateCheckString: dateCheckString;

  // endregion
  // region Urls

  static urlDecode: urlDecode;
  static urlEncode: urlEncode;
  static urlGetBase: urlGetBase;
  static urlGetCurrentByReq: urlGetCurrentByReq;
  static urlGetHostByReq: urlGetHostByReq;
  static urlGetParams: urlGetParams;
  static urlIsValid: urlIsValid;
  static urlObjByUrl: urlObjByUrl;
  static urlPlainToString: urlPlainToString;
  static urlStringToPlain: urlStringToPlain;

  // region Files

  static getFilenameByPath: getFilenameByPath;
  static getFilenameExtByName: getFilenameExtByName;
  static getFilenameWOutExtByName: getFilenameWOutExtByName;
  static getFolderByPath: getFolderByPath;
  static sanitizeFilename: sanitizeFilename;
  static sanitizePath: sanitizePath;
  static slugifyFilename: slugifyFilename;

  // region PHP Serialize

  static phpSerialize: phpSerialize;
  static phpUnserialize: phpUnserialize;
  static phpIsSerialized: phpIsSerialized;

  // region Response

  static setResponseKO: setResponseKO;
  static setResponseOK: setResponseOK;

  // endregion
}

export default Ofn;