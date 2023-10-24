import Ofn from '../../dist';

describe('fn: cloneArray', () => {
  // test('fn: cloneArray( undefined )', () => {
  //   expect(Ofn.cloneArray(undefined)).toEqual([]);
  // });
  test('fn: cloneArray( str )', () => {
    expect(Ofn.cloneArray('chacho')).toEqual([]);
  });
  test('fn: cloneArray( arr )', () => {
    let array1 = [{ chacho: true }, { loco: false }];
    let array2 = Ofn.cloneArray(array1);
    expect(array1).toEqual(array2);

    array2[1].loco = true;
    expect(array1[1].loco).toBe(false);
    expect(array2[1].loco).toBe(true);
  });
});

describe('fn: arrayToObjectByKey', () => {
  // test( 'fn: arrayToObjectByKey( undefined )', () => {
  //     expect( Ofn.arrayToObjectByKey( undefined ) ).toEqual( {} );
  // } );
  // test( 'fn: arrayToObjectByKey( str )', () => {
  //     expect( Ofn.arrayToObjectByKey( 'chacho' ) ).toEqual( {} );
  // } );
  test('fn: arrayToObjectByKey( arr, key )', () => {
    let array = [
      { label: 'chacho', chacho: 'chacho' },
      { label: 'loco', loco: 'loco' },
    ];
    let obj = Ofn.arrayToObjectByKey(array, 'label');
    expect(obj).toEqual({
      chacho: { label: 'chacho', chacho: 'chacho' },
      loco: { label: 'loco', loco: 'loco' },
    });
  });
  test('fn: arrayToObjectByKey( arr, key missed )', () => {
    let array = [
      { label: 'chacho', chacho: true },
      { label: 'loco', loco: 'loco' },
    ];
    let obj = Ofn.arrayToObjectByKey(array, 'chacho');
    expect(obj).toEqual({
      true: { label: 'chacho', chacho: true },
      undefined: { label: 'loco', loco: 'loco' },
    });
  });
  test('fn: arrayToObjectByKey( arr w undef, key missed )', () => {
    let array = [{ label: 'chacho', chacho: true }, undefined, { label: 'loco', loco: 'loco' }];
    let obj = Ofn.arrayToObjectByKey(array, 'chacho');
    expect(obj).toEqual({
      true: { label: 'chacho', chacho: true },
      undefined: { label: 'loco', loco: 'loco' },
    });
  });
  test('fn: arrayToObjectByKey( arr, key missed, strict )', () => {
    let array = [
      { label: 'chacho', chacho: true },
      { label: 'loco', loco: 'loco' },
    ];
    let obj = Ofn.arrayToObjectByKey(array, 'chacho', true);
    expect(obj).toEqual({ true: { label: 'chacho', chacho: true } });
  });
  test('fn: arrayToObjectByKey( arr w undefin, key missed, strict )', () => {
    let array = [{ label: 'chacho', chacho: true }, undefined, { label: 'loco', loco: 'loco' }];
    let obj = Ofn.arrayToObjectByKey(array, 'chacho', true);
    expect(obj).toEqual({ true: { label: 'chacho', chacho: true } });
  });
});

