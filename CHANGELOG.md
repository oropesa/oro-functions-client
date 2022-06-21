## 1.3.6 / 2022-06-21
* Fixed _method_ `type` improving when param `obj` is a `class` or a `function`.
* Added in _method_ `type` the second param `strict` to return the `class name` of an `object`. 
* Added _method_ `isFunction`.
* Updated lib-dev `jest` to `v28.1.1`.

## 1.3.5 / 2022-05-25
* Fixed _method_ `getFunctionName` getting name as _error message_ of `captureStackTrace`.
* Updated lib-dev `jest` to `v28.1.0`.

## 1.3.4 / 2022-04-06
* Fixed in _method_ `getFilenameExtByName` when `filename` hasn't dot `.`, return empty string `''` because there is no _extension_.

## 1.3.3 / 2022-03-10
* Fixed in _method_ `dateObjByDate` removing `dateObj.timezone` for bad implementation.

## 1.3.2 / 2022-03-10
* Updated _methods_ `dateObjByToday`, `dateObjByTimestamp`, `dateObjBySql`, `dateObjByHtml`, `dateObjByDate` changing second params as `opts`, allowing `{ sep, timezone }`.
* Updated _method_ `dateObjByDate` adding in `dateObj` the properties `timezone`, `sqldatetimeIso`. 

## 1.3.1 / 2021-12-28
* Updated _method_ `arraySortByKey` adding the third param `sortArray`.

## 1.3.0 / 2021-12-17
* Deleted _method_ `cryptoGenerateKeyPair` and moved to `oro-functions` because it breaks in _front frameworks_ like `Vue`.

## 1.2.1 / 2021-12-14
* Updated _method_ `cryptoGenerateKeyPair`, giving as default `RSA PUBLIC KEY`, `RSA PRIVATE KEY`, and `response.passphrase`.

## 1.2.0 / 2021-12-14
* Added _method_ `cryptoGenerateKeyPair`.
* Updated lib `js-base64` to `v3.7.2`.
* Updated lib `jest` to `v27.4.5`.
  
## 1.1.0 / 2021-12-07
* Added _methods_:
  * `isClass`
  * `getClassName`
  * `getClassMethods`
  * `getClassStaticMethods`

## 1.0.1 / 2021-09-21
* Fixed methods (param `array` could have undefined values and them has to been avoided).
  * `arrayToObjectByKey`
  * `arrayValuesByKey`
  * `arrayCountByKey`
  * `arrayGroupByKey`
  * `arraySortByKey`

## 1.0.0 / 2021-08-23
* Added _unit testing_ `Jest`.
* Added `MIT License`.
* Added _package_ in `github.com` & `npmjs.com`.
* Added _methods_:
    * `isDate`
    * `isUndefined`
    * `isNull`
    * `isNully`
    * `isNumeric`
    * `arraysDifferenceAll`
    * `urlIsValid`
    * `urlObjByUrl`

* Modified _method names_:    
    * `sanitizeSpaces` to `trimAll`
    * `urlString2urlPlain` to `urlStringToPlain`
    * `urlPlain2urlString` to `urlPlainToString`

* Updated _methods_:
    * `textTruncate` has second param default `max = 120`.
    * `randomString` has param default `len = 8`.
    * `objGetMethods` has second param default `allowDefaults = false`.
    * `cloneObject` remove second param `deep` (it was always set as `true`).
    * `mergeObjectsDeep` allow several objects as `arguments`.
    * `arraysIntersection` allow several objects as `arguments`.
    * `arraysDifference` allow several objects as `arguments`, remove third param `full` to use instead `arraysDifferenceAll()`.
    * `arrayToObjectByKey` has third param default `strict = false`.
    * `arrayValuesByKey` has third param default `strict = false`.
    * `arrayCountByKey` has third param default `strict = false`.
    * `arrayGroupByKey` has third param default `strict = false`.
    * `urlGetParams` change param from `query` to `urlOrQuery`.
    * `getFilenameExtByName` change param from `filename` to `filenameOrPath`.
    * `getFilenameWOutExtByName` change param from `filename` to `filenameOrPath`.
    * `slugifyFilename` change param from `filename` to `filenameOrPath`.
    * `sanitizeFilename` change param from `filename` to `filenameOrPath`.
    * `getFilenameByPath` change param from `filepath` to `path`.
    * `getFolderByPath` change param from `filepath` to `path`.
    * `sanitizePath` change param from `filepath` to `path`.

## 0.23.1 / 2021-07-07
- Updated method `getFilenameByPath` has second param `deep = 1`.

## 0.23.1 / 2021-07-07
- Fixed method `phpUnserialize param:showError`.

