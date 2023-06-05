const Ofn = require( '../../index' );

describe( 'fn: cloneArray', () => {
    test( 'fn: cloneArray( undefined )', () => {
        expect( Ofn.cloneArray() ).toEqual( [] );
    } );
    test( 'fn: cloneArray( str )', () => {
        expect( Ofn.cloneArray( 'chacho' ) ).toEqual( [] );
    } );
    test( 'fn: cloneArray( arr )', () => {
        let arr1 = [ { chacho: true }, { loco: false } ];
        let arr2 = Ofn.cloneArray( arr1 );
        expect( arr1 ).toEqual( arr2 );

        arr2[ 1 ].loco = true;
        expect( arr1[ 1 ].loco ).toBe( false );
        expect( arr2[ 1 ].loco ).toBe( true );
    } );
} );

describe( 'fn: arrayToObjectByKey', () => {
    test( 'fn: arrayToObjectByKey( undefined )', () => {
        expect( Ofn.arrayToObjectByKey() ).toEqual( {} );
    } );
    test( 'fn: arrayToObjectByKey( str )', () => {
        expect( Ofn.arrayToObjectByKey( 'chacho' ) ).toEqual( {} );
    } );
    test( 'fn: arrayToObjectByKey( arr, key )', () => {
        let arr = [ { label: 'chacho', chacho: 'chacho' }, { label: 'loco', loco: 'loco' } ];
        let obj = Ofn.arrayToObjectByKey( arr, 'label' );
        expect( obj ).toEqual( {
            chacho: { label: 'chacho', chacho: 'chacho' },
            loco: { label: 'loco', loco: 'loco' }
        } );
    } );
    test( 'fn: arrayToObjectByKey( arr, key missed )', () => {
        let arr = [ { label: 'chacho', chacho: true }, { label: 'loco', loco: 'loco' } ];
        let obj = Ofn.arrayToObjectByKey( arr, 'chacho' );
        expect( obj ).toEqual( {
            true: { label: 'chacho', chacho: true },
            undefined: { label: 'loco', loco: 'loco' }
        } );
    } );
    test( 'fn: arrayToObjectByKey( arr w undef, key missed )', () => {
        let arr = [ { label: 'chacho', chacho: true }, undefined, { label: 'loco', loco: 'loco' } ];
        let obj = Ofn.arrayToObjectByKey( arr, 'chacho' );
        expect( obj ).toEqual( {
            true: { label: 'chacho', chacho: true },
            undefined: { label: 'loco', loco: 'loco' }
        } );
    } );
    test( 'fn: arrayToObjectByKey( arr, key missed, strict )', () => {
        let arr = [ { label: 'chacho', chacho: true }, { label: 'loco', loco: 'loco' } ];
        let obj = Ofn.arrayToObjectByKey( arr, 'chacho', true );
        expect( obj ).toEqual( { true: { label: 'chacho', chacho: true } } );
    } );
    test( 'fn: arrayToObjectByKey( arr w undefin, key missed, strict )', () => {
        let arr = [ { label: 'chacho', chacho: true }, undefined, { label: 'loco', loco: 'loco' } ];
        let obj = Ofn.arrayToObjectByKey( arr, 'chacho', true );
        expect( obj ).toEqual( { true: { label: 'chacho', chacho: true } } );
    } );
} );

describe( 'fn: arrayValuesByKey', () => {
    test( 'fn: arrayValuesByKey( undefined )', () => {
        expect( Ofn.arrayValuesByKey() ).toEqual( [] );
    } );
    test( 'fn: arrayValuesByKey( str )', () => {
        expect( Ofn.arrayValuesByKey( 'chacho' ) ).toEqual( [] );
    } );
    test( 'fn: arrayValuesByKey( arr, key )', () => {
        let arr = [ { label: 'chacho', chacho: 'chacho' }, { label: 'loco', loco: 'loco' } ];
        let obj = Ofn.arrayValuesByKey( arr, 'label' );
        expect( obj ).toEqual( [ 'chacho', 'loco' ] );
    } );
    test( 'fn: arrayValuesByKey( arr, key missed )', () => {
        let arr = [ { label: 'chacho', chacho: true }, { label: 'loco', loco: 'loco' } ];
        let obj = Ofn.arrayValuesByKey( arr, 'chacho' );
        expect( obj ).toEqual( [ true, undefined ] );
    } );
    test( 'fn: arrayValuesByKey( arr, key missed, strict )', () => {
        let arr = [ { label: 'chacho', chacho: true }, { label: 'loco', loco: 'loco' } ];
        let obj = Ofn.arrayValuesByKey( arr, 'chacho', true );
        expect( obj ).toEqual( [ true ] );
    } );
    test( 'fn: arrayValuesByKey( arr bad, key missed, strict )', () => {
        let arr = [ { label: 'chacho', chacho: true }, undefined ];
        let obj = Ofn.arrayValuesByKey( arr, 'chacho', true );
        expect( obj ).toEqual( [ true ] );
    } );
} );

