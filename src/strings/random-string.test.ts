import { randomString } from './random-string';

describe('fn: randomString', () => {
  test('fn: randomString( undefined )', () => {
    expect(randomString().length).toBe(8);
  });

  test('fn: randomString( -int < 0 )', () => {
    expect(randomString(-4).length).toBe(0);
  });

  test('fn: randomString( NaN )', () => {
    expect(randomString(Number.NaN).length).toBe(8);
  });

  test('fn: randomString( +int < 10 )', () => {
    expect(randomString(4).length).toBe(4);
  });

  test('fn: randomString( +int > 10 )', () => {
    expect(randomString(17).length).toBe(17);
  });

  test('fn: randomString( +int > 100 )', () => {
    expect(randomString(108).length).toBe(108);
  });
});
