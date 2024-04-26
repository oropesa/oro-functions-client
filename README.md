# Oro Functions Client

- [Overview](#overview)
- [Installation](#installation)
- [Example](#example)
- [Methods](#methods)

## Overview

**Ofn** contains utility static methods (helpers).

This package ( `oro-functions-client` ) is divided from `oro-functions` to allow using it in _js-client environments_ like `Vuejs` or `React`.

If you are going to use this package in _js-server environments_ like `Nodejs`, it's recommended to use _[oro-functions](https://github.com/oropesa/oro-functions/)_ instead.

Functions could be divided in groups: <br>
· [General](#general) <br>
· [Numbers](#numbers) <br>
· [String](#string) <br>
· [Crypto](#crypto) <br>
· [Functions](#functions) <br>
· [Classes](#objects) <br>
· [Objects](#objects) <br>
· [Arrays](#arrays) <br>
· [Dates](#dates) <br>
· [URLs](#urls) <br>
· [Files](#files) <br>
· [PHP Serialize](#php-serialize) <br>
· [Response](#response) <br>

## Installation

```shell
npm install oro-functions-client
```

## Example:

```js
// cjs
const { Ofn } = require( 'oro-functions-client' );

// mjs, ts
import { Ofn } from 'oro-functions-client';

Ofn.type( [ 1, 2, 3 ] ); // -> 'array'
```

also every method could be called individually:

```js
// cjs
const { type } = require( 'oro-functions-client' );

// mjs, ts
import { type } from 'oro-functions-client';

type( [ 1, 2, 3 ] ); // -> 'array'
```

## Methods

- [General](#general)

  - [Ofn.issetGet()](#ofnissetget)
  - [Ofn.type()](#ofntype)
  - [Ofn.isArray()](#ofnisarray)
  - [Ofn.isBoolean()](#ofnisboolean)
  - [Ofn.isClass()](#ofnisclass)
  - [Ofn.isDate()](#ofnisdate)
  - [Ofn.isFunction()](#ofnisfunction)
  - [Ofn.isNull()](#ofnisnull)
  - [Ofn.isNully()](#ofnisnully)
  - [Ofn.isNumber()](#ofnisnumber)
  - [Ofn.isObject()](#ofnisobject)
  - [Ofn.isRegexp()](#ofnisregexp)
  - [Ofn.isString()](#ofnisstring)
  - [Ofn.isUndefined()](#ofnisundefined)

- [Numbers](#numbers)

  - [Ofn.isNumeric()](#ofnisnumeric)
  - [Ofn.isEven()](#ofniseven)
  - [Ofn.isOdd()](#ofnisodd)
  - [Ofn.numberFixDecimals()](#ofnnumberfixdecimals)
  - [Ofn.numberPrintDecimals()](#ofnnumberprintdecimals)
  - [Ofn.randomMinMax()](#ofnrandomminmax)

- [String](#string)

  - [Ofn.capitalize()](#ofncapitalize)
  - [Ofn.chunkStringByCharSize()](#ofnchunkstringbycharsize)
  - [Ofn.escAttr()](#ofnescattr)
  - [Ofn.isStringJson()](#ofnisstringjson)
  - [Ofn.jsonParse()](#ofnjsonparse)
  - [Ofn.jsonStringify()](#ofnjsonstringify)
  - [Ofn.jsonize()](#ofnjsonize)
  - [Ofn.arrayize()](#ofnarrayize)
  - [Ofn.arrayizeString()](#ofnarrayizestring)
  - [Ofn.arrayizeObject()](#ofnarrayizeobject)
  - [Ofn.randomString()](#ofnrandomstring)
  - [Ofn.slugify()](#ofnslugify)
  - [Ofn.snakeify()](#ofnsnakeify)
  - [Ofn.splitStringNumber()](#ofnsplitstringnumber)
  - [Ofn.strPad()](#ofnstrpad)
  - [Ofn.substrCount()](#ofnsubstrcount)
  - [Ofn.textTruncate()](#ofntexttruncate)
  - [Ofn.trimAll()](#ofntrimall)

- [Crypto](#crypto)

  - [Ofn.md5()](#ofnmd5)
  - [Ofn.strEncrypt()](#ofnstrencrypt)
  - [Ofn.strDecrypt()](#ofnstrdecrypt)

- [Functions](#functions)

  - [await Ofn.sleep()](#await-ofnsleep)
  - [Ofn.getFunctionName()](#ofngetfunctionname)

- [Classes](#objects)

  - [Ofn.getClassName()](#ofngetclassname)
  - [Ofn.getClassMethods()](#ofngetclassmethods)
  - [Ofn.getClassStaticMethods()](#ofngetclassstaticmethods)

- [Objects](#objects)

  - [Ofn.cloneObject()](#ofncloneobject)
  - [Ofn.cloneObjectWithKeys()](#ofncloneobjectwithkeys)
  - [Ofn.cloneObjectWithoutKeys()](#ofncloneobjectwithoutkeys)
  - [Ofn.getObjectMissedKeys()](#ofngetobjectmissedkeys)
  - [Ofn.mergeObjectsDeep()](#ofnmergeobjectsdeep)
  - [Ofn.objGetMethods()](#ofnobjgetmethods)
  - [Ofn.objHasKeys()](#ofnobjhaskeys)
  - [Ofn.objIsNotEmpty()](#ofnobjisnotempty)
  - [Ofn.objIsEmpty()](#ofnobjisempty)
  - [Ofn.objToStringAttr()](#ofnobjtostringattr)
  - [Ofn.objToStringAttrData()](#ofnobjtostringattrdata)
  - [Ofn.objToStringAttrJs()](#ofnobjtostringattrjs)
  - [Ofn.objToStringSqlSet()](#ofnobjtostringsqlset)

- [Arrays](#arrays)

  - [Ofn.cloneArray()](#ofnclonearray)
  - [Ofn.arrayCountByKey()](#ofnarraycountbykey)
  - [Ofn.arrayGetUnique()](#ofnarraygetunique)
  - [Ofn.arrayGroupByKey()](#ofnarraygroupbykey)
  - [Ofn.arraySortByKey()](#ofnarraysortbykey)
  - [Ofn.arrayToObjectByKey()](#ofnarraytoobjectbykey)
  - [Ofn.arrayValuesByKey()](#ofnarrayvaluesbykey)
  - [Ofn.arraysDifference()](#ofnarraysdifference)
  - [Ofn.arraysDifferenceAll()](#ofnarraysdifferenceall)
  - [Ofn.arraysIntersection()](#ofnarraysintersection)

- [Dates](#dates)

  - [Ofn.dateObjByDate()](#ofndateobjbydate)
  - [Ofn.dateObjByHtml()](#ofndateobjbyhtml)
  - [Ofn.dateObjBySql()](#ofndateobjbysql)
  - [Ofn.dateObjByTimestamp()](#ofndateobjbytimestamp)
  - [Ofn.dateObjByToday()](#ofndateobjbytoday)
  - [Ofn.dateObjPlusDays()](#ofndateobjplusdays)
  - [Ofn.isDateObj()](#ofnisdateobj)
  - [Ofn.datesCompare()](#ofndatescompare)
  - [Ofn.dateIsBetween()](#ofndateisbetween)
  - [Ofn.datesDiffDays()](#ofndatesdiffdays)
  - [Ofn.datesDiffMonths()](#ofndatesdiffmonths)
  - [Ofn.datesDiffMonthsArray()](#ofndatesdiffmonthsarray)
  - [Ofn.dateCheckString()](#ofndatecheckstring)

- [URLs](#urls)

  - [Ofn.urlDecode()](#ofnurldecode)
  - [Ofn.urlEncode()](#ofnurlencode)
  - [Ofn.urlGetBase()](#ofnurlgetbase)
  - [Ofn.urlGetCurrentByReq()](#ofnurlgetcurrentbyreq)
  - [Ofn.urlGetHostByReq()](#ofnurlgethostbyreq)
  - [Ofn.urlGetParams()](#ofnurlgetparams)
  - [Ofn.urlIsValid()](#ofnurlisvalid)
  - [Ofn.urlObjByUrl()](#ofnurlobjbyurl)
  - [Ofn.urlPlainToString()](#ofnurlplaintostring)
  - [Ofn.urlStringToPlain()](#ofnurlstringtoplain)

- [Files](#files)

  - [Ofn.getFilenameByPath()](#ofngetfilenamebypath)
  - [Ofn.getFilenameExtByName()](#ofngetfilenameextbyname)
  - [Ofn.getFilenameWOutExtByName()](#ofngetfilenamewoutextbyname)
  - [Ofn.getFolderByPath()](#ofngetfolderbypath)
  - [Ofn.sanitizeFilename()](#ofnsanitizefilename)
  - [Ofn.sanitizePath()](#ofnsanitizepath)
  - [Ofn.slugifyFilename()](#ofnslugifyfilename)

- [PHP Serialize](#php-serialize)

  - [Ofn.phpIsSerialized()](#ofnphpisserialized)
  - [Ofn.phpSerialize()](#ofnphpserialize-mixedvalue)
  - [Ofn.phpUnserialize()](#ofnphpunserialize)

- [Response](#response)
  - [Ofn.setResponseOK()](#ofnsetresponseok)
  - [Ofn.setResponseKO()](#ofnsetresponseko)

<hr>

### General

#### Ofn.issetGet()

```ts
Ofn.issetGet<
  T,
  O extends Record<string | number, any> = Record<string | number, any>, // object | array
  K extends string | number = string | number
>( obj: O, key: K, def?: T, allowFalsy = true ) => T | null;

// < T output-type, O object-interface, K allowed-keys>
// Note: 'key' should be number when 'obj' is an array
```

```js
// js
const obj1 = { name: 'Foo', label: 'foo' };
const obj2 = { name: 'Foo', label: '' };
const obj3 = { name: 'Foo' };

Ofn.issetGet(obj1, 'label', 'default');
// -> 'foo'
Ofn.issetGet(obj2, 'label', 'default');
// -> ''
Ofn.issetGet(obj2, 'label', 'default', false);
// -> 'default'
Ofn.issetGet(obj3, 'label', 'default');
// -> 'default'
```

```ts
// ts
interface Custom {
  name: string;
  label?: string;
}
type AllowedKeys = 'label' | 'another-label';

const obj1: Custom = { name: 'Foo', label: 'foo' };
const obj2: Custom = { name: 'Foo', label: '' };
const obj3: Custom = { name: 'Foo' };

Ofn.issetGet<string>(obj1, 'label', 'default');
// -> 'foo'
Ofn.issetGet<string, Custom>(obj2, 'label', 'default');
// -> ''
Ofn.issetGet<string, Custom, AllowedKeys>(obj2, 'label', 'default', false);
// -> 'default'
Ofn.issetGet<string, Custom, keyof Custom>(obj3, 'label', 'default');
// -> 'default'
```

#### Ofn.type()

```ts
Ofn.type( value: any, strict?: boolean ) => string;
```

```js
Ofn.type('foo'); // -> 'string'
Ofn.type(true); // -> 'boolean'
Ofn.type(12); // -> 'number'
Ofn.type({}); // -> 'object'
Ofn.type([]); // -> 'array'
Ofn.type(function () {}); // -> 'function'
Ofn.type(new Date()); // -> 'date'
```

```js
// Note: when obj is an obj-class

class MyClass {}
const foo = new MyClass();

Ofn.type(MyClass); // -> 'class'
Ofn.type(foo); // -> 'object'
Ofn.type(foo, true); // -> 'MyClass'
```

#### Ofn.isArray()

```ts
Ofn.isArray( value: any ) => boolean;
```

```js
Ofn.isArray([1, 2, 3]); // -> true
```

#### Ofn.isBoolean()

```ts
Ofn.isBoolean( value: any ) => boolean;
```

```js
Ofn.isBoolean(true); // -> true
Ofn.isBoolean(false); // -> true
```

#### Ofn.isClass()

```ts
Ofn.isClass( value: any ) => boolean;
```

```js
Ofn.isClass(Ofn); // -> true
```

#### Ofn.isDate()

```ts
Ofn.isDate( value: any ) => boolean;
```

```js
Ofn.isDate(new Date()); // -> true
```

#### Ofn.isFunction()

```ts
Ofn.isFunction( value: any ) => boolean;
```

```js
Ofn.isFunction(function () {}); // -> true
Ofn.isFunction(() => {}); // -> true
```

#### Ofn.isNull()

```ts
Ofn.isNull( value: any ) => boolean;
```

```js
Ofn.isNull(); // -> false
Ofn.isNull(null); // -> true
```

#### Ofn.isNully()

```ts
Ofn.isNully( value: any ) => boolean;
```

```js
Ofn.isNully(); // -> true
Ofn.isNully(null); // -> true
```

<hr>

#### Ofn.isNumber()

```ts
Ofn.isNumber( value: any ) => boolean;
```

```js
Ofn.isNumber(12); // -> true
Ofn.isNumber(1.2); // -> true
Ofn.isNumber(NaN); // -> true
```

#### Ofn.isObject()

```ts
Ofn.isObject( value: any ) => boolean;
```

```js
Ofn.isObject({}); // true
```

#### Ofn.isRegexp()

```ts
Ofn.isRegtsexp( value: any ) => boolean;
```

```js
Ofn.isRegexp(/([A-Z])\w+/); // -> true
```

#### Ofn.isString()

```ts
Ofn.isString( value: any ) => boolean;
```

```js
Ofn.isString('foo'); // -> true
```

#### Ofn.isUndefined()

```ts
Ofn.isUndefined( value: any ) => boolean;
```

```js
Ofn.isUndefined(); // -> true
Ofn.isUndefined(null); // -> false
```

### Numbers

#### Ofn.isNumeric()

```ts
Ofn.isNumeric( value: any ) => boolean;
```

```js
Ofn.isNumeric(NaN); // -> false
Ofn.isNumeric(2.14); // -> true
Ofn.isNumeric('2.14'); // -> true
Ofn.isNumeric('2,14'); // -> false
```

```js
// Note: for dislexia issues (with Ofn.isNumber)
Ofn.isNumberic(num);
```

#### Ofn.isEven()

```ts
Ofn.isEven( num: number ) => boolean;
```

```js
Ofn.isEven(0); // -> true
Ofn.isEven(1); // -> false

Ofn.isEven(NaN); // -> false
Ofn.isEven(0.2); // -> true
Ofn.isEven(1.2); // -> false
```

#### Ofn.isOdd()

```ts
Ofn.isOdd( num: number ) => boolean;
```

```js
Ofn.isOdd(0); // -> false
Ofn.isOdd(1); // -> true

Ofn.isOdd(NaN); // -> false
Ofn.isOdd(0.2); // -> false
Ofn.isOdd(1.2); // -> true
```

#### Ofn.numberFixDecimals()

```ts
Ofn.numberFixDecimals(
  num: number | string,
  decimalLength?: number | false,   // def: 2
  allowAllRightZeros?: boolean,     // def: true
  minRightZeros?: number | boolean, // def: true
) => string;
```

```js
Ofn.numberFixDecimals('2,1499'); // -> '2.15'
Ofn.numberFixDecimals('2.1499'); // -> '2.15'

Ofn.numberFixDecimals('2.14990', 0); // -> '2'
Ofn.numberFixDecimals('2.14990', 3); // -> '2.150'
Ofn.numberFixDecimals('2,14990', 6); // -> '2.149000'
Ofn.numberFixDecimals('2.14990', false); // -> '2.149'

Ofn.numberFixDecimals('2.14990', 6, false); // -> '2.1499'
Ofn.numberFixDecimals('2.14990', 3, false); // -> '2.15'
Ofn.numberFixDecimals('2.14990', 3, false, 3); // -> '2.150'

Ofn.numberFixDecimals('2.1387', 3, false, 2); // -> '2.139'
Ofn.numberFixDecimals('2.1999', 3, false, 2); // -> '2.20'

// More examples

Ofn.numberFixDecimals('2.1999', 2); // -> '2.20'
Ofn.numberFixDecimals('2', 2); // -> '2.00'

Ofn.numberFixDecimals('2.1999', 2, true, false); // -> '2.20'
Ofn.numberFixDecimals('2', 2, true, false); // -> '2'
```

#### Ofn.numberPrintDecimals()

```ts
Ofn.numberPrintDecimals(
  num: number | string,
  decimalLength?: number | false,   // def: 2
  allowAllRightZeros?: boolean,     // def: true
  minRightZeros?: number | boolean, // def: 2
) => string;
```

Is the same as [Ofn.numberFixDecimals](#ofnnumberfixdecimals),
but the separator is a comma `2,10`, not a dot `2.10`.

It's better to print, for example, in _excel fields_.

```js
Ofn.numberPrintDecimals('2,1499'); // -> '2,15'
Ofn.numberPrintDecimals('2.1499'); // -> '2,15'
```

<hr>

#### Ofn.randomMinMax()

```ts
Ofn.randomMinMax( min?: number, max?: number ) => number;
```

```js
Ofn.randomMinMax(); // -> random between 0 - 100
Ofn.randomMinMax(1, 10); // -> random between 1 - 10

Ofn.randomMinMax(10, 1); // -> random between 1 - 10
Ofn.randomMinMax(50); // -> random between 50 - 100
```

### String

#### Ofn.capitalize()

```ts
Ofn.capitalize( str: string ) => string;
```

```js
Ofn.capitalize('foo'); // -> 'Foo'
Ofn.capitalize('foo bar'); // -> 'Foo bar'
```

#### Ofn.chunkStringByCharSize()

```ts
Ofn.chunkStringByCharSize(
  str: string,
  char: string,
  size: number,
  orientation?: LeftRight  // def: 'left'
) => string;

type LeftRight = 'left' | 'right';
```

```js
Ofn.chunkStringByCharSize('1234567', '_', 2);
// -> '12_34_56_7'
Ofn.chunkStringByCharSize('1234567', '.', 3, 'right');
// -> '1.234.567'
```

#### Ofn.escAttr()

```ts
Ofn.escAttr( str: string ) => string;
```

```js
Ofn.escAttr('<span>foo</span>');
// -> '&amp;lt;span&amp;gt;foo&amp;lt;/span&amp;gt;'
```

#### Ofn.isStringJson()

```ts
Ofn.isStringJson( str: string, allowArray?: boolean ) => boolean;
```

```js
Ofn.isStringJson('{ "foo": "bar" }'); // -> true
Ofn.isStringJson('[ "foo", "bar" ]'); // -> false
Ofn.isStringJson('[ "foo", "bar" ]', true); // -> true
```

#### Ofn.jsonParse()

```ts
Ofn.jsonParse<T>( str: string, strict?: boolean ) => strict === true ? T | null : T | string
```

```js
Ofn.jsonParse('foo'); // -> 'foo'
Ofn.jsonParse('foo', true); // -> null

Ofn.jsonParse('{"foo":true}'); // -> { foo: true }

Ofn.jsonParse('[ 1, 2, 3 ]'); // -> [ 1, 2, 3 ]
Ofn.jsonParse('{"0":1,"1":2,"2":3}'); // -> [ 1, 2, 3 ]
Ofn.jsonParse('{"0":1,"1":2,"2":3}', true); // -> { "0": 1, "1": 2, "2": 3 }
```

#### Ofn.jsonStringify()

```ts
Ofn.jsonStringify<T extends Record<string | number, any>>(
  json: T,
  beautify = false,
) => string;
```

```js
Ofn.jsonStringify('foo'); // -> ''
Ofn.jsonStringify({ foo: true }); // -> '{"foo":true}'
Ofn.jsonStringify({ foo: true }, true); // -> `{\n  "foo": true\n}`

Ofn.jsonStringify([1, 2, 3]); // -> '{"0":1,"1":2,"2":3}'
```

#### Ofn.jsonize()

```ts
Ofn.jsonize<T>( str: string, strict?: boolean ) => strict === true ? T | null : T | string;
```

```js
Ofn.jsonize('foo'); // -> 'foo'
Ofn.jsonize('foo', true); // -> null

Ofn.jsonize('{"foo":true}'); // -> { foo: true }

Ofn.jsonize('[ 1, 2, 3 ]'); // -> [ 1, 2, 3 ]
Ofn.jsonize('{"0":1,"1":2,"2":3}'); // -> [ 1, 2, 3 ]

// note: to avoid cast array-object to array, use: Ofn.jsonParse(string, true)
```

#### Ofn.arrayize()

```ts
Ofn.arrayize< T, O extends Record<string, any> = Record<string, any> > ( strOrObject: string | O, strict?: boolean )
=> strict === true ? T | null : T | string | O;
```

```js
Ofn.arrayize('foo'); // -> 'foo'
Ofn.arrayize('foo', true); // -> null

Ofn.arrayize('{"foo":true}'); // -> [] with property foo = true
Ofn.arrayize({ foo: true }); // -> [] with property foo = true

Ofn.arrayize('[ 1, 2, 3 ]');
// -> [ 1, 2, 3 ]
Ofn.arrayize('{ "0":1, "2":3, "foo":true }');
// -> [ 1, undefined, 3 ] with property foo = true
```

#### Ofn.arrayizeString()

```ts
Ofn.arrayizeString<T>(str: string, strict?: boolean ) => strict === true ? T | null : T | string;
```

```js
Ofn.arrayizeString('foo'); // -> 'foo'
Ofn.arrayizeString('foo', true); // -> null

Ofn.arrayizeString('{"foo":true}'); // -> [] with property foo = true
Ofn.arrayizeString({ foo: true }, true); // -> null

Ofn.arrayizeString('[ 1, 2, 3 ]');
// -> [ 1, 2, 3 ]
Ofn.arrayizeString('{ "0":1, "2":3, "foo":true }');
// -> [ 1, undefined, 3 ] with property foo = true
```

#### Ofn.arrayizeObject()

```ts
Ofn.arrayizeObject< T, O extends Record<string, any> = Record<string, any> >(object: O, strict?: boolean)
=> strict === true ? T | null : T | O;
```

```js
Ofn.arrayizeObject('{"foo":true}', true); // -> null
Ofn.arrayizeObject({ foo: true }); // -> [] with property foo = true

Ofn.arrayizeObject([1, 2, 3]);
// -> [ 1, 2, 3 ]
Ofn.arrayizeObject({ 0: 1, 2: 3, foo: true });
// -> [ 1, undefined, 3 ] with property foo = true
```

#### Ofn.randomString()

```ts
Ofn.randomString(
  len: number // def: 8
) => string;
```

```js
Ofn.randomString(); // -> 'lw5ucmgj'
Ofn.randomString(24); // -> 'a6ji656qovq078j1vpcmxzms'
```

#### Ofn.slugify()

```ts
Ofn.slugify( str: string ) => string;
```

```js
Ofn.slugify('FOO Bar bazBaz'); // -> 'foo-bar-baz-baz'
```

#### Ofn.snakeify()

```ts
Ofn.snakeify( str: string ) => string;
```

```js
Ofn.snakeify('FOO Bar bazBaz'); // -> 'foo_bar_baz_baz'
```

#### Ofn.splitStringNumber()

```ts
Ofn.splitStringNumber(
  str: string,
  sep?: string // def: '|'
) => string[];
```

```js
Ofn.splitStringNumber('1.234.567', '.');
// -> [ '1', '234', '567' ]
```

#### Ofn.strPad()

```ts
Ofn.strPad = strPad(
  str: string | number,
  length: number,
  pad?: string | number, // def: ' '
  leftRight?: LeftRight  // def: 'left'
) => string;

type LeftRight = 'left' | 'right';
```

```js
Ofn.strPad('123', 5); // -> '  123'
Ofn.strPad('123', 5, '0'); // -> '00123'
Ofn.strPad('123', 5, 'x', 'right'); // -> '123xx'
```

#### Ofn.substrCount()

```ts
Ofn.substrCount( str: string, substr: string ) => number;
```

```js
Ofn.substrCount('This is an example', 'is'); // -> 2
```

<hr>

#### Ofn.trimAll()

```ts
Ofn.trimAll( str: string ) => string;
```

```js
Ofn.trimAll('  string    with    spaces   ');
// -> 'string with spaces'
```

#### Ofn.textTruncate()

```ts
Ofn.textTruncate = textTruncate(
  str: string,
  max?: number | true, // def: 120
  suffix?: string      // def: '...'
) => string;
```

```js
Ofn.textTruncate('This is a example', 9, '... (read more)');
// -> 'This is a... (read more)'
```

### Crypto

#### Ofn.md5()

```ts
Ofn.md5( str: string ) => string;
```

```js
Ofn.md5('This is an example');
// -> 'f1bbf779adc2b5e8ada0fc5f6337d96d'
```

#### Ofn.strEncrypt()

```ts
Ofn.strEncrypt(
  str: string,
  key?: string,             // def: ''
  iv?: string,              // def: ''
  mode?: EncryptMode,       // def: 'CBC'
  padding?: EncryptPadding, // def: 'Pkcs7'
) => string;

type EncryptMode = 'CBC' | 'CTR' | 'CTRGladman' | 'OFB' | 'ECB';
type EncryptPadding = 'Pkcs7' | 'Iso97971' | 'AnsiX923' | 'Iso10126' | 'ZeroPadding' | 'NoPadding';
```

```js
Ofn.strEncrypt('This is an example', 'foo');
// -> 'MHVuUmE5MHAvOXpOazkwckhyTGc5VUFUM0NXWkNPUFdzcU9wZE5ydlo4Zz0='
```

#### Ofn.strDecrypt()

```ts
Ofn.strDecrypt(
  str: string,
  key?: string,             // def: ''
  iv?: string,              // def: ''
  mode?: EncryptMode,       // def: 'CBC'
  padding?: EncryptPadding, // def: 'Pkcs7'
) => string;

type EncryptMode = 'CBC' | 'CTR' | 'CTRGladman' | 'OFB' | 'ECB';
type EncryptPadding = 'Pkcs7' | 'Iso97971' | 'AnsiX923' | 'Iso10126' | 'ZeroPadding' | 'NoPadding';
```

```js
Ofn.strDecrypt('MHVuUmE5MHAvOXpOazkwckhyTGc5VUFUM0NXWkNPUFdzcU9wZE5ydlo4Zz0=', 'foo');
// -> 'This is an example'
```

<hr>

### Functions

#### await Ofn.sleep( ms )

```ts
Ofn.sleep(
  ms?: number // def: 0
) => Promise<void>;
```

```js
await Ofn.sleep(5000); // -> 5 second
```

#### Ofn.getFunctionName()

```ts
Ofn.getFunctionName( fn?: string | Function ) => string;
```

```js
function fnTest() {}

const callback = fnTest;

Ofn.getFunctionName(callback);
// -> 'fnTest'
```

<hr>

### Classes

#### Ofn.getClassName()

```ts
Ofn.getClassName( classy: any ) => string;
```

```js
class MyClass {}

const ExampleClass = MyClass;

Ofn.getClassName(MyClass);
// -> 'MyClass'
Ofn.getClassName(ExampleClass);
// -> 'MyClass'
```

#### Ofn.getClassMethods()

```ts
Ofn.getClassName( classy: any ) => string[];
```

```js
class MyClass {
  static varStatic1 = '';
  static varStatic2 = '';

  varStatic1 = '';
  varStatic2 = '';

  static fnStatic1() {}
  static fnStatic2() {}

  fn1() {}
  fn2() {}
}

Ofn.getClassMethods(MyClass);
// -> [ 'fn1', 'fn2' ]
```

#### Ofn.getClassStaticMethods()

```ts
Ofn.getClassStaticMethods( classy: any ) => string[];
```

```js
class MyClass {
  static varStatic1 = '';
  static varStatic2 = '';

  varStatic1 = '';
  varStatic2 = '';

  static fnStatic1() {}
  static fnStatic2() {}

  fn1() {}
  fn2() {}
}

Ofn.getClassStaticMethods(MyClass);
// -> [ 'fnStatic1', 'fnStatic2' ]
```

<hr>

### Objects

#### Ofn.cloneObject()

```ts
Ofn.cloneObject<T>( obj: T ) => NonNullable<T>;
```

```js
//deep clone

const obj1 = { foo: { bar: true } };
const obj2 = Ofn.cloneObject(obj1);

obj2.foo.bar = false;

// obj1 = { foo: { bar: true } }
// obj2 = { foo: { bar: false } }
```

#### Ofn.cloneObjectWithKeys()

```ts
Ofn.cloneObjectWithKeys<T, K extends keyof T = keyof T>(
  obj: T,
  keys: K[],
) => Partial<Pick<T, K>;
```

```js
Ofn.cloneObjectWithKeys({ a: true, b: true }, ['a']);
// -> { a: true }
```

```ts
interface Custom {
  a: boolean;
  b?: boolean;
}

Ofn.cloneObjectWithKeys<Custom>({ a: true, b: true }, ['a']);
// -> { a: true }
```

#### Ofn.cloneObjectWithoutKeys()

```ts
Ofn.cloneObjectWithoutKeys<T, K extends keyof T>(
  obj: T,
  keys: K[],
) => Partial<Omit<T, K>>;
```

```js
Ofn.cloneObjectWithoutKeys({ a: true, b: true }, ['a']);
// -> { b: true }
```

```ts
interface Custom {
  a: boolean;
  b?: boolean;
}

Ofn.cloneObjectWithoutKeys<Custom>({ a: true, b: true }, ['a']);
// -> { b: true }
```

#### Ofn.getObjectMissedKeys()

```ts
Ofn.getObjectMissedKeys<T extends Record<string, any>, K = string>(
  obj: T,
  keys: K[],
) => Omit<K[], keyof T>;
```

```js
Ofn.getObjectMissedKeys({ a: true }, ['a']);
// -> []
Ofn.getObjectMissedKeys({ a: true }, ['a', 'b']);
// -> [ 'b' ]
```

```ts
interface Custom {
  a: boolean;
  b?: boolean;
}

Ofn.objHasKeys<Custom, keyof Custom>({ a: true }, ['a']);
// -> true
Ofn.objHasKeys<Custom, keyof Custom>({ a: true }, ['a', 'b']);
// -> false
```

#### Ofn.objGetMethods()

```ts
Ofn.objGetMethods<T>( obj: T, allowDefaults?: boolean ) => string[];
```

```js
class MyClass {
  static varStatic1 = '';
  static varStatic2 = '';

  varStatic1 = '';
  varStatic2 = '';

  static fnStatic1() {}
  static fnStatic2() {}

  fn1() {}
  fn2() {}
}

const obj = new MyClass();

Ofn.objGetMethods(obj);
// -> [ 'fn1', 'fn2' ]
```

#### Ofn.objHasKeys()

```ts
Ofn.objHasKeys<T extends Record<string, any>, K = string>(
  obj: T,
  keys: K[]
) => boolean;
```

```js
Ofn.objHasKeys({ a: true }, ['a']);
// -> true
Ofn.objHasKeys({ a: true }, ['a', 'b']);
// -> false
```

```ts
interface Custom {
  a: boolean;
  b?: boolean;
}

Ofn.objHasKeys<Custom, keyof Custom>({ a: true }, ['a']);
// -> true
Ofn.objHasKeys<Custom, keyof Custom>({ a: true }, ['a', 'b']);
// -> false
```

#### Ofn.mergeObjectsDeep()

```ts
Ofn.mergeObjectsDeep<T extends Record<string, any>>(
  ...args: Array<Partial<T>>
) => T;
```

```js
Ofn.mergeObjectsDeep({ a: { b: '1', c: '2' } }, { a: { b: '7', d: '3' } });
// -> { a: { b: '7', c: '2', d: '3' }
```

#### Ofn.objIsNotEmpty()

```ts
Ofn.objIsNotEmpty( obj: any ) => boolean;
// => obj is NonNullable<Record<string | number, any>>;
```

```js
Ofn.objIsNotEmpty({}); // -> false
Ofn.objIsNotEmpty({ foo: 0 }); // -> true
```

#### Ofn.objIsEmpty()

```ts
Ofn.objIsEmpty( obj: any ) => boolean;
```

```js
Ofn.objIsEmpty({}); // -> true
Ofn.objIsEmpty({ foo: 0 }); // -> false
```

#### Ofn.objToStringAttr()

```ts
Ofn.objToStringAttr<T>( obj: T ) => string;
```

```js
Ofn.objToStringAttr({ id: 20, name: 'foo' });
// -> ' id="20" name="foo" '
```

#### Ofn.objToStringAttrData()

```ts
Ofn.objToStringAttrData<T>( obj: T ) => string;
```

```js
Ofn.objToStringAttrData({ id: 20, name: 'foo' });
// -> ' data-id="20" data-name="foo" '
```

#### Ofn.objToStringAttrJs()

```ts
Ofn.objToStringAttrJs<T>( obj: T ) => string;
```

```js
Ofn.objToStringAttrJs({ id: 20, name: 'foo' });
// -> ' id:20;name:foo '
```

<hr>

#### Ofn.objToStringSqlSet()

```ts
Ofn.objToStringSqlSet<T>( obj: T ) => string;
```

```js
const obj = { size: 20, name: "'oro'", last_update: 'NOW()' };
const str = Ofn.objToStringSqlSet( obj );
// -> " size = 20, name = 'foo', last_update = NOW() "

const statement = `UPDATE my_table SET ${str} WHERE id = 7`;
// OR
const statement =
    `INSERT INTO my_table ( ${Object.keys( obj ).join( ', ' )} ) \
     VALUES ( ${Ofn.objToStringSqlSet( obj )} )`;
```

### Arrays

#### Ofn.cloneArray()

```ts
Ofn.cloneArray<T>( arr: T ) => T;
```

```js
//deep clone

const arr1 = [{ foo: true }, { bar: false }];
const arr2 = Ofn.cloneArray(arr1);

arr2[1].bar = true;

// arr1 = [ { foo: true }, { bar: false } ]
// arr2 = [ { foo: true }, { bar: true } ]
```

#### Ofn.arrayCountByKey()

```ts
Ofn.arrayCountByKey<T>(
  array: T[],
  key: string,
  strict?: boolean // def: false,
) => Record<string, number>;
```

```js
Ofn.arrayCountByKey(
  [
    { id: 'alpha', category: 'male' },
    { id: 'bravo', category: 'female' },
  ],
  'category',
);
// -> { 'male': 1, 'female': 1 }
```

#### Ofn.arrayGetUnique()

```ts
Ofn.arrayGetUnique<T>( array: T[] ) => T[];
```

```js
Ofn.arrayGetUnique([1, 1, 2, 1, 3]);
// -> [ 1, 2, 3 ]
```

#### Ofn.arrayGroupByKey()

```ts
Ofn.arrayGroupByKey<T>(
  array: T[],
  key: string,
  strict?: boolean, // def: false
) => Record<string, T[]>;
```

```js
Ofn.arrayGroupByKey(
  [
    { id: 'alpha', category: 'male' },
    { id: 'bravo', category: 'female' },
  ],
  'category',
);
// -> {
//      'male': [ { id: 'alpha', category: 'male' } ],
//      'female': [ { id: 'bravo', category: 'female' } ]
//    }
```

#### Ofn.arraySortByKey()

```ts
Ofn.arraySortByKey<T>(
  arr: T[],
  key: string,
  sortArray?: string[]
) => T[];
```

```js
Ofn.arraySortByKey(
  [
    { id: 'alpha', category: 'male' },
    { id: 'bravo', category: 'female' },
  ],
  'category',
);
// -> [
//      { id: 'bravo', category: 'female' },
//      { id: 'alpha', category: 'male' }
//    ]

Ofn.arraySortByKey(
  [
    { id: 'alpha', category: 'male' },
    { id: 'bravo', category: 'female' },
  ],
  'category',
  ['male', 'female'],
);
// -> [
//      { id: 'alpha', category: 'male' },
//      { id: 'bravo', category: 'female' }
//    ]
```

#### Ofn.arrayToObjectByKey()

```ts
Ofn.arrayToObjectByKey<T>(
  arr: T[],
  key: string,
  strict?: boolean // def: false
) => Record<string, T>;
```

```js
Ofn.arrayToObjectByKey(
  [
    { id: 'alpha', name: 'Alpha' },
    { id: 'bravo', name: 'Bravo' },
  ],
  'id',
);
// -> {
//      'alpha': { id: 'alpha', name: 'Alpha' },
//      'bravo': { id: 'bravo', name: 'Bravo'
//    }
```

#### Ofn.arrayValuesByKey()

```ts
Ofn.arrayValuesByKey<T, V>(array: T[], key: strict?: boolean ) => strict === true ? Array<V> : Array<V | undefined>;
```

```js
Ofn.arrayValuesByKey(
  [
    { id: 'alpha', name: 'Alpha' },
    { id: 'bravo', name: 'Bravo' },
  ],
  'id',
);
// -> [ 'alpha', 'bravo' ]
```

#### Ofn.arraysDifference()

```ts
Ofn.arraysDifference<T>( ...args: T[] ) => T[];
```

```js
Ofn.arraysDifference([1, 2, 3], [2, 3, 4]);
// -> [ 1 ]
```

#### Ofn.arraysDifferenceAll()

```ts
Ofn.arraysDifferenceAll<T>( ...args: T[] ) => T[];
```

```js
Ofn.arraysDifferenceAll([1, 2, 3], [2, 3, 4]);
// -> [ 1, 4 ]
```

<hr>

#### Ofn.arraysIntersection()

```ts
Ofn.arraysIntersection<T>( ...args: T[] ) => T[];
```

```js
Ofn.arraysIntersection([1, 2, 3], [2, 3, 4]);
// -> [ 2, 3 ]
```

### Dates

To use `date`, better use `dateObj`.

Note: When you load `new Date()`, the _output string date_ is shown with the _timezone_ `UTC`.

In `dateObj` this _output string date_ is saved as `iso`, and the rest of params uses the `local` date.

By default, the param `sep` is `/`, but it could be changed with `opts = { sep: '.' }`

```js
const date = new Date('2021-08-13T09:57:34.000Z');

const dateObj = {
  iso: '2021-08-13T09:57:34.000Z',
  // 'local' depends of where is the device globally located
  local: '2021-08-13T10:57:34.000Z',
  sep: '/',
  year: '2021',
  month: '08',
  day: '13',
  hour: '10',
  minute: '57',
  second: '34',
  time: '10:57',
  times: '10:57:34',
  date: '13/08/2021',
  datetime: '13/08/2021 10:57',
  datetimes: '13/08/2021 10:57:34',
  sqldate: '2021-08-13',
  sqldatetime: '2021-08-13 10:57:34',
  fulldate: '13/08/2021 10:57:34',
  fulldateStart: '13/08/2021 00:00:00',
  fulldateEnd: '13/08/2021 23:59:59',
  weekday: 5,
  monthdays: 31,
  timestamp: 1628848654000,
  jsdate: new Date(date),
};
```

```ts
interface DateObj {
  iso: string;
  sep: string;
  local: string;
  year: string;
  month: string;
  day: string;
  hour: string;
  minute: string;
  second: string;
  time: string;
  times: string;
  date: string;
  datetime: string;
  datetimes: string;
  sqldate: string;
  sqldatetime: string;
  sqldatetimeIso: string;
  fulldate: string;
  fulldateStart: string;
  fulldateEnd: string;
  weekday: number;
  monthdays: number;
  timestamp: number;
  jsdate: Date;
}
```

#### Ofn.dateObjByDate()

```ts
Ofn.dateObjByDate(
  date: Date,
  options: DateObjOptions | string = {}
) => DateObj;

interface DateObjOptions {
  sep?: string;
}
```

```js
Ofn.dateObjByDate(new Date('2021-08-13 10:57:34'));
// -> local: '2021-08-13T10:57:34.000Z'
```

#### Ofn.dateObjByHtml()

```ts
Ofn.dateObjByHtml(
  html: string,
  options: DateObjOptions | string = {}
) => DateObj | null;

interface DateObjOptions {
  sep?: string;
}
```

```js
Ofn.dateObjByHtml('13/08/2021 10:57:34');
// -> local: '2021-08-13T10:57:34.000Z'
```

#### Ofn.dateObjBySql()

```ts
Ofn.dateObjBySql(
  sqldate: string,
  options: DateObjOptions | string = {}
) => DateObj | null;

interface DateObjOptions {
  sep?: string;
}
```

```js
Ofn.dateObjBySql('2021-08-13 10:57:34');
// -> local: '2021-08-13T10:57:34.000Z'
```

#### Ofn.dateObjByTimestamp()

```ts
Ofn.dateObjByTimestamp(
  timestamp: number,
  options: DateObjOptions | string = {}
) => DateObj | null;

interface DateObjOptions {
  sep?: string;
}
```

```js
Ofn.dateObjByTimestamp(1628848654000);
// -> iso: '2021-08-13T09:57:34.000Z'
```

#### Ofn.dateObjByToday()

```ts
Ofn.dateObjByToday( options: DateObjOptions | string = {} ) => DateObj;

interface DateObjOptions {
  sep?: string;
}
```

```js
Ofn.dateObjByToday();
```

#### Ofn.dateObjPlusDays()

```ts
Ofn.dateObjPlusDays(
  date: DateObj | Date,
  days: number
) => DateObj;
```

```js
const date = new Date('2021-08-13 10:57:34');
const dateObj = Ofn.dateObjByDate(date);

Ofn.dateObjPlusDays(date, 1);
// -> local: '2021-08-14T10:57:34.000Z'

Ofn.dateObjPlusDays(dateObj, -1);
// -> local: '2021-08-12T10:57:34.000Z'
```

#### Ofn.isDateObj()

```ts
Ofn.isDateObj( date: any ) => boolean;
// => date is DateObj

// depricated
Ofn.dateIsObj( date: any ) => boolean;
```

```js
const date = new Date('2021-08-13 10:57:34');
const dateObj = Ofn.dateObjByDate(date);

Ofn.isDateObj(date);
// -> false
Ofn.isDateObj(dateObj);
// -> true
```

#### Ofn.datesCompare()

```ts
Ofn.datesCompare(
  date1: DateObj | Date,
  date2: DateObj | Date
) => -1 | 0 | 1;
```

```js
const date = new Date('2021-08-13 10:57:34');
const todayObj = Ofn.dateObjByToday();

Ofn.datesCompare(date, todayObj);
//  -> 1
Ofn.datesCompare(todayObj, date);
// -> -1
Ofn.datesCompare(todayObj, todayObj);
//  -> 0
```

#### Ofn.dateIsBetween()

```ts
Ofn.dateIsBetween(
  date: DateObj | Date,
  dateMin: DateObj | Date,
  dateMax: DateObj | Date
) => boolean;
```

```js
const date = new Date('2021-08-13 10:57:34');
const todayObj = Ofn.dateObjByToday();

Ofn.dateIsBetween(Ofn.dateObjPlusDays(date, 1), date, todayObj);
// -> true
```

#### Ofn.datesDiffDays()

```ts
Ofn.datesDiffDays(
  date1: DateObj | Date,
  date2: DateObj | Date
) => number;
```

```js
const dateObj1 = Ofn.dateObjBySql('2021-12-25');
const dateObj2 = Ofn.dateObjBySql('2022-01-05');

Ofn.datesDiffDays(dateObj1, dateObj2);
// -> 11
```

#### Ofn.datesDiffMonths()

```ts
Ofn.datesDiffMonths(
  date1: DateObj | Date,
  date2: DateObj | Date
) => number;
```

```js
const dateObj1 = Ofn.dateObjBySql('2021-12-25');
const dateObj2 = Ofn.dateObjBySql('2022-01-05');

Ofn.datesDiffMonths(dateObj1, dateObj2);
// -> 1
```

#### Ofn.datesDiffMonthsArray()

```ts
Ofn.datesDiffMonthsArray(
  date1: DateObj | Date,
  date2: DateObj | Date
) => DateDiffMonth[];

interface DateDiffMonth {
  year: string;
  month: string;
}
```

```js
const dateObj1 = Ofn.dateObjBySql('2021-12-25');
const dateObj2 = Ofn.dateObjBySql('2022-01-05');

Ofn.datesDiffMonths(dateObj1, dateObj2);
// -> [ { year: '2021', month: '12' }, { year: '2022', month: '01' } ]
```

#### Ofn.dateCheckString()

```ts
Ofn.dateCheckString( str: string, format?: DateStringFormat ) => boolean;

type DateStringFormat =
  | 'datetime_strict'
  | 'datetime_default_strict'
  | 'datetime_html_strict'
  | 'datetime_sql_strict'
  | 'datetime'
  | 'datetime_default'
  | 'datetime_html'
  | 'datetime_sql'
  | 'html'
  | 'date_html'
  | 'sql'
  | 'date_sql'
  | 'default'
  | 'date_default';
```

To check the format, it's used the regexps from (oro-regexp)[https://github.com/oropesa/oro-regexp]

```js
Ofn.dateCheckString('2022-01-05', 'date_sql');
// -> true
```

Allowed formats:

| Format name             | Example                 | REGEXP                         |
| ----------------------- | ----------------------- | ------------------------------ |
| datetime_strict         | 30-12-2020 11:59[:59]   | REGEXP.DATETIME_DEFAULT_STRICT |
| datetime_default_strict | 30-12-2020 11:59[:59]   | REGEXP.DATETIME_DEFAULT_STRICT |
| datetime_html_strict    | 30/12/2020 11:59[:59]   | REGEXP.DATETIME_HTML_STRICT    |
| datetime_sql_strict     | 2020-12-30 11:59[:59]   | REGEXP.DATETIME_SQL_STRICT     |
| datetime                | 30-12-2020 [11:59[:59]] | REGEXP.DATETIME_DEFAULT        |
| datetime_default        | 30-12-2020 [11:59[:59]] | REGEXP.DATETIME_DEFAULT        |
| datetime_html           | 30/12/2020 [11:59[:59]] | REGEXP.DATETIME_HTML           |
| datetime_sql            | 2020-12-30 [11:59[:59]] | REGEXP.DATETIME_SQL            |
| html                    | 30/12/2020              | REGEXP.DATE_HTML               |
| date_html               | 30/12/2020              | REGEXP.DATE_HTML               |
| sql                     | 2020-12-30              | REGEXP.DATE_SQL                |
| date_sql                | 2020-12-30              | REGEXP.DATE_SQL                |
| default                 | 30-12-2020              | REGEXP.DATE_DEFAULT            |
| date_default            | 30-12-2020              | REGEXP.DATE_DEFAULT            |

<hr>

### URLs

#### Ofn.urlDecode()

```ts
Ofn.urlDecode( url: string ) => string;
```

```js
Ofn.urlDecode('https%3A%2F%2Fexample.com%3Fname%3Dfoo%20bar%26plus%3D1%2B2');
// -> 'https://example.com?name=foo bar&plus=1+2'
```

#### Ofn.urlEncode()

```ts
Ofn.urlEncode( url: string ) => string;
```

```js
Ofn.urlEncode('https://example.com?name=foo bar&plus=1+2');
// -> 'https%3A%2F%2Fexample.com%3Fname%3Dfoo%20bar%26plus%3D1%2B2'
```

#### Ofn.urlGetBase()

```ts
Ofn.urlGetBase( url: string ) => string;
```

```js
Ofn.urlGetBase('https://example.com/page?param1=value1&param2=value2');
// -> 'https://example.com'
```

#### Ofn.urlGetCurrentByReq()

```ts
Ofn.urlGetCurrentByReq(
  req: Pick<Request, 'originalUrl' | 'protocol'>, // type { Request } from 'express'
  isFullpath?: boolean
) => string;
```

```js
// simulating `Request` of express
const req = {
  protocol: 'https',
  originalUrl: '/',
  get: (key) => {
    const obj = { host: 'example.com' };
    return obj[key];
  },
};

Ofn.urlGetCurrentByReq(req);
// -> 'https://example.com/'
Ofn.urlGetCurrentByReq(req, false);
// -> '/'
```

#### Ofn.urlGetHostByReq()

```ts
Ofn.urlGetHostByReq(
  req: Pick<Request, 'originalUrl' | 'protocol' | 'get'> // type { Request } from 'express'
) => string;
```

```js
// simulating `Request` of express
const req = {
  protocol: 'https',
  originalUrl: '/',
  get: (key) => {
    const obj = { host: 'example.com' };
    return obj[key];
  },
};

Ofn.urlGetHostByReq(req);
// -> 'https://example.com'
```

#### Ofn.urlGetParams()

```ts
Ofn.urlGetParams( urlOrQuery: string ) => Record<string, string | string[]>;
```

```js
Ofn.urlGetParams('https://example.com/page?param1=value1&param2=value2');
// -> { param1: 'value1', param2: 'value2' }
```

#### Ofn.urlIsValid()

```ts
Ofn.urlIsValid( url: string ) => boolean;
```

```js
Ofn.urlIsValid('example.com');
// -> false
Ofn.urlIsValid('https://example.com?foo&bar=1');
// -> true
```

#### Ofn.urlObjByUrl()

```ts
Ofn.urlObjByUrl( url: string ) => URL | undefined;
```

```js
Ofn.urlObjByUrl('example.com');
// -> undefined
Ofn.urlObjByUrl('https://example.com?foo&bar=1');
// -> new URL( url )
```

#### Ofn.urlPlainToString()

```ts
Ofn.urlPlainToString( url: string ) => string;
```

```js
Ofn.urlPlainToString('https://example.com?name%3dfoo%20bar&plus%3d1+2');
// -> 'https://example.com?name=foo bar&plus=1+2'
```

<hr>

#### Ofn.urlStringToPlain()

```ts
Ofn.urlStringToPlain( url: string ) => string;
```

```js
Ofn.urlStringToPlain('https://example.com?name=foo bar&plus=1+2');
// -> 'https://example.com?name%3dfoo%20bar&plus%3d1+2'
```

### Files

#### Ofn.getFilenameByPath()

```ts
Ofn.getFilenameByPath( path: string ) => string;
```

```js
Ofn.getFilenameByPath('/var/www/htdoc/filename.pdf');
// -> 'filename.pdf'
```

#### Ofn.getFilenameExtByName()

```ts
Ofn.getFilenameExtByName( filenameOrPath: string ) => string;
```

```js
Ofn.getFilenameExtByName('filename.pdf');
// -> 'pdf'
```

#### Ofn.getFilenameWOutExtByName()

```ts
Ofn.getFilenameWOutExtByName( filenameOrPath: string ) => string;
```

```js
Ofn.getFilenameWOutExtByName('filename.pdf');
// -> 'filename'
```

#### Ofn.getFolderByPath()

```ts
Ofn.getFolderByPath(
  path: string,
  deep?: number // def: 1
) => string;
```

```js
Ofn.getFolderByPath('/var/www/htdoc/filename.pdf');
// -> '/var/www/htdoc'
Ofn.getFolderByPath('/var/www/htdoc/filename.pdf', 3);
// -> '/var'
```

#### Ofn.sanitizeFilename()

```ts
Ofn.sanitizeFilename( path: string ) => string;
```

```js
Ofn.sanitizeFilename('/var/tmp/ÁËÌÒÑ.pdf');
// -> 'AEION.pdf'
```

<hr>

#### Ofn.sanitizePath()

```ts
Ofn.sanitizePath( path: string ) => string;
```

```js
Ofn.sanitizePath('/var/tmp/foo.pdf');
// -> '/var/tmp/foo.pdf'
Ofn.sanitizePath('C:\\tmp\\foo.pdf');
// -> 'C:/tmp/foo.pdf'
```

#### Ofn.slugifyFilename()

```ts
Ofn.slugifyFilename( path: string ) => string;
```

```js
Ofn.slugifyFilename('/var/www/htdoc/Foo Bar.pdf');
// -> 'foo-bar.pdf'
```

### PHP Serialize

To save an object in db, it's better as `json` than `php-serialize`.

So, by default, this functions work as `json` and work well when in current dbs where already exist fields with `php-serialize`.

#### Ofn.phpIsSerialized()

```ts
Ofn.phpSerialize( str: string, strict?: string ) => boolean;
```

```js
Ofn.phpIsSerialized('{"foo":true}');
// -> false
Ofn.phpIsSerialized('a:1:{s:6:"foo";b:1;}');
// -> true
```

<hr>

#### Ofn.phpSerialize()

```ts
Ofn.phpSerialize<T>(
  mixedValue: T,
  strict?: boolean // def: false
) => string | T;
```

```js
Ofn.phpSerialize({ foo: true });
// -> '{"foo":true}'
Ofn.phpSerialize({ foo: true }, true);
// -> 'a:1:{s:6:"foo";b:1;}'
```

#### Ofn.phpUnserialize()

```ts
Ofn.phpUnserialize<T>(
  str: string,
  strict?: boolean // def: false
) => T | string;
```

```js
Ofn.phpUnserialize('{"foo":true}');
// -> { foo: true }
Ofn.phpUnserialize('a:1:{s:6:"foo";b:1;}');
// -> { foo: true }
Ofn.phpUnserialize('{"foo":true}', true);
// -> '{"foo":true}'
```

### Response

```ts
export type SResponse<
  OK extends Record<string, any> = {},
  KO extends Record<string, any> = {},
  E extends boolean = false,
> = E extends true ? SResponseOK<OK> | SResponseError<KO> : SResponseOK<OK> | SResponseKO<KO>;

type SResponseOK<T extends Record<string, any> = {}> = T & {
  status: true;
  msg?: string;
};

type SResponseError<T extends Record<string, any> = {}> = T & { msg?: string };

type SResponseKO<T extends Record<string, any> = {}> = {
  status: false;
  error?: SResponseError;
  tryAgain?: boolean;
};

type SResponseError<T extends Record<string, any> = {}> = Error & {
  responseError: SResponseKO<T>;
};
```

#### Ofn.setResponseOK()

```ts
Ofn.setResponseOK<T extends Record<string, any>>(
  msgOrData?: string | T,
  data?: T
) => SResponseOK<T>;
```

```js
Ofn.setResponseOK();
// -> { status: true }

Ofn.setResponseOK('Reason');
// -> { status: true, msg: 'Reason' }

Ofn.setResponseOK({ label: 'foo' });
// -> { status: true, label: 'foo' }

Ofn.setResponseOK('Reason', { label: 'foo' });
// -> { status: true, msg: 'Reason', label: 'foo' }

Ofn.setResponseKO('Reason:', { msg: 'custom', label: 'foo' });
// -> { status: true, msg: 'Reason: custom', label: 'foo' }

Ofn.setResponseKO({ msg: 'Reason:' }, { msg: 'custom', label: 'foo' });
// -> { status: true, msg: 'Reason: custom', label: 'foo' }

Ofn.setResponseKO({ msg: 'Reason:', name: 'Example', label: 'bar' }, { msg: 'custom', label: 'foo' });
// -> { status: true, msg: 'Reason: custom', name: Example, label: 'foo' }
```

Allowed returned type:

```ts
SResponseOKBasic`{ status: true  }`;
SResponseOKSimple`{ status: true, msg: string }`;
SResponseOKObject<T>`{ status: true } & T`;
SResponseOKObjectSimple<T>`{ status: true, msg: string} & T`;
```

#### Ofn.setResponseKO()

```ts
Ofn.setResponseKO<T extends Record<string, any>, E extends boolean = false>(
  msgOrError?: string | T,
  error?: T,
  tryAgain?: boolean, // def: false
  asError?: E // def: false
) => E extends true ? SResponseError<T> : SResponseKO<T>;
```

```js
Ofn.setResponseKO();
// -> { status: false }

Ofn.setResponseKO('Error Reason');
// -> { status: false, error: { msg: 'Error Reason' } }

Ofn.setResponseKO({ label: 'foo' });
// -> { status: false, error: { label: 'foo' } }

Ofn.setResponseKO('Error Reason', { label: 'foo' });
// -> { status: false, error: { msg: 'Error Reason', label: 'foo' } }

Ofn.setResponseKO('Error Reason:', { msg: 'bad param', label: 'foo' });
// -> { status: false, error: { msg: 'Error Reason: bad param', label: 'foo' } }

Ofn.setResponseKO('Error Reason', { label: 'foo' }, true);
// -> { status: false, tryAgain: true, error: { msg: 'Error Reason', label: 'foo' } }

Ofn.setResponseKO('Error Reason', { label: 'foo' }, null, true);
// -> ( new Error() )
//      .name = 'responseError'
//      .message = 'Error Reason'
//      .responseError = { status: false, error: { msg: 'Error Reason', label: 'foo' } }

Ofn.setResponseKO('Error Reason', { label: 'foo', errorName: 'customError' }, null, true);
// -> ( new Error() )
//      .name = 'customError'
//      .message = 'Error Reason'
//      .responseError = { status: false, error: { msg: 'Error Reason', label: 'foo', errorName: 'customError' } }
```

Allowed returned type:

```ts
SResponseKOBasic`{ status: false }`;
SResponseKOBasicAgain`{ status: false, tryAgain: boolean }`;
SResponseKOSimple`{ status: false, error: { msg: string } }`;
SResponseKOSimpleAgain`{ status: false, error: { msg: string }, tryAgain: boolean }`;
SResponseKOObject`{ status: false, error: T }`;
SResponseKOObjectAgain`{ status: false, error: T, tryAgain: boolean }`;
SResponseKOObjectSimple`{ status: false, error: T & { msg: string } }`;
SResponseKOObjectSimpleAgain`{ status: false, error: T & { msg: string }, tryAgain: boolean }`;

SResponseErrorBasic`Error & { responseError: SResponseKOBasic }`;
SResponseErrorBasicAgain`Error & { responseError: SResponseKOBasicAgain }`;
SResponseErrorSimple`Error & { responseError: SResponseKOSimple }`;
SResponseErrorSimpleAgain`Error & { responseError: SResponseKOSimpleAgain }`;
SResponseErrorObject`Error & { responseError: SResponseKOObject }`;
SResponseErrorObjectAgain`Error & { responseError: SResponseKOObjectAgain }`;
SResponseErrorObjectSimple`Error & { responseError: SResponseKOObjectSimple }`;
SResponseErrorObjectSimpleAgain`Error & { responseError: SResponseKOObjectSimpleAgain }`;
```
