import { cloneObject } from './clone-object';

describe('fn: cloneObject', () => {
  test('fn: cloneObject( undefined )', () => {
    expect(cloneObject()).toEqual({});
  });

  test('fn: cloneObject( str )', () => {
    expect(cloneObject('chacho')).toEqual({});
  });
});
