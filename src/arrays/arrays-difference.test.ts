import { arraysDifference } from './arrays-difference';

describe('fn: arraysDifference', () => {
  test('fn: arraysDifference( undefined )', () => {
    expect(arraysDifference()).toEqual([]);
  });

  test('fn: arraysDifference( arr )', () => {
    expect(arraysDifference([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test('fn: arraysDifference( arr1, arr2 )', () => {
    expect(arraysDifference([1, 2, 3], [2, 3, 4])).toEqual([1]);
  });

  test('fn: arraysDifference( arr1, arr2, arr3, arr4 )', () => {
    expect(arraysDifference([1, 2, 3], [2, 3, 4], [2, 3], [1])).toEqual([]);
  });

  test('fn: arraysDifference( arr1, arr2, arr3, arr4 ) 2', () => {
    expect(arraysDifference([1, 2, 3], [2, 3, 4], [2, 3], [4])).toEqual([1]);
  });

  test('fn: arraysDifference( arr1, arr2, empty, arr4 )', () => {
    expect(arraysDifference([1, 2, 3], [2, 3, 4], [], [4])).toEqual([1]);
  });
});
