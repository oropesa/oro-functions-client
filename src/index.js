// General
export const { issetGet } = require( './general/isset-get' );
export const { type } = require( './general/type' );
export const { isArray } = require( './general/is-array' );
export const { isBoolean } = require( './general/is-boolean' );
export const { isClass } = require( './general/is-class' );
export const { isDate } = require( './general/is-date' );
export const { isFunction } = require( './general/is-function' );
export const { isNull } = require( './general/is-null' );
export const { isNully } = require( './general/is-nully' );
export const { isNumber } = require( './general/is-number' );
export const { isObject } = require( './general/is-object' );
export const { isRegexp } = require( './general/is-regexp' );
export const { isString } = require( './general/is-string' );
export const { isUndefined } = require( './general/is-undefined' );

// Numbers
export const { isNumeric, isNumberic } = require( './numbers/is-numeric' );
export const { isEven } = require( './numbers/is-even' );
export const { isOdd } = require( './numbers/is-odd' );
export const { numberFixDecimals } = require( './numbers/number-fix-decimals' );
export const { numberPrintDecimals } = require( './numbers/number-print-decimals' );
export const { randomMinMax } = require( './numbers/random-min-max' );

// String
export const { capitalize } = require( './strings/capitalize' );
export const { chunkStringByCharSize } = require( './strings/chunk-string-by-char-size' );
export const { escAttr } = require( './strings/esc-attr' );
export const { isStringJson } = require( './strings/is-string-json' );
export const { jsonParse } = require( './strings/json-parse' );
export const { jsonStringify } = require( './strings/json-stringify' );
export const { jsonize } = require( './strings/jsonize' );
export const { arrayize } = require( './strings/arrayize' );
export const { randomString } = require( './strings/random-string' );
export const { slugify } = require( './strings/slugify' );
export const { snakeify } = require( './strings/snakeify' );
export const { splitStringNumber } = require( './strings/split-string-number' );
export const { strPad } = require( './strings/str-pad' );
export const { substrCount } = require( './strings/substr-count' );
export const { textTruncate } = require( './strings/text-truncate' );
export const { trimAll } = require( './strings/trim-all' );

// Crypto
export const { md5 } = require( './crypto/md5' );
export const { strEncrypt } = require( './crypto/str-encrypt' );
export const { strDecrypt } = require( './crypto/str-decrypt' );

// Functions
export const { sleep } = require( './functions/sleep' );
export const { getFunctionName } = require( './functions/get-function-name' );

// Classes
export const { getClassName } = require( './classes/get-class-name' );
export const { getClassMethods } = require( './classes/get-class-methods' );
export const { getClassStaticMethods } = require( './classes/get-class-static-methods' );

// Objects
export const { cloneObject } = require( './objects/clone-object' );
export const { cloneObjectWithKeys } = require( './objects/clone-object-with-keys' );
export const { cloneObjectWithoutKeys } = require( './objects/clone-object-without-keys' );
export const { getObjectMissedKeys } = require( './objects/get-object-missed-keys' );
export const { mergeObjectsDeep } = require( './objects/merge-objects-deep' );
export const { objGetMethods } = require( './objects/obj-get-methods' );
export const { objHasKeys } = require( './objects/obj-has-keys' );
export const { objIsEmpty } = require( './objects/obj-is-empty' );
export const { objToStringAttr } = require( './objects/obj-to-string-attr' );
export const { objToStringAttrData } = require( './objects/obj-to-string-attr-data' );
export const { objToStringAttrJs } = require( './objects/obj-to-string-attr-js' );
export const { objToStringSqlSet } = require( './objects/obj-to-string-sql-set' );

// Arrays
export const { cloneArray } = require( './arrays/clone-array' );
export const { arrayCountByKey } = require( './arrays/array-count-by-key' );
export const { arrayGetUnique } = require( './arrays/array-get-unique' );
export const { arrayGroupByKey } = require( './arrays/array-group-by-key' );
export const { arraySortByKey } = require( './arrays/array-sort-by-key' );
export const { arrayToObjectByKey } = require( './arrays/array-to-object-by-key' );
export const { arrayValuesByKey } = require( './arrays/array-values-by-key' );
export const { arraysDifference } = require( './arrays/arrays-difference' );
export const { arraysDifferenceAll } = require( './arrays/arrays-difference-all' );
export const { arraysIntersection } = require( './arrays/arrays-intersection' );

// Dates
export const { dateObjByToday } = require( './dates/date-obj-by-today' );
export const { dateObjByTimestamp } = require( './dates/date-obj-by-timestamp' );
export const { dateObjBySql } = require( './dates/date-obj-by-sql' );
export const { dateObjByHtml } = require( './dates/date-obj-by-html' );
export const { dateObjByDate } = require( './dates/date-obj-by-date' );
export const { dateObjPlusDays } = require( './dates/date-obj-plus-days' );
export const { isDateObj, dateIsObj } = require( './dates/is-date-obj' );
export const { datesCompare } = require( './dates/dates-compare' );
export const { dateIsBetween } = require( './dates/date-is-between' );
export const { datesDiffDays } = require( './dates/dates-diff-days' );
export const { datesDiffMonths } = require( './dates/dates-diff-months' );
export const { datesDiffMonthsArray } = require( './dates/dates-diff-months-array' );
export const { dateCheckString } = require( './dates/date-check-string' );

// Urls
export const { urlDecode } = require( './urls/url-decode' );
export const { urlEncode } = require( './urls/url-encode' );
export const { urlGetBase } = require( './urls/url-get-base' );
export const { urlGetCurrentByReq } = require( './urls/url-get-current-by-req' );
export const { urlGetHostByReq } = require( './urls/url-get-host-by-req' );
export const { urlGetParams } = require( './urls/url-get-params' );
export const { urlIsValid } = require( './urls/url-is-valid' );
export const { urlObjByUrl } = require( './urls/url-obj-by-url' );
export const { urlPlainToString } = require( './urls/url-plain-to-string' );
export const { urlStringToPlain } = require( './urls/url-string-to-plain' );

// Files
export const { getFilenameByPath } = require( './files/get-filename-by-path' );
export const { getFilenameExtByName } = require( './files/get-filename-ext-by-name' );
export const { getFilenameWOutExtByName } = require( './files/get-filename-wout-ext-by-name' );
export const { getFolderByPath } = require( './files/get-folder-by-path' );
export const { sanitizeFilename } = require( './files/sanitize-filename' );
export const { sanitizePath } = require( './files/sanitize-path' );
export const { slugifyFilename } = require( './files/slugify-filename' );

// PHP Serialize
export const { phpSerialize } = require( './php-serialize/php-serialize' );
export const { phpUnserialize } = require( './php-serialize/php-unserialize' );
export const { phpIsSerialized } = require( './php-serialize/php-is-serialized' );

// Response
export const { setResponseKO } = require( './set-response/set-response-ko' );
export const { setResponseOK } = require( './set-response/set-response-ok' );
