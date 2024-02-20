import { ODummy } from './_mocks';
import { getClassName } from './get-class-name';

describe('fn: getClassName', () => {
  test('fn: getClassName( class )', () => {
    expect(getClassName(ODummy)).toBe('ODummy');
  });

  test('fn: getClassName( class var )', () => {
    const Example = ODummy;
    expect(getClassName(Example)).toBe('ODummy');
  });
});