## 0.23.0 / 2021-07-07
- Updated method `isStringJson` has second param `allowArray = false`.
- Updated method `jsonStringify` change second param default `beautify = false`.
- Updated method `jsonize` has second param `strict = false` and `return null` when is `true`.
- Updated method `phpSerialize` has second param `strict = false` and call `jsonStringify` instead 'serialized' when `strict = false`.
- Updated method `phpUnserialize` has second param `strict = false` and call `jsonParse` instead 'unserialized' when `strict = false`.
- Added method `arrayize` to return an _array_ when param is _str_ or _object_.
- Added method `jsonParse` to return an _object_ or _array_ when `jsonStringify`.

## 0.22.0 / 2021-06-29
* Added methods `objToStringAttr`, `objToStringAttrData`, `objToStringAttrJs`.
* Deprecated method `castObj2StringSqlSet`, now use `objToStringSqlSet`.

## 0.21.0 / 2021-06-28
* Added method `urlGetHostByReq`.

## 0.20.1 / 2021-06-28
* Fixed and updated method `jsonStringify` with second params `beautify`.

## 0.20.0 / 2021-06-25
* Added method `arraysDifference`.

## 0.19.1 / 2021-06-18
* Fixed `dateObj.local` (like _ISOString_).

## 0.19.0 / 2021-06-18
* Added method `isRegexp`.
* Fixed dateObj (use _LocaleString_ instead of _ISOString_).

## 0.18.3 / 2021-05-20
* Fixed methods `strEncrypt` and `strDecrypt`, cast `str` to string.

## 0.18.1 && 0.18.2 / 2021-05-18
* Fixed method `sanitizePath` when filePath starts with `\\` (_Windows issue_).

## 0.18.0 / 2021-05-18
* Added methods `urlString2urlPlain`, `urlPlain2urlString`.

## 0.17.0 / 2021-05-17
* Added methods `strEncrypt`, `strDecrypt`.

## 0.16.0 / 2021-05-17
* Added method `substrCount`.

## 0.15.0 / 2021-05-17
* Added method `md5`.
* Fixed _Readme.md_ title.

## 0.14.0 / 2021-05-14
* Added method `splitStringNumber`.

## 0.13.0 / 2021-05-14
* Added method `escAttr`.

## 0.12.0 / 2021-05-13
* Added methods `numberFixDecimals`, `numberPrintDecimals`.

## 0.11.0 / 2021-05-06
* Added method `castObj2StringSqlSet`.

## 0.10.1 / 2021-04-30
* Refactor method `setResponseKO`, add param `asError` to have a cleaner returned object.
* Fix method `setResponseKO`, clone param `error` deeply to prevent poisoning the object.
* Fix method `setResponseOK`, clone param `data` deeply to prevent poisoning the object.


## 0.10.0 / 2021-04-30
* Added method `objGetMethods`.

## 0.9.2 / 2021-04-30
* Fix && Allow method `setResponseKO` to use as _Error_, i.e., `throw Ofn.setResponseKO( 'msg' )`.

## 0.9.0 / 2021-04-23
* Added method `mergeObjectsDeep`.

## 0.8.1 / 2021-04-22
* Fixed bad function structure of method `urlGetCurrentByReq`.

## 0.8.0 / 2021-04-22
* Added method `urlGetCurrentByReq`.

## 0.7.2 / 2021-04-22
* Added method `urlDecode` (the opposite of `urlEncode`).

## 0.7.1 / 2021-04-21
* Fixed `readme` install information.

## 0.7.0 / 2021-04-21
* Separate `oro-functions-client` from `oro-functions` to allow using the lib on _client-side_.

## 0.6.1 / 2021-04-21
* Update library `oro-regexp` to `v0.1.0`.

## 0.6.0 / 2021-04-17
* Add method `sleep`.

## 0.5.2 / 2021-04-15
* Fix method `sanitizePath` when `filepath` is not `string`.

## 0.5.1 / 2021-04-14
* Fix method `chunkStringByCharSize` when `str` is `number`.

## 0.5.0 / 2021-04-12
* Add method `arraysIntersection`.

## 0.4.0 / 2021-04-12
* Add method `getFunctionName`.

## 0.3.1 / 2021-04-12
* Fix no param *error* in `setResponseOK`.

## 0.3.0 / 2021-04-08
* Add method `jsonize`.

## 0.2.4 / 2021-04-06
* Replicate method as *sync mode* `getFileJsonRecursivelySync`.

## 0.2.3 / 2021-03-30
* Fixed folder of method `getFileJsonRecursively`.

## 0.2.2 / 2021-03-29
* Added npm-atob to ensure method `jwkTokenDecode` on Windows.

## 0.2.1 / 2021-03-25
* Added methods `chunkStringByCharSize`.

## 0.1.1 / 2021-03-24
* Fix tag *async* of `getFileJsonRecursively`.

## 0.1.0 / 2021-03-24
* Added changelog.
* Added npm fs-extra. 
* Added methods *async* `getFileJsonRecursively`.
