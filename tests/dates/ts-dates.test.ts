import Ofn from '../../index';

const localDate = '2021-08-13 10:57:34'
const isoDate = new Date( localDate );
// Note 1: date-string as sql-date (`localDate`) is understood as local,
//           so when create `new Date( string )` ISO depends on where tester is globally located
//  For example:
//    - In Gran Canaria (GMT +1): iso would be: '2021-08-13T09:57:34.000Z' - timestamp: 1628848654000
//    - In     A Coruña (GMT +2): iso would be: '2021-08-13T08:57:34.000Z' - timestamp: 1628845054000

const timestamp = isoDate.getTime()
// Note 2: when create `new Date( number )`, timestamp is always understood as ISO

const dateObj = {
    iso: isoDate.toISOString(),
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
    sqldatetimeIso: isoDate.toISOString().replace( 'T', ' ' ).substring( 0, 19 ),
    fulldate: '13/08/2021 10:57:34',
    fulldateStart: '13/08/2021 00:00:00',
    fulldateEnd: '13/08/2021 23:59:59',
    weekday: 5,
    monthdays: 31,
    timestamp: isoDate.getTime(),
    jsdate: isoDate,
};

const dateObjSep = {
    iso: isoDate.toISOString(),
    local: '2021-08-13T10:57:34.000Z',
    sep: '-',
    year: '2021',
    month: '08',
    day: '13',
    hour: '10',
    minute: '57',
    second: '34',
    time: '10:57',
    times: '10:57:34',
    date: '13-08-2021',
    datetime: '13-08-2021 10:57',
    datetimes: '13-08-2021 10:57:34',
    sqldate: '2021-08-13',
    sqldatetime: '2021-08-13 10:57:34',
    sqldatetimeIso: isoDate.toISOString().replace( 'T', ' ' ).substring( 0, 19 ),
    fulldate: '13-08-2021 10:57:34',
    fulldateStart: '13-08-2021 00:00:00',
    fulldateEnd: '13-08-2021 23:59:59',
    weekday: 5,
    monthdays: 31,
    timestamp: isoDate.getTime(),
    jsdate: isoDate,
}

describe( 'fn: dateObjByDate', () => {
    test( 'fn: dateObjByDate( undefined )', () => {
        expect( Ofn.dateObjByDate( undefined ) ).toBe( null );
    } );
    test( 'fn: dateObjByDate( date )', () => {
        expect( Ofn.dateObjByDate( new Date( '2021-08-13 10:57:34' ) ) ).toEqual( dateObj );
    } );
    test( 'fn: dateObjByDate( date, sep )', () => {
        expect( Ofn.dateObjByDate( new Date( '2021-08-13 10:57:34' ), '-' ) ).toEqual( dateObjSep );
    } );
    test( 'fn: dateObjByDate( date, { sep } )', () => {
        expect( Ofn.dateObjByDate( new Date( '2021-08-13 10:57:34' ), { sep: '-' } ) ).toEqual( dateObjSep );
    } );
} );

describe( 'fn: dateObjBySql', () => {
    test( 'fn: dateObjBySql( undefined )', () => {
        expect( Ofn.dateObjBySql( undefined ) ).toBe( null );
    } );
    test( 'fn: dateObjBySql( str bad )', () => {
        expect( Ofn.dateObjBySql( '2021/08/13' ) ).toBe( null );
    } );
    test( 'fn: dateObjBySql( str )', () => {
        expect( Ofn.dateObjBySql( '2021-08-13 10:57:34' ) ).toEqual( dateObj );
    } );
    test( 'fn: dateObjBySql( str, sep )', () => {
        expect( Ofn.dateObjBySql( '2021-08-13 10:57:34', '-' ) ).toEqual( dateObjSep );
    } );
    test( 'fn: dateObjBySql( str, { sep } )', () => {
        expect( Ofn.dateObjBySql( '2021-08-13 10:57:34', { sep: '-' } ) ).toEqual( dateObjSep );
    } );
} );

