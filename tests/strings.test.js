const Ofn = require( '../index' );

describe('fn: isStringJson', () => {
    test( 'fn: isStringJson()'          , () => { expect( Ofn.isStringJson() ).toBe( false ); } );
    test( 'fn: isStringJson( str bad )' , () => { expect( Ofn.isStringJson( '{ chacho: true }' ) ).toBe( false ); } );
    test( 'fn: isStringJson( str ok )' , () => { expect( Ofn.isStringJson( '{ "chacho": true }') ).toBe( true ); } );
    test( 'fn: isStringJson( str arr )' , () => { expect( Ofn.isStringJson( '[ 1, 2, 3 ]') ).toBe( false ); } );
    test( 'fn: isStringJson( str arr allow )' , () => { expect( Ofn.isStringJson( '[ 1, 2, 3 ]', true ) ).toBe( true ); } );
});

describe('fn: strPad', () => {
    test( 'fn: strPad()'                                 , () => { expect( Ofn.strPad() ).toBe( '' ); } );
    test( 'fn: strPad( null )'                           , () => { expect( Ofn.strPad( null ) ).toBe( '' ); } );
    test( 'fn: strPad( bool )'                           , () => { expect( Ofn.strPad( false ) ).toBe( 'false' ); } );
    test( 'fn: strPad( str )'                            , () => { expect( Ofn.strPad( 27 ) ).toBe( '27' ); } );
    test( 'fn: strPad( str, len )'                       , () => { expect( Ofn.strPad( 27, 4 ) ).toBe( '  27' ); } );
    test( 'fn: strPad( str, len, pad )'                  , () => { expect( Ofn.strPad( 27, 4, 0 ) ).toBe( '0027' ); } );
    test( 'fn: strPad( str, len, pad2 )'                 , () => { expect( Ofn.strPad( '27', 5, 'oropesa' ) ).toBe( 'oro27' ); } );
    test( 'fn: strPad( str, len, pad2, right )'          , () => { expect( Ofn.strPad( '27', 5, 'oropesa', 'right' ) ).toBe( '27oro' ); } );
    test( 'fn: strPad( str long, len short )'            , () => { expect( Ofn.strPad( 'chacho', 4 ) ).toBe( 'chac' ); } );
    test( 'fn: strPad( str long, len short, pad, right )', () => { expect( Ofn.strPad( 'chacho', 4, ' ', 'right' ) ).toBe( 'acho' ); } );
});

describe('fn: capitalize', () => {
    test( 'fn: capitalize( undefined )', () => { expect( Ofn.capitalize( undefined ) ).toBe( ''       ); } );
    test( 'fn: capitalize( null )'     , () => { expect( Ofn.capitalize( null      ) ).toBe( ''       ); } );
    test( 'fn: capitalize( bool )'     , () => { expect( Ofn.capitalize( true      ) ).toBe( ''       ); } );
    test( 'fn: capitalize( int )'      , () => { expect( Ofn.capitalize( 17        ) ).toBe( '17'     ); } );
    test( 'fn: capitalize( str )'      , () => { expect( Ofn.capitalize( 'chacho'  ) ).toBe( 'Chacho' ); } );
    test( 'fn: capitalize( str2 )'     , () => { expect( Ofn.capitalize( 'chaCho'  ) ).toBe( 'ChaCho' ); } );
});

describe('fn: slugify', () => {
    test( 'fn: slugify( undefined )'    , () => { expect( Ofn.slugify( undefined       ) ).toBe( ''            ); } );
    test( 'fn: slugify( null )'         , () => { expect( Ofn.slugify( null            ) ).toBe( ''            ); } );
    test( 'fn: slugify( bool )'         , () => { expect( Ofn.slugify( true            ) ).toBe( ''            ); } );
    test( 'fn: slugify( int )'          , () => { expect( Ofn.slugify( 17              ) ).toBe( '17'          ); } );
    test( 'fn: slugify( str )'          , () => { expect( Ofn.slugify( 'cha.cho lo_co' ) ).toBe( 'cha-cho-lo-co' ); } );
    test( 'fn: slugify( str camelCase )', () => { expect( Ofn.slugify( 'chaCho'        ) ).toBe( 'cha-cho'     ); } );
    test( 'fn: slugify( str w nums )'   , () => { expect( Ofn.slugify( 'Chacho17'      ) ).toBe( 'chacho17'    ); } );
});

