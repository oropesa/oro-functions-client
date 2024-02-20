import { arrayValuesByKey } from './array-values-by-key';

describe('fn: arrayValuesByKey', () => {
  test('fn: arrayValuesByKey( undefined )', () => {
    expect(arrayValuesByKey()).toEqual([]);
  });

  test('fn: arrayValuesByKey( str )', () => {
    expect(arrayValuesByKey('chacho')).toEqual([]);
  });

  test('fn: arrayToObjectByKey( arr, key boolean )', () => {
    const array = [{ label: 'chacho', chacho: 'chacho' }];
    const obj = arrayValuesByKey(array, true);
    expect(obj).toEqual([]);
  });

  test('fn: arrayValuesByKey( arr bad, key missed, strict )', () => {
    const array = [{ label: 'chacho', chacho: true }, undefined];
    const obj = arrayValuesByKey(array, 'chacho', true);
    expect(obj).toEqual([true]);
  });
});
