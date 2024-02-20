import { objToStringAttrJs } from './obj-to-string-attr-js';

describe('fn: objToStringAttrJs', () => {
  test('fn: objToStringAttrJs( undefined )', () => {
    expect(objToStringAttrJs()).toBe('');
  });

  test('fn: objToStringAttrJs( str )', () => {
    expect(objToStringAttrJs('chacho')).toBe('');
  });
});
