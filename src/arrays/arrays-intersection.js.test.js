import { arraysIntersection } from './arrays-intersection';

describe('fn: arraysIntersection', () => {
  test('fn: arraysIntersection( not-array )', () => {
    expect(arraysIntersection(true)).toEqual([]);
  });

  test('fn: arraysIntersection( not-array second value )', () => {
    expect(arraysIntersection(true, true)).toEqual([]);
  });
});
