import { setResponseOK } from './set-response-ok';

describe('fn: setResponseOK', () => {
  test('fn: setResponseOK( undefined )', () => {
    const response = setResponseOK();
    expect(response).toEqual({ status: true });
  });

  test('fn: setResponseOK( str )', () => {
    const response = setResponseOK('chacho');
    expect(response).toEqual({ status: true, msg: 'chacho' });
  });

  test('fn: setResponseOK( obj )', () => {
    const response = setResponseOK({ chacho: true });
    expect(response).toEqual({ status: true, chacho: true });
  });

  test('fn: setResponseOK( obj-status )', () => {
    const response = setResponseOK({ status: 'tio', chacho: true });
    expect(setResponseOK(response)).toEqual({ status: true, chacho: true });
  });

  test('fn: setResponseOK( obj2 ) typed', () => {
    interface Custom {
      chacho: boolean;
      status: string;
    }

    const response = setResponseOK<Custom>({ status: 'tio', chacho: true });
    expect(response).toEqual({ status: true, chacho: true });
  });

  test('fn: setResponseOK( obj3 )', () => {
    const response = setResponseOK({ data: { status: 'tio', chacho: true } });
    expect(response).toEqual({ status: true, data: { status: 'tio', chacho: true } });
  });

  test('fn: setResponseOK( null, obj )', () => {
    const response = setResponseOK(undefined, { chacho: true });
    expect(response).toEqual({ status: true, chacho: true });
  });

  test('fn: setResponseOK( null, obj ) T', () => {
    interface Custom {
      chacho: boolean;
    }

    const response = setResponseOK<Custom>(undefined, { chacho: true });
    expect(response).toEqual({ status: true, chacho: true });
  });

  test('fn: setResponseOK( null, obj.msg )', () => {
    const response = setResponseOK(undefined, { msg: 'tio' });
    expect(response).toEqual({ status: true, msg: 'tio' });
  });

  test('fn: setResponseOK( str, obj.msg )', () => {
    const response = setResponseOK('chacho', { msg: 'tio' });
    expect(response).toEqual({ status: true, msg: 'chacho tio' });
  });
});

describe('type fn: setResponseOK', () => {
  test('fn: setResponseOK() type basic', () => {
    const response = setResponseOK();

    expect(response).toEqual({ status: true });
    expect(response.status).toBe(true);
    // expect(response.msg).toBe('chacho');
    // expect(response.loco).toBe('tio');
    // expect(response.foo).toBe('bar');
  });

  test('fn: setResponseOK() type basic object-empty', () => {
    const response = setResponseOK({});

    expect(response).toEqual({ status: true });
    expect(response.status).toBe(true);
    // expect(response.msg).toBe('chacho');
    // expect(response.loco).toBe('tio');
    // expect(response.foo).toBe('bar');
  });

  test('fn: setResponseOK() type basic second-object-empty', () => {
    const response = setResponseOK(undefined, {});

    expect(response).toEqual({ status: true });
    expect(response.status).toBe(true);
    // expect(response.msg).toBe('chacho');
    // expect(response.loco).toBe('tio');
    // expect(response.foo).toBe('bar');
  });

  test('fn: setResponseOK() type simple', () => {
    const response = setResponseOK('chacho');

    expect(response).toEqual({ status: true, msg: 'chacho' });
    expect(response.status).toBe(true);
    expect(response.msg).toBe('chacho');
    // expect(response.loco).toBe('tio');
    // expect(response.foo).toBe('bar');
  });

  test('fn: setResponseOK() type simple object-only-msg', () => {
    const response = setResponseOK({ msg: 'chacho' });

    expect(response).toEqual({ status: true, msg: 'chacho' });
    expect(response.status).toBe(true);
    expect(response.msg).toBe('chacho');
    // expect(response.loco).toBe('tio');
    // expect(response.foo).toBe('bar');
  });

  test('fn: setResponseOK() type object-simple with-msg', () => {
    const response = setResponseOK({ msg: 'chacho', loco: 'tio' });

    expect(response).toEqual({ status: true, msg: 'chacho', loco: 'tio' });
    expect(response.status).toBe(true);
    expect(response.msg).toBe('chacho');
    expect(response.loco).toBe('tio');
    // expect(response.foo).toBe('bar');
  });

  test('fn: setResponseOK() type object', () => {
    const response = setResponseOK({ loco: 'tio' });

    expect(response).toEqual({ status: true, loco: 'tio' });
    expect(response.status).toBe(true);
    // expect(response.msg).toBe('chacho');
    expect(response.loco).toBe('tio');
    // expect(response.foo).toBe('bar');
  });

  test('fn: setResponseOK() type object no-msg', () => {
    const response = setResponseOK(undefined, { loco: 'tio' });

    expect(response).toEqual({ status: true, loco: 'tio' });
    expect(response.status).toBe(true);
    // expect(response.msg).toBe('chacho');
    expect(response.loco).toBe('tio');
    // expect(response.foo).toBe('bar');
  });

  test('fn: setResponseOK() type object undefined-msg', () => {
    const response = setResponseOK(undefined, { msg: undefined, loco: 'tio' });

    expect(response).toEqual({ status: true, msg: undefined, loco: 'tio' });
    expect(response.status).toBe(true);
    expect(response.msg).toBe(undefined);
    expect(response.loco).toBe('tio');
    // expect(response.foo).toBe('bar');
  });

  test('fn: setResponseOK() type object object', () => {
    const response = setResponseOK({ foo: 'bar' }, { loco: 'tio' });

    expect(response).toEqual({ status: true, loco: 'tio', foo: 'bar' });
    expect(response.status).toBe(true);
    expect(response.loco).toBe('tio');
    expect(response.foo).toBe('bar');
  });

  test('fn: setResponseOK() type object object overwrite', () => {
    const response = setResponseOK({ loco: 'bar' }, { loco: 'tio' });

    expect(response).toEqual({ status: true, loco: 'tio' });
    expect(response.status).toBe(true);
    expect(response.loco).toBe('tio');
    // expect(response.foo).toBe('bar');
  });

  test('fn: setResponseOK() type object-simple with-msg object', () => {
    const response = setResponseOK({ msg: 'chacho', foo: 'bar' }, { loco: 'tio' });

    expect(response).toEqual({ status: true, msg: 'chacho', loco: 'tio', foo: 'bar' });
    expect(response.status).toBe(true);
    expect(response.msg).toBe('chacho');
    expect(response.loco).toBe('tio');
    expect(response.foo).toBe('bar');
  });

  test('fn: setResponseOK() type object-simple w-msg w-msg', () => {
    const response = setResponseOK({ msg: 'chacho', foo: 'bar' }, { msg: 'loco', loco: 'tio' });

    expect(response).toEqual({ status: true, msg: 'chacho loco', loco: 'tio', foo: 'bar' });
    expect(response.status).toBe(true);
    expect(response.msg).toBe('chacho loco');
    expect(response.loco).toBe('tio');
    expect(response.foo).toBe('bar');
  });

  test('fn: setResponseOK() type object-simple', () => {
    const response = setResponseOK('chacho', { loco: 'tio' });

    expect(response).toEqual({ status: true, msg: 'chacho', loco: 'tio' });
    expect(response.status).toBe(true);
    expect(response.msg).toBe('chacho');
    expect(response.loco).toBe('tio');
    // expect(response.foo).toBe('bar');
  });
});
