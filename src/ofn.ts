import {
  arrayCountByKey,
  arrayGetUnique,
  arrayGroupByKey,
  arraySortByKey,
  arrayToObjectByKey,
  arrayValuesByKey,
  arraysDifference,
  arraysDifferenceAll,
  arraysIntersection,
  cloneArray,
} from './arrays/';
import { getClassMethods, getClassName, getClassStaticMethods } from './classes/';
import { md5, strDecrypt, strEncrypt } from './crypto/';
import {
  dateCheckString,
  dateIsBetween,
  dateIsObj,
  dateObjByDate,
  dateObjByHtml,
  dateObjBySql,
  dateObjByTimestamp,
  dateObjByToday,
  dateObjPlusDays,
  datesCompare,
  datesDiffDays,
  datesDiffMonths,
  datesDiffMonthsArray,
  isDateObj,
} from './dates/';
import {
  getFilenameByPath,
  getFilenameExtByName,
  getFilenameWOutExtByName,
  getFolderByPath,
  sanitizeFilename,
  sanitizePath,
  slugifyFilename,
} from './files/';
import { getFunctionName, sleep } from './functions/';
import {
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
  issetGet,
  type,
} from './general/';
import {
  isEven,
  isNumberic,
  isNumeric,
  isOdd,
  numberFixDecimals,
  numberPrintDecimals,
  randomMinMax,
} from './numbers/';
import {
  cloneObject,
  cloneObjectWithKeys,
  cloneObjectWithoutKeys,
  getObjectMissedKeys,
  mergeObjectsDeep,
  objGetMethods,
  objHasKeys,
  objIsEmpty,
  objIsNotEmpty,
  objToStringAttr,
  objToStringAttrData,
  objToStringAttrJs,
  objToStringSqlSet,
} from './objects/';
import { phpIsSerialized, phpSerialize, phpUnserialize } from './php-serialize/';
import { setResponseKO, setResponseOK } from './set-response/';
import {
  arrayize,
  arrayizeObject,
  arrayizeString,
  capitalize,
  chunkStringByCharSize,
  escAttr,
  isStringJson,
  jsonParse,
  jsonStringify,
  jsonize,
  randomString,
  slugify,
  snakeify,
  splitStringNumber,
  strPad,
  substrCount,
  textTruncate,
  trimAll,
} from './strings/';
import {
  isValidUrl,
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
} from './urls/';

export class Ofn {
  // region General

  public static issetGet = issetGet;
  public static type = type;
  public static isArray = isArray;
  public static isBoolean = isBoolean;
  public static isClass = isClass;
  public static isDate = isDate;
  public static isFunction = isFunction;
  public static isNull = isNull;
  public static isNully = isNully;
  public static isNumber = isNumber;
  public static isObject = isObject;
  public static isRegexp = isRegexp;
  public static isString = isString;
  public static isUndefined = isUndefined;

  // endregion
  // region Numbers

  public static isNumeric = isNumeric;
  public static isNumberic = isNumberic;
  public static isEven = isEven;
  public static isOdd = isOdd;
  public static randomMinMax = randomMinMax;
  public static numberFixDecimals = numberFixDecimals;
  public static numberPrintDecimals = numberPrintDecimals;

  // endregion
  // region String

  public static capitalize = capitalize;
  public static chunkStringByCharSize = chunkStringByCharSize;
  public static escAttr = escAttr;
  public static isStringJson = isStringJson;
  public static jsonParse = jsonParse;
  public static jsonStringify = jsonStringify;
  public static jsonize = jsonize;
  public static arrayize = arrayize;
  public static arrayizeString = arrayizeString;
  public static arrayizeObject = arrayizeObject;
  public static randomString = randomString;
  public static slugify = slugify;
  public static snakeify = snakeify;
  public static splitStringNumber = splitStringNumber;
  public static strPad = strPad;
  public static substrCount = substrCount;
  public static textTruncate = textTruncate;
  public static trimAll = trimAll;

