import { arrayGroupByKey } from './array-group-by-key';

describe('fn: arrayGroupByKey', () => {
  test('fn: arrayGroupByKey( undefined )', () => {
    expect(arrayGroupByKey()).toEqual({});
  });

  test('fn: arrayGroupByKey( str )', () => {
    expect(arrayGroupByKey('chacho')).toEqual({});
  });

  test('fn: arrayGroupByKey( arr, key boolean )', () => {
    const array = [{ label: 'chacho', chacho: 'chacho' }];
    const obj = arrayGroupByKey(array, true);
    expect(obj).toEqual({});
  });

  test('fn: arrayGroupByKey( arr, key number )', () => {
    const array = [{ 1: 'chacho' }];
    const obj = arrayGroupByKey(array, 1);
    expect(obj).toEqual({ chacho: [{ 1: 'chacho' }] });
  });

  test('fn: arrayGroupByKey( arr w undef, key missed )', () => {
    const array = [
      { label: 'chacho', chacho: 'chacho' },
      undefined,
      { label: 'loco', loco: 'loco' },
      { label: 'chacho', chacho: 'tio' },
    ];
    const obj = arrayGroupByKey(array, 'chacho');
    expect(obj).toEqual({
      chacho: [{ label: 'chacho', chacho: 'chacho' }],
      tio: [{ label: 'chacho', chacho: 'tio' }],
      undefined: [{ label: 'loco', loco: 'loco' }],
    });
  });

  test('fn: arrayGroupByKey( arr w undef, key missed, strict )', () => {
    const array = [
      { label: 'chacho', chacho: 'chacho' },
      undefined,
      { label: 'loco', loco: 'loco' },
      { label: 'chacho', chacho: 'tio' },
    ];
    const obj = arrayGroupByKey(array, 'chacho', true);
    expect(obj).toEqual({
      chacho: [{ label: 'chacho', chacho: 'chacho' }],
      tio: [{ label: 'chacho', chacho: 'tio' }],
    });
  });
});
