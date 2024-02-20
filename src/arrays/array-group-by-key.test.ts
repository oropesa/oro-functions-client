import { arrayGroupByKey } from './array-group-by-key';

describe('fn: arrayGroupByKey', () => {
  interface Custom {
    label: string;
    chacho?: string;
    loco?: string;
  }

  test('fn: arrayGroupByKey( arr, key )', () => {
    const array: Custom[] = [
      { label: 'chacho', chacho: 'chacho' },
      { label: 'loco', loco: 'loco' },
      { label: 'chacho', chacho: 'tio' },
    ];
    const obj = arrayGroupByKey(array, 'label');
    expect(obj).toEqual({
      chacho: [
        { label: 'chacho', chacho: 'chacho' },
        { label: 'chacho', chacho: 'tio' },
      ],
      loco: [{ label: 'loco', loco: 'loco' }],
    });
  });

  test('fn: arrayGroupByKey( arr, key missed )', () => {
    const array: Custom[] = [
      { label: 'chacho', chacho: 'chacho' },
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

  test('fn: arrayGroupByKey( arr, key missed, strict )', () => {
    const array = [
      { label: 'chacho', chacho: 'chacho' },
      { label: 'loco', loco: 'loco' },
      { label: 'chacho', chacho: 'tio' },
    ];
    const obj = arrayGroupByKey<Custom>(array, 'chacho', true);
    expect(obj).toEqual({
      chacho: [{ label: 'chacho', chacho: 'chacho' }],
      tio: [{ label: 'chacho', chacho: 'tio' }],
    });
  });

  test('fn: arrayGroupByKey( arr, key missed, strict, T )', () => {
    const array: Custom[] = [
      { label: 'chacho', chacho: 'chacho' },
      { label: 'loco', chacho: 'loco' },
      { label: 'tio', chacho: 'tio' },
    ];
    const obj = arrayGroupByKey(array, 'chacho', true);
    expect(obj).toEqual({
      chacho: [{ label: 'chacho', chacho: 'chacho' }],
      loco: [{ label: 'loco', chacho: 'loco' }],
      tio: [{ label: 'tio', chacho: 'tio' }],
    });
  });
});
