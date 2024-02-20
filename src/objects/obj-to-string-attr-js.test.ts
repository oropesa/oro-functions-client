import { objToStringAttrJs } from './obj-to-string-attr-js';

describe('fn: objToStringAttrJs', () => {
  test('fn: objToStringAttrJs( obj empty )', () => {
    expect(objToStringAttrJs({})).toBe('');
  });

  test('fn: objToStringAttrJs( obj )', () => {
    expect(objToStringAttrJs({ id: 20, name: 'oro' })).toBe(' id:20; name:oro ');
  });

  test('fn: objToStringAttrJs( obj ) typed', () => {
    interface Custom {
      id: number;
      name: string;
    }
    expect(objToStringAttrJs<Custom>({ id: 20, name: 'oro' })).toBe(' id:20; name:oro ');
  });
});
