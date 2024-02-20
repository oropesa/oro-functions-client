import { arraySortByKey } from './array-sort-by-key';

describe('fn: arraySortByKey', () => {
  test('fn: arraySortByKey( arr, key )', () => {
    const array = [{ label: 'ccc', chacho: 'chacho' }, { label: 'aaa' }, { label: 'bbb', chacho: 'zoquete' }];
    const obj = arraySortByKey(array, 'label');
    expect(obj).toEqual([{ label: 'aaa' }, { label: 'bbb', chacho: 'zoquete' }, { label: 'ccc', chacho: 'chacho' }]);
  });

  test('fn: arraySortByKey( arr, key missed )', () => {
    const array = [{ label: 'ccc', chacho: 'chacho' }, { label: 'aaa' }, { label: 'bbb', chacho: 'zoquete' }];
    const obj = arraySortByKey(array, 'chacho');
    expect(obj).toEqual([{ label: 'ccc', chacho: 'chacho' }, { label: 'bbb', chacho: 'zoquete' }, { label: 'aaa' }]);
  });

  test('fn: arraySortByKey( arr, key missed, sortArray )', () => {
    const array = [{ label: 'ccc', chacho: 'chacho' }, { label: 'aaa' }, { label: 'bbb', chacho: 'zoquete' }];
    const obj = arraySortByKey(array, 'chacho', ['zoquete', 'chacho']);
    expect(obj).toEqual([{ label: 'bbb', chacho: 'zoquete' }, { label: 'ccc', chacho: 'chacho' }, { label: 'aaa' }]);
  });

  test('fn: arraySortByKey( arr, key missed, sortArray missed )', () => {
    const array = [{ label: 'ccc', chacho: 'chacho' }, { label: 'aaa' }, { label: 'bbb', chacho: 'zoquete' }];
    const obj = arraySortByKey(array, 'chacho', ['zoquete']);
    expect(obj).toEqual([{ label: 'bbb', chacho: 'zoquete' }, { label: 'ccc', chacho: 'chacho' }, { label: 'aaa' }]);
  });

  test('fn: arraySortByKey( arr, key missed, sortArray empty )', () => {
    const array = [{ label: 'ccc', chacho: 'chacho' }, { label: 'aaa' }, { label: 'bbb', chacho: 'zoquete' }];
    const obj = arraySortByKey(array, 'chacho', []);
    expect(obj).toEqual([{ label: 'ccc', chacho: 'chacho' }, { label: 'bbb', chacho: 'zoquete' }, { label: 'aaa' }]);
  });

  test('fn: arraySortByKey( arr, key ) moved', () => {
    const array = [
      { label: 'ccc' },
      { label: 'aaa' },
      { label: 'aaa', chacho: 'aaa' },
      { label: 'bbb' },
      { label: 'bbb' },
    ];
    const obj = arraySortByKey(array, 'label', []);
    expect(obj).toEqual([
      { label: 'aaa' },
      { label: 'aaa', chacho: 'aaa' },
      { label: 'bbb' },
      { label: 'bbb' },
      { label: 'ccc' },
    ]);
  });

  test('fn: arraySortByKey( arr, key missed ) moved', () => {
    const array = [
      { label: 'ccc', chacho: 'ccc' },
      { label: 'ccc', chacho: 'ccc' },
      { label: 'aaa' },
      { label: 'aaa', chacho: 'aaa' },
      { label: 'bbb' },
      { label: 'bbb' },
    ];
    const obj = arraySortByKey(array, 'chacho');
    expect(obj).toEqual([
      { label: 'aaa', chacho: 'aaa' },
      { label: 'ccc', chacho: 'ccc' },
      { label: 'ccc', chacho: 'ccc' },
      { label: 'aaa' },
      { label: 'bbb' },
      { label: 'bbb' },
    ]);
  });

  test('fn: arraySortByKey( arr, key, sortArray ) moved', () => {
    const array = [
      { label: 'ccc' },
      { label: 'aaa' },
      { label: 'bbb' },
      { label: 'ccc' },
      { label: 'aaa' },
      { label: 'bbb' },
    ];
    const obj = arraySortByKey(array, 'label', ['bbb', 'ccc']);
    expect(obj).toEqual([
      { label: 'bbb' },
      { label: 'bbb' },
      { label: 'ccc' },
      { label: 'ccc' },
      { label: 'aaa' },
      { label: 'aaa' },
    ]);
  });

  test('fn: arraySortByKey( arr, key, sortArray ) moved 2', () => {
    const array = [
      { label: 'ccc' },
      { label: 'ccc' },
      { label: 'aaa' },
      { label: 'aaa' },
      { label: 'bbb' },
      { label: 'bbb' },
    ];
    const obj = arraySortByKey(array, 'label', ['bbb', 'ccc', 'aaa']);
    expect(obj).toEqual([
      { label: 'bbb' },
      { label: 'bbb' },
      { label: 'ccc' },
      { label: 'ccc' },
      { label: 'aaa' },
      { label: 'aaa' },
    ]);
  });
});
