import { isStringJson } from './is-string-json';

describe('fn: isStringJson', () => {
  test('fn: isStringJson()', () => {
    expect(isStringJson()).toBe(false);
  });
});
