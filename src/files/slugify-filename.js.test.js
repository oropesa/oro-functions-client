import { slugifyFilename } from './slugify-filename';

describe('fn: slugifyFilename', () => {
  test('fn: slugifyFilename( undefined )', () => {
    expect(slugifyFilename()).toBe('');
  });
});
