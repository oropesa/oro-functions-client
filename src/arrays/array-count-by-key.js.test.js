import { arrayCountByKey } from './array-count-by-key';

describe('fn: arrayCountByKey', () => {
  test('fn: arrayCountByKey( undefined )', () => {
    expect(arrayCountByKey()).toEqual({});
  });

  test('fn: arrayCountByKey( str )', () => {
    expect(arrayCountByKey('chacho')).toEqual({});
  });

  test('fn: arrayCountByKey( arr, key boolean )', () => {
    const array = [{ label: 'chacho', chacho: 'chacho' }];
    const obj = arrayCountByKey(array, true);
    expect(obj).toEqual({});
  });

  test('fn: arrayCountByKey( arr, key number )', () => {
    const array = [{ 1: 'chacho' }];
    const obj = arrayCountByKey(array, 1);
    expect(obj).toEqual({ chacho: 1 });
  });

  test('fn: arrayCountByKey( arr w undef, key missed )', () => {
    const array = [
      { label: 'chacho', chacho: 'chacho' },
      undefined,
      { label: 'loco', loco: 'loco' },
      { label: 'chacho', chacho: 'tio' },
    ];
    const obj = arrayCountByKey(array, 'chacho');
    expect(obj).toEqual({ chacho: 1, undefined: 1, tio: 1 });
  });

  test('fn: arrayCountByKey( arr w undef, key missed, strict )', () => {
    const array = [
      { label: 'chacho', chacho: 'chacho' },
      undefined,
      { label: 'loco', loco: 'loco' },
      { label: 'chacho', chacho: 'tio' },
    ];
    const obj = arrayCountByKey(array, 'chacho', true);
    expect(obj).toEqual({ chacho: 1, tio: 1 });
  });

  test('fn: arrayCountByKey( arr, wrong key, strict )', () => {
    const array = [
      { label: 'chacho', chacho: 'chacho' },
      { label: 'loco', loco: 'loco' },
      { label: 'chacho', chacho: 'tio' },
    ];
    const obj = arrayCountByKey(array, 'tio', true);
    expect(obj).toEqual({});
  });
});
