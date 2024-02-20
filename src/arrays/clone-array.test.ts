import { cloneArray } from './clone-array';

describe('fn: cloneArray', () => {
  test('fn: cloneArray( str )', () => {
    expect(cloneArray('chacho')).toEqual([]);
  });

  test('fn: cloneArray( arr )', () => {
    const array1 = [{ chacho: true }, { loco: false }];
    const array2 = cloneArray(array1);
    expect(array1).toEqual(array2);

    array2[1].loco = true;
    expect(array1[1].loco).toBe(false);
    expect(array2[1].loco).toBe(true);
  });
});
