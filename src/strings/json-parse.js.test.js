import { jsonParse } from './json-parse';

describe('fn: jsonParse', () => {
  test('fn: jsonParse( undefined )', () => {
    expect(jsonParse()).toBe(undefined);
  });

  test('fn: jsonParse( int )', () => {
    expect(jsonParse(17)).toBe(17);
  });
});
