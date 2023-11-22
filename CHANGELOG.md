## 2.1.1 / 2023-11-24
* Fixed _github action_ `npm_publish_on_pr_merge_to_master`.
* Updated libs:
  * `oro-php-locutus` from `v2.0.1` to `v2.0.2`.
  * `oro-regexp` from `v2.0.1` to `v2.0.2`.
* Updated _dev_ libs:
  * `@babel/core` from `v7.23.2` to `v7.23.3`.
  * `@babel/preset-env` from `v7.23.2` to `v7.23.3`.
  * `@babel/preset-typescript` from `v7.23.2` to `v7.23.3`.
  * `@types/crypto-js` from `v4.1.3` to `v4.2.1`.
  * `@types/express` from `v4.17.20` to `v4.17.21`.
  * `@types/jest` from `v29.5.6` to `v29.5.10`.
  * `@types/lodash.clonedeep` from `v4.5.8` to `v4.5.9`.
  * `@typescript-eslint/eslint-plugin` from `v6.9.0` to `v6.12.0`.
  * `@typescript-eslint/parser` from `v6.9.0` to `v6.12.0`.
  * `eslint` from `v8.52.0` to `v8.54.0`.
  * `eslint-plugin-unicorn` from `v48.0.1` to `v49.0.0`.
  * `prettier` from `v3.0.3` to `v3.1.0`.
  * `tsup` from `v7.2.0` to `v8.0.1`.

## 2.1.0 / 2023-10-26
* Updated _exports_ as `export * from ./source-file` in every `index` files.
* Improved _type definition_ for `setResponseOK` & `setResponseKO` using function overloads.
* Updated `setResponseOK` & `setResponseKO` providing more detailed outputs:
  * _SResponseOKBasic_ <small>`{ status: true  }`</small>
  * _SResponseOKSimple_ <small>`{ status: true, msg: string }`</small>
  * _SResponseOKObject_ <small>`{ status: true } & T`</small>
  * _SResponseOKObjectSimple_ <small>`{ status: true, msg: string} & T`</small>
  * _SResponseKOBasic_ <small>`{ status: false }`</small>
  * _SResponseKOBasicAgain_ <small>`{ status: false, tryAgain: boolean }`</small>
  * _SResponseKOSimple_ <small>`{ status: false, error: { msg: string } }`</small>
  * _SResponseKOSimpleAgain_ <small>`{ status: false, error: { msg: string }, tryAgain: boolean }`</small>
  * _SResponseKOObject_ <small>`{ status: false, error: T }`</small>
  * _SResponseKOObjectAgain_ <small>`{ status: false, error: T, tryAgain: boolean }`</small>
  * _SResponseKOObjectSimple_ <small>`{ status: false, error: T & { msg: string } }`</small>
  * _SResponseKOObjectSimpleAgain_ <small>`{ status: false, error: T & { msg: string }, tryAgain: boolean }`</small>
  * _SResponseErrorBasic_ <small>`Error & { responseError: SResponseKOBasic }`</small>
  * _SResponseErrorBasicAgain_ <small>`Error & { responseError: SResponseKOBasicAgain }`</small>
  * _SResponseErrorSimple_ <small>`Error & { responseError: SResponseKOSimple }`</small>
  * _SResponseErrorSimpleAgain_ <small>`Error & { responseError: SResponseKOSimpleAgain }`</small>
  * _SResponseErrorObject_ <small>`Error & { responseError: SResponseKOObject }`</small>
  * _SResponseErrorObjectAgain_ <small>`Error & { responseError: SResponseKOObjectAgain }`</small>
  * _SResponseErrorObjectSimple_ <small>`Error & { responseError: SResponseKOObjectSimple }`</small>
  * _SResponseErrorObjectSimpleAgain_ <small>`Error & { responseError: SResponseKOObjectSimpleAgain }`</small>
* Updated libs:
  * `crypto-js` from `4.1.1` to `4.2.0` <small>(security issue)</small>
  
## 2.0.1 / 2023-10-24
* Updated libs:
  * `oro-php-locutus` from `2.0.0` to `2.0.1`
  * `oro-regexp` from `2.0.0` to `2.0.1`

## 2.0.0 / 2023-10-24

**NOTE:**<br>
⚠️ It's not valid anymore:<br>`const Ofn = require('oro-functions-client')`,<br>
✔️ use the following instead:<br>`const { Ofn } = require('oro-functions-client')`

* Added _methods_:
  * `objIsNotEmpty`.
  * `arrayizeString`.
  * `arrayizeObject`.
* Updated methods `isEven`, `isOdd` and now they return always boolean (`false` instead of `undefined`) when it's not _numeric_.
* Updated method `urlObjByUrl` and now it returns `URL | undefined` (instead of `URL | null`).
* Refactored `*.js` to `src/*.ts`.
* Improved _typescript output declarations_.
* Updated _package_ as `type: "module"`.
* Added `tsup` and now _package_ is compiled to `cjs` _(common)_ and `mjs` _(module)_.
* Added _github actions_:
  * `validate_pr_to_master`
  * `npm_publish_on_pr_merge_to_master`.
* Added `husky` (to ensure only valid commits).
* Added `eslint` (and applied it).
* Added `prettier` (and applied it).
* Updated _package description_
* Updated libs:
  * `oro-php-locutus` to `2.0.0`
  * `oro-regexp` to `2.0.0`
* Updated _dev_ libs:
  * `@babel/core` to `v7.23.2`.
  * `@babel/preset-env` to `v7.23.2`.
  * `@babel/preset-typescript` to `v7.23.2`.
  * `@types/express` to `4.17.20`
  * `@types/jest` to `v29.5.6`.
  * `babel-jest` to `v29.7.0`.
  * `jest` to `v29.7.0`.

## 1.5.4 & 1.5.3 & 1.5.2 / 2023-06-07
* Fixed _type_ declaration of `SResponseOK`, `SResponseKO`.
* Added _type_ `SResponse`, `SResponseError`.

## 1.5.1 / 2023-06-05
* Fixed remove `export` from `index.js`.

## 1.5.0 / 2023-06-05
* Added `TS` support.
* Added _ts tests_.
* Improved _tests_.
* Improved _readme_.
* Improved _fn_ `cloneObject` benchmark using `lodash.clonedeep`.
* Renamed _fn_ `dateIsObj` (deprecated) by `isDateObj`.
* Updated lib `js-base64` to `v3.7.5`.
* Updated lib `oro-php-locutus` to `v1.3.0`.
* Updated lib `oro-regexp` to `v1.3.0`.
* Updated lib-dev `jest` to `v29.5.0`.
* Allow to get functions individually in `/src`:
  * `const { fn1, fn2, ... } = require( 'oro-functions-client/src' )`

## 1.4.1 / 2022-08-16
* Updated lib `oro-php-locutus` to `v1.1.1`.

## 1.4.0 / 2022-08-03
* Updated _Readme_ and `tests/`.
* Added `package-lock.json`.
* Updated lib `oro-php-locutus` to `v1.1.0`.
* Updated lib `oro-regexp` to `v1.2.0`.
* Updated lib-dev `jest` to `v28.1.3`.

## 1.3.7 / 2022-06-21
* Fixed _method_ `type` when param `strict` is `true` and _test_ different cases.

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
