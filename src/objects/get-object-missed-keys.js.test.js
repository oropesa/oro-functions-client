import { getObjectMissedKeys } from './get-object-missed-keys';

describe('fn: getObjectMissedKeys', () => {
  test('fn: getObjectMissedKeys( undefined )', () => {
    expect(getObjectMissedKeys()).toEqual([]);
  });

  test('fn: getObjectMissedKeys( not obj-arr )', () => {
    expect(getObjectMissedKeys('chacho')).toEqual([]);
  });

  test('fn: getObjectMissedKeys( obj empty )', () => {
    expect(getObjectMissedKeys({})).toEqual([]);
  });

  test('fn: getObjectMissedKeys( arr empty )', () => {
    expect(getObjectMissedKeys([])).toEqual([]);
  });

  test('fn: getObjectMissedKeys( obj, not arr )', () => {
    expect(getObjectMissedKeys({ chacho: true }, 'chacho')).toEqual([]);
  });
});
