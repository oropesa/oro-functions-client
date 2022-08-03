# Oro Functions Client

* [Overview](#overview)
* [Installation](#installation)
* [Example](#example)
* [Methods](#methods)

  * [General](#general)
    * [Ofn.issetGet( obj, key, valueDefault = null, allowFalsy = true )](#ofnissetget-obj-key-valuedefault--null-allowfalsy--true-)
    * [Ofn.type( objd, strict = false )](#ofntype-obj-strict--false-)
    * [Ofn.isBoolean( obj )](#ofnisboolean-obj-)
    * [Ofn.isNumber( obj )](#ofnisnumber-obj-)
    * [Ofn.isString( obj )](#ofnisstring-obj-)
    * [Ofn.isArray( obj )](#ofnisarray-obj-)
    * [Ofn.isObject( obj )](#ofnisobject-obj-)
    * [Ofn.isClass( obj )](#ofnisclass-obj-)
    * [Ofn.isFunction( obj )](#ofnisfunction-obj-)
    * [Ofn.isRegexp( obj )](#ofnisregexp-obj-)
    * [Ofn.isDate( obj )](#ofnisdate-obj-)
    * [Ofn.isUndefined( obj )](#ofnisundefined-obj-)
    * [Ofn.isNull( obj )](#ofnisnull-obj-)
    * [Ofn.isNully( obj )](#ofnisnully-obj-)
  
  * [Numbers](#numbers)
    * [Ofn.isEven( num )](#ofniseven-num-)
    * [Ofn.isOdd( num )](#ofnisodd-num-)
    * [Ofn.isNumeric( num )](#ofnisnumeric-num-)
    * [Ofn.randomMinMax( min, max )](#ofnrandomminmax-min-max-)
    * [Ofn.numberFixDecimals( num, decimalLength = 2, allowAllRightZeros = true, minRightZeros = 2 )](#ofnnumberfixdecimals-num-decimallength--2-allowallrightzeros--true-minrightzeros--2-)
    * [Ofn.numberPrintDecimals( num, decimalLength = 2, allowAllRightZeros = true, minRightZeros = 2 )](#ofnnumberprintdecimals-num-decimallength--2-allowallrightzeros--true-minrightzeros--2-)
    
  * [String](#string)
    * [Ofn.isStringJson( str, allowArray = false )](#ofnisstringjson-str-allowarray--false-)
    * [Ofn.strPad( str, length, pad = ' ', leftRight = 'left' )](#ofnstrpad-str-length-pad----leftright--left-)
    * [Ofn.capitalize( str )](#ofncapitalize-str-)
    * [Ofn.slugify( str )](#ofnslugify-str-)
    * [Ofn.snakeify( str )](#ofnsnakeify-str-)
    * [Ofn.trimAll( str )](#ofntrimall-str-)
    * [Ofn.textTruncate( str, max, suffix = '...' )](#ofntexttruncate-str-max-suffix---)
    * [Ofn.randomString( len = 8 )](#ofnrandomstring-len--8-)
    * [Ofn.jsonStringify( json, beautify = false )](#ofnjsonstringify-json-beautify--false-)
    * [Ofn.jsonParse( str, strict = false )](#ofnjsonparse-str-strict--false-)
    * [Ofn.jsonize( str, strict = false )](#ofnjsonize-str-strict--false-)
    * [Ofn.arrayize( strOrObject, strict = false )](#ofnarrayize-strorobject-strict--false-)
    * [Ofn.chunkStringByCharSize( str, char, size, orientation = 'left' )](#ofnchunkstringbycharsize-str-char-size-orientation--left-)
    * [Ofn.escAttr( str )](#ofnescattr-str-)
    * [Ofn.splitStringNumber( str, sep = '|' )](#ofnsplitstringnumber-str-sep---)
    * [Ofn.substrCount( str, substr )](#ofnsubstrcount-str-substr-)
  
  * [Crypto](#crypto)
    * [Ofn.md5( str )](#ofnmd5-str-)
    * [Ofn.strEncrypt( str, key = '', iv = '', methodMode = 'AES-256-CBC' )](#ofnstrencrypt-str-key---iv---methodmode--aes-256-cbc-)
    * [Ofn.strDecrypt( str, key = '', iv = '', methodMode = 'AES-256-CBC' )](#ofnstrdecrypt-str-key---iv---methodmode--aes-256-cbc-)
   
  * [Functions](#functions)
    * [await Ofn.sleep( ms )](#await-ofnsleep-ms-)
    * [Ofn.getFunctionName( func = null )](#ofngetfunctionname-func--null-)
  
  * [Classes](#objects)
    * [Ofn.getClassName( classy )](#ofngetclassname-classy-)
    * [Ofn.getClassMethods( classy )](#ofngetclassmethods-classy-)
    * [Ofn.getClassStaticMethods( classy )](#ofngetclassstaticmethods-classy-)
  
  * [Objects](#objects)
    * [Ofn.objIsEmpty( obj )](#ofnobjisempty-obj-)
    * [Ofn.objGetMethods( obj, allowDefaults = false )](#ofnobjgetmethods-obj-allowdefaults--false-)
    * [Ofn.objHasKeys( obj, keys )](#ofnobjhaskeys-obj-keys-)
    * [Ofn.getObjectMissedKeys( obj, keys )](#ofngetobjectmissedkeys-obj-keys-)
    * [Ofn.cloneObject( obj )](#ofncloneobject-obj-)
    * [Ofn.cloneObjectWithKeys( obj, keys )](#ofncloneobjectwithkeys-obj-keys-)
    * [Ofn.cloneObjectWithoutKeys( obj, keys )](#ofncloneobjectwithoutkeys-obj-keys-)
    * [Ofn.mergeObjectsDeep( obj1, obj2, ... )](#ofnmergeobjectsdeep-obj1-obj2--)
    * [Ofn.objToStringSqlSet( obj )](#ofnobjtostringsqlset-obj-)
    * [Ofn.objToStringAttr( obj )](#ofnobjtostringattr-obj-)
    * [Ofn.objToStringAttrData( obj )](#ofnobjtostringattrdata-obj-)
    * [Ofn.objToStringAttrJs( obj )](#ofnobjtostringattrjs-obj-)
  
  * [Arrays](#arrays)
    * [Ofn.cloneArray( arr )](#ofnclonearray-arr-)
    * [Ofn.arrayToObjectByKey( arr, key, strict = false )](#ofnarraytoobjectbykey-arr-key-strict--false-)
    * [Ofn.arrayValuesByKey( arr, key, strict = false )](#ofnarrayvaluesbykey-arr-key-strict--false-)
    * [Ofn.arrayCountByKey( arr, key, strict = false )](#ofnarraycountbykey-arr-key-strict--false-)
    * [Ofn.arrayGroupByKey( arr, key, strict = false )](#ofnarraygroupbykey-arr-key-strict--false-)
    * [Ofn.arraySortByKey( arr, key, sortArray )](#ofnarraysortbykey-arr-key-sortarray-)
    * [Ofn.arrayGetUnique( arr )](#ofnarraygetunique-arr-)
    * [Ofn.arraysIntersection( arr1, arr2, ... )](#ofnarraysintersection-arr1-arr2--)
    * [Ofn.arraysDifference( arr1, arr2, ... )](#ofnarraysdifference-arr1-arr2--)
    * [Ofn.arraysDifferenceAll( arr1, arr2, ... )](#ofnarraysdifferenceall-arr1-arr2--)
  
  * [Dates](#dates)
    * [Ofn.dateObjByToday( opts = {} )](#ofndateobjbytoday-opts---)
    * [Ofn.dateObjByTimestamp( timestamp, opts = {} )](#ofndateobjbytimestamp-timestamp-opts---)
    * [Ofn.dateObjBySql( sqldate, opts = {} )](#ofndateobjbysql-sqldate-opts---)
    * [Ofn.dateObjByHtml( html, opts = {} )](#ofndateobjbyhtml-html-opts---)
    * [Ofn.dateObjByDate( date, opts = {} )](#ofndateobjbydate-date-opts---)
    * [Ofn.dateObjPlusDays( date, days )](#ofndateobjplusdays-date-days-)
    * [Ofn.dateIsObj( date )](#ofndateisobj-date-)
    * [Ofn.datesCompare( date1, date2 )](#ofndatescompare-date1-date2-)
    * [Ofn.dateIsBetween( date, dateMin, dateMax )](#ofndateisbetween-date-datemin-datemax-)
    * [Ofn.datesDiffDays( date1, date2 )](#ofndatesdiffdays-date1-date2-)
    * [Ofn.datesDiffMonths( date1, date2 )](#ofndatesdiffmonths-date1-date2-)
    * [Ofn.datesDiffMonthsArray( date1, date2 )](#ofndatesdiffmonthsarray-date1-date2-)
    * [Ofn.dateCheckString( str, format = 'default' )](#ofndatecheckstring-str-format--default-)
  
  * [URLs](#urls)
    * [Ofn.urlGetCurrentByReq( req, isFullpath = true )](#ofnurlgetcurrentbyreq-req-isfullpath--true-)
    * [Ofn.urlGetHostByReq( req )](#ofnurlgethostbyreq-req-)
    * [Ofn.urlIsValid( url )](#ofnurlisvalid-url-)
    * [Ofn.urlObjByUrl( url )](#ofnurlobjbyurl-url-)
    * [Ofn.urlGetBase( url )](#ofnurlgetbase-url-)
    * [Ofn.urlGetParams( urlOrQuery )](#ofnurlgetparams-urlorquery-)
    * [Ofn.urlEncode( url )](#ofnurlencode-url-)
    * [Ofn.urlDecode( url )](#ofnurldecode-url-)
    * [Ofn.urlStringToPlain( url )](#ofnurlstringtoplain-url-)
    * [Ofn.urlPlainToString( url )](#ofnurlplaintostring-url-)
  
  * [Files](#files)
    * [Ofn.getFilenameExtByName( filenameOrPath )](#ofngetfilenameextbyname-filenameorpath-)
    * [Ofn.getFilenameWOutExtByName( filenameOrPath )](#ofngetfilenamewoutextbyname-filenameorpath-)
    * [Ofn.getFilenameByPath( path )](#ofngetfilenamebypath-path-)
    * [Ofn.getFolderByPath( path, deep = 1 )](#ofngetfolderbypath-path-deep--1-)
    * [Ofn.slugifyFilename( filenameOrPath )](#ofnslugifyfilename-filenameorpath-)
    * [Ofn.sanitizePath( path )](#ofnsanitizepath-path-)
    * [Ofn.sanitizeFilename( filenameOrPath )](#ofnsanitizefilename-filenameorpath-)
  
  * [PHP Serialize](#php-serialize)
    * [Ofn.phpSerialize( mixedValue, strict = false )](#ofnphpserialize-mixedvalue-strict--false-)
    * [Ofn.phpUnserialize( str, strict = false )](#ofnphpunserialize-str-strict--false-)
    * [Ofn.phpIsSerialized( str, strict = true )](#ofnphpisserialized-str-strict--true-)
  
  * [Response](#response)
    * [Ofn.setResponseOK( msgOrData, data = {} )](#ofnsetresponseok-msgordata-data---)
    * [Ofn.setResponseKO( msgOrError, error = {}, tryAgain = false, asError = false )](#ofnsetresponseko-msgorerror-error---tryagain--false-aserror--false-)
  
## Overview

By default, **Ofn**, it's a simple class with helper static functions.

This package ( `oro-functions-client` ) is divided from `oro-functions` to allow using it in _js-client environments_ like `Vuejs`. 

If you are going to use this package in _js-server environments_ like `Nodejs`, it's recommended to use *[oro-functions](https://github.com/oropesa/oro-functions/)* instead.

## Installation

```shell
npm install oro-functions-client
```

## Example:
```js
const Ofn = require( 'oro-functions-client' );

Ofn.type( [ 1, 2, 3 ] );
// 'array'
```

## Methods

<hr>

### General

#### Ofn.issetGet( obj, key, valueDefault = null, allowFalsy = true )

```js
let obj = { foo: 'bar' };
let obj2 = { foo: null };

Ofn.issetGet( obj, 'foo', 'default' ); // 'bar'
Ofn.issetGet( obj, 'baz', 'default' ); // 'default'

Ofn.issetGet( obj2, 'foo', 'default' ); // null
Ofn.issetGet( obj2, 'foo', 'default', false ); // 'default'
```

#### Ofn.type( obj, strict = false )

```js
Ofn.type( 'foo' )           // 'string'
Ofn.type( true )            // 'boolean'
Ofn.type( 12 )              // 'number'
Ofn.type( {} )              // 'object'
Ofn.type( [] )              // 'array'
Ofn.type( function() {} )   // 'function'
Ofn.type( new Date() )      // 'date'

// Note: when obj is a obj-class [let foo = new MyClass()]

class MyClass {}
let foo = new MyClass();

Ofn.type( MyClass )     // 'class'
Ofn.type( foo )         // 'object'
Ofn.type( foo, true )   // 'MyClass'
```

#### Ofn.isBoolean( obj )

```js
Ofn.isBoolean( true )   // true
Ofn.isBoolean( false )  // true
```

#### Ofn.isNumber( obj )

```js
Ofn.isNumber( 12 )   // true
Ofn.isNumber( 1.2 )  // true
Ofn.isNumber( NaN )  // true
```

#### Ofn.isString( obj )

```js
Ofn.isString( 'foo' )   // true
```

#### Ofn.isArray( obj )

```js
Ofn.isArray( [ 1, 2, 3 ] )   // true
```

#### Ofn.isObject( obj )

```js
Ofn.isObject( {} )   // true
```

#### Ofn.isClass( obj )

```js
Ofn.isClass( Ofn )   // true
```

#### Ofn.isFunction( obj )

```js
Ofn.isFunction( function() {} )   // true
Ofn.isFunction( () => {} )   // true
```

#### Ofn.isRegexp( obj )

```js
Ofn.isRegexp( /([A-Z])\w+/ )   // true
```

#### Ofn.isDate( obj )

```js
Ofn.isDate( new Date() )   // true
```

#### Ofn.isUndefined( obj )

```js
Ofn.isUndefined()       // true
Ofn.isUndefined( null ) // false
```

#### Ofn.isNull( obj )

```js
Ofn.isNull()       // false
Ofn.isNull( null ) // true
```

#### Ofn.isNully( obj )

```js
Ofn.isNully()       // true
Ofn.isNully( null ) // true
```

<hr>

### Numbers

#### Ofn.isEven( num )

```js
Ofn.isEven( 0 ) // true
Ofn.isEven( 1 ) // false

Ofn.isEven( NaN ) // undefined
Ofn.isEven( 0.2 ) // true
Ofn.isEven( 1.2 ) // false
```

#### Ofn.isOdd( num )

```js
Ofn.isOdd( 0 ) // false
Ofn.isOdd( 1 ) // true

Ofn.isOdd( NaN ) // undefined
Ofn.isOdd( 0.2 ) // false
Ofn.isOdd( 1.2 ) // true
```

#### Ofn.isNumeric( num )

```js
Ofn.isNumeric( NaN );    // false
Ofn.isNumeric( 2.14 );   // true
Ofn.isNumeric( '2.14' ); // true
Ofn.isNumeric( '2,14' ); // false

Ofn.isNumberic( num ) // for dislexia issues
```

#### Ofn.randomMinMax( min, max )

```js
Ofn.randomMinMax();    // 0 - 100
Ofn.randomMinMax( 1, 10 );   // 1 - 10
Ofn.randomMinMax( 10, 1 );   // 1 - 10
```

#### Ofn.numberFixDecimals( num, decimalLength = 2, allowAllRightZeros = true, minRightZeros = 2 )

```js
Ofn.numberFixDecimals( '2,1499' ); // '2.15'
Ofn.numberFixDecimals( '2.1499' ); // '2.15'

Ofn.numberFixDecimals( '2.1499', 0 );     // '2'
Ofn.numberFixDecimals( '2.1499', 3 );     // '2.150'
Ofn.numberFixDecimals( '2,1499', 6 );     // '2.149900'
Ofn.numberFixDecimals( '2.1499', false ); // '2.1499'

Ofn.numberFixDecimals( '2.1499', 6, false ); // '2.1499'
Ofn.numberFixDecimals( '2.1499', 3, false ); // '2.15'
Ofn.numberFixDecimals( '2.1499', 3, false, 3 ); // '2.150'

Ofn.numberFixDecimals( '2.1387', 3, false, 2 ); // '2.139'
Ofn.numberFixDecimals( '2.1999', 3, false, 2 ); // '2.20'

// More examples

Ofn.numberFixDecimals( '2.1999', 2 ); // '2.20'
Ofn.numberFixDecimals( '2'     , 2 ); // '2.00'

Ofn.numberFixDecimals( '2.1999', 2, true, false ); // '2.20'
Ofn.numberFixDecimals( '2'     , 2, true, false ); // '2'
```

#### Ofn.numberPrintDecimals( num, decimalLength = 2, allowAllRightZeros = true, minRightZeros = 2 )

Is the same as [Ofn.numberFixDecimals](#ofnnumberfixdecimals-num-decimallength--2-allowallrightzeros--true-minrightzeros--2-),
but the separator is comma `2,10`, not dot `2.10`.

It works to print, for example, in _excel fields_.

```js
Ofn.numberPrintDecimals( '2,1499' ); // '2,15'
Ofn.numberPrintDecimals( '2.1499' ); // '2,15'
```

<hr>

### String

#### Ofn.isStringJson( str, allowArray = false )

```js
Ofn.isStringJson( '{ "foo": "bar" }' ); // true
Ofn.isStringJson( '[ "foo", "bar" ]' ); // false
Ofn.isStringJson( '[ "foo", "bar" ]', true ); // true
```

#### Ofn.strPad( str, length, pad = ' ', leftRight = 'left' )

```js
Ofn.strPad( '123', 5 );               // '  123'
Ofn.strPad( '123', 5, '0' );          // '00123'
Ofn.strPad( '123', 5, 'x', 'right' ); // '123xx'
```

#### Ofn.capitalize( str )

```js
Ofn.capitalize( 'foo' ); // 'Foo'
```

#### Ofn.slugify( str )

```js
Ofn.slugify( 'FOO Bar bazBaz' ); // 'foo-bar-baz-baz'
```

#### Ofn.snakeify( str )

```js
Ofn.snakeify( 'FOO Bar bazBaz' ); // 'foo_bar_baz_baz'
```

#### Ofn.trimAll( str )

```js
Ofn.trimAll( '  string    with    spaces   ' ); // 'string with spaces'
```

#### Ofn.textTruncate( str, max, suffix = '...' )

```js
Ofn.textTruncate( 'This is a example', 9, '... (read more)' ); // 'This is a... (read more)'
```

#### Ofn.randomString( len = 8 )

```js
Ofn.randomString();     // 'lw5ucmgj'
Ofn.randomString( 24 ); // 'a6ji656qovq078j1vpcmxzms'
```

#### Ofn.jsonStringify( json, beautify = false )

```js
Ofn.jsonStringify( 'foo' );               // ''
Ofn.jsonStringify( { foo: true } );       // '{"foo":true}'
Ofn.jsonStringify( { foo: true }, true ); // `{\n  "foo": true\n}`

Ofn.jsonStringify( [ 1, 2, 3 ] );         // '{"0":1,"1":2,"2":3}'
```

#### Ofn.jsonParse( str, strict = false )

```js
Ofn.jsonParse( 'foo' );       // 'foo'
Ofn.jsonParse( 'foo', true ); // null

Ofn.jsonParse( '{"foo":true}' ); // { foo: true }

Ofn.jsonParse( '[ 1, 2, 3 ]' );               // [ 1, 2, 3 ]
Ofn.jsonParse( '{"0":1,"1":2,"2":3}' );       // [ 1, 2, 3 ]
Ofn.jsonParse( '{"0":1,"1":2,"2":3}', true ); // { "0": 1, "1": 2, "2": 3 }
```

#### Ofn.jsonize( str, strict = false )

```js
Ofn.jsonize( 'foo' );       // 'foo'
Ofn.jsonize( 'foo', true ); // null

Ofn.jsonize( '{"foo":true}' ); // { foo: true }

Ofn.jsonize( '[ 1, 2, 3 ]' );         // [ 1, 2, 3 ]
Ofn.jsonize( '{"0":1,"1":2,"2":3}' ); // [ 1, 2, 3 ]
```

#### Ofn.arrayize( strOrObject, strict = false )

```js
Ofn.arrayize( 'foo' );       // 'foo'
Ofn.arrayize( 'foo', true ); // null

Ofn.arrayize( '{"foo":true}' ); // [] with property foo = true
Ofn.arrayize( { foo: true } );  // [] with property foo = true

Ofn.arrayize( '[ 1, 2, 3 ]' );                  // [ 1, 2, 3 ]
Ofn.arrayize( '{ "0":1, "2":3, "foo":true }' ); // [ 1, undefined, 3 ] with property foo = true
```

#### Ofn.chunkStringByCharSize( str, char, size, orientation = 'left' )

```js
Ofn.chunkStringByCharSize( '1234567', '_', 2 );          // '12_34_56_7'
Ofn.chunkStringByCharSize( '1234567', '.', 3, 'right' ); // '1.234.567'
```

#### Ofn.escAttr( str )

```js
Ofn.escAttr( '<span>foo</span>' ); // '&amp;lt;span&amp;gt;foo&amp;lt;/span&amp;gt;'
```

#### Ofn.splitStringNumber( str, sep = '|' )

```js
Ofn.splitStringNumber( '1.234.567', '.', ); // [ '1', '234', '567' ]
```

#### Ofn.substrCount( str, substr )

```js
Ofn.substrCount( 'This is an example', 'is' ); // 2
```

<hr>

### Crypto

#### Ofn.md5( str )

```js
Ofn.md5( 'This is an example' ); // 'f1bbf779adc2b5e8ada0fc5f6337d96d'
```

#### Ofn.strEncrypt( str, key = '', iv = '', methodMode = 'AES-256-CBC' )

```js
Ofn.strEncrypt( 'This is an example', 'foo' ); // 'MHVuUmE5MHAvOXpOazkwckhyTGc5VUFUM0NXWkNPUFdzcU9wZE5ydlo4Zz0='
```

#### Ofn.strDecrypt( str, key = '', iv = '', methodMode = 'AES-256-CBC' )

```js
Ofn.strDecrypt( 'MHVuUmE5MHAvOXpOazkwckhyTGc5VUFUM0NXWkNPUFdzcU9wZE5ydlo4Zz0=', 'foo' ); // 'This is an example'
```

<hr>

### Functions

#### await Ofn.sleep( ms )

```js
Ofn.sleep( 5000 ); // Stop 5 second
```

#### Ofn.getFunctionName( func = null )

```js
function fnTest() {}

let callback = fnTest;

Ofn.getFunctionName( callback ) // 'fnTest'
```

<hr>

### Classes

#### Ofn.getClassName( classy )

```js
class MyClass {}

Ofn.getClassName( MyClass ); // 'MyClass'
```

#### Ofn.getClassMethods( classy )

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

Ofn.getClassMethods( MyClass ); // [ 'fn1', 'fn2' ]
```

#### Ofn.getClassStaticMethods( classy )

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

Ofn.getClassStaticMethods( MyClass ); // [ 'fnStatic1', 'fnStatic2' ]
```

<hr>

### Objects

#### Ofn.objIsEmpty( obj )

```js
Ofn.objIsEmpty( {} ); // true
Ofn.objIsEmpty( { foo: 0 } ); // false
```

#### Ofn.objGetMethods( obj, allowDefaults = false )

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

let obj = new MyClass();

Ofn.objGetMethods( obj ) // [ 'fn1', 'fn2' ]
```

#### Ofn.objHasKeys( obj, keys )

```js
Ofn.objHasKeys( { a: true }, [ 'a' ] );      // true
Ofn.objHasKeys( { a: true }, [ 'a', 'b' ] ); // false
```

#### Ofn.getObjectMissedKeys( obj, keys )

```js
Ofn.getObjectMissedKeys( { a: true }, [ 'a' ] );      // []
Ofn.getObjectMissedKeys( { a: true }, [ 'a', 'b' ] ); // [ 'b' ]
```

#### Ofn.cloneObject( obj )

```js
//deep clone

let obj1 = { foo: { bar: true } };
let obj2 = Ofn.cloneObject( obj1 );

obj2.foo.bar = false;

// obj1 = { foo: { bar: true } }
// obj2 = { foo: { bar: false } }
```

#### Ofn.cloneObjectWithKeys( obj, keys )

```js
Ofn.cloneObjectWithKeys( { a: true, b: true }, [ 'a' ] ); // { a: true }
```

#### Ofn.cloneObjectWithoutKeys( obj, keys )

```js
Ofn.cloneObjectWithKeys( { a: true, b: true }, [ 'a' ] ); // { b: true }
```

#### Ofn.mergeObjectsDeep( obj1, obj2, ... )

```js
Ofn.mergeObjectsDeep( { a: { b: '1', c: '2' } }, { a: { b: '7', d: '3' } } );
// { a: { b: '7', c: '2', d: '3' }
```

#### Ofn.objToStringSqlSet( obj )

```js
let obj = { size: 20, name: "'oro'", last_update: 'NOW()' };
let str = Ofn.objToStringSqlSet( obj );
// " size = 20, name = 'foo', last_update = NOW() "

let statement = `UPDATE my_table SET ${str} WHERE id = 7`;
// OR
let statement = `INSERT INTO my_table ( ${Object.keys( obj ).join( ', ' )} ) VALUES ( ${Ofn.objToStringSqlSet( obj )} )`;
```

#### Ofn.objToStringAttr( obj )

```js
Ofn.objToStringAttr( { id: 20, name: 'foo' } ); // ' id="20" name="foo" '
```

#### Ofn.objToStringAttrData( obj )

```js
Ofn.objToStringAttrData( { id: 20, name: 'foo' } ); // ' data-id="20" data-name="foo" '
```

#### Ofn.objToStringAttrJs( obj )

```js
Ofn.objToStringAttrJs( { id: 20, name: 'foo' } ); // ' id:20;name:foo '
```

<hr>

### Arrays

#### Ofn.cloneArray( arr )

```js
//deep clone

let arr1 = [ { foo: true }, { bar: false } ];
let arr2 = Ofn.cloneObject( arr1 );

arr2[ 1 ].bar = true;

// arr1 = [ { foo: true }, { bar: false } ]
// arr2 = [ { foo: true }, { bar: true } ]
```

#### Ofn.arrayToObjectByKey( arr, key, strict = false )

```js
Ofn.arrayToObjectByKey( [ { id: 'alpha', name: 'Alpha' }, { id: 'bravo', name: 'Bravo' } ], 'id' );
// { 'alpha': { id: 'alpha', name: 'Alpha' }, 'bravo': { id: 'bravo', name: 'Bravo' }
```

#### Ofn.arrayValuesByKey( arr, key, strict = false )

```js
Ofn.arrayValuesByKey( [ { id: 'alpha', name: 'Alpha' }, { id: 'bravo', name: 'Bravo' } ], 'id' );
// [ 'alpha', 'bravo' ]
```

#### Ofn.arrayCountByKey( arr, key, strict = false )

```js
Ofn.arrayCountByKey( [ { id: 'alpha', category: 'male' }, { id: 'bravo', category: 'female' } ], 'category' );
// { 'male': 1, 'female': 1 }
```

#### Ofn.arrayGroupByKey( arr, key, strict = false )

```js
Ofn.arrayGroupByKey( [ { id: 'alpha', category: 'male' }, { id: 'bravo', category: 'female' } ], 'category' );
// { 'male': [ { id: 'alpha', category: 'male' } ], 'female': [ { id: 'bravo', category: 'female' } ] }
```

#### Ofn.arraySortByKey( arr, key, sortArray )

```js
Ofn.arraySortByKey( [ { id: 'alpha', category: 'male' }, { id: 'bravo', category: 'female' } ], 'category' );
// [ { id: 'bravo', category: 'female' }, { id: 'alpha', category: 'male' } ]

Ofn.arraySortByKey( [ { id: 'alpha', category: 'male' }, { id: 'bravo', category: 'female' } ], 'category', [ 'male', 'female' ] );
// [ { id: 'alpha', category: 'male' }, { id: 'bravo', category: 'female' } ]
```

#### Ofn.arrayGetUnique( arr )

```js
Ofn.arrayGetUnique( [ 1, 1, 2, 1, 3 ] ); // [ 1, 2, 3 ]
```

#### Ofn.arraysIntersection( arr1, arr2, ... )

```js
Ofn.arraysIntersection( [ 1, 2, 3 ], [ 2, 3, 4 ] ); // [ 2, 3 ]
```

#### Ofn.arraysDifference( arr1, arr2, ... )

```js
Ofn.arraysDifference( [ 1, 2, 3 ], [ 2, 3, 4 ] ); // [ 1 ]
```

#### Ofn.arraysDifferenceAll( arr1, arr2, ... )

```js
Ofn.arraysDifferenceAll( [ 1, 2, 3 ], [ 2, 3, 4 ] ); // [ 1, 4 ]
```

<hr>

### Dates

To use `date`, better use `dateObj`.

Note: When you load `new Date()`, the _output string date_ is shown with the _timezone_ `UTC`.

In `dateObj` this _output string date_ is saved as `iso`, and the rest of params uses the `local` date.

By default, the param `sep` is `/`, but it could be changed with `opts = { sep: '.' }`

```js
const date = new Date( '2021-08-13 10:57:34' );

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
    jsdate: new Date( date )
};
```

#### Ofn.dateObjByToday( opts = {} )

```js
Ofn.dateObjByToday()
```

#### Ofn.dateObjByTimestamp( timestamp, opts = {} )

```js
Ofn.dateObjByTimestamp( 1628848654000 )
// iso: '2021-08-13T09:57:34.000Z'
```

#### Ofn.dateObjBySql( sqldate, opts = {} )

```js
Ofn.dateObjBySql( '2021-08-13 10:57:34' )
// local: '2021-08-13T10:57:34.000Z'
```

#### Ofn.dateObjByHtml( html, opts = {} )

```js
Ofn.dateObjByHtml( '13/08/2021 10:57:34' )
// local: '2021-08-13T10:57:34.000Z'
```

#### Ofn.dateObjByDate( date, opts = {} )

```js
Ofn.dateObjByDate( new Date( '2021-08-13 10:57:34' ) )
// local: '2021-08-13T10:57:34.000Z'
```

#### Ofn.dateObjPlusDays( date, days )

```js
const date = new Date( '2021-08-13 10:57:34' );
const dateObj = Ofn.dateObjByDate( date );

Ofn.dateObjPlusDays( date, 1 )
// local: '2021-08-14T10:57:34.000Z'

Ofn.dateObjPlusDays( dateObj, -1 )
// local: '2021-08-12T10:57:34.000Z'
```

#### Ofn.dateIsObj( date )

```js
const date = new Date( '2021-08-13 10:57:34' );
const dateObj = Ofn.dateObjByDate( date );

Ofn.dateIsObj( date );    // false
Ofn.dateIsObj( dateObj ); // true
```


#### Ofn.datesCompare( date1, date2 )

```js
const date = new Date( '2021-08-13 10:57:34' );
const todayObj = Ofn.dateObjByToday();

Ofn.datesCompare( date, todayObj     ) //  1
Ofn.datesCompare( todayObj, date     ) // -1
Ofn.datesCompare( todayObj, todayObj ) //  0

```

#### Ofn.dateIsBetween( date, dateMin, dateMax )

```js
const date = new Date( '2021-08-13 10:57:34' );
const todayObj = Ofn.dateObjByToday();

Ofn.dateIsBetween( Ofn.dateObjPlusDays( date, 1 ), date, todayObj ); 
// true
```

#### Ofn.datesDiffDays( date1, date2 )

```js
const dateObj1 = Ofn.dateObjBySql( '2021-12-25' );
const dateObj2 = Ofn.dateObjBySql( '2022-01-05' );

Ofn.datesDiffDays( dateObj1, dateObj2 ); // 11
```

#### Ofn.datesDiffMonths( date1, date2 )

```js
const dateObj1 = Ofn.dateObjBySql( '2021-12-25' );
const dateObj2 = Ofn.dateObjBySql( '2022-01-05' );

Ofn.datesDiffMonths( dateObj1, dateObj2 ); // 1
```

#### Ofn.datesDiffMonthsArray( date1, date2 )

```js
const dateObj1 = Ofn.dateObjBySql( '2021-12-25' );
const dateObj2 = Ofn.dateObjBySql( '2022-01-05' );

Ofn.datesDiffMonths( dateObj1, dateObj2 ); 
// [ { year: '2021', month: '12' }, { year: '2022', month: '01' } ]
```

#### Ofn.dateCheckString( str, format = 'default' )

To check the format, it's used the regexps from (oro-regexp)[https://github.com/oropesa/oro-regexp]

```js
Ofn.dateCheckString( '2022-01-05', 'date_sql' ) // true
```

Allowed formats:

| Format name             | Example                 | REGEXP                         |
|-------------------------|-------------------------|--------------------------------|
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

#### Ofn.urlGetCurrentByReq( req, isFullpath = true )

```js
// simulating `req` of nodejs
const req = {
  protocol: 'https',
  originalUrl: '/',
  get: ( key ) => { const obj = { host: 'example.com' }; return obj[ key ]; }
}

Ofn.urlGetCurrentByReq( req ); // 'https://example.com/'
Ofn.urlGetCurrentByReq( req, false ); // '/'
```

#### Ofn.urlGetHostByReq( req )

```js
// simulating `req` of nodejs
const req = {
  protocol: 'https',
  originalUrl: '/',
  get: ( key ) => { const obj = { host: 'example.com' }; return obj[ key ]; }
}

Ofn.urlGetHostByReq( req ); // 'https://example.com'
```

#### Ofn.urlIsValid( url )

```js
Ofn.urlIsValid( 'example.com' ); // false
Ofn.urlIsValid( 'https://example.com?foo&bar=1' ); // true
```

#### Ofn.urlObjByUrl( url )

```js
Ofn.urlIsValid( 'example.com' ); // null
Ofn.urlIsValid( 'https://example.com?foo&bar=1' ); // new URL( url )
```

#### Ofn.urlGetBase( url )

```js
Ofn.urlGetBase( 'https://example.com/page?param1=value1&param2=value2' );
// 'https://example.com'
```

#### Ofn.urlGetParams( urlOrQuery )

```js
Ofn.urlGetParams( 'https://example.com/page?param1=value1&param2=value2' );
// { param1: 'value1', param2: 'value2' }
```

#### Ofn.urlEncode( url )

```js
Ofn.urlEncode( 'https://example.com?name=foo bar&plus=1+2' );
// 'https%3A%2F%2Fexample.com%3Fname%3Dfoo%20bar%26plus%3D1%2B2'
```

#### Ofn.urlDecode( url )

```js
Ofn.urlDecode( 'https%3A%2F%2Fexample.com%3Fname%3Dfoo%20bar%26plus%3D1%2B2' );
// 'https://example.com?name=foo bar&plus=1+2'
```

#### Ofn.urlStringToPlain( url )

```js
Ofn.urlStringToPlain( 'https://example.com?name=foo bar&plus=1+2' );
// 'https://example.com?name%3dfoo%20bar&plus%3d1+2'
```

#### Ofn.urlPlainToString( url )

```js
Ofn.urlPlainToString( 'https://example.com?name%3dfoo%20bar&plus%3d1+2' );
// 'https://example.com?name=foo bar&plus=1+2'
```

<hr>

### Files

#### Ofn.getFilenameExtByName( filenameOrPath )

```js
Ofn.getFilenameExtByName( 'filename.pdf' ) // 'pdf'
```

#### Ofn.getFilenameWOutExtByName( filenameOrPath )

```js
Ofn.getFilenameWOutExtByName( 'filename.pdf' ) // 'filename'
```

#### Ofn.getFilenameByPath( path )

```js
Ofn.getFilenameByPath( '/var/www/htdoc/filename.pdf' ) // 'filename.pdf'
```

#### Ofn.getFolderByPath( path, deep = 1 )

```js
Ofn.getFolderByPath( '/var/www/htdoc/filename.pdf' )    // '/var/www/htdoc'
Ofn.getFolderByPath( '/var/www/htdoc/filename.pdf', 3 ) // '/var'
```

#### Ofn.slugifyFilename( filenameOrPath )

```js
Ofn.slugifyFilename( '/var/www/htdoc/Foo Bar.pdf' ) // 'foo-bar.pdf'
```

#### Ofn.sanitizePath( path )

```js
Ofn.sanitizePath( '/var/tmp/foo.pdf' ) // '/var/tmp/foo.pdf'
Ofn.sanitizePath( 'C:\\tmp\\foo.pdf' ) // 'C:/tmp/foo.pdf'
```

#### Ofn.sanitizeFilename( filenameOrPath )

```js
Ofn.sanitizeFilename( '/var/tmp/ÁËÌÒÑ.pdf' ) // 'AEION.pdf'
```

<hr>

### PHP Serialize

To save an object in db, it's better as `json` than `php-serialize`.

So, by default, this functions work as `json` and work well when in current dbs where already exist fields with `php-serialize`.

#### Ofn.phpSerialize( mixedValue, strict = false )

```js
Ofn.phpSerialize( { foo: true } )       // '{"foo":true}'
Ofn.phpSerialize( { foo: true }, true ) // 'a:1:{s:6:"foo";b:1;}'
```

#### Ofn.phpUnserialize( str, strict = false )

```js
Ofn.phpUnserialize( '{"foo":true}' )         // { foo: true }
Ofn.phpUnserialize( 'a:1:{s:6:"foo";b:1;}' ) // { foo: true }
Ofn.phpUnserialize( '{"foo":true}', true )   // '{"foo":true}'
```

#### Ofn.phpIsSerialized( str, strict = true )

```js
Ofn.phpIsSerialized( '{"foo":true}' )         // false
Ofn.phpIsSerialized( 'a:1:{s:6:"foo";b:1;}' ) // true
```

<hr>

### Response

#### Ofn.setResponseOK( msgOrData, data = {} )

```js
Ofn.setResponseOK()
// { status: true }

Ofn.setResponseOK( 'Reason' )
// { status: true, msg: 'Reason' }

Ofn.setResponseOK( { label: 'foo' } )
// { status: true, label: 'foo' }

Ofn.setResponseOK( 'Reason', { label: 'foo' } )
// { status: true, msg: 'Reason', label: 'foo' }

Ofn.setResponseKO( 'Reason:', { msg: 'custom', label: 'foo' } )
// { status: true, msg: 'Reason: custom', label: 'foo' }
```


#### Ofn.setResponseKO( msgOrError, error = {}, tryAgain = false, asError = false )

```js
Ofn.setResponseKO()
// { status: false }

Ofn.setResponseKO( 'Error Reason' )
// { status: false, error: { msg: 'Error Reason' } }

Ofn.setResponseKO( { label: 'foo' } )
// { status: false, error: { label: 'foo' } }

Ofn.setResponseKO( 'Error Reason', { label: 'foo' } )
// { status: false, error: { msg: 'Error Reason', label: 'foo' } }

Ofn.setResponseKO( 'Error Reason:', { msg: 'bad param', label: 'foo' } )
// { status: false, error: { msg: 'Error Reason: bad param', label: 'foo' } }

Ofn.setResponseKO( 'Error Reason', { label: 'foo' }, true )
// { status: false, tryAgain: true, error: { msg: 'Error Reason', label: 'foo' } }

Ofn.setResponseKO( 'Error Reason', { label: 'foo' }, null, true )
// ( new Error() ).name = 'responseError'
//                .message = 'Error Reason'
//                .responseError = { status: false, error: { msg: 'Error Reason', label: 'foo' } }

Ofn.setResponseKO( 'Error Reason', { label: 'foo', errorName: 'customError' }, null, true )
// ( new Error() ).name = 'customError'
//                .message = 'Error Reason'
//                .responseError = { status: false, error: { msg: 'Error Reason', label: 'foo', errorName: 'customError' } }
```
