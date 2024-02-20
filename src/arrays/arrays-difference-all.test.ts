import { arraysDifferenceAll } from './arrays-difference-all';

describe('fn: arraysDifferenceAll', () => {
  test('fn: arraysDifferenceAll( undefined )', () => {
    expect(arraysDifferenceAll()).toEqual([]);
  });

  test('fn: arraysDifferenceAll( arr )', () => {
    expect(arraysDifferenceAll([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test('fn: arraysDifferenceAll( arr1, arr2 )', () => {
    expect(arraysDifferenceAll([1, 2, 3], [2, 3, 4])).toEqual([1, 4]);
  });

  test('fn: arraysDifferenceAll( arr1, arr2, arr3, arr4 )', () => {
    expect(arraysDifferenceAll([1, 2, 3], [2, 3, 4], [2, 3], [1])).toEqual([4]);
  });

  test('fn: arraysDifference( arr1, arr2, empty, arr4 )', () => {
    expect(arraysDifferenceAll([1, 2, 3], [2, 3, 4], [], [4])).toEqual([1]);
  });
});
