import { getClassName } from './get-class-name';

describe('fn: getClassName', () => {
  test('fn: getClassName( undefined )', () => {
    expect(getClassName()).toBe('');
  });
});