describe('fn: arrayValuesByKey', () => {
  // test( 'fn: arrayValuesByKey( undefined )', () => {
  //     expect( Ofn.arrayValuesByKey( undefined ) ).toEqual( [] );
  // } );
  // test( 'fn: arrayValuesByKey( str )', () => {
  //     expect( Ofn.arrayValuesByKey( 'chacho' ) ).toEqual( [] );
  // } );
  test('fn: arrayValuesByKey( arr, key )', () => {
    let array = [
      { label: 'chacho', chacho: 'chacho' },
      { label: 'loco', loco: 'loco' },
    ];
    let obj = Ofn.arrayValuesByKey(array, 'label');
    expect(obj).toEqual(['chacho', 'loco']);
  });
  test('fn: arrayValuesByKey( arr, key, T, V )', () => {
    interface Custom {
      label: string;
      name: string;
    }
    type Label = 'chacho' | 'loco';
    let array: Custom[] = [
      { label: 'chacho', name: 'chacho' },
      { label: 'loco', name: 'loco' },
    ];
    let obj = Ofn.arrayValuesByKey<Custom, Label>(array, 'label');
    expect(obj).toEqual(['chacho', 'loco']);
  });
  test('fn: arrayValuesByKey( arr, key missed )', () => {
    let array = [
      { label: 'chacho', chacho: true },
      { label: 'loco', loco: 'loco' },
    ];
    let obj = Ofn.arrayValuesByKey(array, 'chacho');
    expect(obj).toEqual([true, undefined]);
  });
  test('fn: arrayValuesByKey( arr, key missed, strict )', () => {
    let array = [
      { label: 'chacho', chacho: true },
      { label: 'loco', loco: 'loco' },
    ];
    let obj = Ofn.arrayValuesByKey(array, 'chacho', true);
    expect(obj).toEqual([true]);
  });
  test('fn: arrayValuesByKey( arr bad, key missed, strict )', () => {
    let array = [{ label: 'chacho', chacho: true }, undefined];
    let obj = Ofn.arrayValuesByKey(array, 'chacho', true);
    expect(obj).toEqual([true]);
  });
});

describe('fn: arrayCountByKey', () => {
  // test( 'fn: arrayCountByKey( undefined )', () => {
  //     expect( Ofn.arrayCountByKey( undefined ) ).toEqual( {} );
  // } );
  // test( 'fn: arrayCountByKey( str )', () => {
  //     expect( Ofn.arrayCountByKey( 'chacho' ) ).toEqual( {} );
  // } );
  test('fn: arrayCountByKey( arr, key )', () => {
    let array = [
      { label: 'chacho', chacho: 'chacho' },
      { label: 'loco', loco: 'loco' },
      { label: 'chacho', chacho: 'tio' },
    ];
    let obj = Ofn.arrayCountByKey(array, 'label');
    expect(obj).toEqual({ chacho: 2, loco: 1 });
  });
  test('fn: arrayCountByKey( arr, key missed )', () => {
    let array = [
      { label: 'chacho', chacho: 'chacho' },
      { label: 'loco', loco: 'loco' },
      { label: 'chacho', chacho: 'tio' },
    ];
    let obj = Ofn.arrayCountByKey(array, 'chacho');
    expect(obj).toEqual({ chacho: 1, undefined: 1, tio: 1 });
  });
  test('fn: arrayCountByKey( arr w undef, key missed )', () => {
    let array = [
      { label: 'chacho', chacho: 'chacho' },
      undefined,
      { label: 'loco', loco: 'loco' },
      { label: 'chacho', chacho: 'tio' },
    ];
    let obj = Ofn.arrayCountByKey(array, 'chacho');
    expect(obj).toEqual({ chacho: 1, undefined: 1, tio: 1 });
  });
  test('fn: arrayCountByKey( arr, key missed, strict )', () => {
    let array = [
      { label: 'chacho', chacho: 'chacho' },
      { label: 'loco', loco: 'loco' },
      { label: 'chacho', chacho: 'tio' },
    ];
    let obj = Ofn.arrayCountByKey(array, 'chacho', true);
    expect(obj).toEqual({ chacho: 1, tio: 1 });
  });
  test('fn: arrayCountByKey( arr w undef, key missed, strict )', () => {
    let array = [
      { label: 'chacho', chacho: 'chacho' },
      undefined,
      { label: 'loco', loco: 'loco' },
      { label: 'chacho', chacho: 'tio' },
    ];
    let obj = Ofn.arrayCountByKey(array, 'chacho', true);
    expect(obj).toEqual({ chacho: 1, tio: 1 });
  });
});

