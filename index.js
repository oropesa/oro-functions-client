const CryptoJS = require( 'crypto-js' );
const { Base64 } = require( 'js-base64' );
const { REGEXP } = require( 'oro-regexp' );
const { serialize, unserialize, htmlspecialchars, md5 } = require( 'oro-php-locutus' );

class Ofn {
    //region General

    // Ofn.issetGet( myObject, 'category', 'artist' );
    static issetGet( obj, key, valueDefault = null, allowFalsy = true ) {
        if( Ofn.isNully( obj ) || obj[ key ] === undefined ) {
            return valueDefault;
        }

        return ! allowFalsy && ! obj[ key ] ? valueDefault : obj[ key ];
    }

    // Ofn.type( (new Date()) ); -> "date"
    static type( obj ) {
        let type = ({}).toString.call( obj ).match( /\s([a-zA-Z]+)/ )[ 1 ].toLowerCase();
        type === 'function' && obj.prototype
            && Object.getOwnPropertyNames( obj.prototype ).some( m => m === 'constructor' ) && ( type = 'class' );
        return type;
    }

    static isBoolean  ( obj ) { return Ofn.type( obj ) === 'boolean'  ; }
    static isNumber   ( obj ) { return Ofn.type( obj ) === 'number'   ; }
    static isString   ( obj ) { return Ofn.type( obj ) === 'string'   ; }
    static isArray    ( obj ) { return Ofn.type( obj ) === 'array'    ; }
    static isObject   ( obj ) { return Ofn.type( obj ) === 'object'   ; }
    static isRegexp   ( obj ) { return Ofn.type( obj ) === 'regexp'   ; }
    static isDate     ( obj ) { return Ofn.type( obj ) === 'date'     ; }
    static isUndefined( obj ) { return Ofn.type( obj ) === 'undefined'; }
    static isNull     ( obj ) { return Ofn.type( obj ) === 'null'     ; }
    static isNully    ( obj ) { return [ 'undefined', 'null' ].includes( Ofn.type( obj ) ); }
    static isClass    ( obj ) { return Ofn.type( obj ) === 'class' }

    //endregion
    //region Numbers

    static isEven( num ) {
        return ! Ofn.isNumeric( num ) ? undefined : ! (+num & 1);
    }

    static isOdd( num ) {
        return ! Ofn.isNumeric( num ) ? undefined : !! (+num & 1);
    }

    static isNumberic( num ) { return Ofn.isNumeric( num ); }
    static isNumeric( num ) {
        if( typeof num === 'number' ) { return num - num === 0; }
        if( typeof num === 'string' && num.trim() !== '' ) {
            return Number.isFinite ? Number.isFinite( +num ) : isFinite( +num );
        }
        return false;
    }

    static randomMinMax( min, max ) {
        min = Ofn.isNumeric( min ) ? +min : 0;
        max = Ofn.isNumeric( max ) ? +max : 100;
        min > max && ( [ min, max ] = [ max, min ] );
        return Math.floor( Math.random() * (max - min + 1) + min );
    }

    // Ofn.numberFixDecimals( '2,1478' ); -> '2.15'
    // Ofn.numberFixDecimals( '2,1478', 6 ); -> '2.147800'
    // Ofn.numberFixDecimals( '2.1478', 6, false ); -> '2.1478'
    // Ofn.numberFixDecimals( '2.1478', 6, false, 5 ); -> '2.14780'
    static numberFixDecimals( num, decimalLength = 2, allowAllRightZeros = true, minRightZeros = 2 ) {
        if( typeof num !== 'string' && typeof num !== 'number' ) { num = 0; }
        if( ! num ) { num = 0; }

        let tmp = num;
        num = (num + '').replace( /,/g, '.' );
        if( ! Ofn.isNumeric( num ) ) { return tmp; }
        if( decimalLength === false || decimalLength === 'false' ) { return num; } // allow all decimals

        ( ! Ofn.isNumeric( decimalLength ) || decimalLength < 0 ) && ( decimalLength = 0 );
        num = +(Math.round( num + `e+${decimalLength}` ) + `e-${decimalLength}`) + '';

        let parts = num.split( '.' );
        if( parts[ 1 ] === undefined ) { parts.push( '' ) }

        let decimals = Ofn.strPad( parts[ 1 ], decimalLength, '0', 'right' );
        if( ! allowAllRightZeros ) {
            decimals = decimals.replace( /0+$/g, '' );
            decimals.length < minRightZeros && ( decimals = Ofn.strPad( parts[ 1 ], minRightZeros, '0', 'right' ) );
        }

        decimals.length && ( decimals = `.${decimals}` );
        return `${parts[ 0 ]}${decimals}`;
    }

    // Ofn.numberFixDecimals( '2,1478' ); -> '2,15'
    // Ofn.numberFixDecimals( '2,1478', 6 ); -> '2,147800'
    // Ofn.numberFixDecimals( '2.1478', 6, false ); -> '2,1478'
    // Ofn.numberFixDecimals( '2.1478', 6, false, 5 ); -> '2,14780'
    static numberPrintDecimals( num, decimalLength = 2, allowAllRightZeros = true, minRightZeros = 2 ) {
        num = Ofn.numberFixDecimals( num, decimalLength, allowAllRightZeros, minRightZeros );
        return ! Ofn.isNumeric( num ) ? num : num.replace( /\./g, ',' );
    }

    //endregion
    //region String

    static isStringJson( str, allowArray = false ) {
        if( typeof str !== "string" ) { return false; }

        let strJson;
        try { strJson = JSON.parse( str ); }
        catch( e ) {
            return false;
        }

        if( allowArray && Ofn.type( strJson ) === "array" ) { return true; }
        return Ofn.type( strJson ) === "object";
    }

    static strPad( str, length, pad = ' ', leftRight = 'left' ) {
        if( ! [ 'left', 'right' ].includes( leftRight ) ) { leftRight = 'left'; }

        ( Ofn.isNully( str ) ) && ( str = '' );
        str += '';
        if( str.length >= length ) {
            return leftRight === 'left' ? str.substr( 0, length ) : str.substr( -length );
        }

        ( ! Ofn.isNumeric( length ) || ! length ) && ( length = str.length );
        ( length < 0 ) && ( length = 0 );
        let padStr = new Array( length + 1 ).join( pad );
        padStr = padStr.substr( 0, length - str.length );

        return leftRight === 'left' ? padStr + str : str + padStr;
    }

    static capitalize( str ) {
        if( typeof str === 'number' ) { return str + ''; }
        if( typeof str !== 'string' ) { return ''; }

        return `${str.charAt( 0 ).toUpperCase()}${str.slice( 1 )}`;
    }

    static slugify( str ) {
        if( typeof str === 'number' ) { return str + ''; }
        if( typeof str !== 'string' ) { return ''; }

        return str.match( /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g )
                         .map( x => x.toLowerCase() )
                         .join( '-' );
    }

