import { objToStringAttr } from './obj-to-string-attr';

describe('fn: objToStringAttr', () => {
  test('fn: objToStringAttr( obj empty )', () => {
    expect(objToStringAttr({})).toBe('');
  });

  test('fn: objToStringAttr( obj )', () => {
    expect(objToStringAttr({ id: 20, name: 'oro' })).toBe(' id="20" name="oro" ');
  });

  test('fn: objToStringAttr( obj ) typed', () => {
    interface Custom {
      id: number;
      name: string;
    }
    expect(objToStringAttr<Custom>({ id: 20, name: 'oro' })).toBe(' id="20" name="oro" ');
  });

  test('fn: objToStringAttr( obj w html )', () => {
    expect(objToStringAttr({ id: 20, name: '<span>oro</span>' })).toBe(' id="20" name="&lt;span&gt;oro&lt;/span&gt;" ');
  });
});
