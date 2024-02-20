import { arrayGetUnique } from './array-get-unique';

describe('fn: arrayGetUnique', () => {
  test('fn: arrayGetUnique( undefined )', () => {
    expect(arrayGetUnique()).toEqual([]);
  });

  test('fn: arrayGetUnique( str )', () => {
    expect(arrayGetUnique('chacho')).toEqual([]);
  });
});
