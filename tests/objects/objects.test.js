const { Ofn } = require('../../dist');

describe('fn: objIsEmpty', () => {
  test('fn: objIsEmpty( undefined )', () => {
    expect(Ofn.objIsEmpty(undefined)).toBe(true);
  });
  test('fn: objIsEmpty( int )', () => {
    expect(Ofn.objIsEmpty(123)).toBe(true);
  });
  test('fn: objIsEmpty( str )', () => {
    expect(Ofn.objIsEmpty('chacho')).toBe(true);
  });
  test('fn: objIsEmpty( obj empty )', () => {
    expect(Ofn.objIsEmpty({})).toBe(true);
  });
  test('fn: objIsEmpty( obj )', () => {
    expect(Ofn.objIsEmpty({ chacho: true })).toBe(false);
  });
  test('fn: objIsEmpty( obj )', () => {
    expect(Ofn.objIsEmpty({ chacho: undefined })).toBe(false);
  });
  test('fn: objIsEmpty( arr empty )', () => {
    expect(Ofn.objIsEmpty([])).toBe(true);
  });
  test('fn: objIsEmpty( arr )', () => {
    expect(Ofn.objIsEmpty([1, 2, 3])).toBe(false);
  });
});

describe('fn: objIsNotEmpty', () => {
  test('fn: objIsNotEmpty( undefined )', () => {
    expect(Ofn.objIsNotEmpty(undefined)).toBe(false);
  });
  test('fn: objIsNotEmpty( int )', () => {
    expect(Ofn.objIsNotEmpty(123)).toBe(false);
  });
  test('fn: objIsNotEmpty( str )', () => {
    expect(Ofn.objIsNotEmpty('chacho')).toBe(false);
  });
  test('fn: objIsNotEmpty( obj empty )', () => {
    expect(Ofn.objIsNotEmpty({})).toBe(false);
  });
  test('fn: objIsNotEmpty( obj )', () => {
    expect(Ofn.objIsNotEmpty({ chacho: true })).toBe(true);
  });
  test('fn: objIsNotEmpty( obj )', () => {
    expect(Ofn.objIsNotEmpty({ chacho: undefined })).toBe(true);
  });
  test('fn: objIsNotEmpty( arr empty )', () => {
    expect(Ofn.objIsNotEmpty([])).toBe(false);
  });
  test('fn: objIsNotEmpty( arr )', () => {
    expect(Ofn.objIsNotEmpty([1, 2, 3])).toBe(true);
  });
});

describe('fn: objGetMethods', () => {
  test('fn: objGetMethods( undefined )', () => {
    expect(Ofn.objGetMethods()).toEqual([]);
  });
  test('fn: objGetMethods( class empty )', () => {
    class Chacho {}

    expect(Ofn.objGetMethods(new Chacho())).toEqual([]);
  });
  test('fn: objGetMethods( class )', () => {
    class Chacho {
      static tio() {}

      loco() {}

      fleje = true;
    }

    expect(Ofn.objGetMethods(new Chacho())).toEqual(['loco']);
  });
  test('fn: objGetMethods( obj arr )', () => {
    class Chacho extends Array {
      static tio() {}

      loco() {}

      fleje = true;
    }

    expect(Ofn.objGetMethods(new Chacho())).toEqual(['loco']);
  });
  test('fn: objGetMethods( obj arr, allowDefaults )', () => {
    expect(Ofn.objGetMethods([], true).includes('toString')).toBe(true);
  });
  test('fn: objGetMethods( obj )', () => {
    expect(Ofn.objGetMethods({})).toEqual([]);
  });
  test('fn: objGetMethods( obj )', () => {
    expect(Ofn.objGetMethods({}, true).includes('toString')).toBe(true);
  });
});

describe('fn: objHasKeys', () => {
  test('fn: objHasKeys( undefined )', () => {
    expect(Ofn.objHasKeys()).toBe(false);
  });
  test('fn: objHasKeys( not obj-arr )', () => {
    expect(Ofn.objHasKeys('chacho')).toBe(false);
  });
  test('fn: objHasKeys( obj empty )', () => {
    expect(Ofn.objHasKeys({})).toBe(false);
  });
  test('fn: objHasKeys( arr empty )', () => {
    expect(Ofn.objHasKeys([])).toBe(false);
  });
  test('fn: objHasKeys( obj, not arr )', () => {
    expect(Ofn.objHasKeys({ chacho: true }, 'chacho')).toBe(false);
  });
  test('fn: objHasKeys( obj, arr empty )', () => {
    expect(Ofn.objHasKeys({ chacho: true }, [])).toBe(false);
  });
  test('fn: objHasKeys( obj, arr )', () => {
    expect(Ofn.objHasKeys({ chacho: true }, ['chacho', 'loco'])).toBe(false);
  });
  test('fn: objHasKeys( obj, arr2 )', () => {
    expect(Ofn.objHasKeys({ chacho: true, loco: false }, ['chacho', 'loco'])).toBe(true);
  });
  test('fn: objHasKeys( arr, arr )', () => {
    expect(Ofn.objHasKeys([7, 8, 9], [1, 2])).toBe(true);
  });
});

