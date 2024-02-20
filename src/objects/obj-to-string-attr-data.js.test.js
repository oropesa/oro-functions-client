import { objToStringAttrData } from './obj-to-string-attr-data';

describe('fn: objToStringAttrData', () => {
  test('fn: objToStringAttrData( undefined )', () => {
    expect(objToStringAttrData()).toBe('');
  });

  test('fn: objToStringAttrData( str )', () => {
    expect(objToStringAttrData('chacho')).toBe('');
  });
});