describe('fn: snakeify', () => {
    test( 'fn: snakeify( undefined )'    , () => { expect( Ofn.snakeify( undefined       ) ).toBe( ''            ); } );
    test( 'fn: snakeify( null )'         , () => { expect( Ofn.snakeify( null            ) ).toBe( ''            ); } );
    test( 'fn: snakeify( bool )'         , () => { expect( Ofn.snakeify( true            ) ).toBe( ''            ); } );
    test( 'fn: snakeify( int )'          , () => { expect( Ofn.snakeify( 17              ) ).toBe( '17'          ); } );
    test( 'fn: snakeify( str )'          , () => { expect( Ofn.snakeify( 'cha.cho lo_co' ) ).toBe( 'cha_cho_lo_co' ); } );
    test( 'fn: snakeify( str camelCase )', () => { expect( Ofn.snakeify( 'chaCho'        ) ).toBe( 'cha_cho'     ); } );
    test( 'fn: snakeify( str w nums )'   , () => { expect( Ofn.snakeify( 'Chacho17'      ) ).toBe( 'chacho17'    ); } );
});

describe('fn: trimAll', () => {
    test( 'fn: trimAll( undefined )'      , () => { expect( Ofn.trimAll( undefined        ) ).toBe( ''            ); } );
    test( 'fn: trimAll( null )'           , () => { expect( Ofn.trimAll( null             ) ).toBe( ''            ); } );
    test( 'fn: trimAll( bool )'           , () => { expect( Ofn.trimAll( true             ) ).toBe( ''            ); } );
    test( 'fn: trimAll( int )'            , () => { expect( Ofn.trimAll( 17               ) ).toBe( '17'          ); } );
    test( 'fn: trimAll( str )'            , () => { expect( Ofn.trimAll( 'chacho loco'    ) ).toBe( 'chacho loco' ); } );
    test( 'fn: trimAll( str space2 )'     , () => { expect( Ofn.trimAll( 'chacho  loco'   ) ).toBe( 'chacho loco' ); } );
    test( 'fn: trimAll( str space3 )'     , () => { expect( Ofn.trimAll( 'chacho   loco'  ) ).toBe( 'chacho loco' ); } );
    test( 'fn: trimAll( str space4 )'     , () => { expect( Ofn.trimAll( 'chacho    loco' ) ).toBe( 'chacho loco' ); } );
    test( 'fn: trimAll( str space2 trim )', () => { expect( Ofn.trimAll( ' chacho    loco ' ) ).toBe( 'chacho loco' ); } );
});