  // endregion
  // region Crypto

  public static md5 = md5;
  public static strEncrypt = strEncrypt;
  public static strDecrypt = strDecrypt;

  // endregion
  // region Functions

  public static sleep = sleep;
  public static getFunctionName = getFunctionName;

  // endregion
  // region Classes

  public static getClassName = getClassName;
  public static getClassMethods = getClassMethods;
  public static getClassStaticMethods = getClassStaticMethods;

  // endregion
  // region Objects

  public static cloneObject = cloneObject;
  public static cloneObjectWithKeys = cloneObjectWithKeys;
  public static cloneObjectWithoutKeys = cloneObjectWithoutKeys;
  public static getObjectMissedKeys = getObjectMissedKeys;
  public static mergeObjectsDeep = mergeObjectsDeep;
  public static objGetMethods = objGetMethods;
  public static objHasKeys = objHasKeys;
  public static objIsEmpty = objIsEmpty;
  public static objIsNotEmpty = objIsNotEmpty;
  public static objToStringAttr = objToStringAttr;
  public static objToStringAttrData = objToStringAttrData;
  public static objToStringAttrJs = objToStringAttrJs;
  public static objToStringSqlSet = objToStringSqlSet;

  // endregion
  // region Arrays

  public static cloneArray = cloneArray;
  public static arrayCountByKey = arrayCountByKey;
  public static arrayGetUnique = arrayGetUnique;
  public static arrayGroupByKey = arrayGroupByKey;
  public static arraySortByKey = arraySortByKey;
  public static arrayToObjectByKey = arrayToObjectByKey;
  public static arrayValuesByKey = arrayValuesByKey;
  public static arraysDifference = arraysDifference;
  public static arraysDifferenceAll = arraysDifferenceAll;
  public static arraysIntersection = arraysIntersection;

  // endregion
  // region Dates

  public static dateObjByToday = dateObjByToday;
  public static dateObjByTimestamp = dateObjByTimestamp;
  public static dateObjBySql = dateObjBySql;
  public static dateObjByHtml = dateObjByHtml;
  public static dateObjByDate = dateObjByDate;
  public static dateObjPlusDays = dateObjPlusDays;
  public static dateIsObj = dateIsObj;
  public static isDateObj = isDateObj;
  public static datesCompare = datesCompare;
  public static dateIsBetween = dateIsBetween;
  public static datesDiffDays = datesDiffDays;
  public static datesDiffMonths = datesDiffMonths;
  public static datesDiffMonthsArray = datesDiffMonthsArray;
  public static dateCheckString = dateCheckString;

  // endregion
  // region URLs

  public static urlDecode = urlDecode;
  public static urlEncode = urlEncode;
  public static urlGetBase = urlGetBase;
  public static urlGetCurrentByReq = urlGetCurrentByReq;
  public static urlGetHostByReq = urlGetHostByReq;
  public static urlGetParams = urlGetParams;
  public static urlIsValid = urlIsValid;
  public static isValidUrl = isValidUrl;
  public static urlObjByUrl = urlObjByUrl;
  public static urlPlainToString = urlPlainToString;
  public static urlStringToPlain = urlStringToPlain;

  // endregion
  // region Files

  public static getFilenameExtByName = getFilenameExtByName;
  public static getFilenameWOutExtByName = getFilenameWOutExtByName;
  public static getFilenameByPath = getFilenameByPath;
  public static getFolderByPath = getFolderByPath;
  public static slugifyFilename = slugifyFilename;
  public static sanitizePath = sanitizePath;
  public static sanitizeFilename = sanitizeFilename;

  // endregion
  // region PHP Serialize

  public static phpSerialize = phpSerialize;
  public static phpUnserialize = phpUnserialize;
  public static phpIsSerialized = phpIsSerialized;

  // endregion
  // region Response

  public static setResponseKO = setResponseKO;
  public static setResponseOK = setResponseOK;

  // endregion
}