describe('fn: getObjectMissedKeys', () => {
  test('fn: getObjectMissedKeys( undefined )', () => {
    expect(Ofn.getObjectMissedKeys()).toEqual([]);
  });
  test('fn: getObjectMissedKeys( not obj-arr )', () => {
    expect(Ofn.getObjectMissedKeys('chacho')).toEqual([]);
  });
  test('fn: getObjectMissedKeys( obj empty )', () => {
    expect(Ofn.getObjectMissedKeys({})).toEqual([]);
  });
  test('fn: getObjectMissedKeys( arr empty )', () => {
    expect(Ofn.getObjectMissedKeys([])).toEqual([]);
  });
  test('fn: getObjectMissedKeys( obj, not arr )', () => {
    expect(Ofn.getObjectMissedKeys({ chacho: true }, 'chacho')).toEqual([]);
  });
  test('fn: getObjectMissedKeys( obj, arr empty )', () => {
    expect(Ofn.getObjectMissedKeys({ chacho: true }, [])).toEqual([]);
  });
  test('fn: getObjectMissedKeys( obj, arr )', () => {
    expect(Ofn.getObjectMissedKeys({ chacho: true }, ['chacho', 'loco'])).toEqual(['loco']);
  });
  test('fn: getObjectMissedKeys( obj, arr2 )', () => {
    expect(Ofn.getObjectMissedKeys({ chacho: true, loco: false }, ['chacho', 'loco'])).toEqual([]);
  });
  test('fn: getObjectMissedKeys( arr, arr )', () => {
    expect(Ofn.getObjectMissedKeys([7, 8, 9], [1, 2, 3, '4'])).toEqual([3, '4']);
  });
});

describe('fn: cloneObject', () => {
  test('fn: cloneObject( undefined )', () => {
    expect(Ofn.cloneObject()).toEqual({});
  });
  test('fn: cloneObject( str )', () => {
    expect(Ofn.cloneObject('chacho')).toEqual({});
  });
  test('fn: cloneObject( obj )', () => {
    let obj1 = { chacho: true, loco: false };
    let obj2 = Ofn.cloneObject(obj1);
    expect(obj1).toEqual(obj2);

    obj2.loco = true;
    expect(obj1.loco).toBe(false);
    expect(obj2.loco).toBe(true);
  });
  test('fn: cloneObject( arr )', () => {
    let obj1 = [{ chacho: true }, { loco: false }];
    let obj2 = Ofn.cloneObject(obj1);
    expect(Object.keys(obj1)).toEqual(Object.keys(obj2));

    obj2[1].loco = true;
    expect(obj1[1].loco).toBe(false);
    expect(obj2[1].loco).toBe(true);
  });
});

describe('fn: cloneObjectWithKeys', () => {
  test('fn: cloneObjectWithKeys( undefined )', () => {
    expect(Ofn.cloneObjectWithKeys()).toEqual({});
  });
  test('fn: cloneObjectWithKeys( str )', () => {
    expect(Ofn.cloneObjectWithKeys('chacho')).toEqual({});
  });
  test('fn: cloneObjectWithKeys( obj, str )', () => {
    expect(Ofn.cloneObjectWithKeys({ chacho: true, loco: false }, 'chacho')).toEqual({});
  });
  test('fn: cloneObjectWithKeys( obj )', () => {
    let obj1 = { chacho: true, loco: false };
    let obj2 = Ofn.cloneObjectWithKeys(obj1, ['loco']);
    expect(Object.keys(obj2)).toEqual(['loco']);

    obj2.loco = true;
    expect(obj1.loco).toBe(false);
    expect(obj2.loco).toBe(true);
  });
  test('fn: cloneObjectWithKeys( arr )', () => {
    let obj1 = [{ chacho: true }, { loco: false }];
    let obj2 = Ofn.cloneObjectWithKeys(obj1, [1]);
    expect(Object.keys(obj2)).toEqual(['1']);

    obj2[1].loco = true;
    expect(obj1[1].loco).toBe(false);
    expect(obj2[1].loco).toBe(true);
  });
});

describe('fn: cloneObjectWithoutKeys', () => {
  test('fn: cloneObjectWithoutKeys( undefined )', () => {
    expect(Ofn.cloneObjectWithoutKeys()).toEqual({});
  });
  test('fn: cloneObjectWithoutKeys( str )', () => {
    expect(Ofn.cloneObjectWithoutKeys('chacho')).toEqual({});
  });
  test('fn: cloneObjectWithoutKeys( obj, str )', () => {
    expect(Ofn.cloneObjectWithoutKeys({ chacho: true, loco: false }, 'chacho')).toEqual({});
  });
  test('fn: cloneObjectWithoutKeys( obj )', () => {
    let obj1 = { chacho: true, loco: false };
    let obj2 = Ofn.cloneObjectWithoutKeys(obj1, ['loco']);
    expect(Object.keys(obj2)).toEqual(['chacho']);

    obj2.chacho = false;
    expect(obj1.chacho).toBe(true);
    expect(obj2.chacho).toBe(false);
  });
  test('fn: cloneObjectWithoutKeys( arr )', () => {
    let obj1 = [{ chacho: true }, { loco: false }];
    let obj2 = Ofn.cloneObjectWithoutKeys(obj1, [1]);
    expect(Object.keys(obj2)).toEqual(['0']);

    obj2[0].chacho = false;
    expect(obj1[0].chacho).toBe(true);
    expect(obj2[0].chacho).toBe(false);
  });
});

