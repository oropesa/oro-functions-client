import { mergeObjectsDeep } from './merge-objects-deep';

describe('fn: mergeObjectsDeep', () => {
  test('fn: mergeObjectsDeep( undefined )', () => {
    expect(mergeObjectsDeep()).toEqual({});
  });

  test('fn: mergeObjectsDeep( obj, str )', () => {
    const obj = { chacho: true, loco: false };
    expect(mergeObjectsDeep(obj, 'chacho')).toEqual(obj);
  });

  test('fn: mergeObjectsDeep( str, obj )', () => {
    const obj = { chacho: true, loco: false };
    expect(mergeObjectsDeep('chacho', obj)).toEqual(obj);
  });
});
