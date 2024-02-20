import { slugifyFilename } from './slugify-filename';

describe('fn: slugifyFilename', () => {
  test('fn: slugifyFilename( str )', () => {
    expect(slugifyFilename('Chacho Loco.pdf')).toBe('chacho-loco.pdf');
  });

  test('fn: slugifyFilename( str2 )', () => {
    expect(slugifyFilename('Chacho Loco')).toBe('chacho-loco');
  });

  test('fn: slugifyFilename( path )', () => {
    expect(slugifyFilename('C:/tmp/Chacho Loco.pdf')).toBe('chacho-loco.pdf');
  });
});
