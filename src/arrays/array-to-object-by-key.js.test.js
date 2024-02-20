import { arrayToObjectByKey } from './array-to-object-by-key';

describe('fn: arrayToObjectByKey', () => {
  test('fn: arrayToObjectByKey( undefined )', () => {
    expect(arrayToObjectByKey()).toEqual({});
  });

  test('fn: arrayToObjectByKey( str )', () => {
    expect(arrayToObjectByKey('chacho')).toEqual({});
  });

  test('fn: arrayToObjectByKey( arr, key boolean )', () => {
    const array = [{ label: 'chacho', chacho: 'chacho' }];
    const obj = arrayToObjectByKey(array, true);
    expect(obj).toEqual({});
  });

  test('fn: arrayToObjectByKey( arr w undef, key missed )', () => {
    const array = [{ label: 'chacho', chacho: true }, undefined, { label: 'loco', loco: 'loco' }];
    const obj = arrayToObjectByKey(array, 'chacho');
    expect(obj).toEqual({
      true: { label: 'chacho', chacho: true },
      undefined: { label: 'loco', loco: 'loco' },
    });
  });

  test('fn: arrayToObjectByKey( arr w undefin, key missed, strict )', () => {
    const array = [{ label: 'chacho', chacho: true }, undefined, { label: 'loco', loco: 'loco' }];
    const obj = arrayToObjectByKey(array, 'chacho', true);
    expect(obj).toEqual({ true: { label: 'chacho', chacho: true } });
  });
});
