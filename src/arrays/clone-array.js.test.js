import { cloneArray } from './clone-array';

describe('fn: cloneArray', () => {
  test('fn: cloneArray( undefined )', () => {
    expect(cloneArray()).toEqual([]);
  });
});
