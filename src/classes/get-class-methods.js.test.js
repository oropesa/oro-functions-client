import { getClassMethods } from './get-class-methods';

describe('fn: getClassMethods', () => {
  test('fn: getClassMethods( undefined )', () => {
    expect(getClassMethods()).toEqual([]);
  });
});