describe('fn: arrayGroupByKey', () => {
  // test( 'fn: arrayGroupByKey( undefined )', () => {
  //     expect( Ofn.arrayGroupByKey( undefined ) ).toEqual( {} );
  // } );
  // test( 'fn: arrayGroupByKey( str )', () => {
  //     expect( Ofn.arrayGroupByKey( 'chacho' ) ).toEqual( {} );
  // } );
  test('fn: arrayGroupByKey( arr, key )', () => {
    let array = [
      { label: 'chacho', chacho: 'chacho' },
      { label: 'loco', loco: 'loco' },
      { label: 'chacho', chacho: 'tio' },
    ];
    let obj = Ofn.arrayGroupByKey(array, 'label');
    expect(obj).toEqual({
      chacho: [
        { label: 'chacho', chacho: 'chacho' },
        { label: 'chacho', chacho: 'tio' },
      ],
      loco: [{ label: 'loco', loco: 'loco' }],
    });
  });
  test('fn: arrayGroupByKey( arr, key missed )', () => {
    let array = [
      { label: 'chacho', chacho: 'chacho' },
      { label: 'loco', loco: 'loco' },
      { label: 'chacho', chacho: 'tio' },
    ];
    let obj = Ofn.arrayGroupByKey(array, 'chacho');
    expect(obj).toEqual({
      chacho: [{ label: 'chacho', chacho: 'chacho' }],
      tio: [{ label: 'chacho', chacho: 'tio' }],
      undefined: [{ label: 'loco', loco: 'loco' }],
    });
  });
  test('fn: arrayGroupByKey( arr w undef, key missed )', () => {
    let array = [
      { label: 'chacho', chacho: 'chacho' },
      undefined,
      { label: 'loco', loco: 'loco' },
      { label: 'chacho', chacho: 'tio' },
    ];
    let obj = Ofn.arrayGroupByKey(array, 'chacho');
    expect(obj).toEqual({
      chacho: [{ label: 'chacho', chacho: 'chacho' }],
      tio: [{ label: 'chacho', chacho: 'tio' }],
      undefined: [{ label: 'loco', loco: 'loco' }],
    });
  });
  test('fn: arrayGroupByKey( arr, key missed, strict )', () => {
    let array = [
      { label: 'chacho', chacho: 'chacho' },
      { label: 'loco', loco: 'loco' },
      { label: 'chacho', chacho: 'tio' },
    ];
    let obj = Ofn.arrayGroupByKey(array, 'chacho', true);
    expect(obj).toEqual({
      chacho: [{ label: 'chacho', chacho: 'chacho' }],
      tio: [{ label: 'chacho', chacho: 'tio' }],
    });
  });
  test('fn: arrayGroupByKey( arr w undef, key missed, strict )', () => {
    let array = [
      { label: 'chacho', chacho: 'chacho' },
      undefined,
      { label: 'loco', loco: 'loco' },
      { label: 'chacho', chacho: 'tio' },
    ];
    let obj = Ofn.arrayGroupByKey(array, 'chacho', true);
    expect(obj).toEqual({
      chacho: [{ label: 'chacho', chacho: 'chacho' }],
      tio: [{ label: 'chacho', chacho: 'tio' }],
    });
  });
  test('fn: arrayGroupByKey( arr, key missed, strict, T )', () => {
    interface Custom {
      label: string;
      chacho: string;
    }
    let array: Custom[] = [
      { label: 'chacho', chacho: 'chacho' },
      { label: 'loco', chacho: 'loco' },
      { label: 'tio', chacho: 'tio' },
    ];
    let obj = Ofn.arrayGroupByKey(array, 'chacho', true);
    expect(obj).toEqual({
      chacho: [{ label: 'chacho', chacho: 'chacho' }],
      loco: [{ label: 'loco', chacho: 'loco' }],
      tio: [{ label: 'tio', chacho: 'tio' }],
    });
  });
});

