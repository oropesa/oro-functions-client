import { getClassStaticMethods } from './get-class-static-methods';

describe('fn: getClassStaticMethods', () => {
  test('fn: getClassStaticMethods( undefined )', () => {
    expect(getClassStaticMethods()).toEqual([]);
  });
});
