import { objGetMethods } from './obj-get-methods';

describe('fn: objGetMethods', () => {
  test('fn: objGetMethods( undefined )', () => {
    expect(objGetMethods()).toEqual([]);
  });
});
