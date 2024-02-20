import { ODummy } from './_mocks';
import { getClassStaticMethods } from './get-class-static-methods';

describe('fn: getClassStaticMethods', () => {
  test('fn: getClassStaticMethods( class )', () => {
    expect(getClassStaticMethods(ODummy)).toEqual(['fnStatic1', 'fnStatic2']);
  });
});
