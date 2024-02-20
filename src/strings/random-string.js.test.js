import { randomString } from './random-string';

describe('fn: randomString', () => {
  test('fn: randomString( str )', () => {
    expect(randomString('str').length).toBe(8);
  });
});
