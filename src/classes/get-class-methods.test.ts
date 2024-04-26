import { ODummy } from './_dummy.mocks';
import { getClassMethods } from './get-class-methods';

describe('fn: getClassMethods', () => {
  test('fn: getClassMethods( class )', () => {
    expect(getClassMethods(ODummy)).toEqual(['fn1', 'fn2']);
  });
});
