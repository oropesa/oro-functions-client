import { arrayToObjectByKey } from './array-to-object-by-key';

describe('fn: arrayToObjectByKey', () => {
  test('fn: arrayToObjectByKey( arr, key )', () => {
    const array = [
      { label: 'chacho', chacho: 'chacho' },
      { label: 'loco', loco: 'loco' },
    ];
    const obj = arrayToObjectByKey(array, 'label');
    expect(obj).toEqual({
      chacho: { label: 'chacho', chacho: 'chacho' },
      loco: { label: 'loco', loco: 'loco' },
    });
  });

  test('fn: arrayToObjectByKey( arr, key missed )', () => {
    const array = [
      { label: 'chacho', chacho: true },
      { label: 'loco', loco: 'loco' },
    ];
    const obj = arrayToObjectByKey(array, 'chacho');
    expect(obj).toEqual({
      true: { label: 'chacho', chacho: true },
      undefined: { label: 'loco', loco: 'loco' },
    });
  });

  test('fn: arrayToObjectByKey( arr, key missed, strict )', () => {
    const array = [
      { label: 'chacho', chacho: true },
      { label: 'loco', loco: 'loco' },
    ];
    const obj = arrayToObjectByKey(array, 'chacho', true);
    expect(obj).toEqual({ true: { label: 'chacho', chacho: true } });
  });

  test('fn: arrayToObjectByKey( arr-arr, key )', () => {
    const array = [
      ['key1', 'value1'],
      ['key2', 'value2'],
    ];
    const obj = arrayToObjectByKey(array, 0);
    expect(obj).toEqual({
      key1: ['key1', 'value1'],
      key2: ['key2', 'value2'],
    });
  });
});
