import { cloneObjectWithKeys } from './clone-object-with-keys';

describe('fn: cloneObjectWithKeys', () => {
  test('fn: cloneObjectWithKeys( undefined )', () => {
    expect(cloneObjectWithKeys()).toEqual({});
  });

  test('fn: cloneObjectWithKeys( str )', () => {
    expect(cloneObjectWithKeys('chacho')).toEqual({});
  });

  test('fn: cloneObjectWithKeys( obj, str )', () => {
    expect(cloneObjectWithKeys({ chacho: true, loco: false }, 'chacho')).toEqual({});
  });
});