describe( 'fn: dateObjByHtml', () => {
    test( 'fn: dateObjByHtml( undefined )', () => {
        expect( Ofn.dateObjByHtml( undefined ) ).toBe( null );
    } );
    test( 'fn: dateObjByHtml( str bad )', () => {
        expect( Ofn.dateObjByHtml( '2021-08-13' ) ).toBe( null );
    } );
    test( 'fn: dateObjByHtml( str )', () => {
        expect( Ofn.dateObjByHtml( '13/08/2021 10:57:34' ) ).toEqual( dateObj );
    } );
    test( 'fn: dateObjByHtml( str, sep )', () => {
        expect( Ofn.dateObjByHtml( '13-08-2021 10:57:34', '-' ) ).toEqual( dateObjSep );
    } );
    test( 'fn: dateObjByHtml( str, { sep } )', () => {
        expect( Ofn.dateObjByHtml( '13-08-2021 10:57:34', { sep: '-' } ) ).toEqual( dateObjSep );
    } );
} );

describe( 'fn: dateObjByTimestamp', () => {
    test( 'fn: dateObjByTimestamp( undefined )', () => {
        expect( Ofn.dateObjByTimestamp( undefined ) ).toBe( null );
    } );
    // test( 'fn: dateObjByTimestamp( str bad )', () => {
    //     expect( Ofn.dateObjByTimestamp( 'chacho' ) ).toBe( null );
    // } );
    test( 'fn: dateObjByTimestamp( int )', () => {
        expect( Ofn.dateObjByTimestamp( timestamp ) ).toEqual( dateObj );
    } );
    test( 'fn: dateObjByTimestamp( int, sep )', () => {
        expect( Ofn.dateObjByTimestamp( timestamp, '-' ) ).toEqual( dateObjSep );
    } );
    test( 'fn: dateObjByTimestamp( int, { sep } )', () => {
        expect( Ofn.dateObjByTimestamp( timestamp, { sep: '-' } ) ).toEqual( dateObjSep );
    } );
} );

describe( 'fn: dateObjByToday', () => {
    test( 'fn: dateObjByToday()', () => {
        let dateBefore = Ofn.dateObjByDate( new Date() );
        let dateObj = Ofn.dateObjByToday();
        let dateAfter = Ofn.dateObjByDate( new Date() );

        expect( dateObj.date ).toBe( dateBefore.date );
        expect( dateObj.date ).toBe( dateAfter.date );
        expect( dateObj.timestamp ).toBeGreaterThanOrEqual( dateBefore.timestamp );
        expect( dateObj.timestamp ).toBeLessThanOrEqual( dateAfter.timestamp );
    } );
    test( 'fn: dateObjByToday( sep )', () => {
        let dateBefore = Ofn.dateObjByDate( new Date(), '-' );
        let dateObj = Ofn.dateObjByToday( '-' );
        let dateAfter = Ofn.dateObjByDate( new Date(), '-' );

        expect( dateObj.date ).toBe( dateBefore.date );
        expect( dateObj.date ).toBe( dateAfter.date );
        expect( dateObj.timestamp ).toBeGreaterThanOrEqual( dateBefore.timestamp );
        expect( dateObj.timestamp ).toBeLessThanOrEqual( dateAfter.timestamp );
    } );
    test( 'fn: dateObjByToday( { sep } )', () => {
        let dateBefore = Ofn.dateObjByDate( new Date(), { sep: '-' } );
        let dateObj = Ofn.dateObjByToday( { sep: '-' } );
        let dateAfter = Ofn.dateObjByDate( new Date(), { sep: '-' } );

        expect( dateObj.date ).toBe( dateBefore.date );
        expect( dateObj.date ).toBe( dateAfter.date );
        expect( dateObj.timestamp ).toBeGreaterThanOrEqual( dateBefore.timestamp );
        expect( dateObj.timestamp ).toBeLessThanOrEqual( dateAfter.timestamp );
    } );
} );

describe( 'fn: dateIsObj', () => {
    test( 'fn: dateIsObj( undefined )', () => {
        expect( Ofn.dateIsObj( undefined ) ).toBe( false );
    } );
    test( 'fn: dateIsObj( date )', () => {
        expect( Ofn.dateIsObj( new Date() ) ).toBe( false );
    } );
    test( 'fn: dateIsObj( dateObj )', () => {
        expect( Ofn.dateIsObj( Ofn.dateObjByToday() ) ).toEqual( true );
    } );
} );

