// General
const { issetGet } = require( './general/isset-get' );
const { type } = require( './general/type' );
const { isArray } = require( './general/is-array' );
const { isBoolean } = require( './general/is-boolean' );
const { isClass } = require( './general/is-class' );
const { isDate } = require( './general/is-date' );
const { isFunction } = require( './general/is-function' );
const { isNull } = require( './general/is-null' );
const { isNully } = require( './general/is-nully' );
const { isNumber } = require( './general/is-number' );
const { isObject } = require( './general/is-object' );
const { isRegexp } = require( './general/is-regexp' );
const { isString } = require( './general/is-string' );
const { isUndefined } = require( './general/is-undefined' );

// Numbers
const { isNumeric, isNumberic } = require( './numbers/is-numeric' );
const { isEven } = require( './numbers/is-even' );
const { isOdd } = require( './numbers/is-odd' );
const { numberFixDecimals } = require( './numbers/number-fix-decimals' );
const { numberPrintDecimals } = require( './numbers/number-print-decimals' );
const { randomMinMax } = require( './numbers/random-min-max' );

// String
const { capitalize } = require( './strings/capitalize' );
const { chunkStringByCharSize } = require( './strings/chunk-string-by-char-size' );
const { escAttr } = require( './strings/esc-attr' );
const { isStringJson } = require( './strings/is-string-json' );
const { jsonParse } = require( './strings/json-parse' );
const { jsonStringify } = require( './strings/json-stringify' );
const { jsonize } = require( './strings/jsonize' );
const { arrayize } = require( './strings/arrayize' );
const { randomString } = require( './strings/random-string' );
const { slugify } = require( './strings/slugify' );
const { snakeify } = require( './strings/snakeify' );
const { splitStringNumber } = require( './strings/split-string-number' );
const { strPad } = require( './strings/str-pad' );
const { substrCount } = require( './strings/substr-count' );
const { textTruncate } = require( './strings/text-truncate' );
const { trimAll } = require( './strings/trim-all' );

// Crypto
const { md5 } = require( './crypto/md5' );
const { strEncrypt } = require( './crypto/str-encrypt' );
const { strDecrypt } = require( './crypto/str-decrypt' );

// Functions
const { sleep } = require( './functions/sleep' );
const { getFunctionName } = require( './functions/get-function-name' );

// Classes
const { getClassName } = require( './classes/get-class-name' );
const { getClassMethods } = require( './classes/get-class-methods' );
const { getClassStaticMethods } = require( './classes/get-class-static-methods' );

// Objects
const { cloneObject } = require( './objects/clone-object' );
const { cloneObjectWithKeys } = require( './objects/clone-object-with-keys' );
const { cloneObjectWithoutKeys } = require( './objects/clone-object-without-keys' );
const { getObjectMissedKeys } = require( './objects/get-object-missed-keys' );
const { mergeObjectsDeep } = require( './objects/merge-objects-deep' );
const { objGetMethods } = require( './objects/obj-get-methods' );
const { objHasKeys } = require( './objects/obj-has-keys' );
const { objIsEmpty } = require( './objects/obj-is-empty' );
const { objToStringAttr } = require( './objects/obj-to-string-attr' );
const { objToStringAttrData } = require( './objects/obj-to-string-attr-data' );
const { objToStringAttrJs } = require( './objects/obj-to-string-attr-js' );
const { objToStringSqlSet } = require( './objects/obj-to-string-sql-set' );

// Arrays
const { cloneArray } = require( './arrays/clone-array' );
const { arrayCountByKey } = require( './arrays/array-count-by-key' );
const { arrayGetUnique } = require( './arrays/array-get-unique' );
const { arrayGroupByKey } = require( './arrays/array-group-by-key' );
const { arraySortByKey } = require( './arrays/array-sort-by-key' );
const { arrayToObjectByKey } = require( './arrays/array-to-object-by-key' );
const { arrayValuesByKey } = require( './arrays/array-values-by-key' );
const { arraysDifference } = require( './arrays/arrays-difference' );
const { arraysDifferenceAll } = require( './arrays/arrays-difference-all' );
const { arraysIntersection } = require( './arrays/arrays-intersection' );

// Dates
const { dateObjByToday } = require( './dates/date-obj-by-today' );
const { dateObjByTimestamp } = require( './dates/date-obj-by-timestamp' );
const { dateObjBySql } = require( './dates/date-obj-by-sql' );
const { dateObjByHtml } = require( './dates/date-obj-by-html' );
const { dateObjByDate } = require( './dates/date-obj-by-date' );
const { dateObjPlusDays } = require( './dates/date-obj-plus-days' );
const { isDateObj, dateIsObj } = require( './dates/is-date-obj' );
const { datesCompare } = require( './dates/dates-compare' );
const { dateIsBetween } = require( './dates/date-is-between' );
const { datesDiffDays } = require( './dates/dates-diff-days' );
const { datesDiffMonths } = require( './dates/dates-diff-months' );
const { datesDiffMonthsArray } = require( './dates/dates-diff-months-array' );
const { dateCheckString } = require( './dates/date-check-string' );

// Urls
const { urlDecode } = require( './urls/url-decode' );
const { urlEncode } = require( './urls/url-encode' );
const { urlGetBase } = require( './urls/url-get-base' );
const { urlGetCurrentByReq } = require( './urls/url-get-current-by-req' );
const { urlGetHostByReq } = require( './urls/url-get-host-by-req' );
const { urlGetParams } = require( './urls/url-get-params' );
const { urlIsValid } = require( './urls/url-is-valid' );
const { urlObjByUrl } = require( './urls/url-obj-by-url' );
const { urlPlainToString } = require( './urls/url-plain-to-string' );
const { urlStringToPlain } = require( './urls/url-string-to-plain' );

// Files
const { getFilenameByPath } = require( './files/get-filename-by-path' );
const { getFilenameExtByName } = require( './files/get-filename-ext-by-name' );
const { getFilenameWOutExtByName } = require( './files/get-filename-wout-ext-by-name' );
const { getFolderByPath } = require( './files/get-folder-by-path' );
const { sanitizeFilename } = require( './files/sanitize-filename' );
const { sanitizePath } = require( './files/sanitize-path' );
const { slugifyFilename } = require( './files/slugify-filename' );

// PHP Serialize
const { phpSerialize } = require( './php-serialize/php-serialize' );
const { phpUnserialize } = require( './php-serialize/php-unserialize' );
const { phpIsSerialized } = require( './php-serialize/php-is-serialized' );

// Response
const { setResponseKO } = require( './set-response/set-response-ko' );
const { setResponseOK } = require( './set-response/set-response-ok' );

module.exports = {
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
    isNumeric,
    isNumberic,
    isEven,
    isOdd,
    numberFixDecimals,
    numberPrintDecimals,
    randomMinMax,

    // String
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
    getFilenameByPath,
    getFilenameExtByName,
    getFilenameWOutExtByName,
    getFolderByPath,
    sanitizeFilename,
    sanitizePath,
    slugifyFilename,

    // PHP Serialize
    phpSerialize,
    phpUnserialize,
    phpIsSerialized,

    // Response
    setResponseKO,
    setResponseOK,
}