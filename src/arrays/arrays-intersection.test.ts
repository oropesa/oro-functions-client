import { arraysIntersection } from './arrays-intersection';

describe('fn: arraysIntersection', () => {
  test('fn: arraysIntersection( undefined )', () => {
    expect(arraysIntersection()).toEqual([]);
  });

  test('fn: arraysIntersection( arr empty, arr )', () => {
    expect(arraysIntersection([], [1, 2, 3])).toEqual([]);
  });

  test('fn: arraysIntersection( arr )', () => {
    expect(arraysIntersection([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test('fn: arraysIntersection( arr1, arr2 )', () => {
    expect(arraysIntersection([1, 2, 3], [2, 3, 4])).toEqual([2, 3]);
  });

  test('fn: arraysIntersection( arr1, arr2, arr3, arr4 )', () => {
    expect(arraysIntersection([1, 2, 3], [2, 3, 4], [1, 3], [1, 2, 3])).toEqual([3]);
  });
});