describe('fn: arraySortByKey', () => {
  // test( 'fn: arraySortByKey( undefined )', () => {
  //     expect( Ofn.arraySortByKey( undefined ) ).toEqual( [] );
  // } );
  // test( 'fn: arraySortByKey( str )', () => {
  //     expect( Ofn.arraySortByKey( 'chacho' ) ).toEqual( [] );
  // } );
  test('fn: arraySortByKey( arr, key )', () => {
    let array = [
      { label: 'ccc', chacho: 'chacho' },
      { label: 'aaa' },
      { label: 'bbb', chacho: 'zoquete' },
    ];
    let obj = Ofn.arraySortByKey(array, 'label');
    expect(obj).toEqual([
      { label: 'aaa' },
      { label: 'bbb', chacho: 'zoquete' },
      { label: 'ccc', chacho: 'chacho' },
    ]);
  });
  test('fn: arraySortByKey( arr, key missed )', () => {
    let array = [
      { label: 'ccc', chacho: 'chacho' },
      { label: 'aaa' },
      { label: 'bbb', chacho: 'zoquete' },
    ];
    let obj = Ofn.arraySortByKey(array, 'chacho');
    expect(obj).toEqual([
      { label: 'ccc', chacho: 'chacho' },
      { label: 'bbb', chacho: 'zoquete' },
      { label: 'aaa' },
    ]);
  });
  test('fn: arraySortByKey( arr w undef, key missed )', () => {
    let array = [
      { label: 'ccc', chacho: 'chacho' },
      undefined,
      { label: 'aaa' },
      { label: 'bbb', chacho: 'zoquete' },
    ];
    let obj = Ofn.arraySortByKey(array, 'chacho');
    expect(obj).toEqual([
      { label: 'ccc', chacho: 'chacho' },
      { label: 'bbb', chacho: 'zoquete' },
      { label: 'aaa' },
    ]);
  });
  test('fn: arraySortByKey( arr w undef, key missed, sortArray )', () => {
    let array = [
      { label: 'ccc', chacho: 'chacho' },
      undefined,
      { label: 'aaa' },
      { label: 'bbb', chacho: 'zoquete' },
    ];
    let obj = Ofn.arraySortByKey(array, 'chacho', ['zoquete', 'chacho']);
    expect(obj).toEqual([
      { label: 'bbb', chacho: 'zoquete' },
      { label: 'ccc', chacho: 'chacho' },
      { label: 'aaa' },
    ]);
  });
  test('fn: arraySortByKey( arr w undef, key missed, sortArray missed )', () => {
    let array = [
      { label: 'ccc', chacho: 'chacho' },
      undefined,
      { label: 'aaa' },
      { label: 'bbb', chacho: 'zoquete' },
    ];
    let obj = Ofn.arraySortByKey(array, 'chacho', ['zoquete']);
    expect(obj).toEqual([
      { label: 'bbb', chacho: 'zoquete' },
      { label: 'ccc', chacho: 'chacho' },
      { label: 'aaa' },
    ]);
  });
  test('fn: arraySortByKey( arr w undef, key missed, sortArray empty )', () => {
    let array = [
      { label: 'ccc', chacho: 'chacho' },
      undefined,
      { label: 'aaa' },
      { label: 'bbb', chacho: 'zoquete' },
    ];
    let obj = Ofn.arraySortByKey(array, 'chacho', []);
    expect(obj).toEqual([
      { label: 'ccc', chacho: 'chacho' },
      { label: 'bbb', chacho: 'zoquete' },
      { label: 'aaa' },
    ]);
  });
});