    static snakeify( str ) {
        if( typeof str === 'number' ) { return str + ''; }
        if( typeof str !== 'string' ) { return ''; }

        return str.match( /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g )
                         .map( x => x.toLowerCase() )
                         .join( '_' );
    }

    static trimAll( str ) {
        if( typeof str === 'number' ) { return str + ''; }
        if( typeof str !== 'string' ) { return ''; }

        return str.trim().replace( /  +/g, ' ' );
    }

    static textTruncate( str, max = 120, suffix = '...' ) {
        if( typeof str === 'number' ) { str += ''; }
        if( typeof str !== 'string' ) { return ''; }
        if( max === true ) { return str; }

        ( ! Ofn.isNumeric( max ) ) && ( max = 120 );
        suffix = suffix === null ? '...' : suffix + '';

        if( suffix.length >= max ) { return suffix.substr( -max ); }
        if( str.length <= max ) { return str; }

        let min = str.substr( 0, max - suffix.length ).lastIndexOf( ' ' );
        min === -1 && ( min = max - suffix.length );

        return `${str.substr( 0, min )}${suffix}`;
    }

    static randomString( len = 8 ) {
        ( ! Ofn.isNumeric( len ) ) && ( len = 8 );
        if( +len <= 0 ) { return ''; }

        let str = Math.random().toString( 36 ).substring( 2 ).substr( -10 );
        str.length < 10 && ( str = `${str}aaa`.substr( 0, 10 ) );
        if( +len <= 10 ) { return str.substr( -len ); }

        return str + Ofn.randomString( len - 10 );
    }

    static jsonStringify( json, beautify = false ) {
        if( ! Ofn.isObject( json ) && ! Ofn.isArray( json ) ) { return ''; }

        return !! beautify ? JSON.stringify( Object.assign( {}, json ), null, 2 )
                           : JSON.stringify( Object.assign( {}, json ) );
    }

    static jsonParse( str, strict = false ) {
        let strJson = Ofn.jsonize( str, strict );
        if( Ofn.type( strJson ) !== 'object' ) { return strJson; }

        let isJsonArray = ! strict && !! Object.keys( strJson ).filter( el => Ofn.isNumeric( el ) && +el < 5 ).length;
        return isJsonArray ? Ofn.arrayize( strJson ) : strJson;
    }

    static jsonize( str, strict = false ) {
        let strDefault = strict ? null : str;
        if( typeof str !== "string" ) { return strDefault; }

        let strJson;
        try { strJson = JSON.parse( str ); }
        catch( err ) { return strDefault; }

        let jsonType = Ofn.type( strJson );
        return jsonType === 'object' || jsonType === 'array' ? strJson : strDefault;
    }

    static arrayize( strOrObject, strict = false ) {
        let mixedDefault = strict ? null : strOrObject;
        let mixedType = Ofn.type( strOrObject );
        if( ! [ 'string', 'object', 'array' ].includes( mixedType ) ) { return mixedDefault; }

        let json = [ 'object', 'array' ].includes( mixedType ) ? strOrObject : null;
        if( mixedType === 'string' ) {
            try { json = JSON.parse( strOrObject ); }
            catch( err ) { return mixedDefault; }
        }

        if( ! [ 'object', 'array' ].includes( Ofn.type( json ) ) ) { return mixedDefault; }

        let arr = [];

        for( const key of Object.keys( json ) ) {
            arr[ key ] = json[ key ];
        }

        return arr;
    }

    static chunkStringByCharSize( str, char, size, orientation = 'left' ) {
        if( ! str ) { return '' }
        if( ! Ofn.isNumeric( size ) || +size < 0 ) { return str; }

        Ofn.isNully( char ) && ( char = '' );
        char += '';
        str += '';

        const regex = new RegExp( `(.{${size}})`, 'g' );

        if( orientation === 'right' ) {
            str = str.split( '' ).reverse().join( '' )
                     .replace( regex, `$1${char.split( '' ).reverse().join( '' )}` )
                     .split( '' ).reverse().join( '' );
            str.substr( 0, char.length ) === char && ( str = str.substr( char.length ) );
            return str;
        }

        str = str.replace( regex,`$1${char}`)
        str.substr( -(char.length) ) === char && ( str = str.substr( 0, str.length - char.length ) );
        return str;
    }

