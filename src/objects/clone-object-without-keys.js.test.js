import { cloneObjectWithoutKeys } from './clone-object-without-keys';

describe('fn: cloneObjectWithoutKeys', () => {
  test('fn: cloneObjectWithoutKeys( undefined )', () => {
    expect(cloneObjectWithoutKeys()).toEqual({});
  });

  test('fn: cloneObjectWithoutKeys( str )', () => {
    expect(cloneObjectWithoutKeys('chacho')).toEqual({});
  });

  test('fn: cloneObjectWithoutKeys( obj, str )', () => {
    expect(cloneObjectWithoutKeys({ chacho: true, loco: false }, 'chacho')).toEqual({});
  });
});
