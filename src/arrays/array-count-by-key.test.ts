import { arrayCountByKey } from './array-count-by-key';

describe('fn: arrayCountByKey', () => {
  interface Custom {
    label: string;
    chacho?: string;
    loco?: string;
  }

  test('fn: arrayCountByKey( arr empty, key )', () => {
    const obj = arrayCountByKey([], 'label');
    expect(obj).toEqual({});
  });

  test('fn: arrayCountByKey( arr, key )', () => {
    const array = [
      { label: 'chacho', chacho: 'chacho' },
      { label: 'loco', loco: 'loco' },
      { label: 'chacho', chacho: 'tio' },
    ];
    const obj = arrayCountByKey(array, 'label');
    expect(obj).toEqual({ chacho: 2, loco: 1 });
  });

  test('fn: arrayCountByKey( arr, key missed )', () => {
    const array = [
      { label: 'chacho', chacho: 'chacho' },
      { label: 'loco', loco: 'loco' },
      { label: 'chacho', chacho: 'tio' },
    ];
    const obj = arrayCountByKey<Custom>(array, 'chacho');
    expect(obj).toEqual({ chacho: 1, undefined: 1, tio: 1 });
  });

  test('fn: arrayCountByKey( arr, key missed, strict )', () => {
    const array = [
      { label: 'chacho', chacho: 'chacho' },
      { label: 'loco', loco: 'loco' },
      { label: 'chacho', chacho: 'tio' },
    ];
    const obj = arrayCountByKey(array, 'chacho', true);
    expect(obj).toEqual({ chacho: 1, tio: 1 });
  });
});
