import { getObjectMissedKeys } from './get-object-missed-keys';

describe('fn: getObjectMissedKeys', () => {
  test('fn: getObjectMissedKeys( obj, arr empty )', () => {
    expect(getObjectMissedKeys({ chacho: true }, [])).toEqual([]);
  });

  test('fn: getObjectMissedKeys( obj, arr )', () => {
    expect(getObjectMissedKeys({ chacho: true }, ['chacho', 'loco'])).toEqual(['loco']);
  });

  test('fn: getObjectMissedKeys( obj, arr ) typed', () => {
    interface Custom {
      chacho: boolean;
      loco?: boolean;
    }
    expect(getObjectMissedKeys<Custom, keyof Custom>({ chacho: true }, ['chacho', 'loco'])).toEqual(['loco']);
  });

  test('fn: getObjectMissedKeys( obj, arr2 )', () => {
    expect(getObjectMissedKeys({ chacho: true, loco: false }, ['chacho', 'loco'])).toEqual([]);
  });

  test('fn: getObjectMissedKeys( arr, arr )', () => {
    expect(getObjectMissedKeys([7, 8, 9], [3, 2, 1, '4'])).toEqual([3, '4']);
  });
});