describe( 'fn: dateObjPlusDays', () => {
    // test( 'fn: dateObjPlusDays( undefined )', () => {
    //     expect( Ofn.dateObjPlusDays( undefined ) ).toBe( null );
    // } );
    // test( 'fn: dateObjPlusDays( date )', () => {
    //     expect( Ofn.dateObjPlusDays( isoDate ) ).toEqual( dateObj );
    // } );
    test( 'fn: dateObjPlusDays( date, 1 )', () => {
        expect( Ofn.dateObjPlusDays( isoDate, 1 ).date ).toBe( '14/08/2021' );
    } );
    test( 'fn: dateObjPlusDays( dateObj, 1 )', () => {
        expect( Ofn.dateObjPlusDays( dateObj, 1 ).date ).toBe( '14/08/2021' );
    } );
    test( 'fn: dateObjPlusDays( dateObj2, -1 )', () => {
        expect( Ofn.dateObjPlusDays( dateObjSep, -1 ).date ).toBe( '12-08-2021' );
    } );
} );

describe( 'fn: datesCompare', () => {
    // test( 'fn: datesCompare( undefined )', () => {
    //     expect( Ofn.datesCompare( undefined ) ).toBe( 0 );
    // } );
    // test( 'fn: datesCompare( str, bool )', () => {
    //     expect( Ofn.datesCompare( 'chacho', true ) ).toBe( 0 );
    // } );
    // test( 'fn: datesCompare( date )', () => {
    //     expect( Ofn.datesCompare( new Date() ) ).toBe( -1 );
    // } );
    test( 'fn: datesCompare( null, dateObj )', () => {
        expect( Ofn.datesCompare( null, Ofn.dateObjByToday() ) ).toBe( 1 );
    } );
    test( 'fn: datesCompare( date, dateObj )', () => {
        expect( Ofn.datesCompare( new Date(), dateObj ) ).toBe( -1 );
    } );
    test( 'fn: datesCompare( dateObj, dateObj )', () => {
        expect( Ofn.datesCompare( dateObj, Ofn.dateObjByToday() ) ).toBe( 1 );
    } );
} );

describe( 'fn: dateIsBetween', () => {
    // test( 'fn: dateIsBetween( undefined )', () => {
    //     expect( Ofn.dateIsBetween( undefined ) ).toBe( false );
    // } );
    // test( 'fn: dateIsBetween( date, dateStart )', () => {
    //     expect( Ofn.dateIsBetween( isoDate, dateObj ) ).toBe( false );
    // } );
    // test( 'fn: dateIsBetween( date + 1, dateStart, dateEnd )', () => {
    //     expect( Ofn.dateIsBetween( Ofn.dateObjPlusDays( isoDate, 1 ), dateObj, dateObjSep ) ).toBe( false );
    // } );
    test( 'fn: dateIsBetween( date + 1, dateStart, dateEnd )', () => {
        expect( Ofn.dateIsBetween( isoDate, dateObj, dateObjSep ) ).toBe( true );
    } );
} );

describe( 'fn: datesDiffDays', () => {
    // test( 'fn: datesDiffDays( undefined )', () => {
    //     expect( Ofn.datesDiffDays( undefined ) ).toBe( 0 );
    // } );
    // test( 'fn: datesDiffDays( date )', () => {
    //     expect( Ofn.datesDiffDays( isoDate ) ).toBe( 0 );
    // } );
    test( 'fn: datesDiffDays( date1, date2 )', () => {
        expect( Ofn.datesDiffDays( Ofn.dateObjBySql( '2021-12-25' ), Ofn.dateObjBySql( '2022-01-05' ) ) ).toBe( 11 );
    } );
    test( 'fn: datesDiffDays( date2, date1 )', () => {
        expect( Ofn.datesDiffDays( Ofn.dateObjBySql( '2022-01-05' ), Ofn.dateObjBySql( '2021-12-25' ) ) ).toBe( 11 );
    } );
} );

describe( 'fn: datesDiffMonths', () => {
    // test( 'fn: datesDiffMonths( undefined )', () => {
    //     expect( Ofn.datesDiffMonths( undefined ) ).toBe( 0 );
    // } );
    // test( 'fn: datesDiffMonths( date )', () => {
    //     expect( Ofn.datesDiffMonths( isoDate ) ).toBe( 0 );
    // } );
    test( 'fn: datesDiffMonths( date1, date2 )', () => {
        expect( Ofn.datesDiffMonths( Ofn.dateObjBySql( '2021-12-25' ), Ofn.dateObjBySql( '2022-01-05' ) ) ).toBe( 1 );
    } );
    test( 'fn: datesDiffMonths( date2, date1 )', () => {
        expect( Ofn.datesDiffMonths( Ofn.dateObjBySql( '2022-01-05' ), Ofn.dateObjBySql( '2021-12-25' ) ) ).toBe( 1 );
    } );
} );