describe('fn: mergeObjectsDeep', () => {
  test('fn: mergeObjectsDeep( undefined )', () => {
    expect(Ofn.mergeObjectsDeep()).toEqual({});
  });
  test('fn: mergeObjectsDeep( obj, str )', () => {
    let obj = { chacho: true, loco: false };
    expect(Ofn.mergeObjectsDeep(obj, 'chacho')).toEqual(obj);
  });
  test('fn: mergeObjectsDeep( str, obj )', () => {
    let obj = { chacho: true, loco: false };
    expect(Ofn.mergeObjectsDeep('chacho', obj)).toEqual(obj);
  });
  test('fn: mergeObjectsDeep( obj1, obj2 ) no deep', () => {
    let obj1 = { chacho: true, loco: false };
    let obj2 = { loco: true, tio: true };
    let objMerge = Ofn.mergeObjectsDeep(obj1, obj2);
    expect(objMerge).toEqual({ chacho: true, loco: true, tio: true });
  });
  test('fn: mergeObjectsDeep( obj1, obj2 ) deep', () => {
    let obj1 = { chacho: true, loco: { foo: true } };
    let obj2 = { loco: { bar: true }, tio: true };
    let objMerge = Ofn.mergeObjectsDeep(obj1, obj2);
    expect(objMerge).toEqual({ chacho: true, loco: { foo: true, bar: true }, tio: true });
  });
  test('fn: mergeObjectsDeep( obj1, obj2, obj3, obj4 ) deep', () => {
    let obj1 = { chacho: true, loco: { foo: true } };
    let obj2 = { loco: { bar: true }, tio: true };
    let obj3 = { loco: 'fleje', tio: false };
    let obj4 = { loco: { fleje: false }, tio: false };
    expect(Ofn.mergeObjectsDeep(obj1, obj2, obj3, obj4)).toEqual({
      chacho: true,
      loco: { fleje: false },
      tio: false,
    });
  });
});

describe('fn: objToStringSqlSet', () => {
  test('fn: objToStringSqlSet( undefined )', () => {
    expect(Ofn.objToStringSqlSet()).toBe('');
  });
  test('fn: objToStringSqlSet( str )', () => {
    expect(Ofn.objToStringSqlSet('chacho')).toBe('');
  });
  test('fn: objToStringSqlSet( obj )', () => {
    expect(Ofn.objToStringSqlSet({ id: 20, name: "'oro'", today: 'NOW()' })).toBe(
      " id = 20, name = 'oro', today = NOW() ",
    );
  });
});

describe('fn: objToStringAttr', () => {
  test('fn: objToStringAttr( undefined )', () => {
    expect(Ofn.objToStringAttr()).toBe('');
  });
  test('fn: objToStringAttr( str )', () => {
    expect(Ofn.objToStringAttr('chacho')).toBe('');
  });
  test('fn: objToStringAttr( obj )', () => {
    expect(Ofn.objToStringAttr({ id: 20, name: 'oro' })).toBe(' id="20" name="oro" ');
  });
  test('fn: objToStringAttr( obj w html )', () => {
    expect(Ofn.objToStringAttr({ id: 20, name: '<span>oro</span>' })).toBe(
      ' id="20" name="&lt;span&gt;oro&lt;/span&gt;" ',
    );
  });
});

describe('fn: objToStringAttrData', () => {
  test('fn: objToStringAttrData( undefined )', () => {
    expect(Ofn.objToStringAttrData()).toBe('');
  });
  test('fn: objToStringAttrData( str )', () => {
    expect(Ofn.objToStringAttrData('chacho')).toBe('');
  });
  test('fn: objToStringAttrData( obj )', () => {
    expect(Ofn.objToStringAttrData({ id: 20, name: 'oro' })).toBe(' data-id="20" data-name="oro" ');
  });
  test('fn: objToStringAttrData( obj w html )', () => {
    expect(
      Ofn.objToStringAttrData({
        id: 20,
        name: '<span>oro</span>',
      }),
    ).toBe(' data-id="20" data-name="&lt;span&gt;oro&lt;/span&gt;" ');
  });
});

describe('fn: objToStringAttrJs', () => {
  test('fn: objToStringAttrJs( undefined )', () => {
    expect(Ofn.objToStringAttrJs()).toBe('');
  });
  test('fn: objToStringAttrJs( str )', () => {
    expect(Ofn.objToStringAttrJs('chacho')).toBe('');
  });
  test('fn: objToStringAttrJs( obj )', () => {
    expect(Ofn.objToStringAttrJs({ id: 20, name: 'oro' })).toBe(' id:20; name:oro ');
  });
});
