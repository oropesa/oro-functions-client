import { arrayGetUnique } from './array-get-unique';

describe('fn: arrayGetUnique', () => {
  test('fn: arrayGetUnique( arr )', () => {
    const array = [2, 1, 4, 4, 2, 1, 3];
    const obj = arrayGetUnique(array);
    expect(obj).toEqual([2, 1, 4, 3]);
  });

  test('fn: arrayGetUnique( arr w obj )', () => {
    const array = [
      { chacho: true },
      [1, 2],
      { chacho: false },
      { chacho: true },
      [1, 2],
      [1, 3],
      { chacho: true, tio: false },
    ];
    const obj = arrayGetUnique(array);
    expect(obj).toEqual([{ chacho: true }, [1, 2], { chacho: false }, [1, 3], { chacho: true, tio: false }]);
  });

  test('fn: arrayGetUnique( arr w obj 2 )', () => {
    interface Custom {
      chacho: number;
    }

    const array = [{ chacho: 2 }, { chacho: 4 }, { chacho: 3 }, { chacho: 1 }, { chacho: 4 }, { chacho: 2 }];
    const obj = arrayGetUnique<Custom>(array);
    expect(obj).toEqual([{ chacho: 2 }, { chacho: 4 }, { chacho: 3 }, { chacho: 1 }]);
  });
});