describe('fn: arrayGetUnique', () => {
  // test('fn: arrayGetUnique( undefined )', () => {
  //   expect(Ofn.arrayGetUnique(undefined)).toEqual([]);
  // });
  // test( 'fn: arrayGetUnique( str )', () => {
  //     expect( Ofn.arrayGetUnique( 'chacho' ) ).toEqual( [] );
  // } );
  test('fn: arrayGetUnique( arr )', () => {
    let array = [2, 1, 4, 4, 2, 1, 3];
    let obj = Ofn.arrayGetUnique(array);
    expect(obj).toEqual([2, 1, 4, 3]);
  });
  test('fn: arrayGetUnique( arr w obj )', () => {
    let array = [
      { chacho: true },
      [1, 2],
      { chacho: false },
      { chacho: true },
      [1, 2],
      [1, 3],
      { chacho: true, tio: false },
    ];
    let obj = Ofn.arrayGetUnique(array);
    expect(obj).toEqual([
      { chacho: true },
      [1, 2],
      { chacho: false },
      [1, 3],
      { chacho: true, tio: false },
    ]);
  });
  test('fn: arrayGetUnique( arr w obj 2 )', () => {
    interface Custom {
      chacho: number;
    }
    let array: Custom[] = [
      { chacho: 2 },
      { chacho: 4 },
      { chacho: 3 },
      { chacho: 1 },
      { chacho: 4 },
      { chacho: 2 },
    ];
    let obj = Ofn.arrayGetUnique(array);
    expect(obj).toEqual([{ chacho: 2 }, { chacho: 4 }, { chacho: 3 }, { chacho: 1 }]);
  });
});

describe('fn: arraysIntersection', () => {
  test('fn: arraysIntersection( undefined )', () => {
    expect(Ofn.arraysIntersection()).toEqual([]);
  });
  test('fn: arraysIntersection( arr )', () => {
    expect(Ofn.arraysIntersection([1, 2, 3])).toEqual([1, 2, 3]);
  });
  test('fn: arraysIntersection( arr1, arr2 )', () => {
    expect(Ofn.arraysIntersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
  });
  test('fn: arraysIntersection( arr1, arr2, arr3, arr4 )', () => {
    expect(Ofn.arraysIntersection([1, 2, 3], [2, 3, 4], [1, 3], [1, 2, 3])).toEqual([3]);
  });
});

describe('fn: arraysDifference', () => {
  test('fn: arraysDifference( undefined )', () => {
    expect(Ofn.arraysDifference()).toEqual([]);
  });
  test('fn: arraysDifference( arr )', () => {
    expect(Ofn.arraysDifference([1, 2, 3])).toEqual([1, 2, 3]);
  });
  test('fn: arraysDifference( arr1, arr2 )', () => {
    expect(Ofn.arraysDifference([1, 2, 3], [2, 3, 4])).toEqual([1]);
  });
  test('fn: arraysDifference( arr1, arr2, arr3, arr4 )', () => {
    expect(Ofn.arraysDifference([1, 2, 3], [2, 3, 4], [2, 3], [1])).toEqual([]);
  });
  test('fn: arraysDifference( arr1, arr2, arr3, arr4 ) 2', () => {
    expect(Ofn.arraysDifference([1, 2, 3], [2, 3, 4], [2, 3], [4])).toEqual([1]);
  });
});

describe('fn: arraysDifferenceAll', () => {
  test('fn: arraysDifferenceAll( undefined )', () => {
    expect(Ofn.arraysDifferenceAll()).toEqual([]);
  });
  test('fn: arraysDifferenceAll( arr )', () => {
    expect(Ofn.arraysDifferenceAll([1, 2, 3])).toEqual([1, 2, 3]);
  });
  test('fn: arraysDifferenceAll( arr1, arr2 )', () => {
    expect(Ofn.arraysDifferenceAll([1, 2, 3], [2, 3, 4])).toEqual([1, 4]);
  });
  test('fn: arraysDifferenceAll( arr1, arr2, arr3, arr4 )', () => {
    expect(Ofn.arraysDifferenceAll([1, 2, 3], [2, 3, 4], [2, 3], [1])).toEqual([4]);
  });
});
