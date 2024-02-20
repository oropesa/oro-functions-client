import { trimAll } from './trim-all';

describe('fn: trimAll', () => {
  test('fn: trimAll( str )', () => {
    expect(trimAll('chacho loco')).toBe('chacho loco');
  });

  test('fn: trimAll( str space2 )', () => {
    expect(trimAll('chacho  loco')).toBe('chacho loco');
  });

  test('fn: trimAll( str space3 )', () => {
    expect(trimAll('chacho   loco')).toBe('chacho loco');
  });

  test('fn: trimAll( str space4 )', () => {
    expect(trimAll('chacho    loco')).toBe('chacho loco');
  });

  test('fn: trimAll( str space2 trim )', () => {
    expect(trimAll(' chacho    loco ')).toBe('chacho loco');
  });
});
