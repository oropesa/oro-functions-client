import { objHasKeys } from './obj-has-keys';

describe('fn: objHasKeys', () => {
  test('fn: objHasKeys( obj, arr empty )', () => {
    expect(objHasKeys({ chacho: true }, [])).toBe(false);
  });

  test('fn: objHasKeys( obj, arr )', () => {
    expect(objHasKeys({ chacho: true }, ['chacho', 'loco'])).toBe(false);
  });

  test('fn: objHasKeys( obj, arr ) typed', () => {
    interface Custom {
      chacho: boolean;
      loco?: boolean;
    }
    const obj: Custom = { chacho: true };
    expect(objHasKeys<Custom, keyof Custom>(obj, ['chacho', 'loco'])).toBe(false);
  });

  test('fn: objHasKeys( obj, arr2 )', () => {
    expect(objHasKeys({ chacho: true, loco: false }, ['chacho', 'loco'])).toBe(true);
  });

  test('fn: objHasKeys( arr, arr )', () => {
    expect(objHasKeys([7, 8, 9], [1, 2])).toBe(true);
  });

  test('fn: objHasKeys( arr, arr ) typed', () => {
    expect(objHasKeys<number[], number>([7, 8, 9], [1, 2])).toBe(true);
  });
});
