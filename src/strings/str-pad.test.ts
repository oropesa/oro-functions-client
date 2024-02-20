import { strPad } from './str-pad';

describe('fn: strPad', () => {
  test('fn: strPad( str, len )', () => {
    expect(strPad(27, 4)).toBe('  27');
  });

  test('fn: strPad( str, len-negative )', () => {
    expect(strPad(27, -4)).toBe('');
  });

  test('fn: strPad( str, len, pad )', () => {
    expect(strPad(27, 4, 0)).toBe('0027');
  });

  test('fn: strPad( str, len, pad2 )', () => {
    expect(strPad('27', 5, 'oropesa')).toBe('oro27');
  });

  test('fn: strPad( str, len, pad2, right )', () => {
    expect(strPad('27', 5, 'oropesa', 'right')).toBe('27oro');
  });

  test('fn: strPad( str long, len short )', () => {
    expect(strPad('chacho', 4)).toBe('chac');
  });

  test('fn: strPad( str long, len short, pad, right )', () => {
    expect(strPad('chacho', 4, ' ', 'right')).toBe('acho');
  });
});
