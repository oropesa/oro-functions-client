const { type } = require( '../general/type' );
const { isArray } = require( '../general/is-array' );
const { isObject } = require( '../general/is-object' );

const objGetMethods = function( obj, allowDefaults = false ) {
    if( ! [ 'object', 'array' ].includes( type( obj ) ) ) { return []; }

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
        'filter', 'flatMap', 'map', 'every', 'some', 'reduce', 'reduceRight', 'toLocaleString',
        'toString', '__defineGetter__', '__defineSetter__', 'hasOwnProperty', '__lookupGetter__',
        '__lookupSetter__', 'isPrototypeOf', 'propertyIsEnumerable', 'valueOf', 'at',
        'findLast', 'findLastIndex'
    ]

    do {
        Object.getOwnPropertyNames( currentObj ).map( item =>  {
            if( ! allowDefaults && isObject( obj ) && defaultsObject.includes( item ) ) { return; }
            if( ! allowDefaults && isArray( obj ) && defaultsArray.includes( item ) ) { return; }

            properties.add( item );
        } )
    }
    while( (currentObj = Object.getPrototypeOf( currentObj )) );

    return [ ...properties.keys() ].filter( item => typeof obj[ item ] === 'function' );
};

module.exports = { objGetMethods };