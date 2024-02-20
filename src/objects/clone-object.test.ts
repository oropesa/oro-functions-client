import { cloneObject } from './clone-object';

describe('fn: cloneObject', () => {
  test('fn: cloneObject( null )', () => {
    const clone = cloneObject(null);
    expect(clone).toEqual({});
  });

  test('fn: cloneObject( obj )', () => {
    const obj1 = { chacho: true, loco: false };
    const obj2 = cloneObject(obj1);
    expect(obj1).toEqual(obj2);

    obj2.loco = true;
    expect(obj1.loco).toBe(false);
    expect(obj2.loco).toBe(true);
  });

  test('fn: cloneObject( obj ) typed', () => {
    interface Custom {
      chacho: boolean;
      loco: boolean;
    }
    const obj1: Custom = { chacho: true, loco: false };
    const obj2 = cloneObject<Custom>(obj1);
    expect(obj1).toEqual(obj2);

    obj2.loco = true;
    expect(obj1.loco).toBe(false);
    expect(obj2.loco).toBe(true);
  });

  test('fn: cloneObject( arr )', () => {
    const obj1 = [{ chacho: true }, { loco: false }];
    const obj2 = cloneObject(obj1);
    expect(Object.keys(obj1)).toEqual(Object.keys(obj2));

    obj2[1].loco = true;
    expect(obj1[1].loco).toBe(false);
    expect(obj2[1].loco).toBe(true);
  });
});