describe('fn: textTruncate', () => {
    test( 'fn: textTruncate( undefined )'                   , () => { expect( Ofn.textTruncate( undefined                  ) ).toBe( ''            ); } );
    test( 'fn: textTruncate( null )'                        , () => { expect( Ofn.textTruncate( null                       ) ).toBe( ''            ); } );
    test( 'fn: textTruncate( bool )'                        , () => { expect( Ofn.textTruncate( true                       ) ).toBe( ''            ); } );
    test( 'fn: textTruncate( int )'                         , () => { expect( Ofn.textTruncate( 17                         ) ).toBe( '17'          ); } );
    test( 'fn: textTruncate( str short )'                   , () => { expect( Ofn.textTruncate( 'chacho loco'              ) ).toBe( 'chacho loco' ); } );
    test( 'fn: textTruncate( str long, max bad )'           , () => { expect( Ofn.textTruncate( 'chacho loco', 'tio' ) ).toBe( 'chacho loco' ); } );
    test( 'fn: textTruncate( str long, max true )'          , () => { expect( Ofn.textTruncate( 'chacho loco', true  ) ).toBe( 'chacho loco' ); } );
    test( 'fn: textTruncate( str long, max min )'           , () => { expect( Ofn.textTruncate( 'chacho loco', 2     ) ).toBe( '..' ); } );
    test( 'fn: textTruncate( str long, max short )'         , () => { expect( Ofn.textTruncate( 'chacho loco', 6     ) ).toBe( 'cha...' ); } );
    test( 'fn: textTruncate( str long, max )'               , () => { expect( Ofn.textTruncate( 'chacho loco', 9     ) ).toBe( 'chacho...' ); } );
    test( 'fn: textTruncate( str long, max2 )'              , () => { expect( Ofn.textTruncate( 'chacho loco', 10    ) ).toBe( 'chacho...' ); } );
    test( 'fn: textTruncate( str long, max2, suf )'         , () => { expect( Ofn.textTruncate( 'chacho loco', 10, ' =)' ) ).toBe( 'chacho =)' ); } );
    test( 'fn: textTruncate( str long, max2, suf null )'    , () => { expect( Ofn.textTruncate( 'chacho loco', 10, null ) ).toBe( 'chacho...' ); } );
});

describe('fn: randomString', () => {
    test( 'fn: randomString( undefined )'    , () => { expect( Ofn.randomString().length ).toBe( 8 ); } );
    test( 'fn: randomString( +int < 10 )'    , () => { expect( Ofn.randomString( 4 ).length ).toBe( 4 ); } );
    test( 'fn: randomString( +int > 10 )'    , () => { expect( Ofn.randomString( 17 ).length ).toBe( 17 ); } );
    test( 'fn: randomString( +int > 100 )'   , () => { expect( Ofn.randomString( 108).length ).toBe( 108 ); } );
});

describe('fn: jsonStringify', () => {
    test( 'fn: jsonStringify( undefined )', () => { expect( Ofn.jsonStringify() ).toBe( '' ); } );
    test( 'fn: jsonStringify( str )'      , () => { expect( Ofn.jsonStringify( 'chacho' ) ).toBe( '' ); } );
    test( 'fn: jsonStringify( obj )'      , () => { expect( Ofn.jsonStringify( { chacho: true } ) ).toBe( '{"chacho":true}' ); } );
    test( 'fn: jsonStringify( arr )'      , () => { expect( Ofn.jsonStringify( [ 1, 2, 3 ] ) ).toBe( '{"0":1,"1":2,"2":3}' ); } );
    test( 'fn: jsonStringify( obj )'      , () => { expect( Ofn.jsonStringify( { chacho: true }, true ) ).toBe( `{\n  "chacho": true\n}` ); } );
});

describe('fn: jsonParse', () => {
    test( 'fn: jsonParse( undefined )'       , () => { expect( Ofn.jsonParse() ).toBe( undefined ); } );
    test( 'fn: jsonParse( int )'             , () => { expect( Ofn.jsonParse( 17 ) ).toBe( 17 ); } );
    test( 'fn: jsonParse( str bad )'         , () => { expect( Ofn.jsonParse( 'chacho' ) ).toBe( 'chacho' ); } );
    test( 'fn: jsonParse( str bad, strict )' , () => { expect( Ofn.jsonParse( 'chacho', true ) ).toBe( null ); } );
    test( 'fn: jsonParse( str obj )'         , () => { expect( Ofn.jsonParse( '{ "chacho": true }' ) ).toEqual( { chacho: true } ); } );
    test( 'fn: jsonParse( str obj beauty )'  , () => { expect( Ofn.jsonParse( `{\n  "chacho": true\n}` ) ).toEqual( { chacho: true } ); } );
    test( 'fn: jsonParse( str arr )'         , () => { expect( Ofn.jsonParse( '[ 1, 2, 3 ]' ) ).toEqual( [ 1, 2, 3 ] ); } );
    test( 'fn: jsonParse( str arr(obj) )'    , () => { expect( Ofn.jsonParse( '{ "0": 1, "1": 2, "2": 3 }' ) ).toEqual( [ 1, 2, 3 ] ); } );
    test( 'fn: jsonParse( str arr, strict )' , () => { expect( Ofn.jsonParse( '{ "0": 1, "1": 2, "2": 3 }', true ) ).toEqual( { "0": 1, "1": 2, "2": 3 } ); } );
});

