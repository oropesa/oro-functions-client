import { issetGet } from './isset-get';

describe('fn: issetGet', () => {
  test('fn: issetGet( arr )', () => {
    // expect( issetGet( [] ) ).toBe( null );
    expect(issetGet([], 'param')).toBe(undefined);
    expect(issetGet([], 'param', 'test')).toBe('test');
    expect(issetGet([], 'param', 'test', false)).toBe('test');

    // expect( issetGet( [ 0, 1, 2 ] ) ).toBe( null );
    expect(issetGet([0, 1, 2], 'param')).toBe(undefined);
    expect(issetGet([0, 1, 2], 'param', 'test')).toBe('test');
    expect(issetGet([0, 1, 2], 'param', 'test', false)).toBe('test');
    expect(issetGet([0, 1, 2], 0, 'test')).toBe(0);
    expect(issetGet([0, 1, 2], 1, 'test')).toBe(1);
    expect(issetGet([0, 1, 2], 0, 'test', false)).toBe('test');

    const valueArraySimple = issetGet<string>(['a', 'b', ''], 3);
    expect(valueArraySimple).toBe(undefined);

    const valueArraySimple2 = issetGet<string>(['a', 'b', ''], 3, 'test');
    expect(valueArraySimple2).toBe('test');

    const valueArray = issetGet(['a', 'b', ''], 1, 'test');
    expect(valueArray).toBe('b');

    const valueArray1 = issetGet<string>(['a', 'b', ''], 1, 'test');
    expect(valueArray1).toBe('b');

    const valueArrayString = issetGet<string, string[]>(['a', 'b', ''], 2, 'test');
    expect(valueArrayString).toBe('');

    const valueArrayFalsy = issetGet<string, string[], number>(['a', 'b', ''], 2, 'test', false);
    expect(valueArrayFalsy).toBe('test');

    const valueArrayTruly = issetGet<string, string[], number>(['a', 'b', ''], 2, 'test', true);
    expect(valueArrayTruly).toBe('');
  });

  test('fn: issetGet( obj )', () => {
    // expect( issetGet( {} ) ).toBe( null );
    expect(issetGet({}, 'param')).toBe(undefined);
    expect(issetGet({}, 'param', 'test')).toBe('test');
    expect(issetGet({}, 'param', 'test', false)).toBe('test');

    // expect( issetGet( { chacho: 'loco', tio: '' } ) ).toBe( null );
    expect(issetGet({ chacho: 'loco', tio: '' }, 'param')).toBe(undefined);
    expect(issetGet({ chacho: 'loco', tio: '' }, 'param', 'test')).toBe('test');
    expect(issetGet({ chacho: 'loco', tio: '' }, 'param', 'test', false)).toBe('test');
    expect(issetGet({ chacho: 'loco', tio: '' }, 'chacho', 'test')).toBe('loco');
    expect(issetGet({ chacho: 'loco', tio: '' }, 'tio', 'test')).toBe('');
    expect(issetGet({ chacho: 'loco', tio: '' }, 'tio', 'test', false)).toBe('test');

    interface NumberObject {
      chacho: number;
      tio: number;
    }
    interface StringObject {
      chacho: string;
      tio: string;
    }

    const valueObjSimple = issetGet<string>({ chacho: 'loco', tio: '' }, 'foo');
    expect(valueObjSimple).toBe(undefined);

    const valueObjSimple2 = issetGet<string>({ chacho: 'loco', tio: '' }, 'foo', 'test');
    expect(valueObjSimple2).toBe('test');

    const valueObj = issetGet({ chacho: 'loco', tio: '' }, 'chacho', 'test');
    expect(valueObj).toBe('loco');

    const valueObj1 = issetGet<string>({ chacho: 'loco', tio: '' }, 'chacho', 'test');
    expect(valueObj1).toBe('loco');

    const valueObjNumber = issetGet<number, NumberObject>({ chacho: 5, tio: 7 }, 'chacho', 9);
    expect(valueObjNumber).toBe(5);

    const valueObjString = issetGet<string, StringObject>({ chacho: 'loco', tio: '' }, 'tio', 'test');
    expect(valueObjString).toBe('');

    const valueObjFalsy = issetGet<string, StringObject, string>({ chacho: 'loco', tio: '' }, 'tio', 'test', false);
    expect(valueObjFalsy).toBe('test');

    const valueObjTruly = issetGet<string, StringObject, keyof StringObject>(
      { chacho: 'loco', tio: '' },
      'tio',
      'test',
      true,
    );
    expect(valueObjTruly).toBe('');
  });
});