describe( 'fn: datesDiffMonthsArray', () => {
    // test( 'fn: datesDiffMonthsArray( undefined )', () => {
    //     expect( Ofn.datesDiffMonthsArray( undefined ) ).toEqual( [] );
    // } );
    // test( 'fn: datesDiffMonthsArray( date )', () => {
    //     expect( Ofn.datesDiffMonthsArray( isoDate ) ).toEqual( [] );
    // } );
    test( 'fn: datesDiffMonthsArray( date1, date2 )', () => {
        expect( Ofn.datesDiffMonthsArray( Ofn.dateObjBySql( '2021-12-25' ), Ofn.dateObjBySql( '2022-01-05' ) ) )
            .toEqual( [ { year: '2021', month: '12' }, { year: '2022', month: '01' } ] );
    } );
    test( 'fn: datesDiffMonthsArray( date2, date1 )', () => {
        expect( Ofn.datesDiffMonthsArray( Ofn.dateObjBySql( '2022-01-05' ), Ofn.dateObjBySql( '2021-12-25' ) ) )
            .toEqual( [ { year: '2021', month: '12' }, { year: '2022', month: '01' } ] );
    } );
} );

describe( 'fn: dateCheckString', () => {
    test( 'fn: dateCheckString( undefined )', () => {
        expect( Ofn.dateCheckString( undefined ) ).toBe( false );
    } );
    test( 'fn: dateCheckString( str bad )', () => {
        expect( Ofn.dateCheckString( '30/12/2020' ) ).toBe( false );
    } );
    test( 'fn: dateCheckString( str )', () => {
        expect( Ofn.dateCheckString( '30-12-2020' ) ).toBe( true );
    } );
    test( 'fn: dateCheckString( str, default )', () => {
        expect( Ofn.dateCheckString( '30-12-2020', 'default' ) ).toBe( true );
    } );
    test( 'fn: dateCheckString( str, date_default )', () => {
        expect( Ofn.dateCheckString( '30-12-2020', 'date_default' ) ).toBe( true );
    } );
    test( 'fn: dateCheckString( str, sql )', () => {
        expect( Ofn.dateCheckString( '2020-12-30', 'sql' ) ).toBe( true );
    } );
    test( 'fn: dateCheckString( str, date_sql )', () => {
        expect( Ofn.dateCheckString( '2020-12-30', 'date_sql' ) ).toBe( true );
    } );
    test( 'fn: dateCheckString( str, html )', () => {
        expect( Ofn.dateCheckString( '30/12/2020', 'html' ) ).toBe( true );
    } );
    test( 'fn: dateCheckString( str, date_html )', () => {
        expect( Ofn.dateCheckString( '30/12/2020', 'date_html' ) ).toBe( true );
    } );
    test( 'fn: dateCheckString( str, datetime_sql )', () => {
        expect( Ofn.dateCheckString( '2020-12-30 11:59:59', 'datetime_sql' ) ).toBe( true );
    } );
    test( 'fn: dateCheckString( str, datetime_html )', () => {
        expect( Ofn.dateCheckString( '30/12/2020 11:59:59', 'datetime_html' ) ).toBe( true );
    } );
    test( 'fn: dateCheckString( str, datetime_default )', () => {
        expect( Ofn.dateCheckString( '30-12-2020 11:59:59', 'datetime_default' ) ).toBe( true );
    } );
    test( 'fn: dateCheckString( str, datetime )', () => {
        expect( Ofn.dateCheckString( '30-12-2020 11:59:59', 'datetime' ) ).toBe( true );
    } );
    test( 'fn: dateCheckString( str, datetime_sql_strict )', () => {
        expect( Ofn.dateCheckString( '2020-12-30 11:59:59', 'datetime_sql_strict' ) ).toBe( true );
    } );
    test( 'fn: dateCheckString( str, datetime_html_strict )', () => {
        expect( Ofn.dateCheckString( '30/12/2020 11:59:59', 'datetime_html_strict' ) ).toBe( true );
    } );
    test( 'fn: dateCheckString( str, datetime_default_strict )', () => {
        expect( Ofn.dateCheckString( '30-12-2020 11:59:59', 'datetime_default_strict' ) ).toBe( true );
    } );
    test( 'fn: dateCheckString( str, datetime_strict )', () => {
        expect( Ofn.dateCheckString( '30-12-2020 11:59:59', 'datetime_strict' ) ).toBe( true );
    } );
} );