describe( 'fn: arrayCountByKey', () => {
    test( 'fn: arrayCountByKey( undefined )', () => {
        expect( Ofn.arrayCountByKey() ).toEqual( {} );
    } );
    test( 'fn: arrayCountByKey( str )', () => {
        expect( Ofn.arrayCountByKey( 'chacho' ) ).toEqual( {} );
    } );
    test( 'fn: arrayCountByKey( arr, key )', () => {
        let arr = [
            { label: 'chacho', chacho: 'chacho' },
            { label: 'loco', loco: 'loco' },
            { label: 'chacho', chacho: 'tio' },
        ];
        let obj = Ofn.arrayCountByKey( arr, 'label' );
        expect( obj ).toEqual( { chacho: 2, loco: 1 } );
    } );
    test( 'fn: arrayCountByKey( arr, key missed )', () => {
        let arr = [
            { label: 'chacho', chacho: 'chacho' },
            { label: 'loco', loco: 'loco' },
            { label: 'chacho', chacho: 'tio' },
        ];
        let obj = Ofn.arrayCountByKey( arr, 'chacho' );
        expect( obj ).toEqual( { chacho: 1, undefined: 1, tio: 1 } );
    } );
    test( 'fn: arrayCountByKey( arr w undef, key missed )', () => {
        let arr = [
            { label: 'chacho', chacho: 'chacho' },
            undefined,
            { label: 'loco', loco: 'loco' },
            { label: 'chacho', chacho: 'tio' },
        ];
        let obj = Ofn.arrayCountByKey( arr, 'chacho' );
        expect( obj ).toEqual( { chacho: 1, undefined: 1, tio: 1 } );
    } );
    test( 'fn: arrayCountByKey( arr, key missed, strict )', () => {
        let arr = [
            { label: 'chacho', chacho: 'chacho' },
            { label: 'loco', loco: 'loco' },
            { label: 'chacho', chacho: 'tio' },
        ];
        let obj = Ofn.arrayCountByKey( arr, 'chacho', true );
        expect( obj ).toEqual( { chacho: 1, tio: 1 } );
    } );
    test( 'fn: arrayCountByKey( arr w undef, key missed, strict )', () => {
        let arr = [
            { label: 'chacho', chacho: 'chacho' },
            undefined,
            { label: 'loco', loco: 'loco' },
            { label: 'chacho', chacho: 'tio' },
        ];
        let obj = Ofn.arrayCountByKey( arr, 'chacho', true );
        expect( obj ).toEqual( { chacho: 1, tio: 1 } );
    } );
} );

describe( 'fn: arrayGroupByKey', () => {
    test( 'fn: arrayGroupByKey( undefined )', () => {
        expect( Ofn.arrayGroupByKey() ).toEqual( {} );
    } );
    test( 'fn: arrayGroupByKey( str )', () => {
        expect( Ofn.arrayGroupByKey( 'chacho' ) ).toEqual( {} );
    } );
    test( 'fn: arrayGroupByKey( arr, key )', () => {
        let arr = [
            { label: 'chacho', chacho: 'chacho' },
            { label: 'loco', loco: 'loco' },
            { label: 'chacho', chacho: 'tio' },
        ];
        let obj = Ofn.arrayGroupByKey( arr, 'label' );
        expect( obj ).toEqual( {
            chacho: [ { label: 'chacho', chacho: 'chacho' }, { label: 'chacho', chacho: 'tio' } ],
            loco: [ { label: 'loco', loco: 'loco' } ]
        } );
    } );
    test( 'fn: arrayGroupByKey( arr, key missed )', () => {
        let arr = [
            { label: 'chacho', chacho: 'chacho' },
            { label: 'loco', loco: 'loco' },
            { label: 'chacho', chacho: 'tio' },
        ];
        let obj = Ofn.arrayGroupByKey( arr, 'chacho' );
        expect( obj ).toEqual( {
            chacho: [ { label: 'chacho', chacho: 'chacho' } ],
            tio: [ { label: 'chacho', chacho: 'tio' } ],
            undefined: [ { label: 'loco', loco: 'loco' } ]
        } );
    } );
    test( 'fn: arrayGroupByKey( arr w undef, key missed )', () => {
        let arr = [
            { label: 'chacho', chacho: 'chacho' },
            undefined,
            { label: 'loco', loco: 'loco' },
            { label: 'chacho', chacho: 'tio' },
        ];
        let obj = Ofn.arrayGroupByKey( arr, 'chacho' );
        expect( obj ).toEqual( {
            chacho: [ { label: 'chacho', chacho: 'chacho' } ],
            tio: [ { label: 'chacho', chacho: 'tio' } ],
            undefined: [ { label: 'loco', loco: 'loco' } ]
        } );
    } );
    test( 'fn: arrayGroupByKey( arr, key missed, strict )', () => {
        let arr = [
            { label: 'chacho', chacho: 'chacho' },
            { label: 'loco', loco: 'loco' },
            { label: 'chacho', chacho: 'tio' },
        ];
        let obj = Ofn.arrayGroupByKey( arr, 'chacho', true );
        expect( obj ).toEqual( {
            chacho: [ { label: 'chacho', chacho: 'chacho' } ],
            tio: [ { label: 'chacho', chacho: 'tio' } ]
        } );
    } );
    test( 'fn: arrayGroupByKey( arr w undef, key missed, strict )', () => {
        let arr = [
            { label: 'chacho', chacho: 'chacho' },
            undefined,
            { label: 'loco', loco: 'loco' },
            { label: 'chacho', chacho: 'tio' },
        ];
        let obj = Ofn.arrayGroupByKey( arr, 'chacho', true );
        expect( obj ).toEqual( {
            chacho: [ { label: 'chacho', chacho: 'chacho' } ],
            tio: [ { label: 'chacho', chacho: 'tio' } ]
        } );
    } );
} );

