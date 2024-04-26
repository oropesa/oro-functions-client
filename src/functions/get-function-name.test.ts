import { getFunctionName } from './get-function-name';

function scopedFunction() {
  return getFunctionName();
}

// eslint-disable-next-line func-style
const variableScopedFunction = function () {
  return getFunctionName();
};

describe('fn: getFunctionName', () => {
  class CustomClass {
    public static staticClassTest() {
      return getFunctionName();
    }

    public classTest() {
      return getFunctionName();
    }
  }

  const customClass = new CustomClass();

  const customClassTest = customClass.classTest;

  const variableFunction = variableScopedFunction;

  (global as any).globalFunction = () => {
    return getFunctionName();
  };

  test('fn: getFunctionName() in static-fn', async () => {
    expect(CustomClass.staticClassTest()).toBe('staticClassTest');
  });

  test('fn: getFunctionName( static-fn )', async () => {
    expect(getFunctionName(CustomClass.staticClassTest)).toBe('staticClassTest');
  });

  test('fn: getFunctionName() in class-fn', async () => {
    expect(customClass.classTest()).toBe('classTest');
  });

  test('fn: getFunctionName( class-fn variable )', async () => {
    expect(getFunctionName(customClassTest)).toBe('classTest');
  });

  test('fn: getFunctionName( var-fn )', async () => {
    expect(getFunctionName(variableScopedFunction)).toBe('variableScopedFunction');
  });

  test('fn: getFunctionName( var-fn variable )', async () => {
    expect(getFunctionName(variableFunction)).toBe('variableScopedFunction');
  });

  test('fn: getFunctionName( scope-fn )', async () => {
    expect(getFunctionName(scopedFunction)).toBe('scopedFunction');
  });

  test('fn: getFunctionName( global-fn )', async () => {
    expect(getFunctionName(setTimeout)).toBe('setTimeout');
  });

  test('fn: getFunctionName( global-fn string )', async () => {
    expect(getFunctionName('setTimeout')).toBe('setTimeout');
  });

  test('fn: getFunctionName( unknown global-fn string )', async () => {
    expect(getFunctionName('unknownFunctionn')).toBe('');
  });

  test('fn: getFunctionName( window-fn string )', async () => {
    (global as any).window = {
      windowsFunction: () => {},
    };

    expect(getFunctionName('windowsFunction')).toBe('windowsFunction');
  });

  test('fn: getFunctionName( window-fn string not-found )', async () => {
    (global as any).window = {
      windowsFunction: () => {},
    };

    expect(getFunctionName('windowsAnotherFunction')).toBe('');
  });

  test('fn: getFunctionName() current', async () => {
    expect(getFunctionName()).toBe('Promise.then.completed');
  });

  test('fn: getFunctionName() old-browsers', async () => {
    jest.spyOn(Error, 'captureStackTrace').mockImplementation(() => {});
    expect(getFunctionName()).toBe('');
  });

  test('fn: getFunctionName() old-browsers alternative', async () => {
    jest.spyOn(Error, 'captureStackTrace').mockImplementation((obj: Record<string, any>) => {
      obj.stack = '';
    });
    expect(getFunctionName()).toBe('');
  });
});
