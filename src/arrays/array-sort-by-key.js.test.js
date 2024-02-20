import { arraySortByKey } from './array-sort-by-key';

describe('fn: arraySortByKey', () => {
  test('fn: arraySortByKey( undefined )', () => {
    expect(arraySortByKey()).toEqual([]);
  });

  test('fn: arraySortByKey( str )', () => {
    expect(arraySortByKey('chacho')).toEqual([]);
  });

  test('fn: arraySortByKey( arr, key boolean )', () => {
    const array = [{ label: 'ccc', chacho: 'chacho' }, { label: 'aaa' }, { label: 'bbb', chacho: 'zoquete' }];
    const obj = arraySortByKey(array, true);
    expect(obj).toEqual([{ label: 'ccc', chacho: 'chacho' }, { label: 'aaa' }, { label: 'bbb', chacho: 'zoquete' }]);
  });

  test('fn: arraySortByKey( arr, key as number, sortArray )', () => {
    const array = [{ 1: 'ccc', chacho: 'chacho' }, { 1: 'aaa' }, { 1: 'bbb', chacho: 'zoquete' }];
    const obj = arraySortByKey(array, 1, ['bbb']);
    expect(obj).toEqual([{ 1: 'bbb', chacho: 'zoquete' }, { 1: 'aaa' }, { 1: 'ccc', chacho: 'chacho' }]);
  });

  test('fn: arraySortByKey( arr w undef, key missed )', () => {
    const array = [
      { label: 'ccc', chacho: 'chacho' },
      undefined,
      { label: 'aaa' },
      { label: 'bbb', chacho: 'zoquete' },
    ];
    const obj = arraySortByKey(array, 'chacho');
    expect(obj).toEqual([{ label: 'ccc', chacho: 'chacho' }, { label: 'bbb', chacho: 'zoquete' }, { label: 'aaa' }]);
  });

  test('fn: arraySortByKey( arr w undef, key missed, sortArray )', () => {
    const array = [
      { label: 'ccc', chacho: 'chacho' },
      undefined,
      { label: 'aaa' },
      { label: 'bbb', chacho: 'zoquete' },
    ];
    const obj = arraySortByKey(array, 'chacho', ['zoquete', 'chacho']);
    expect(obj).toEqual([{ label: 'bbb', chacho: 'zoquete' }, { label: 'ccc', chacho: 'chacho' }, { label: 'aaa' }]);
  });

  test('fn: arraySortByKey( arr w undef, key missed, sortArray missed )', () => {
    const array = [
      { label: 'ccc', chacho: 'chacho' },
      undefined,
      { label: 'aaa' },
      { label: 'bbb', chacho: 'zoquete' },
    ];
    const obj = arraySortByKey(array, 'chacho', ['zoquete']);
    expect(obj).toEqual([{ label: 'bbb', chacho: 'zoquete' }, { label: 'ccc', chacho: 'chacho' }, { label: 'aaa' }]);
  });

  test('fn: arraySortByKey( arr w undef, key missed, sortArray empty )', () => {
    const array = [
      { label: 'ccc', chacho: 'chacho' },
      undefined,
      { label: 'aaa' },
      { label: 'bbb', chacho: 'zoquete' },
    ];
    const obj = arraySortByKey(array, 'chacho', []);
    expect(obj).toEqual([{ label: 'ccc', chacho: 'chacho' }, { label: 'bbb', chacho: 'zoquete' }, { label: 'aaa' }]);
  });
});
