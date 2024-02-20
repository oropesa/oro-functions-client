import { arrayValuesByKey } from './array-values-by-key';

describe('fn: arrayValuesByKey', () => {
  test('fn: arrayValuesByKey( arr, key )', () => {
    const array = [
      { label: 'chacho', chacho: 'chacho' },
      { label: 'loco', loco: 'loco' },
    ];
    const obj = arrayValuesByKey(array, 'label');
    expect(obj).toEqual(['chacho', 'loco']);
  });

  test('fn: arrayValuesByKey( arr, key, T, V )', () => {
    interface Custom {
      label: string;
      name: string;
    }
    type Label = 'chacho' | 'loco';
    const array: Custom[] = [
      { label: 'chacho', name: 'chacho' },
      { label: 'loco', name: 'loco' },
    ];
    const obj = arrayValuesByKey<Custom, Label>(array, 'label');
    expect(obj).toEqual(['chacho', 'loco']);
  });

  test('fn: arrayValuesByKey( arr, key missed )', () => {
    const array = [
      { label: 'chacho', chacho: true },
      { label: 'loco', loco: 'loco' },
    ];
    const obj = arrayValuesByKey(array, 'chacho');
    expect(obj).toEqual([true, undefined]);
  });

  test('fn: arrayValuesByKey( arr, key missed, strict )', () => {
    const array = [
      { label: 'chacho', chacho: true },
      { label: 'loco', loco: 'loco' },
    ];
    const obj = arrayValuesByKey(array, 'chacho', true);
    expect(obj).toEqual([true]);
  });

  test('fn: arrayValuesByKey( arr-arr, key )', () => {
    const array = [
      ['key1', 'value1'],
      ['key2', 'value2'],
    ];
    const obj = arrayValuesByKey(array, 0);
    expect(obj).toEqual(['key1', 'key2']);
  });
});
