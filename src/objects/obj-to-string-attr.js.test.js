import { objToStringAttr } from './obj-to-string-attr';

describe('fn: objToStringAttr', () => {
  test('fn: objToStringAttr( undefined )', () => {
    expect(objToStringAttr()).toBe('');
  });

  test('fn: objToStringAttr( str )', () => {
    expect(objToStringAttr('chacho')).toBe('');
  });
});