describe('fn: jsonize', () => {
    test( 'fn: jsonize( undefined )'       , () => { expect( Ofn.jsonize() ).toBe( undefined ); } );
    test( 'fn: jsonize( int )'             , () => { expect( Ofn.jsonize( 17 ) ).toBe( 17 ); } );
    test( 'fn: jsonize( str bad )'         , () => { expect( Ofn.jsonize( 'chacho' ) ).toBe( 'chacho' ); } );
    test( 'fn: jsonize( str bad, strict )' , () => { expect( Ofn.jsonize( 'chacho', true ) ).toBe( null ); } );
    test( 'fn: jsonize( str obj )'         , () => { expect( Ofn.jsonize( '{ "chacho": true }' ) ).toEqual( { chacho: true } ); } );
    test( 'fn: jsonize( str arr )'         , () => { expect( Ofn.jsonize( '[ 1, 2, 3 ]' ) ).toEqual( [ 1, 2, 3 ] ); } );
    test( 'fn: jsonize( str arr(obj) )'    , () => { expect( Ofn.jsonize( '{ "0": 1, "1": 2, "2": 3 }' ) ).toEqual( { "0": 1, "1": 2, "2": 3 } ); } );
});

describe('fn: arrayize', () => {
    test( 'fn: arrayize( undefined )'       , () => { expect( Ofn.arrayize() ).toBe( undefined ); } );
    test( 'fn: arrayize( int )'             , () => { expect( Ofn.arrayize( 17 ) ).toBe( 17 ); } );
    test( 'fn: arrayize( str bad )'         , () => { expect( Ofn.arrayize( 'chacho' ) ).toBe( 'chacho' ); } );
    test( 'fn: arrayize( str bad, strict )' , () => { expect( Ofn.arrayize( 'chacho', true ) ).toBe( null ); } );
    test( 'fn: arrayize( str arr )'         , () => { expect( Ofn.arrayize( '[ 1, 2, 3 ]' ) ).toEqual( [ 1, 2, 3 ] ); } );
    test( 'fn: arrayize( str arr(obj) )'    , () => { expect( Ofn.arrayize( '{ "0": 1, "1": 2, "2": 3 }' ) ).toEqual( [ 1, 2, 3 ] ); } );
    test( 'fn: arrayize( arr(obj) )'        , () => { expect( Ofn.arrayize( { "0": 1, "1": 2, "2": 3 } ) ).toEqual( [ 1, 2, 3 ] ); } );
    test( 'fn: arrayize( arr(obj) w param )', () => { let result = [ 1, undefined, 2 ]; result.chacho = true; expect( Ofn.arrayize( { "0": 1, "2": 2, "chacho": true } ) ).toEqual( result ); } );
    test( 'fn: arrayize( obj )'             , () => { let result = []; result.chacho = true; expect( Ofn.arrayize( '{ "chacho": true }' ) ).toEqual( result ); } );

});

