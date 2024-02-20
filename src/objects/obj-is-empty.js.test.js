import { objIsEmpty, objIsNotEmpty } from './obj-is-empty';

describe('fn: objIsEmpty', () => {
  test('fn: objIsEmpty( undefined )', () => {
    expect(objIsEmpty()).toBe(true);
  });
});

describe('fn: objIsNotEmpty', () => {
  test('fn: objIsNotEmpty( undefined )', () => {
    expect(objIsNotEmpty()).toBe(false);
  });
});
