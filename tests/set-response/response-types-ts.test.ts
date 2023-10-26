import Ofn from '../../dist';

describe('fn: setResponseOK', () => {
  test('fn: setResponseOK() type basic', () => {
    const response = Ofn.setResponseOK();

    expect(response.status).toBe(true);
    // expect(response.msg).toBe('chacho');
    // expect(response.loco).toBe('tio');
  });

  test('fn: setResponseOK() type simple', () => {
    const response = Ofn.setResponseOK('chacho');

    expect(response.status).toBe(true);
    expect(response.msg).toBe('chacho');
    // expect(response.loco).toBe('tio');
  });

  test('fn: setResponseOK() type object', () => {
    const response = Ofn.setResponseOK({ loco: 'tio' });

    expect(response.status).toBe(true);
    // expect(response.msg).toBe('chacho');
    expect(response.loco).toBe('tio');
  });

  test('fn: setResponseOK() type object 2', () => {
    const response = Ofn.setResponseOK(undefined, { loco: 'tio' });

    expect(response.status).toBe(true);
    // expect(response.msg).toBe('chacho');
    expect(response.loco).toBe('tio');
  });

  test('fn: setResponseOK() type object 3', () => {
    const response = Ofn.setResponseOK({ foo: 'bar' }, { loco: 'tio' });

    expect(response.status).toBe(true);
    // expect(response.msg).toBe('chacho');
    expect(response.loco).toBe('tio');
    expect(response.foo).toBe('bar');
  });

  test('fn: setResponseOK() type object simple', () => {
    const response = Ofn.setResponseOK('chacho', { loco: 'tio' });

    expect(response.status).toBe(true);
    expect(response.msg).toBe('chacho');
    expect(response.loco).toBe('tio');
  });
});

