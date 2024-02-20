import { strPad } from './str-pad';

describe('fn: strPad', () => {
  test('fn: strPad()', () => {
    expect(strPad()).toBe('');
  });

  test('fn: strPad( null )', () => {
    expect(strPad(null)).toBe('');
  });

  test('fn: strPad( bool )', () => {
    expect(strPad(false)).toBe('false');
  });

  test('fn: strPad( str )', () => {
    expect(strPad(27)).toBe('27');
  });

  test('fn: strPad( str, len short, pad, bad-position )', () => {
    expect(strPad('chacho', NaN, ' ', 'top')).toBe('chacho');
  });
});
