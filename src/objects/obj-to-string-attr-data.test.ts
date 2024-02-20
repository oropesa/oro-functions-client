import { objToStringAttrData } from './obj-to-string-attr-data';

describe('fn: objToStringAttrData', () => {
  test('fn: objToStringAttrData( obj empty )', () => {
    expect(objToStringAttrData({})).toBe('');
  });

  test('fn: objToStringAttrData( obj )', () => {
    expect(objToStringAttrData({ id: 20, name: 'oro' })).toBe(' data-id="20" data-name="oro" ');
  });

  test('fn: objToStringAttrData( obj ) typed', () => {
    interface Custom {
      id: number;
      name: string;
      today?: string;
    }
    expect(objToStringAttrData<Custom>({ id: 20, name: 'oro' })).toBe(' data-id="20" data-name="oro" ');
  });

  test('fn: objToStringAttrData( obj w html )', () => {
    expect(objToStringAttrData({ id: 20, name: '<span>oro</span>' })).toBe(
      ' data-id="20" data-name="&lt;span&gt;oro&lt;/span&gt;" ',
    );
  });
});
