import { isStringJson } from './is-string-json';

describe('fn: isStringJson', () => {
  test('fn: isStringJson( str bad )', () => {
    expect(isStringJson('{ chacho: true }')).toBe(false);
  });

  test('fn: isStringJson( str ok )', () => {
    expect(isStringJson('{ "chacho": true }')).toBe(true);
  });

  test('fn: isStringJson( str arr )', () => {
    expect(isStringJson('[ 1, 2, 3 ]')).toBe(false);
  });

  test('fn: isStringJson( str arr allow )', () => {
    expect(isStringJson('[ 1, 2, 3 ]', true)).toBe(true);
  });
});
