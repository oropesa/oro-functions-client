# Oro Functions Client

This package ( `oro-functions-client` ) is divided from `oro-functions` to allow using it on _js-client frameworks_ like `Vuejs`. 

If you are going to use this package on `Nodejs` environment, it's recommended to use **[oro-functions](https://github.com/oropesa/oro-functions/)** instead.

Class Ofn with helper static functions: 
* [General](#general) 
* [Numbers](#numbers)
* [String](#string)
* [Crypto](#crypto)
* [Functions](#functions)
* [Classes](#objects)
* [Objects](#objects)
* [Arrays](#arrays)
* [Dates](#dates)
* [URLs](#urls)
* [Files](#files)
* [PHP Serialize](#php-serialize)
* [Response](#response)

```shell
npm install oro-functions-client
```

```js
const Ofn = require( 'oro-functions-client' );
```

### General

```js
Ofn.issetGet( obj, key, valueDefault = null, allowFalsy = true )

Ofn.type( obj )

Ofn.isBoolean  ( obj )
Ofn.isNumber   ( obj )
Ofn.isString   ( obj )
Ofn.isArray    ( obj )
Ofn.isObject   ( obj )
Ofn.isClass    ( obj )
Ofn.isRegexp   ( obj )
Ofn.isDate     ( obj )
Ofn.isUndefined( obj )
Ofn.isNull     ( obj )
Ofn.isNully    ( obj )
```

### Numbers

```js
Ofn.isEven( num )
Ofn.isOdd ( num )

// Ofn.isNumeric( NaN ); -> false
// Ofn.isNumeric( 2.14 ); -> true
// Ofn.isNumeric( '2.14' ); -> true
// Ofn.isNumeric( '2,14' ); -> false
Ofn.isNumeric( num )
Ofn.isNumberic( num ) // for dislexia issues

Ofn.randomMinMax( min, max )

// Ofn.numberFixDecimals( '2,1478' ); -> '2.15'
// Ofn.numberFixDecimals( '2,1478', 6 ); -> '2.147800'
// Ofn.numberFixDecimals( '2.1478', 6, false ); -> '2.1478'
// Ofn.numberFixDecimals( '2.1478', 6, false, 5 ); -> '2.14780'
Ofn.numberFixDecimals( num, decimalLength = 2, allowAllRightZeros = true, minRightZeros = 2 )

// Ofn.numberFixDecimals( '2,1478' ); -> '2,15'
// Ofn.numberFixDecimals( '2,1478', 6 ); -> '2,147800'
// Ofn.numberFixDecimals( '2.1478', 6, false ); -> '2,1478'
// Ofn.numberFixDecimals( '2.1478', 6, false, 5 ); -> '2,14780'
Ofn.numberPrintDecimals( num, decimalLength = 2, allowAllRightZeros = true, minRightZeros = 2 )
```

### String

```js
Ofn.isStringJson( str, allowArray = false )

// Ofn.numberFixDecimals( '123', 5, '0' ); -> '00123'
Ofn.strPad( str, length, pad = ' ', leftRight = 'left' )

Ofn.capitalize( str )

Ofn.slugify( str )

Ofn.snakeify( str )

// Ofn.trimAll( '  string    with    spaces   ', ); -> 'string with spaces'
Ofn.trimAll( str )

Ofn.textTruncate( str, max, suffix = '...' )

Ofn.randomString( len = 8 )

Ofn.jsonStringify( json, beautify = false )

Ofn.jsonParse( str, strict = false )

// Ofn.jsonize( 123 ); -> 123
// Ofn.jsonize( 'string' ); -> 'string'
// Ofn.jsonize( '{status:true}' ); -> { status: true }
Ofn.jsonize( str, strict = false )

Ofn.arrayize( strOrObject, strict = false )

// Ofn.chunkStringByCharSize( '1234567', '.', 3, 'right' ); -> '1.234.567'
Ofn.chunkStringByCharSize( str, char, size, orientation = 'left' )

Ofn.escAttr( str )

// Ofn.splitStringNumber( '1.234.567', '.', ); -> [ '1', '234', '567' ]
Ofn.splitStringNumber( str, sep = '|' )

Ofn.substrCount( str, substr )
```

### Crypto

```js
Ofn.md5( str )

Ofn.strEncrypt( str, key = '', iv = '', methodMode = 'AES-256-CBC' )

Ofn.strDecrypt( str, key = '', iv = '', methodMode = 'AES-256-CBC' )
```

### Functions

```js
await Ofn.sleep( ms )

Ofn.getFunctionName( func = null ) 
```

### Classes

```js
Ofn.getClassName( classy )

Ofn.getClassMethods( classy )

Ofn.getClassStaticMethods( classy )
```

### Objects

```js
Ofn.objIsEmpty( obj )

Ofn.objGetMethods( obj, allowDefaults = false )

// Ofn.objHasKeys( { a: true }, [ 'a' ] ); -> true
// Ofn.objHasKeys( { a: true }, [ 'a', 'b' ] ); -> false
Ofn.objHasKeys( obj, keys )

// Ofn.getObjectMissedKeys( { a: true }, [ 'a' ] ); -> []
// Ofn.getObjectMissedKeys( { a: true }, [ 'a', 'b' ] ); -> [ 'b' ]
Ofn.getObjectMissedKeys( obj, keys )

Ofn.cloneObject( obj )

// Ofn.cloneObjectWithKeys( { a: true, b: true }, [ 'a' ] ); -> { a: true }
Ofn.cloneObjectWithKeys( obj, keys )

// Ofn.cloneObjectWithKeys( { a: true, b: true }, [ 'a' ] ); -> { b: true }
Ofn.cloneObjectWithoutKeys( obj, keys )

// Ofn.mergeObjectsDeep( { a: { a1: '1', a2: '2' }, { a: { a1: '7', a3: '3' } );
// -> { a: { a1: '7', a2: '2', a3: '3' }
Ofn.mergeObjectsDeep( obj1, obj2, ... )

// Ofn.objToStringSqlSet( { id: 20, name: "'oro'", today: 'NOW()' } );
// -> " id = 20, name = 'oro', today = NOW() "
Ofn.objToStringSqlSet( obj )

// Ofn.objToStringAttr( { id: 20, name: 'oro' } );
// -> ' id="20" name="oro" '
Ofn.objToStringAttr( obj )

// Ofn.objToStringAttrData( { id: 20, name: 'oro' } );
// -> ' data-id="20" data-name="oro" '
Ofn.objToStringAttrData( obj )

// Ofn.objToStringAttrJs( { id: 20, name: 'oro' } );
// -> ' id:20;name:oro '
Ofn.objToStringAttrJs( obj )
```

### Arrays

```js
Ofn.cloneArray( arr )

// Ofn.arrayToObjectByKey( [ { id: 'alpha', name: 'Alpha' }, { id: 'bravo', name: 'Bravo' } ], 'id' );
// -> { 'alpha': { id: 'alpha', name: 'Alpha' }, 'bravo': { id: 'bravo', name: 'Bravo' }
Ofn.arrayToObjectByKey( arr, key, strict = false )

// Ofn.arrayValuesByKey( [ { id: 'alpha', name: 'Alpha' }, { id: 'bravo', name: 'Bravo' } ], 'id' );
// -> [ 'alpha', 'bravo' ]
Ofn.arrayValuesByKey( arr, key, strict = false )

// Ofn.arrayCountByKey( [ { id: 'alpha', category: 'male' }, { id: 'bravo', category: 'female' } ], 'category' );
// -> { 'male': 1, 'female': 1 }
Ofn.arrayCountByKey( arr, key, strict = false )

// Ofn.arrayGroupByKey( [ { id: 'alpha', category: 'male' }, { id: 'bravo', category: 'female' } ], 'category' );
// -> { 'male': [ { id: 'alpha', category: 'male' } ], 'female': [ { id: 'bravo', category: 'female' } ] }
Ofn.arrayGroupByKey( arr, key, strict = false )

// Ofn.arraySortByKey( [ { id: 'alpha', category: 'male' }, { id: 'bravo', category: 'female' } ], 'category' );
// -> [ { id: 'bravo', category: 'female' }, { id: 'alpha', category: 'male' } ]
Ofn.arraySortByKey( arr, key, sortArray )

// Ofn.arrayGetUnique( [ 1, 1, 2, 1, 3 ] ); -> [ 1, 2, 3 ]
Ofn.arrayGetUnique( arr )

// Ofn.arraysIntersection( [ 1, 2, 3 ], [ 2, 3, 4 ] ); -> [ 2, 3 ]
Ofn.arraysIntersection( arr1, arr2, ... )

// Ofn.arraysDifference( [ 1, 2, 3 ], [ 2, 3, 4 ] ); -> [ 1 ]
Ofn.arraysDifference( arr1, arr2, ... )

// Ofn.arraysDifferenceAll( [ 1, 2, 3 ], [ 2, 3, 4 ] ); -> [ 1, 4 ]
Ofn.arraysDifferenceAll( arr1, arr2, ... )
```

### Dates

```js
const date = new Date( '2021-08-13 10:57:34' );
const dateObj = {
    iso: '2021-08-13T09:57:34.000Z',
    // 'local' and 'timezone' by default depends of where is the device globally located
    local: '2021-08-13T10:57:34.000Z', 
    timezone: 'Atlantic/Canary',
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
```js
//opts = { sep: '/', timezone: 'DEFAULT USER LOCALE' }

Ofn.dateObjByToday( opts = {} )

Ofn.dateObjByTimestamp( timestamp, opts = {} )

Ofn.dateObjBySql( sqldate, opts = {} )

Ofn.dateObjByHtml( html, opts = {} )

Ofn.dateObjByDate( date, opts = {} )

Ofn.dateObjPlusDays( date, days )

Ofn.dateIsObj( date )

Ofn.datesCompare( date1, date2 )

Ofn.dateIsBetween( date, dateMin, dateMax )

Ofn.datesDiffDays( date1, date2 )

Ofn.datesDiffMonths( date1, date2 )

Ofn.datesDiffMonthsArray( date1, date2 )

Ofn.dateCheckString( str, format = 'default' )
```

### URLs

```js
Ofn.urlGetCurrentByReq( req, isFullpath = true )

Ofn.urlGetHostByReq( req )

Ofn.urlIsValid( url )

Ofn.urlObjByUrl( url )

// Ofn.urlGetBase( 'https://example.com/page?param1=value1&param2=value2' ) 
// -> 'https://example.com'
Ofn.urlGetBase( url )

// Ofn.urlGetParams( 'https://example.com/page?param1=value1&param2=value2' )
// -> { param1: 'value1', param2: 'value2' }
Ofn.urlGetParams( urlOrQuery )

Ofn.urlEncode( url )

Ofn.urlDecode( url )

Ofn.urlStringToPlain( url )

Ofn.urlPlainToString( url )
```

### Files

```js
// Ofn.getFilenameExtByName( 'filename.pdf' ) -> 'pdf'
Ofn.getFilenameExtByName( filenameOrPath )

// Ofn.getFilenameWOutExtByName( 'filename.pdf' ) -> 'filename'
Ofn.getFilenameWOutExtByName( filenameOrPath )

// Ofn.getFilenameByPath( '/var/www/htdoc/filename.pdf' ) -> 'filename.pdf'
Ofn.getFilenameByPath( path )

// Ofn.getFolderByPath( '/var/www/htdoc/filename.pdf' ) -> '/var/www/htdoc'
// Ofn.getFolderByPath( '/var/www/htdoc/filename.pdf', 3 ) -> '/var'
Ofn.getFolderByPath( path, deep = 1 )

Ofn.slugifyFilename( filenameOrPath )

Ofn.sanitizePath( path )

Ofn.sanitizeFilename( filenameOrPath )
```

### PHP Serialize

```js
Ofn.phpSerialize( mixedValue, strict = false )

Ofn.phpUnserialize( str, strict = false )

Ofn.phpIsSerialized( str, strict = true )
```

### Response

```js
// Ofn.setResponseKO() -> { status: false }
Ofn.setResponseKO( msgOrError, error = {}, tryAgain = false, asError = false )

// Ofn.setResponseOK() -> { status: true }
Ofn.setResponseOK( msgOrData, data = {} )
```

