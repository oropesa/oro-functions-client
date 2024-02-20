import { objIsEmpty, objIsNotEmpty } from './obj-is-empty';

describe('fn: objIsEmpty', () => {
  test('fn: objIsEmpty( int )', () => {
    expect(objIsEmpty(123)).toBe(true);
  });

  test('fn: objIsEmpty( str )', () => {
    expect(objIsEmpty('chacho')).toBe(true);
  });

  test('fn: objIsEmpty( obj empty )', () => {
    expect(objIsEmpty({})).toBe(true);
  });

  test('fn: objIsEmpty( obj )', () => {
    expect(objIsEmpty({ chacho: true })).toBe(false);
  });

  test('fn: objIsEmpty( obj value-empty )', () => {
    expect(objIsEmpty({ chacho: undefined })).toBe(false);
  });

  test('fn: objIsEmpty( arr empty )', () => {
    expect(objIsEmpty([])).toBe(true);
  });

  test('fn: objIsEmpty( arr )', () => {
    expect(objIsEmpty([1, 2, 3])).toBe(false);
  });
});

describe('fn: objIsNotEmpty', () => {
  test('fn: objIsNotEmpty( int )', () => {
    expect(objIsNotEmpty(123)).toBe(false);
  });

  test('fn: objIsNotEmpty( str )', () => {
    expect(objIsNotEmpty('chacho')).toBe(false);
  });

  test('fn: objIsNotEmpty( obj empty )', () => {
    expect(objIsNotEmpty({})).toBe(false);
  });

  test('fn: objIsNotEmpty( obj )', () => {
    expect(objIsNotEmpty({ chacho: true })).toBe(true);
  });

  test('fn: objIsNotEmpty( obj value-empty )', () => {
    expect(objIsNotEmpty({ chacho: undefined })).toBe(true);
  });

  test('fn: objIsNotEmpty( arr empty )', () => {
    expect(objIsNotEmpty([])).toBe(false);
  });

  test('fn: objIsNotEmpty( arr )', () => {
    expect(objIsNotEmpty([1, 2, 3])).toBe(true);
  });
});