describe('fn: setResponseKO (object)', () => {
  test('fn: setResponseKO() type basic', () => {
    const response = Ofn.setResponseKO();

    expect(response.status).toBe(false);
    // expect(response.tryAgain).toBe(true);
    // expect(response.error.msg).toBe('chacho');
    // expect(response.error.loco).toBe('tio');
  });

  test('fn: setResponseKO() type basic 3', () => {
    const response = Ofn.setResponseKO(undefined, undefined, undefined, false);

    expect(response.status).toBe(false);
    // expect(response.tryAgain).toBe(true);
    // expect(response.error.msg).toBe('chacho');
    // expect(response.error.loco).toBe('tio');
  });

  test('fn: setResponseKO() type basic again', () => {
    const response = Ofn.setResponseKO(undefined, undefined, true);

    expect(response.status).toBe(false);
    expect(response.tryAgain).toBe(true);
    // expect(response.error.msg).toBe('chacho');
    // expect(response.error.loco).toBe('tio');
  });

  test('fn: setResponseKO() type basic again 2', () => {
    const response = Ofn.setResponseKO(undefined, undefined, true, false);

    expect(response.status).toBe(false);
    expect(response.tryAgain).toBe(true);
    // expect(response.error.msg).toBe('chacho');
    // expect(response.error.loco).toBe('tio');
  });

  test('fn: setResponseKO() type simple', () => {
    const response = Ofn.setResponseKO('chacho');

    expect(response.status).toBe(false);
    // expect(response.tryAgain).toBe(true);
    expect(response.error.msg).toBe('chacho');
    // expect(response.error.loco).toBe('tio');
  });

  test('fn: setResponseKO() type simple 3', () => {
    const response = Ofn.setResponseKO('chacho', undefined, false, false);

    expect(response.status).toBe(false);
    // expect(response.tryAgain).toBe(true);
    expect(response.error.msg).toBe('chacho');
    // expect(response.error.loco).toBe('tio');
  });

  test('fn: setResponseKO() type simple again', () => {
    const response = Ofn.setResponseKO('chacho', undefined, true);

    expect(response.status).toBe(false);
    expect(response.tryAgain).toBe(true);
    expect(response.error.msg).toBe('chacho');
    // expect(response.error.loco).toBe('tio');
  });

  test('fn: setResponseKO() type simple again 2', () => {
    const response = Ofn.setResponseKO('chacho', undefined, true, false);

    expect(response.status).toBe(false);
    expect(response.tryAgain).toBe(true);
    expect(response.error.msg).toBe('chacho');
    // expect(response.error.loco).toBe('tio');
  });

  test('fn: setResponseKO() type object', () => {
    const response = Ofn.setResponseKO({ loco: 'tio' });

    expect(response.status).toBe(false);
    // expect(response.tryAgain).toBe(true);
    // expect(response.error.msg).toBe('chacho');
    expect(response.error.loco).toBe('tio');
  });

  test('fn: setResponseKO() type object 2', () => {
    const response = Ofn.setResponseKO(undefined, { loco: 'tio' });

    expect(response.status).toBe(false);
    // expect(response.tryAgain).toBe(true);
    // expect(response.error.msg).toBe('chacho');
    expect(response.error.loco).toBe('tio');
  });

  test('fn: setResponseKO() type object 3', () => {
    const response = Ofn.setResponseKO({ foo: 'bar' }, { loco: 'tio' });

    expect(response.status).toBe(false);
    // expect(response.tryAgain).toBe(true);
    // expect(response.error.msg).toBe('chacho');
    expect(response.error.loco).toBe('tio');
    expect(response.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type object 4', () => {
    const response = Ofn.setResponseKO({ loco: 'tio' }, undefined, false);

    expect(response.status).toBe(false);
    // expect(response.tryAgain).toBe(true);
    // expect(response.error.msg).toBe('chacho');
    expect(response.error.loco).toBe('tio');
  });

  test('fn: setResponseKO() type object 5', () => {
    const response = Ofn.setResponseKO(undefined, { loco: 'tio' }, false);

    expect(response.status).toBe(false);
    // expect(response.tryAgain).toBe(true);
    // expect(response.error.msg).toBe('chacho');
    expect(response.error.loco).toBe('tio');
  });

  test('fn: setResponseKO() type object 6', () => {
    const response = Ofn.setResponseKO({ foo: 'bar' }, { loco: 'tio' }, false);

    expect(response.status).toBe(false);
    // expect(response.tryAgain).toBe(true);
    // expect(response.error.msg).toBe('chacho');
    expect(response.error.loco).toBe('tio');
  });

  test('fn: setResponseKO() type object again', () => {
    const response = Ofn.setResponseKO({ loco: 'tio' }, undefined, true);

    expect(response.status).toBe(false);
    expect(response.tryAgain).toBe(true);
    // expect(response.error.msg).toBe('chacho');
    expect(response.error.loco).toBe('tio');
  });

  test('fn: setResponseKO() type object again 2', () => {
    const response = Ofn.setResponseKO(undefined, { loco: 'tio' }, true);

    expect(response.status).toBe(false);
    expect(response.tryAgain).toBe(true);
    // expect(response.error.msg).toBe('chacho');
    expect(response.error.loco).toBe('tio');
  });

  test('fn: setResponseKO() type object again 3', () => {
    const response = Ofn.setResponseKO({ foo: 'bar' }, { loco: 'tio' }, true);

    expect(response.status).toBe(false);
    expect(response.tryAgain).toBe(true);
    // expect(response.error.msg).toBe('chacho');
    expect(response.error.loco).toBe('tio');
    expect(response.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type object again 4', () => {
    const response = Ofn.setResponseKO({ loco: 'tio' }, undefined, true, false);

    expect(response.status).toBe(false);
    expect(response.tryAgain).toBe(true);
    // expect(response.error.msg).toBe('chacho');
    expect(response.error.loco).toBe('tio');
  });

  test('fn: setResponseKO() type object again 5', () => {
    const response = Ofn.setResponseKO(undefined, { loco: 'tio' }, true, false);

    expect(response.status).toBe(false);
    expect(response.tryAgain).toBe(true);
    // expect(response.error.msg).toBe('chacho');
    expect(response.error.loco).toBe('tio');
  });

  test('fn: setResponseKO() type object again 6', () => {
    const response = Ofn.setResponseKO({ foo: 'bar' }, { loco: 'tio' }, true, false);

    expect(response.status).toBe(false);
    expect(response.tryAgain).toBe(true);
    // expect(response.error.msg).toBe('chacho');
    expect(response.error.loco).toBe('tio');
    expect(response.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type object simple', () => {
    const response = Ofn.setResponseKO('chacho', { loco: 'tio' });

    expect(response.status).toBe(false);
    // expect(response.tryAgain).toBe(true);
    expect(response.error.msg).toBe('chacho');
    expect(response.error.loco).toBe('tio');
  });

  test('fn: setResponseKO() type object simple 2', () => {
    const response = Ofn.setResponseKO('chacho', { loco: 'tio' }, undefined, false);

    expect(response.status).toBe(false);
    // expect(response.tryAgain).toBe(true);
    expect(response.error.msg).toBe('chacho');
    expect(response.error.loco).toBe('tio');
  });

  test('fn: setResponseKO() type object simple again', () => {
    const response = Ofn.setResponseKO('chacho', { loco: 'tio' }, true);

    expect(response.status).toBe(false);
    expect(response.tryAgain).toBe(true);
    expect(response.error.msg).toBe('chacho');
    expect(response.error.loco).toBe('tio');
  });

  test('fn: setResponseKO() type object simple again 2', () => {
    const response = Ofn.setResponseKO('chacho', { loco: 'tio' }, true, false);

    expect(response.status).toBe(false);
    expect(response.tryAgain).toBe(true);
    expect(response.error.msg).toBe('chacho');
    expect(response.error.loco).toBe('tio');
  });
});

describe('fn: setResponseKO (error)', () => {
  test('fn: setResponseKO() type error basic', () => {
    const error = Ofn.setResponseKO(undefined, undefined, undefined, true);

    expect(Ofn.type(error)).toBe('error');
    expect(error.name).toBe('responseError');
    expect(error.responseError.status).toBe(false);
    // expect(error.responseError.tryAgain).toBe(true);
    // expect(error.responseError.error.msg).toBe('chacho');
    // expect(error.responseError.error.loco).toBe('tio');
  });

  test('fn: setResponseKO() type error basic again', () => {
    const error = Ofn.setResponseKO(undefined, undefined, true, true);

    expect(Ofn.type(error)).toBe('error');
    expect(error.name).toBe('responseError');
    expect(error.responseError.status).toBe(false);
    expect(error.responseError.tryAgain).toBe(true);
    // expect(error.responseError.error.msg).toBe('chacho');
    // expect(error.responseError.error.loco).toBe('tio');
  });

  test('fn: setResponseKO() type error simple', () => {
    const error = Ofn.setResponseKO('chacho', undefined, undefined, true);

    expect(Ofn.type(error)).toBe('error');
    expect(error.name).toBe('responseError');
    expect(error.responseError.status).toBe(false);
    // expect(error.responseError.tryAgain).toBe(true);
    expect(error.responseError.error.msg).toBe('chacho');
    // expect(error.responseError.error.loco).toBe('tio');
  });

  test('fn: setResponseKO() type error simple again', () => {
    const error = Ofn.setResponseKO('chacho', undefined, true, true);

    expect(Ofn.type(error)).toBe('error');
    expect(error.name).toBe('responseError');
    expect(error.responseError.status).toBe(false);
    expect(error.responseError.tryAgain).toBe(true);
    expect(error.responseError.error.msg).toBe('chacho');
    // expect(error.responseError.error.loco).toBe('tio');
  });

  test('fn: setResponseKO() type error object', () => {
    const error = Ofn.setResponseKO({ loco: 'tio' }, undefined, undefined, true);

    expect(Ofn.type(error)).toBe('error');
    expect(error.name).toBe('responseError');
    expect(error.responseError.status).toBe(false);
    // expect(error.responseError.tryAgain).toBe(true);
    // expect(error.responseError.error.msg).toBe('chacho');
    expect(error.responseError.error.loco).toBe('tio');
  });

  test('fn: setResponseKO() type error object 2', () => {
    const error = Ofn.setResponseKO(undefined, { loco: 'tio' }, undefined, true);

    expect(Ofn.type(error)).toBe('error');
    expect(error.name).toBe('responseError');
    expect(error.responseError.status).toBe(false);
    // expect(error.responseError.tryAgain).toBe(true);
    // expect(error.responseError.error.msg).toBe('chacho');
    expect(error.responseError.error.loco).toBe('tio');
  });

  test('fn: setResponseKO() type error object 3', () => {
    const error = Ofn.setResponseKO({ foo: 'bar' }, { loco: 'tio' }, undefined, true);

    expect(Ofn.type(error)).toBe('error');
    expect(error.name).toBe('responseError');
    expect(error.responseError.status).toBe(false);
    // expect(error.responseError.tryAgain).toBe(true);
    // expect(error.responseError.error.msg).toBe('chacho');
    expect(error.responseError.error.loco).toBe('tio');
    expect(error.responseError.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type error object again', () => {
    const error = Ofn.setResponseKO({ loco: 'tio' }, undefined, true, true);

    expect(Ofn.type(error)).toBe('error');
    expect(error.name).toBe('responseError');
    expect(error.responseError.status).toBe(false);
    expect(error.responseError.tryAgain).toBe(true);
    // expect(error.responseError.error.msg).toBe('chacho');
    expect(error.responseError.error.loco).toBe('tio');
  });

  test('fn: setResponseKO() type error object again 2', () => {
    const error = Ofn.setResponseKO(undefined, { loco: 'tio' }, true, true);

    expect(Ofn.type(error)).toBe('error');
    expect(error.name).toBe('responseError');
    expect(error.responseError.status).toBe(false);
    expect(error.responseError.tryAgain).toBe(true);
    // expect(error.responseError.error.msg).toBe('chacho');
    expect(error.responseError.error.loco).toBe('tio');
  });

  test('fn: setResponseKO() type error object again 3', () => {
    const error = Ofn.setResponseKO({ foo: 'bar' }, { loco: 'tio' }, true, true);

    expect(Ofn.type(error)).toBe('error');
    expect(error.name).toBe('responseError');
    expect(error.responseError.status).toBe(false);
    expect(error.responseError.tryAgain).toBe(true);
    // expect(error.responseError.error.msg).toBe('chacho');
    expect(error.responseError.error.loco).toBe('tio');
    expect(error.responseError.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type error object simple', () => {
    const error = Ofn.setResponseKO('chacho', { loco: 'tio' }, undefined, true);

    expect(Ofn.type(error)).toBe('error');
    expect(error.name).toBe('responseError');
    expect(error.responseError.status).toBe(false);
    // expect(error.responseError.tryAgain).toBe(true);
    expect(error.responseError.error.msg).toBe('chacho');
    expect(error.responseError.error.loco).toBe('tio');
  });

  test('fn: setResponseKO() type error object simple again', () => {
    const error = Ofn.setResponseKO('chacho', { loco: 'tio' }, false, true);

    expect(Ofn.type(error)).toBe('error');
    expect(error.name).toBe('responseError');
    expect(error.responseError.status).toBe(false);
    expect(error.responseError.tryAgain).toBe(false);
    expect(error.responseError.error.msg).toBe('chacho');
    expect(error.responseError.error.loco).toBe('tio');
  });
});