describe( 'fn: arraySortByKey', () => {
    test( 'fn: arraySortByKey( undefined )', () => {
        expect( Ofn.arraySortByKey() ).toEqual( [] );
    } );
    test( 'fn: arraySortByKey( str )', () => {
        expect( Ofn.arraySortByKey( 'chacho' ) ).toEqual( [] );
    } );
    test( 'fn: arraySortByKey( arr, key )', () => {
        let arr = [
            { label: 'ccc', chacho: 'chacho' },
            { label: 'aaa' },
            { label: 'bbb', chacho: 'zoquete' }
        ];
        let obj = Ofn.arraySortByKey( arr, 'label' );
        expect( obj ).toEqual( [
            { label: 'aaa' },
            { label: 'bbb', chacho: 'zoquete' },
            { label: 'ccc', chacho: 'chacho' }
        ] );
    } );
    test( 'fn: arraySortByKey( arr, key missed )', () => {
        let arr = [
            { label: 'ccc', chacho: 'chacho' },
            { label: 'aaa' },
            { label: 'bbb', chacho: 'zoquete' }
        ];
        let obj = Ofn.arraySortByKey( arr, 'chacho' );
        expect( obj ).toEqual( [
            { label: 'ccc', chacho: 'chacho' },
            { label: 'bbb', chacho: 'zoquete' },
            { label: 'aaa' }
        ] );
    } );
    test( 'fn: arraySortByKey( arr w undef, key missed )', () => {
        let arr = [
            { label: 'ccc', chacho: 'chacho' },
            undefined,
            { label: 'aaa' },
            { label: 'bbb', chacho: 'zoquete' }
        ];
        let obj = Ofn.arraySortByKey( arr, 'chacho' );
        expect( obj ).toEqual( [
            { label: 'ccc', chacho: 'chacho' },
            { label: 'bbb', chacho: 'zoquete' },
            { label: 'aaa' }
        ] );
    } );
    test( 'fn: arraySortByKey( arr w undef, key missed, sortArray )', () => {
        let arr = [
            { label: 'ccc', chacho: 'chacho' },
            undefined,
            { label: 'aaa' },
            { label: 'bbb', chacho: 'zoquete' }
        ];
        let obj = Ofn.arraySortByKey( arr, 'chacho', [ 'zoquete', 'chacho' ] );
        expect( obj ).toEqual( [
            { label: 'bbb', chacho: 'zoquete' },
            { label: 'ccc', chacho: 'chacho' },
            { label: 'aaa' }
        ] );
    } );
    test( 'fn: arraySortByKey( arr w undef, key missed, sortArray missed )', () => {
        let arr = [
            { label: 'ccc', chacho: 'chacho' },
            undefined,
            { label: 'aaa' },
            { label: 'bbb', chacho: 'zoquete' }
        ];
        let obj = Ofn.arraySortByKey( arr, 'chacho', [ 'zoquete' ] );
        expect( obj ).toEqual( [
            { label: 'bbb', chacho: 'zoquete' },
            { label: 'ccc', chacho: 'chacho' },
            { label: 'aaa' }
        ] );
    } );
    test( 'fn: arraySortByKey( arr w undef, key missed, sortArray empty )', () => {
        let arr = [
            { label: 'ccc', chacho: 'chacho' },
            undefined,
            { label: 'aaa' },
            { label: 'bbb', chacho: 'zoquete' }
        ];
        let obj = Ofn.arraySortByKey( arr, 'chacho', [] );
        expect( obj ).toEqual( [
            { label: 'ccc', chacho: 'chacho' },
            { label: 'bbb', chacho: 'zoquete' },
            { label: 'aaa' }
        ] );
    } );
} );

