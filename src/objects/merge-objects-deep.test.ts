import { mergeObjectsDeep } from './merge-objects-deep';

describe('fn: mergeObjectsDeep', () => {
  test('fn: mergeObjectsDeep( obj1, obj2 ) no deep', () => {
    const obj1 = { chacho: true, loco: false };
    const obj2 = { loco: true, tio: true };
    const objMerge = mergeObjectsDeep(obj1, obj2);
    expect(objMerge).toEqual({ chacho: true, loco: true, tio: true });
  });

  test('fn: mergeObjectsDeep( obj1, obj2 ) no deep typed', () => {
    interface Custom {
      chacho: boolean;
      loco: boolean;
      tio: boolean;
    }
    const obj1: Partial<Custom> = { chacho: true, loco: false };
    const obj2: Partial<Custom> = { loco: true, tio: true };
    const objMerge = mergeObjectsDeep<Custom>(obj1, obj2);
    expect(objMerge).toEqual({ chacho: true, loco: true, tio: true });
  });

  test('fn: mergeObjectsDeep( obj1, obj2 ) deep', () => {
    const obj1 = { chacho: true, loco: { foo: true } };
    const obj2 = { loco: { bar: true }, tio: true };
    const objMerge = mergeObjectsDeep<any>(obj1, obj2);
    expect(objMerge).toEqual({ chacho: true, loco: { foo: true, bar: true }, tio: true });
  });

  test('fn: mergeObjectsDeep( obj1, obj2, obj3, obj4 ) deep', () => {
    const obj1 = { chacho: true, loco: { foo: true } };
    const obj2 = { loco: { bar: true }, tio: true };
    const obj3 = { loco: 'fleje', tio: false };
    const obj4 = { loco: { fleje: false }, tio: false };
    expect(mergeObjectsDeep<any>(obj1, obj2, obj3, obj4)).toEqual({
      chacho: true,
      loco: { fleje: false },
      tio: false,
    });
  });
});
