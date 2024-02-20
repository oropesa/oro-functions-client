import { objToStringSqlSet } from './obj-to-string-sql-set';

describe('fn: objToStringSqlSet', () => {
  test('fn: objToStringSqlSet( obj empty )', () => {
    expect(objToStringSqlSet({})).toBe('');
  });

  test('fn: objToStringSqlSet( obj )', () => {
    expect(objToStringSqlSet({ id: 20, name: "'oro'", today: 'NOW()' })).toBe(
      " id = 20, name = 'oro', today = NOW() ",
    );
  });

  test('fn: objToStringSqlSet( obj ) typed', () => {
    interface Custom {
      id: number;
      name: string;
      today: string;
    }
    expect(objToStringSqlSet<Custom>({ id: 20, name: "'oro'", today: 'NOW()' })).toBe(
      " id = 20, name = 'oro', today = NOW() ",
    );
  });
});
