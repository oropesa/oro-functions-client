import { objHasKeys } from './obj-has-keys';

describe('fn: objHasKeys', () => {
  test('fn: objHasKeys( undefined )', () => {
    expect(objHasKeys()).toBe(false);
  });

  test('fn: objHasKeys( not obj-arr )', () => {
    expect(objHasKeys('chacho')).toBe(false);
  });

  test('fn: objHasKeys( obj empty )', () => {
    expect(objHasKeys({})).toBe(false);
  });

  test('fn: objHasKeys( arr empty )', () => {
    expect(objHasKeys([])).toBe(false);
  });

  test('fn: objHasKeys( obj, not arr )', () => {
    expect(objHasKeys({ chacho: true }, 'chacho')).toBe(false);
  });
});
