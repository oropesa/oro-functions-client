import { cloneObjectWithKeys } from './clone-object-with-keys';

describe('fn: cloneObjectWithKeys', () => {
  test('fn: cloneObjectWithoutKeys( obj empty )', () => {
    expect(cloneObjectWithKeys([], [])).toEqual({});
  });

  test('fn: cloneObjectWithKeys( obj )', () => {
    const obj1 = { chacho: true, loco: false };
    const obj2 = cloneObjectWithKeys(obj1, ['loco']);
    expect(Object.keys(obj2)).toEqual(['loco']);

    obj2.loco = true;
    expect(obj1.loco).toBe(false);
    expect(obj2.loco).toBe(true);
  });

  test('fn: cloneObjectWithKeys( obj ) typed', () => {
    interface Custom {
      chacho: boolean;
      loco: boolean;
    }
    const obj1: Custom = { chacho: true, loco: false };
    const obj2 = cloneObjectWithKeys<Custom>(obj1, ['loco']);
    expect(Object.keys(obj2)).toEqual(['loco']);

    obj2.loco = true;
    expect(obj1.loco).toBe(false);
    expect(obj2.loco).toBe(true);
  });

  test('fn: cloneObjectWithKeys( arr )', () => {
    const obj1 = [{ chacho: true }, { loco: false }];
    const obj2 = cloneObjectWithKeys(obj1, [1]);
    expect(Object.keys(obj2)).toEqual(['1']);

    obj2[1]!.loco = true;
    expect(obj1[1]!.loco).toBe(false);
    expect(obj2[1]!.loco).toBe(true);
  });

  test('fn: cloneObjectWithKeys( arr ) typed', () => {
    interface Custom1 {
      chacho: boolean;
    }
    interface Custom2 {
      loco: boolean;
    }
    type Customs = [Custom1, Custom2];
    const obj1: Customs = [{ chacho: true }, { loco: false }];
    const obj2 = cloneObjectWithKeys<Customs, number>(obj1, [1]) as Custom2[];
    expect(Object.keys(obj2)).toEqual(['1']);

    obj2[1].loco = true;
    expect(obj1[1].loco).toBe(false);
    expect(obj2[1].loco).toBe(true);
  });
});
