import { escAttr } from './esc-attr';

describe('fn: escAttr', () => {
  test('fn: escAttr( str )', () => {
    expect(escAttr('chacho')).toBe('chacho');
  });

  test('fn: escAttr( html )', () => {
    expect(escAttr('<span>chacho</span>')).toBe('&lt;span&gt;chacho&lt;/span&gt;');
  });
});