describe( 'fn: arrayGetUnique', () => {
    test( 'fn: arrayGetUnique( undefined )', () => {
        expect( Ofn.arrayGetUnique() ).toEqual( [] );
    } );
    test( 'fn: arrayGetUnique( str )', () => {
        expect( Ofn.arrayGetUnique( 'chacho' ) ).toEqual( [] );
    } );
    test( 'fn: arrayGetUnique( arr )', () => {
        let arr = [ 2, 1, 4, 4, 2, 1, 3 ];
        let obj = Ofn.arrayGetUnique( arr );
        expect( obj ).toEqual( [ 2, 1, 4, 3 ] );
    } );
    test( 'fn: arrayGetUnique( arr w obj )', () => {
        let arr = [
            { chacho: true },
            [ 1, 2 ],
            { chacho: false },
            { chacho: true },
            [ 1, 2 ],
            [ 1, 3 ],
            { chacho: true, tio: false }
        ];
        let obj = Ofn.arrayGetUnique( arr );
        expect( obj ).toEqual( [
            { chacho: true },
            [ 1, 2 ],
            { chacho: false },
            [ 1, 3 ],
            { chacho: true, tio: false }
        ] );
    } );
} );

describe( 'fn: arraysIntersection', () => {
    test( 'fn: arraysIntersection( undefined )', () => {
        expect( Ofn.arraysIntersection() ).toEqual( [] );
    } );
    test( 'fn: arraysIntersection( arr )', () => {
        expect( Ofn.arraysIntersection( [ 1, 2, 3 ] ) ).toEqual( [ 1, 2, 3 ] );
    } );
    test( 'fn: arraysIntersection( arr1, arr2 )', () => {
        expect( Ofn.arraysIntersection( [ 1, 2, 3 ], [ 2, 3, 4 ] ) ).toEqual( [ 2, 3 ] );
    } );
    test( 'fn: arraysIntersection( arr1, arr2, arr3, arr4 )', () => {
        expect( Ofn.arraysIntersection( [ 1, 2, 3 ], [ 2, 3, 4 ], [ 1, 3 ], [ 1, 2, 3 ] ) ).toEqual( [ 3 ] );
    } );
} );

describe( 'fn: arraysDifference', () => {
    test( 'fn: arraysDifference( undefined )', () => {
        expect( Ofn.arraysDifference() ).toEqual( [] );
    } );
    test( 'fn: arraysDifference( arr )', () => {
        expect( Ofn.arraysDifference( [ 1, 2, 3 ] ) ).toEqual( [ 1, 2, 3 ] );
    } );
    test( 'fn: arraysDifference( arr1, arr2 )', () => {
        expect( Ofn.arraysDifference( [ 1, 2, 3 ], [ 2, 3, 4 ] ) ).toEqual( [ 1 ] );
    } );
    test( 'fn: arraysDifference( arr1, arr2, arr3, arr4 )', () => {
        expect( Ofn.arraysDifference( [ 1, 2, 3 ], [ 2, 3, 4 ], [ 2, 3 ], [ 1 ] ) ).toEqual( [] );
    } );
    test( 'fn: arraysDifference( arr1, arr2, arr3, arr4 ) 2', () => {
        expect( Ofn.arraysDifference( [ 1, 2, 3 ], [ 2, 3, 4 ], [ 2, 3 ], [ 4 ] ) ).toEqual( [ 1 ] );
    } );
} );

describe( 'fn: arraysDifferenceAll', () => {
    test( 'fn: arraysDifferenceAll( undefined )', () => {
        expect( Ofn.arraysDifferenceAll() ).toEqual( [] );
    } );
    test( 'fn: arraysDifferenceAll( arr )', () => {
        expect( Ofn.arraysDifferenceAll( [ 1, 2, 3 ] ) ).toEqual( [ 1, 2, 3 ] );
    } );
    test( 'fn: arraysDifferenceAll( arr1, arr2 )', () => {
        expect( Ofn.arraysDifferenceAll( [ 1, 2, 3 ], [ 2, 3, 4 ] ) ).toEqual( [ 1, 4 ] );
    } );
    test( 'fn: arraysDifferenceAll( arr1, arr2, arr3, arr4 )', () => {
        expect( Ofn.arraysDifferenceAll( [ 1, 2, 3 ], [ 2, 3, 4 ], [ 2, 3 ], [ 1 ] ) ).toEqual( [ 4 ] );
    } );
} );