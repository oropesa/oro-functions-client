import { cloneObjectWithoutKeys } from './clone-object-without-keys';

describe('fn: cloneObjectWithoutKeys', () => {
  test('fn: cloneObjectWithoutKeys( obj empty )', () => {
    expect(cloneObjectWithoutKeys([], [])).toEqual({});
  });

  test('fn: cloneObjectWithoutKeys( obj )', () => {
    const obj1 = { chacho: true, loco: false };
    const obj2 = cloneObjectWithoutKeys(obj1, ['loco']);
    expect(Object.keys(obj2)).toEqual(['chacho']);

    obj2.chacho = false;
    expect(obj1.chacho).toBe(true);
    expect(obj2.chacho).toBe(false);
  });

  test('fn: cloneObjectWithoutKeys( obj ) typed', () => {
    interface Custom {
      chacho: boolean;
      loco: boolean;
    }
    type OmitKeys = 'loco';
    const obj1 = { chacho: true, loco: false };
    const obj2 = cloneObjectWithoutKeys<Custom, OmitKeys>(obj1, ['loco']);
    expect(Object.keys(obj2)).toEqual(['chacho']);

    obj2.chacho = false;
    expect(obj1.chacho).toBe(true);
    expect(obj2.chacho).toBe(false);
  });

  test('fn: cloneObjectWithoutKeys( arr )', () => {
    const obj1 = [{ chacho: true }, { loco: false }];
    const obj2 = cloneObjectWithoutKeys(obj1, [1]);
    expect(Object.keys(obj2)).toEqual(['0']);

    obj2[0]!.chacho = false;
    expect(obj1[0]!.chacho).toBe(true);
    expect(obj2[0]!.chacho).toBe(false);
  });

  test('fn: cloneObjectWithoutKeys( arr ) typed', () => {
    interface Custom1 {
      chacho: boolean;
    }
    interface Custom2 {
      loco: boolean;
    }
    type Customs = [Custom1, Custom2];
    const obj1: Customs = [{ chacho: true }, { loco: false }];
    const obj2 = cloneObjectWithoutKeys<Customs, number>(obj1, [1]) as unknown as Custom1[];
    expect(Object.keys(obj2)).toEqual(['0']);

    obj2[0].chacho = false;
    expect(obj1[0].chacho).toBe(true);
    expect(obj2[0].chacho).toBe(false);
  });
});
