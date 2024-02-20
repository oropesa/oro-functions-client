import { escAttr } from './esc-attr';

describe('fn: escAttr', () => {
  test('fn: escAttr( undefined )', () => {
    expect(escAttr()).toBe('');
  });

  test('fn: escAttr( boolean )', () => {
    expect(escAttr(true)).toBe('true');
  });
});