    static escAttr( str ) {
        str = str === 0 ? str + '' : str || '';
        str = str.toString();

        if( ! str.length ) { return ''; }

        // wp_check_invalid_utf8 / .match fails when it encounters invalid UTF8 in $string.
        if( ! str.match( /^./us ) || str.match( /^./us ).length !== 1 ) { return ''; }

        // _wp_specialchars / Don't bother if there are no specialchars - saves some processing.
        if( ! str.match( /[&<>"\']/ ) ) { return str; }

        // wp_kses_normalize_entities / Disarm all entities by converting & to &amp;
        str = str.replace( /&/g, '&amp;' );

        str = htmlspecialchars( str, 'ENT_QUOTES', 'UTF-8', false );

        return str;
    }

    // Ofn.splitStringNumber( 'chacho123' ); -> [ 'chacho', '123' ]
    // Ofn.splitStringNumber( '123.456' ); -> [ '123', '.', '456' ]
    // Ofn.splitStringNumber( '123.456', '.' ); -> [ '123', '456' ]
    // Ofn.splitStringNumber( 'chacho loco', ' ' ); -> [ 'chacho', 'loco' ]
    static splitStringNumber( str, sep = '|' ) {
        if( typeof str === 'number' ) { str += ''; }
        if( typeof str !== 'string' ) { return []; }

        return str.replace( /(\d+)/g, `${sep}$1${sep}` ).split( sep ).filter( l => !! l );
    }

    static substrCount( str, substr ) {
        if( typeof str === 'number' ) { str += ''; }
        if( typeof substr === 'number' ) { substr += ''; }
        if( typeof str !== 'string' || typeof substr !== 'string' || ! str || ! substr ) { return 0; }

        let regex = new RegExp( substr, 'g' );
        return (str.match( regex ) || []).length;
    }

    //endregion
    //region Crypto

    static md5( str ) {
        return Ofn.isNully( str ) ? '' : md5( str );
    }

    static strEncrypt( str, key = '', iv = '', methodMode = 'AES-256-CBC' ) {
        if( Ofn.isNully( str ) ) { return ''; }

        let secretKey = CryptoJS.enc.Utf8.parse( CryptoJS.SHA256( key || 'random' ).toString().substr( 0, 32 ) );
        let secretIv = CryptoJS.enc.Utf8.parse( CryptoJS.SHA256( iv || 'random' ).toString().substr( 0, 16 ) );

        let mode;
        switch( methodMode ) {
            case 'AES-256-CBC': mode = CryptoJS.mode.CBC; break;
            default: mode = methodMode;
        }

        return Base64.encode( CryptoJS.AES.encrypt( str + '', secretKey, { iv: secretIv, mode } ).toString() );
    }

    static strDecrypt( str, key = '', iv = '', methodMode = 'AES-256-CBC' ) {
        if( Ofn.isNully( str ) ) { return ''; }

        let secretKey = CryptoJS.enc.Utf8.parse( CryptoJS.SHA256( key || 'random' ).toString().substr( 0, 32 ) );
        let secretIv = CryptoJS.enc.Utf8.parse( CryptoJS.SHA256( iv || 'random' ).toString().substr( 0, 16 ) );

        let mode;
        switch( methodMode ) {
            case 'AES-256-CBC': mode = CryptoJS.mode.CBC; break;
            default: mode = methodMode;
        }

        return CryptoJS.AES.decrypt( Base64.decode( str + '' ), secretKey, { iv: secretIv, mode } ).toString( CryptoJS.enc.Utf8 );
    }

    //endregion
    //region Functions

    static sleep( ms ) {
        if( ! Ofn.isNumeric( ms ) ) { ms = 0; }
        ms = Math.floor( ms );

        return new Promise( resolve => setTimeout( resolve, ms ) );
    }

    static getFunctionName( func = null ) {
        const findFirstOccurrence = ( string, searchElements, fromIndex = 0 ) => {
            let min = string.length;
            for( let i = 0; i < searchElements.length; i += 1 ) {
                const occ = string.indexOf( searchElements[ i ], fromIndex );
                if( occ !== -1 && occ < min ) { min = occ; }
            }
            return min === string.length ? -1 : min;
        }

        if( func ) {
            if( func.name ) { return func.name; }
            const result = /^function\s+([\w\$]+)\s*\(/.exec( func.toString() );
            return result ? result[ 1 ] : '';
        }

        const obj = {};
        Error.captureStackTrace( obj, Ofn.getFunctionName );
        const { stack } = obj;
        const firstCharacter = stack.indexOf( 'at ' ) + 3;
        const lastCharacter = findFirstOccurrence( stack, [ ' ', ':', '\n' ], firstCharacter );
        return stack.slice( firstCharacter, lastCharacter );
    }

    //endregion
    //region Classes

    static getClassName( classy ) {
        if( ! Ofn.isClass( classy ) ) { return ''; }
        return classy.name;
    }

    static getClassMethods( classy ) {
        if( ! Ofn.isClass( classy ) ) { return []; }
        return Object.getOwnPropertyNames( classy.prototype ).filter( prop => prop !== 'constructor' );
    }

    static getClassStaticMethods( classy ) {
        if( ! Ofn.isClass( classy ) ) { return []; }
        return Object.getOwnPropertyNames( classy ).filter( prop => typeof classy[ prop ] === 'function' );
    }

    //endregion
    //region Objects

    static objIsEmpty( obj ) {
        if( ! [ 'object', 'array' ].includes( Ofn.type( obj ) ) ) { return true; }
        return Object.keys( obj || {} ).length === 0;
    }

    static objGetMethods( obj, allowDefaults = false ) {
        if( ! [ 'object', 'array' ].includes( Ofn.type( obj ) ) ) { return []; }

        let properties = new Set();
        let currentObj = obj;
        let defaultsObject = [
            'constructor', '__defineGetter__', '__defineSetter__', 'hasOwnProperty',
            '__lookupGetter__', '__lookupSetter__', 'isPrototypeOf', 'propertyIsEnumerable',
            'toString', 'valueOf', 'toLocaleString',
        ]

        let defaultsArray = [
            'constructor', 'concat', 'copyWithin', 'fill', 'find', 'findIndex', 'flat',
            'lastIndexOf', 'pop', 'push', 'reverse', 'shift', 'unshift', 'slice', 'sort',
            'splice', 'includes', 'indexOf', 'join', 'keys', 'entries', 'values', 'forEach',
            'filter', 'flatMap', 'map', 'every', 'some', 'reduce', 'reduceRight', 'toLocaleString',       'toString',
            '__defineGetter__', '__defineSetter__', 'hasOwnProperty', '__lookupGetter__',
            '__lookupSetter__', 'isPrototypeOf', 'propertyIsEnumerable', 'valueOf'
        ]

        do {
            Object.getOwnPropertyNames( currentObj ).map( item =>  {
                if( ! allowDefaults && Ofn.isObject( obj ) && defaultsObject.includes( item ) ) { return; }
                if( ! allowDefaults && Ofn.isArray( obj ) && defaultsArray.includes( item ) ) { return; }

                properties.add( item );
            } )
        }
        while( (currentObj = Object.getPrototypeOf( currentObj )) );

        return [ ...properties.keys() ].filter( item => typeof obj[ item ] === 'function' );
    }

    static objHasKeys( obj, keys ) {
        if( ! [ 'object', 'array' ].includes( Ofn.type( obj ) ) ) { return false; }
        if( ! Ofn.isArray( keys ) || ! keys.length ) { return false; }

        const objKeys = Object.keys( obj );
        return keys.every( k => objKeys.includes( k + '' ) );
    }

    static getObjectMissedKeys( obj, keys ) {
        if( ! [ 'object', 'array' ].includes( Ofn.type( obj ) ) ) { return []; }
        if( ! Ofn.isArray( keys ) || ! keys.length ) { return []; }

        const objKeys = Object.keys( obj );
        return keys.filter( k => ! objKeys.includes( k + '' ) );
    }

    // Ofn.cloneObject( { a: '1', b: '2', c: '3' } );
    // -> { a: '1', b: '2', c: '3' }
    static cloneObject( obj ) {
        if( ! [ 'object', 'array' ].includes( Ofn.type( obj ) ) ) { return {}; }

        return JSON.parse( JSON.stringify( obj || {} ) );
    }

    // Ofn.cloneObjectWithKeys( { a: '1', b: '2', c: '3' }, ['a', 'b'] );
    // -> { a: '1', b: '2' }
    static cloneObjectWithKeys( obj, keys ) {
        if( ! [ 'object', 'array' ].includes( Ofn.type( obj ) ) ) { return {}; }
        if( ! Ofn.isArray( keys ) || ! keys.length ) { return {}; }

        return Ofn.cloneObject(
            Object.keys( obj || {} )
                  .filter( k => { return Ofn.isNumeric( k ) ? keys.includes( k ) || keys.includes( +k ) : keys.includes( k ) } )
                  .reduce( ( res, k ) => Object.assign( res, { [ k ]: obj[ k ] } ), {} )
        );
    }

    // Ofn.cloneObjectWithoutKeys( { a: '1', b: '2', c: '3' }, ['a', 'b'] );
    // -> { c: '3' }
    static cloneObjectWithoutKeys( obj, keys ) {
        if( ! [ 'object', 'array' ].includes( Ofn.type( obj ) ) ) { return {}; }
        if( ! Ofn.isArray( keys ) || ! keys.length ) { return {}; }

        return Ofn.cloneObject(
            Object.keys( obj || {} )
                  .filter( k => { return Ofn.isNumeric( k ) ? ! keys.includes( k ) && ! keys.includes( +k ) : ! keys.includes( k ) } )
                  .reduce( ( res, k ) => Object.assign( res, { [ k ]: obj[ k ] } ), {} )
        );
    }

    // Ofn.mergeObjectsDeep( { a: { a1: '1', a2: '2' }, { a: { a1: '7', a3: '3' } );
    // -> { a: { a1: '7', a2: '2', a3: '3' }
    static mergeObjectsDeep() {
        let objMerged = {};

        for( const obj of arguments ) {
            if( ! Ofn.isObject( obj ) || Ofn.objIsEmpty( obj ) ) { continue; }

            if( Ofn.objIsEmpty( objMerged ) ) {
                objMerged = Ofn.cloneObject( obj );
                continue;
            }

            let objClone = Ofn.cloneObject( obj );
            for( const key of Object.keys( objClone ) ) {
                if( objMerged[ key ] === undefined ) { objMerged[ key ] = objClone[ key ]; continue; }
                if( ! Ofn.isObject( objClone[ key ] ) || ! Ofn.isObject( objMerged[ key ] ) ) {
                    objMerged[ key ] = objClone[ key ];
                    continue;
                }

                objMerged[ key ] = Ofn.mergeObjectsDeep( objMerged[ key ], objClone[ key ] );
            }
        }

        return objMerged;
    }

    // Ofn.objToStringSqlSet( { id: 20, name: "'oro'", today: 'NOW()' } );
    // -> " id = 20, name = 'oro', today = NOW() "
    static objToStringSqlSet( obj ) {
        if( ! Ofn.isObject( obj ) ) { return ''; }

        let str = '';
        Object.keys( obj ).forEach( key => {
            !! str && ( str += ',' );
            str += ` ${key} = ${obj[ key ]}`;
        } );
        return str.length ? `${str} ` : str;
    }

    // Ofn.objToStringAttr( { id: 20, name: 'oro' } );
    // -> ' id="20" name="oro" '
    static objToStringAttr( obj ) {
        if( ! Ofn.isObject( obj ) ) { return ''; }

        let str = '';
        Object.keys( obj ).forEach( key => {
            str += ` ${key}="${Ofn.escAttr( obj[ key ] )}"`;
        } );
        return str.length ? `${str} ` : str;
    }

    // Ofn.objToStringAttrData( { id: 20, name: 'oro' } );
    // -> ' data-id="20" data-name="oro" '
    static objToStringAttrData( obj ) {
        if( ! Ofn.isObject( obj ) ) { return ''; }

        let str = '';
        Object.keys( obj ).forEach( key => {
            str += ` data-${key}="${Ofn.escAttr( obj[ key ] )}"`;
        } );
        return str.length ? `${str} ` : str;
    }

    // Ofn.objToStringAttrJs( { id: 20, name: 'oro' } );
    // -> ' id:20;name:oro '
    static objToStringAttrJs( obj ) {
        if( ! Ofn.isObject( obj ) ) { return ''; }

        let str = '';
        Object.keys( obj ).forEach( key => {
            !! str && ( str += ';' );
            str += ` ${key}:${Ofn.escAttr( obj[ key ] )}`;
        } );
        return str.length ? `${str} ` : str;
    }

    //endregion
    //region Arrays

    static cloneArray( arr ) {
        if( ! Ofn.isArray( arr ) ) { return []; }

        return Ofn.cloneObject( arr );
    }

    // Ofn.arrayToObjectByKey( [ { id: 'alpha', name: 'Alpha' }, { id: 'bravo', name: 'Bravo' } ], 'id' );
    // -> { 'alpha': { id: 'alpha', name: 'Alpha' }, 'bravo': { id: 'bravo', name: 'Bravo' }
    static arrayToObjectByKey( arr, key, strict = false ) {
        if( ! Ofn.isArray( arr ) ) { return {}; }
        Ofn.isNumber( key ) && ( key += '' );
        if( ! Ofn.isString( key ) ) { return {}; }

        return strict ? arr.reduce( ( a, b ) => { return ! Ofn.isNully( b ) && b[ key ] !== undefined ? ({ ...a, [ b[ key ] ]: b }) : { ...a } }, {} )
                      : arr.reduce( ( a, b ) => { return ! Ofn.isNully( b ) ? ({ ...a, [ b[ key ] ]: b }) : { ...a } }, {} )
    }

    // Ofn.arrayValuesByKey( [ { id: 'alpha', name: 'Alpha' }, { id: 'bravo', name: 'Bravo' } ], 'id' );
    // -> [ 'alpha', 'bravo' ]
    static arrayValuesByKey( arr, key, strict = false ) {
        if( ! Ofn.isArray( arr ) ) { return []; }
        Ofn.isNumber( key ) && ( key += '' );
        if( ! Ofn.isString( key ) ) { return []; }

        let values = arr.map( obj => ! Ofn.isNully( obj ) ? obj[ key ] : undefined );
        return ! strict ? values : values.filter( el => el !== undefined );
    }

    // Ofn.arrayCountByKey( [ { id: 'alpha', category: 'male' }, { id: 'bravo', category: 'female' } ], 'category' );
    // -> { 'male': 1, 'female': 1 }
    static arrayCountByKey( arr, key, strict = false ) {
        if( ! Ofn.isArray( arr ) ) { return {}; }
        Ofn.isNumber( key ) && ( key += '' );
        if( ! Ofn.isString( key ) ) { return {}; }

        //return strict ? arr.reduce( ( a, b ) => { return b[ key ] !== undefined ? ({ ...a, [ b[ key ] ]: b }) : { ...a } }, {} )
        return strict ? arr.reduce( ( prev, curr ) => { curr && curr[ key ] && (prev[ curr[ key ] ] = ++prev[ curr[ key ] ] || 1); return prev }, {} )
                      : arr.reduce( ( prev, curr ) => { curr && (prev[ curr[ key ] ] = ++prev[ curr[ key ] ] || 1); return prev }, {} )
    }

    // Ofn.arrayGroupByKey( [ { id: 'alpha', category: 'male' }, { id: 'bravo', category: 'female' } ], 'category' );
    // -> { 'male': [ { id: 'alpha', category: 'male' } ], 'female': [ { id: 'bravo', category: 'female' } ] }
    static arrayGroupByKey( arr, key, strict = false ) {
        if( ! Ofn.isArray( arr ) ) { return {}; }
        Ofn.isNumber( key ) && ( key += '' );
        if( ! Ofn.isString( key ) ) { return {}; }

        return strict ? arr.reduce( ( acc, item ) => { item && item[ key ] && (acc[ item[ key ] ] = [ ...(acc[ item[ key ] ] || []), item ]); return acc }, {} )
                      : arr.reduce( ( acc, item ) => { item && (acc[ item[ key ] ] = [ ...(acc[ item[ key ] ] || []), item ]); return acc }, {} )
    }

    // Ofn.arraySortByKey( [ { id: 'alpha', category: 'male' }, { id: 'bravo', category: 'female' } ], 'category' );
    // -> [ { id: 'bravo', category: 'female' }, { id: 'alpha', category: 'male' } ]
    static arraySortByKey( arr, key ) {
        if( ! Ofn.isArray( arr ) ) { return []; }
        Ofn.isNumber( key ) && ( key += '' );
        if( ! Ofn.isString( key ) ) { return []; }

        let values = arr.concat().sort( ( a, b ) => ( b[ key ] === undefined ) ? -1 : ( a[ key ] === undefined )? 1 : (a[ key ] > b[ key ]) ? 1 : ((a[ key ] < b[ key ]) ? -1 : 0) );
        return values.filter( el => ! Ofn.isNully( el ) );
    }

    // Ofn.arrayGetUnique( [ 1, 1, 2, 1, 3 ] );
    // -> [ 1, 2, 3 ]
    static arrayGetUnique( arr ) {
        if( ! Ofn.isArray( arr ) ) { return []; }

        let arrResult = [];
        let arrObjs = [];
        for( const elem of arr ) {
            if( typeof arr !== 'object' ) {
                if( arrResult.indexOf( elem ) !== -1 ) { continue; }
                arrResult.push( elem );
            }

            let jsonObj = JSON.stringify( elem );
            if( arrObjs.indexOf( jsonObj ) !== -1 ) { continue; }
            arrObjs.push( jsonObj );
            arrResult.push( elem );
        }

        return arrResult;
    }

    // Ofn.arraysIntersection( [ 1, 2, 3 ], [ 2, 3, 4 ] );
    // -> [ 2, 3 ]
    static arraysIntersection() {
        let arrResult = [];

        for( const arr of arguments ) {
            if( ! Ofn.isArray( arr ) || ! arr.length ) { continue; }
            if( ! arrResult.length ) { arrResult = arr; continue; }

            arrResult = arrResult.filter( elem => arr.includes( elem ) );
        }

        return Ofn.cloneArray( arrResult );
    }

    // Ofn.arraysDifference( [ 1, 2, 3 ], [ 2, 3, 4 ] ); -> [ 1 ]
    static arraysDifference() {
        let arrResult = [];

        for( const arr of arguments ) {
            if( ! Ofn.isArray( arr ) || ! arr.length ) { continue; }
            if( ! arrResult.length ) { arrResult = arr; continue; }

            arrResult = arrResult.filter( elem => ! arr.includes( elem ) );
        }

        return Ofn.cloneArray( arrResult );
    }

    // Ofn.arraysDifferenceAll( [ 1, 2, 3 ], [ 2, 3, 4 ] ); -> [ 1, 4 ]
    static arraysDifferenceAll() {
        let arrResult = [];
        let arrIntersect = [];

        for( const arr of arguments ) {
            if( ! Ofn.isArray( arr ) || ! arr.length ) { continue; }
            if( ! arrResult.length ) { arrResult = arr; continue; }

            arrIntersect = Ofn.arrayGetUnique( arrIntersect.concat( Ofn.arraysIntersection( arrResult, arr ) ) );
            arrResult = arrResult.filter( elem => ! arr.includes( elem ) ).concat( arr.filter( elem => ! arrResult.includes( elem ) ) );
            arrResult = arrResult.filter( elem => ! arrIntersect.includes( elem ) );
        }

        return Ofn.cloneArray( arrResult );
    }

    //endregion
    //region Dates

    static dateObjByToday( sep = '/' ) {
        return Ofn.dateObjByDate( (new Date()), sep );
    }

    static dateObjByTimestamp( timestamp, sep = '/' ) {
        if( ! Ofn.isNumber( timestamp ) ) { return null; }

        return Ofn.dateObjByDate( (new Date( timestamp )), sep );
    }

    static dateObjBySql( sqldate, sep = '/' ) {
        if( ! Ofn.isString( sqldate ) ) { return null; }
        if( ! REGEXP.DATETIME_SQL.test( sqldate ) ) { return null; }

        return Ofn.dateObjByDate( (new Date( sqldate )), sep );
    }

    static dateObjByHtml( html, sep = '/' ) {
        if( ! Ofn.isString( html ) ) { return null; }
        if( ! REGEXP.DATETIME_FN( sep ).test( html ) ) { return null; }

        const arr = html.trim().split( sep );
        if( arr.length !== 3 ) { return null; }

        const yearhours = arr[ 2 ].split( ' ' );
        let sqldate = `${yearhours[ 0 ]}-${arr[ 1 ]}-${arr[ 0 ]}`;
        if( yearhours.length > 1 ) {
            sqldate += ` ${yearhours[ 1 ]}`;
        }

        return Ofn.dateObjByDate( (new Date( sqldate )), sep );
    }

    static dateObjByDate( date, sep = '/' ) {
        if( Ofn.type( date ) !== 'date' ) {
            return null;
        }

        let dateObj = {};
        dateObj.iso = date.toISOString();

        let localData = new Date( date );
        localData.setHours( localData.getHours() + ( localData.getTimezoneOffset() / -60 ) );
        dateObj.local = localData.toISOString();
        dateObj.sep = sep;

        const dateArr = dateObj.local.split( /[^0-9]/ ).slice( 0, -1 );
        // dateArr = [ year, month, day, hour, minute, second, millisecond ]

        dateObj.year = dateArr[ 0 ];
        dateObj.month = dateArr[ 1 ];
        dateObj.day = dateArr[ 2 ];
        dateObj.hour = dateArr[ 3 ];
        dateObj.minute = dateArr[ 4 ];
        dateObj.second = dateArr[ 5 ];

        dateObj.time = `${dateObj.hour}:${dateObj.minute}`;
        dateObj.times = `${dateObj.hour}:${dateObj.minute}:${dateObj.second}`;

        dateObj.date = `${dateObj.day}${dateObj.sep}${dateObj.month}${dateObj.sep}${dateObj.year}`;
        dateObj.datetime = `${dateObj.date} ${dateObj.time}`;
        dateObj.datetimes = `${dateObj.date} ${dateObj.times}`;

        dateObj.sqldate = `${dateObj.year}-${dateObj.month}-${dateObj.day}`;
        dateObj.sqldatetime = `${dateObj.sqldate} ${dateObj.times}`;

        dateObj.fulldate = `${dateObj.date} ${dateObj.times}`;
        dateObj.fulldateStart = `${dateObj.date} 00:00:00`;
        dateObj.fulldateEnd = `${dateObj.date} 23:59:59`;

        dateObj.weekday = [ 7, 1, 2, 3, 4, 5, 6 ][ date.getDay() ];
        dateObj.monthdays = new Date( dateObj.year, dateObj.month, 0 ).getDate();
        dateObj.timestamp = date.getTime();

        dateObj.jsdate = new Date( date );
        return dateObj;
    }

    static dateObjPlusDays( date, days ) {
        if( ! Ofn.isDate( date ) && ! Ofn.dateIsObj( date ) ) { return null; }
        if( ! Ofn.isNumeric( days ) && Ofn.dateIsObj( date ) ) { return Ofn.cloneObject( date ); }

        days = ! Ofn.isNumeric( days ) ? 0 : +days;

        let jsdate = new Date( Ofn.dateIsObj( date ) ? date.jsdate : date );
        jsdate.setDate( jsdate.getDate() + days );

        return Ofn.dateObjByDate( jsdate, Ofn.dateIsObj( date ) ? date.sep : '/' )
    }

    static dateIsObj( date ) {
        return !! date && Ofn.isDate( date.jsdate );
    }

    static datesCompare( date1, date2 ) {
        if( ! Ofn.isDate( date1 ) && ! Ofn.dateIsObj( date1 ) ) {
            return ! Ofn.isDate( date2 ) && ! Ofn.dateIsObj( date2 ) ? 0 : 1;
        }

        if( ! Ofn.isDate( date2 ) && ! Ofn.dateIsObj( date2 ) ) { return -1; }

        const timestamp1 = Ofn.dateIsObj( date1 ) ? date1.timestamp : date1.getTime();
        const timestamp2 = Ofn.dateIsObj( date2 ) ? date2.timestamp : date2.getTime();

        if( timestamp1 > timestamp2 ) {
            return -1;
        }
        else if( timestamp1 < timestamp2 ) {
            return 1;
        }
        return 0;
    }

    static dateIsBetween( date, dateMin, dateMax ) {
        if( ! Ofn.isDate( date ) && ! Ofn.dateIsObj( date ) ) { return false; }
        if( ! Ofn.isDate( dateMin ) && ! Ofn.dateIsObj( dateMin ) ) { return false; }
        if( ! Ofn.isDate( dateMax ) && ! Ofn.dateIsObj( dateMax ) ) { return false; }

        const timestampDate = Ofn.dateIsObj( date ) ? date.timestamp : date.getTime();
        const timestampMin = Ofn.dateIsObj( dateMin ) ? dateMin.timestamp : dateMin.getTime();
        const timestampMax = Ofn.dateIsObj( dateMax ) ? dateMax.timestamp : dateMax.getTime();

        return timestampDate >= timestampMin && timestampDate <= timestampMax
    }

    static datesDiffDays( date1, date2 ) {
        if( ! Ofn.isDate( date1 ) && ! Ofn.dateIsObj( date1 ) ) { return 0; }
        if( ! Ofn.isDate( date2 ) && ! Ofn.dateIsObj( date2 ) ) { return 0; }

        let jsdate1 = Ofn.dateIsObj( date1 ) ? date1.jsdate : date1;
        let jsdate2 = Ofn.dateIsObj( date2 ) ? date2.jsdate : date2;

        jsdate2 < jsdate1 && ( [ jsdate1, jsdate2 ] = [ jsdate2, jsdate1 ] );

        return Math.ceil( ( jsdate2 - jsdate1 ) / (1000 * 60 * 60 * 24) );
    }

    static datesDiffMonths( date1, date2 ) {
        if( ! Ofn.isDate( date1 ) && ! Ofn.dateIsObj( date1 ) ) { return 0; }
        if( ! Ofn.isDate( date2 ) && ! Ofn.dateIsObj( date2 ) ) { return 0; }

        const year1 = Ofn.dateIsObj( date1 ) ? +date1.year : date1.getFullYear();
        const month1 = Ofn.dateIsObj( date1 ) ? +date1.month : date1.getMonth();
        const year2 = Ofn.dateIsObj( date2 ) ? +date2.year : date2.getFullYear();
        const month2 = Ofn.dateIsObj( date2 ) ? +date2.month : date2.getMonth();

        return Math.abs( (year2 - year1) * 12 + month2 - month1 );
    }

    static datesDiffMonthsArray( date1, date2 ) {
        if( ! Ofn.isDate( date1 ) && ! Ofn.dateIsObj( date1 ) ) { return []; }
        if( ! Ofn.isDate( date2 ) && ! Ofn.dateIsObj( date2 ) ) { return []; }

        let dateStart = new Date( Ofn.dateIsObj( date1 ) ? date1.jsdate : date1 );
        let dateEnd = new Date( Ofn.dateIsObj( date2 ) ? date2.jsdate : date2 );
        dateStart = new Date( dateStart.getFullYear(), dateStart.getMonth(), 1 );
        dateEnd = new Date( dateEnd.getFullYear(), dateEnd.getMonth(), 1 );

        dateEnd < dateStart && ( [ dateEnd, dateStart ] = [ dateStart, dateEnd ] );

        let monthsArr = [];
        while( true ) {
            let monthCompared = Ofn.datesCompare( dateStart, dateEnd );
            if( monthCompared === -1 ) { break; }

            let year = dateStart.getFullYear() + '';
            let month = ('0' + (dateStart.getMonth() + 1)).slice( -2 );

            monthsArr.push( { year: year, month: month } );
            if( monthCompared === 0 ) { break; }

            dateStart.setDate( dateStart.getDate() + new Date( year, +month + 1, 0 ).getDate() )
        }

        return monthsArr;
    }

    static dateCheckString( str, format = 'default' ) {
        if( ! Ofn.isString( str ) ) { return false; }

        let regexp;
        switch( format ) {
            case 'datetime_strict' :
            case 'datetime_default_strict':
                regexp = REGEXP.DATETIME_DEFAULT_STRICT;
                break; // 30-12-2020 11:59[:59]

            case 'datetime_html_strict':
                regexp = REGEXP.DATETIME_HTML_STRICT;
                break; // 30/12/2020 11:59[:59]

            case 'datetime_sql_strict':
                regexp = REGEXP.DATETIME_SQL_STRICT;
                break; // 2020-12-30 11:59[:59]

            case 'datetime':
            case 'datetime_default':
                regexp = REGEXP.DATETIME_DEFAULT;
                break; // 30-12-2020 [11:59[:59]]

            case 'datetime_html':
                regexp = REGEXP.DATETIME_HTML;
                break; // 30/12/2020 [11:59[:59]]

            case 'datetime_sql':
                regexp = REGEXP.DATETIME_SQL;
                break; // 2020-12-30 [11:59[:59]]

            case 'html':
            case 'date_html':
                regexp = REGEXP.DATE_HTML;
                break; // 30/12/2020

            case 'sql':
            case 'date_sql':
                regexp = REGEXP.DATE_SQL;
                break; // 2020-12-30

            case 'default':
            case 'date_default':
            default: // 30-12-2020
                regexp = REGEXP.DATE_DEFAULT;
        }

        return regexp.test( str );
    }

    //endregion
    //region URLs

    static urlGetCurrentByReq( req, isFullpath = true ) {
        if( ! req || ! req.originalUrl ) { return ''; }

        return isFullpath ? `${req.protocol}://${req.get( 'host' )}${req.originalUrl}` : `${req.originalUrl}`;
    }

    static urlGetHostByReq( req ) {
        if( ! req || ! req.originalUrl ) { return ''; }

        return `${req.protocol}://${req.get( 'host' )}`;
    }

    static urlIsValid( url ) {
        if( ! Ofn.isString( url ) ) { return false; }

        try { new URL( url ); }
        catch( e ) { return false; }

        return true;
    }

    static urlObjByUrl( url ) {
        if( ! Ofn.isString( url ) ) { return null; }

        try { return new URL( url ); }
        catch( e ) { return null; }
    }

    static urlGetBase( url ) {
        let urlObj = Ofn.urlObjByUrl( url );
        if( ! urlObj ) { return ''; }

        return urlObj.origin;
    }

    static urlGetParams( urlOrQuery ) {
        if( ! Ofn.isString( urlOrQuery ) ) { return {}; }

        let urlObj = Ofn.urlObjByUrl( urlOrQuery );
        if( ! urlObj && urlOrQuery.indexOf( '?' ) !== -1 ) { return {}; }

        const searchParams = urlObj ? urlObj.searchParams : new URLSearchParams( urlOrQuery );

        return Array.from( searchParams ).reduce( ( p, [ k, v ] ) =>
            Object.assign( {}, p, {
                [ k ]: p[ k ] ? (Array.isArray( p[ k ] ) ? p[ k ] : [ p[ k ] ]).concat( v ) : v
            } ), {}
        );
    }

    static urlEncode( url ) { // `encodeURIComponent` doesn't encode -_.!~*'()
        if( ! Ofn.isString( url ) ) { return ''; }

        return encodeURIComponent( url ).replace( /!/g , '%21' )
                                        .replace( /~/g , '%7E' )
                                        .replace( /\*/g, '%2A' )
                                        .replace( /'/g , '%27' )
                                        .replace( /\(/g, '%28' )
                                        .replace( /\)/g, '%29' )
                                        .replace( /\+/g, '%20' );
    }

    static urlDecode( url ) { // `encodeURIComponent` doesn't encode -_.!~*'()
        if( ! Ofn.isString( url ) ) { return ''; }

        return decodeURIComponent( url ).replace( '%21', /!/g  )
                                        .replace( '%7E', /~/g  )
                                        .replace( '%2A', /\*/g )
                                        .replace( '%27', /'/g  )
                                        .replace( '%28', /\(/g )
                                        .replace( '%29', /\)/g )
                                        .replace( '%20', /\+/g );
    }

    static urlStringToPlain( str ) {
        if( ! Ofn.isString( str ) ) { return ''; }

        return str.replace( /=/g, '%3d' ).replace( / /g, '%20' );
    }

    static urlPlainToString( str ) {
        if( ! Ofn.isString( str ) ) { return ''; }

        return str.replace( /%3d/g, '=' ).replace( /%20/g, ' ' );
    }

    //endregion
    //region Files

    static getFilenameExtByName( filenameOrPath ) {
        if( ! Ofn.isString( filenameOrPath ) ) { return ''; }

        let filename = Ofn.getFilenameByPath( filenameOrPath );
        return filename.split( '.' ).pop();
    }

    static getFilenameWOutExtByName( filenameOrPath ) {
        if( ! Ofn.isString( filenameOrPath ) ) { return ''; }

        let filename = Ofn.getFilenameByPath( filenameOrPath );
        return filename.indexOf( '.' ) === -1 ? filename : filename.split( '.' ).slice( 0, -1 ).join( '.' );
    }

    static getFilenameByPath( path ) {
        if( ! Ofn.isString( path ) ) { return ''; }

        let filename = Ofn.sanitizePath( path );
        return filename.substring( filename.lastIndexOf( '/' ) + 1 );
    }

    static getFolderByPath( path, deep = 1 ) {
        let filename = Ofn.sanitizePath( path );
        if( filename.substr( -1 ) === '/' ) { filename = filename.substr( 0, filename.length - 1 ) }

        deep = ! Ofn.isNumeric( deep ) || +deep < 1 ? 1 : +deep;
        for( let i = 0; i < deep; i++ ) {
            filename = filename.substr( 0, filename.lastIndexOf( '/' ) );
        }

        return filename;
    }

    static slugifyFilename( filenameOrPath ) {
        if( ! Ofn.isString( filenameOrPath ) ) { return ''; }

        let filename = Ofn.getFilenameByPath( filenameOrPath );

        return filename.lastIndexOf( '.' ) === -1 ? Ofn.slugify( Ofn.getFilenameWOutExtByName( filename ) ) :
               `${Ofn.slugify( Ofn.getFilenameWOutExtByName( filename ) )}.${Ofn.getFilenameExtByName( filename )}`;
    }

    static sanitizePath( path ) {
        if( ! Ofn.isString( path ) ) { return ''; }

        let sanitizedPath = ( path ).replace( /[\\/]+/g, '/' );
        if( path.indexOf( '\\\\' ) === 0 ) { sanitizedPath = `\\\\${sanitizedPath.substr( 1 )}` }

        return sanitizedPath;
    }

    static sanitizeFilename( filenameOrPath ) {
        if( ! Ofn.isString( filenameOrPath ) ) { return ''; }

        let filename = Ofn.getFilenameByPath( filenameOrPath );
        return filename.normalize( 'NFD' ).replace( /[\u0300-\u036f]/g, '' )
                  .replace( new RegExp( /[/|\\':<>]/g ), "-" )
                  .replace( new RegExp( /[Ææ]/g ), "AE" )
                  .replace( new RegExp( /[ÞВ]/g ), "B" )
                  .replace( new RegExp( /[Ц]/g ), "C" )
                  .replace( new RegExp( /[ĐД]/g ), "D" )
                  .replace( new RegExp( /[ЄЭ]/g ), "E" )
                  .replace( new RegExp( /[א]/g ), "A" )
                  .replace( new RegExp( /[ב]/g ), "B" )
                  .replace( new RegExp( /[ץ]/g ), "C" )
                  .replace( new RegExp( /[ד]/g ), "C" )
                  .replace( new RegExp( /[Ĳ]/g ), "IJ" )
                  .replace( new RegExp( /[Ю]/g ), "IO" )
                  .replace( new RegExp( /[ŁĿ]/g ), "L" )
                  .replace( new RegExp( /[Ø]/g ), "O" )
                  .replace( new RegExp( /[Œ]/g ), "OE" )
                  .replace( new RegExp( /[ИŊН]/g ), "N" )
                  .replace( new RegExp( /[Я]/g ), "R" )
                  .replace( new RegExp( /[Щ]/g ), "SCH" )
                  .replace( new RegExp( /[Ш]/g ), "SH" )
                  .replace( new RegExp( /[Ŧ]/g ), "T" )
                  .replace( new RegExp( /[З]/g ), "Z" )
                  .replace( new RegExp( /[Ж]/g ), "ZH" )
                  .replace( new RegExp( /[ъЬЪьбБþв]/g ), "b" )
                  .replace( new RegExp( /[ц]/g ), "c" )
                  .replace( new RegExp( /[צ]/g ), "c" )
                  .replace( new RegExp( /[Чч]/g ), "ch" )
                  .replace( new RegExp( /[đдð]/g ), "d" )
                  .replace( new RegExp( /[єƏəэ]/g ), "e" )
                  .replace( new RegExp( /[ע]/g ), "e" )
                  .replace( new RegExp( /[фƒФ]/g ), "f" )
                  .replace( new RegExp( /[ГгҐґ]/g ), "g" )
                  .replace( new RegExp( /[ג]/g ), "g" )
                  .replace( new RegExp( /[הח]/g ), "h" )
                  .replace( new RegExp( /[ħĦ]/g ), "h" )
                  .replace( new RegExp( /[ı]/g ), "i" )
                  .replace( new RegExp( /[י]/g ), "i" )
                  .replace( new RegExp( /[ю]/g ), "io" )
                  .replace( new RegExp( /[ĳ]/g ), "ij" )
                  .replace( new RegExp( /[ĸк]/g ), "k" )
                  .replace( new RegExp( /[ךכ]/g ), "k" )
                  .replace( new RegExp( /[ŀЛłл]/g ), "l" )
                  .replace( new RegExp( /[ל]/g ), "l" )
                  .replace( new RegExp( /[םמ]/g ), "m" )
                  .replace( new RegExp( /[м]/g ), "m" )
                  .replace( new RegExp( /[инŋŉ]/g ), "n" )
                  .replace( new RegExp( /[נן]/g ), "n" )
                  .replace( new RegExp( /[ø]/g ), "o" )
                  .replace( new RegExp( /[œ]/g ), "oe" )
                  .replace( new RegExp( /[ףפ]/g ), "p" )
                  .replace( new RegExp( /[пП]/g ), "p" )
                  .replace( new RegExp( /[пП]/g ), "p" )
                  .replace( new RegExp( /[ק]/g ), "q" )
                  .replace( new RegExp( /[ר]/g ), "r" )
                  .replace( new RegExp( /[я]/g ), "r" )
                  .replace( new RegExp( /[ס]/g ), "s" )
                  .replace( new RegExp( /[ш]/g ), "sh" )
                  .replace( new RegExp( /[щ]/g ), "sch" )
                  .replace( new RegExp( /[ß]/g ), "ss" )
                  .replace( new RegExp( /[тŧ]/g ), "t" )
                  .replace( new RegExp( /[תט]/g ), "t" )
                  .replace( new RegExp( /[™]/g ), "tm" )
                  .replace( new RegExp( /[ו]/g ), "v" )
                  .replace( new RegExp( /[ש]/g ), "w" )
                  .replace( new RegExp( /[ыЫ]/g ), "y" )
                  .replace( new RegExp( /[зſ]/g ), "z" )
                  .replace( new RegExp( /[ж]/g ), "zh" )
    }

    //endregion
    //region PHP Serialize


    static phpSerialize( mixedValue, strict = false ) {
        if( Ofn.isArray( mixedValue ) || Ofn.isObject( mixedValue ) ) {
            if( ! strict ) { return Ofn.jsonStringify( mixedValue, false ) }

            return serialize( mixedValue );
        }

        return mixedValue;
    }

    static phpUnserialize( str, strict = false ) {
        if( ! strict && Ofn.isStringJson( str, true ) ) { return Ofn.jsonParse( str ); }

        // don't attempt to unserialize data that wasn't serialized going in
        if( ! Ofn.phpIsSerialized( str ) ) { return str; }

        return unserialize( str );
    }

    static phpIsSerialized( str, strict = true ) {
        // if it isn't a string, it isn't serialized.
        if( ! Ofn.isString( str ) ) { return false; }

        str = str.trim();
        if( str === 'N;' ) { return true ; }
        if( str.length < 4 ) { return false; }
        if( str[ 1 ] !== ':' ) { return false; }
        if( strict ) {
            let lastc = str.substr( -1 );
            if( lastc !== ';' && lastc !== '}' ) { return false; }
        }
        else {
            let semicolon = str.indexOf( ';' );
            let brace = str.indexOf( '}' );
            // Either ; or } must exist.
            if( semicolon === -1 && brace === -1 ) { return false; }
            // But neither must be in the first X characters.
            if( semicolon !== -1 && semicolon < 3 ) { return false; }
            if( brace !== -1 && brace < 4 ) { return false; }
        }

        let token = str[ 0 ];
        switch( token ) {
            case 's':
                if( strict ) {
                    if( str.substr( -2, 1 ) !== '"' ) { return false; }
                }
                else if( str.indexOf( '"' ) === -1 ) { return false; }
            // or else fall through
            case 'a':
            case 'O':
                return !! str.match( new RegExp( `^${token}:[0-9]+:`, 's' ) );
            case 'b':
            case 'i':
            case 'd':
                let end = strict ? '$' : '';
                return !! str.match( new RegExp( `^${token}:[0-9.E+-]+;${end}` ) );
        }
        return false;
    }

    //endregion
    //region Response

    static setResponseKO( msgOrError, error = {}, tryAgain = false, asError = false ) {
        let response = { status: false, error: {} };

        let err = Ofn.cloneObject( error );

        err.tryAgain !== undefined && ( tryAgain = err.tryAgain );
        delete err.tryAgain;

        err.asError !== undefined && ( asError = err.asError );
        delete err.asError;

        tryAgain && ( response.tryAgain = tryAgain );

        Ofn.isObject( msgOrError ) ?
            ! Ofn.objIsEmpty( msgOrError ) && ( response.error = Object.assign( response.error, msgOrError ) ) :
            msgOrError && ( response.error.msg = msgOrError );

        if( ! Ofn.objIsEmpty( err ) ) {
            err.msg && ( response.error.msg = `${!! response.error.msg ? response.error.msg + ' ' : ''}${err.msg}` ) && ( delete err.msg );
            response.error = Object.assign( {}, response.error, err, response.error );
        }

        Ofn.objIsEmpty( response.error ) && ( delete response.error );

        if( asError ) {
            try { throw new Error(); }
            catch( err ) {
                let cloneResponse = Ofn.cloneObject( response );
                response = err;
                response.name = ( cloneResponse.error && cloneResponse.error.errorName ) || 'responseError';
                response.message = cloneResponse.error.msg;
                response.responseError = cloneResponse;
                response.stack = response.stack.replace( response.message, JSON.stringify( cloneResponse ) );
            }
        }

        return response;
    }

    static setResponseOK( msgOrData, data = {} ) {
        let response = { status: true };

        let cloneData = Ofn.cloneObject( data );

        Ofn.isObject( msgOrData ) ?
            ! Ofn.objIsEmpty( msgOrData ) && ( response = Object.assign( response, msgOrData ) ) :
            msgOrData && ( response.msg = msgOrData );

        if( ! Ofn.objIsEmpty( cloneData ) ) {
            cloneData.msg && ( response.msg = `${!! response.msg ? response.msg + ' ' : ''}${cloneData.msg}` ) && ( delete cloneData.msg );
            response = Object.assign( {}, response, cloneData, response );
        }

        response.status !== true && ( response.status = true );

        return response;
    }

    //endregion
}

module.exports = Ofn;