describe('fn: chunkStringByCharSize', () => {
    test( 'fn: chunkStringByCharSize( undefined )'              , () => { expect( Ofn.chunkStringByCharSize() ).toBe( '' ); } );
    test( 'fn: chunkStringByCharSize( str )'                    , () => { expect( Ofn.chunkStringByCharSize( 'chacho' ) ).toBe( 'chacho' ); } );
    test( 'fn: chunkStringByCharSize( str, char )'              , () => { expect( Ofn.chunkStringByCharSize( 'chacho', '|' ) ).toBe( 'chacho' ); } );
    test( 'fn: chunkStringByCharSize( str, char, size bad )'    , () => { expect( Ofn.chunkStringByCharSize( 'chacho', '|', true ) ).toBe( 'chacho' ); } );
    test( 'fn: chunkStringByCharSize( str, char, size )'        , () => { expect( Ofn.chunkStringByCharSize( 'chacho', '|', 4 ) ).toBe( 'chac|ho' ); } );
    test( 'fn: chunkStringByCharSize( str, char, size limit )'  , () => { expect( Ofn.chunkStringByCharSize( 'chacho', '|', 3 ) ).toBe( 'cha|cho' ); } );
    test( 'fn: chunkStringByCharSize( str, char2, size )'       , () => { expect( Ofn.chunkStringByCharSize( 'chacho', '=)', 3 ) ).toBe( 'cha=)cho' ); } );
    test( 'fn: chunkStringByCharSize( str, char, size, right )' , () => { expect( Ofn.chunkStringByCharSize( 'chacho', '|', 3, 'right' ) ).toBe( 'cha|cho' ); } );
    test( 'fn: chunkStringByCharSize( str, char, size2, right )', () => { expect( Ofn.chunkStringByCharSize( 'chacho', '|', 4, 'right' ) ).toBe( 'ch|acho' ); } );
    test( 'fn: chunkStringByCharSize( str, char2, size, right )', () => { expect( Ofn.chunkStringByCharSize( 'chacho', '=)', 4, 'right' ) ).toBe( 'ch=)acho' ); } );
});

describe('fn: escAttr', () => {
    test( 'fn: escAttr( undefined )' , () => { expect( Ofn.escAttr() ).toBe( '' ); } );
    test( 'fn: escAttr( str )'       , () => { expect( Ofn.escAttr( 'chacho' ) ).toBe( 'chacho' ); } );
    test( 'fn: escAttr( html )'      , () => { expect( Ofn.escAttr( '<span>chacho</span>' ) ).toBe( '&lt;span&gt;chacho&lt;/span&gt;' ); } );
});

describe('fn: splitStringNumber', () => {
    test( 'fn: splitStringNumber( undefined )'           , () => { expect( Ofn.splitStringNumber() ).toEqual( [] ); } );
    test( 'fn: splitStringNumber( str )'                 , () => { expect( Ofn.splitStringNumber( 'chacho123' ) ).toEqual( [ 'chacho', '123' ] ); } );
    test( 'fn: splitStringNumber( str dot )'             , () => { expect( Ofn.splitStringNumber( '123.456' ) ).toEqual( [ '123', '.', '456' ] ); } );
    test( 'fn: splitStringNumber( str dot, dot )'        , () => { expect( Ofn.splitStringNumber( '123.456', '.' ) ).toEqual( [ '123', '456' ] ); } );
    test( 'fn: splitStringNumber( str w/o int sep, sep )', () => { expect( Ofn.splitStringNumber( 'chacho loco', ' ' ) ).toEqual( [ 'chacho', 'loco' ] ); } );
});

describe('fn: substrCount', () => {
    test( 'fn: substrCount( undefined )'     , () => { expect( Ofn.substrCount() ).toBe( 0 ); } );
    test( 'fn: substrCount( str )'           , () => { expect( Ofn.substrCount( 'chacho111' ) ).toBe( 0 ); } );
    test( 'fn: substrCount( str bad, str )'  , () => { expect( Ofn.substrCount( true, 1 ) ).toBe( 0 ); } );
    test( 'fn: substrCount( str empty, str )', () => { expect( Ofn.substrCount( '', 1 ) ).toBe( 0 ); } );
    test( 'fn: substrCount( str, str empty )', () => { expect( Ofn.substrCount( 'chacho111', '' ) ).toBe( 0 ); } );
    test( 'fn: substrCount( str, str )'      , () => { expect( Ofn.substrCount( 'chacho111', 1 ) ).toBe( 3 ); } );
});
