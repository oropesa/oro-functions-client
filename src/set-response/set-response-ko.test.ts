import { type } from '../general';
import { setResponseKO } from './set-response-ko';

describe('fn: setResponseKO', () => {
  test('fn: setResponseKO( undefined )', () => {
    const response = setResponseKO();
    expect(response).toEqual({ status: false });
  });

  test('fn: setResponseKO( str )', () => {
    const response = setResponseKO('chacho');
    expect(response).toEqual({ status: false, error: { msg: 'chacho' } });
  });

  test('fn: setResponseKO( obj )', () => {
    const response = setResponseKO({ chacho: true });
    expect(response).toEqual({ status: false, error: { chacho: true } });
  });

  test('fn: setResponseKO( obj2 )', () => {
    const response = setResponseKO({ status: 'tio', chacho: true });
    expect(response).toEqual({ status: false, error: { status: 'tio', chacho: true } });
  });

  test('fn: setResponseKO( obj2 T )', () => {
    interface Custom {
      status: string;
      chacho: boolean;
    }
    const response = setResponseKO<Custom>({ status: 'tio', chacho: true });
    expect(response).toEqual({ status: false, error: { status: 'tio', chacho: true } });
  });

  test('fn: setResponseKO( undefined, obj )', () => {
    const response = setResponseKO(undefined, { chacho: true });
    expect(response).toEqual({ status: false, error: { chacho: true } });
  });

  test('fn: setResponseKO( null, obj ) T', () => {
    interface Custom {
      chacho: boolean;
    }
    const response = setResponseKO<Custom>(undefined, { chacho: true });
    expect(response).toEqual({ status: false, error: { chacho: true } });
  });

  test('fn: setResponseKO( null, obj.msg )', () => {
    expect(setResponseKO(undefined, { msg: 'tio' })).toEqual({
      status: false,
      error: { msg: 'tio' },
    });
  });

  test('fn: setResponseKO( str, obj.msg )', () => {
    expect(setResponseKO('chacho', { msg: 'tio' })).toEqual({
      status: false,
      error: { msg: 'chacho tio' },
    });
  });

  test('fn: setResponseKO( obj.msg, obj.msg )', () => {
    expect(setResponseKO({ msg: 'chacho' }, { msg: 'tio' })).toEqual({
      status: false,
      error: { msg: 'chacho tio' },
    });
  });

  test('fn: setResponseKO( str, null, tryAgain )', () => {
    expect(setResponseKO('chacho', undefined, true)).toEqual({
      status: false,
      error: { msg: 'chacho' },
      tryAgain: true,
    });
  });

  test('fn: setResponseKO( str, null, null, asError )', () => {
    const response = setResponseKO('chacho', undefined, undefined, true);
    const error = new Error('chacho');

    expect(response).toEqual(error);
    expect(type(response)).toEqual('error');
    expect(response.name).toBe('responseError');
  });

  test('fn: setResponseKO( str, obj, null, asError ) T', () => {
    interface Custom {
      chacho: boolean;
    }
    const response = setResponseKO<Custom>('chacho', { chacho: true }, undefined, true);

    expect(type(response)).toEqual('error');
    expect(response.name).toBe('responseError');
    expect(response.responseError.error.chacho).toBe(true);
  });

  test('fn: setResponseKO( str, obj, null, asError )', () => {
    const responseKO = setResponseKO('chacho', { errorName: 'customError' });
    const response = setResponseKO('chacho', { errorName: 'customError' }, undefined, true);
    const error = new Error('chacho');

    expect(response).toEqual(error);
    expect(type(response)).toEqual('error');
    expect(response.name).toBe('customError');
    expect(response.responseError).toEqual(responseKO);
  });
});

describe('type fn: setResponseKO (object)', () => {
  test('fn: setResponseKO() type basic', () => {
    const response = setResponseKO();

    expect(response).toEqual({ status: false });
    expect(response.status).toBe(false);
    // expect(response.tryAgain).toBe(true);
    // expect(response.error.msg).toBe('chacho');
    // expect(response.error.loco).toBe('tio');
    // expect(response.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type basic no-error', () => {
    const response = setResponseKO(undefined, undefined, undefined, false);

    expect(response).toEqual({ status: false });
    expect(response.status).toBe(false);
    // expect(response.tryAgain).toBe(true);
    // expect(response.error.msg).toBe('chacho');
    // expect(response.error.loco).toBe('tio');
    // expect(response.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type basic object-empty', () => {
    const response = setResponseKO({});

    expect(response).toEqual({ status: false });
    expect(response.status).toBe(false);
    // expect(response.tryAgain).toBe(true);
    // expect(response.error.msg).toBe('chacho');
    // expect(response.error.loco).toBe('tio');
    // expect(response.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type basic second-object-empty', () => {
    const response = setResponseKO(undefined, {});

    expect(response).toEqual({ status: false });
    expect(response.status).toBe(false);
    // expect(response.tryAgain).toBe(true);
    // expect(response.error.msg).toBe('chacho');
    // expect(response.error.loco).toBe('tio');
    // expect(response.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type basic-again', () => {
    const response = setResponseKO(undefined, undefined, true);

    expect(response).toEqual({ status: false, tryAgain: true });
    expect(response.status).toBe(false);
    expect(response.tryAgain).toBe(true);
    // expect(response.error.msg).toBe('chacho');
    // expect(response.error.loco).toBe('tio');
    // expect(response.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type basic-again no-error', () => {
    const response = setResponseKO(undefined, undefined, true, false);

    expect(response).toEqual({ status: false, tryAgain: true });
    expect(response.status).toBe(false);
    expect(response.tryAgain).toBe(true);
    // expect(response.error.msg).toBe('chacho');
    // expect(response.error.loco).toBe('tio');
    // expect(response.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type basic-again object-tryagain', () => {
    const response = setResponseKO({ tryAgain: true });

    expect(response).toEqual({ status: false, tryAgain: true });
    expect(response.status).toBe(false);
    expect(response.tryAgain).toBe(true);
    // expect(response.error.msg).toBe('chacho');
    // expect(response.error.loco).toBe('tio');
    // expect(response.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type basic-again second-object-tryagain', () => {
    const response = setResponseKO(undefined, { tryAgain: true });

    expect(response).toEqual({ status: false, tryAgain: true });
    expect(response.status).toBe(false);
    expect(response.tryAgain).toBe(true);
    // expect(response.error.msg).toBe('chacho');
    // expect(response.error.loco).toBe('tio');
    // expect(response.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type basic-again object-tryagain no-error', () => {
    const response = setResponseKO({ tryAgain: true }, undefined, true, false);

    expect(response).toEqual({ status: false, tryAgain: true });
    expect(response.status).toBe(false);
    expect(response.tryAgain).toBe(true);
    // expect(response.error.msg).toBe('chacho');
    // expect(response.error.loco).toBe('tio');
    // expect(response.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type simple', () => {
    const response = setResponseKO('chacho');

    expect(response).toEqual({ status: false, error: { msg: 'chacho' } });
    expect(response.status).toBe(false);
    // expect(response.tryAgain).toBe(true);
    expect(response.error.msg).toBe('chacho');
    // expect(response.error.loco).toBe('tio');
    // expect(response.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type simple no-error', () => {
    const response = setResponseKO('chacho', undefined, undefined, false);

    expect(response).toEqual({ status: false, error: { msg: 'chacho' } });
    expect(response.status).toBe(false);
    // expect(response.tryAgain).toBe(true);
    expect(response.error.msg).toBe('chacho');
    // expect(response.error.loco).toBe('tio');
    // expect(response.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type simple-again', () => {
    const response = setResponseKO('chacho', undefined, true);

    expect(response).toEqual({ status: false, error: { msg: 'chacho' }, tryAgain: true });
    expect(response.status).toBe(false);
    expect(response.tryAgain).toBe(true);
    expect(response.error.msg).toBe('chacho');
    // expect(response.error.loco).toBe('tio');
    // expect(response.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type simple-again object-tryagain', () => {
    const response = setResponseKO('chacho', { tryAgain: true });

    expect(response).toEqual({ status: false, error: { msg: 'chacho' }, tryAgain: true });
    expect(response.status).toBe(false);
    expect(response.tryAgain).toBe(true);
    expect(response.error.msg).toBe('chacho');
    // expect(response.error.loco).toBe('tio');
    // expect(response.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type simple again no-error', () => {
    const response = setResponseKO('chacho', undefined, true, false);

    expect(response).toEqual({ status: false, error: { msg: 'chacho' }, tryAgain: true });
    expect(response.status).toBe(false);
    expect(response.tryAgain).toBe(true);
    expect(response.error.msg).toBe('chacho');
    // expect(response.error.loco).toBe('tio');
    // expect(response.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type object', () => {
    const response = setResponseKO({ loco: 'tio' });

    expect(response).toEqual({ status: false, error: { loco: 'tio' } });
    expect(response.status).toBe(false);
    // expect(response.tryAgain).toBe(true);
    // expect(response.error.msg).toBe('chacho');
    expect(response.error.loco).toBe('tio');
    // expect(response.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type object second-object', () => {
    const response = setResponseKO(undefined, { loco: 'tio' });

    expect(response).toEqual({ status: false, error: { loco: 'tio' } });
    expect(response.status).toBe(false);
    // expect(response.tryAgain).toBe(true);
    // expect(response.error.msg).toBe('chacho');
    expect(response.error.loco).toBe('tio');
    // expect(response.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type object object', () => {
    const response = setResponseKO({ foo: 'bar' }, { loco: 'tio' });

    expect(response).toEqual({ status: false, error: { loco: 'tio', foo: 'bar' } });
    expect(response.status).toBe(false);
    // expect(response.tryAgain).toBe(true);
    // expect(response.error.msg).toBe('chacho');
    expect(response.error.loco).toBe('tio');
    expect(response.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type object object overwritten', () => {
    const response = setResponseKO({ foo: 'bar' }, { foo: 'tio' });

    expect(response).toEqual({ status: false, error: { foo: 'tio' } });
    expect(response.status).toBe(false);
    // expect(response.tryAgain).toBe(true);
    // expect(response.error.msg).toBe('chacho');
    // expect(response.error.loco).toBe('tio');
    expect(response.error.foo).toBe('tio');
  });

  test('fn: setResponseKO() type object no-error', () => {
    const response = setResponseKO({ loco: 'tio' }, undefined, undefined, false);

    expect(response).toEqual({ status: false, error: { loco: 'tio' } });
    expect(response.status).toBe(false);
    // expect(response.tryAgain).toBe(true);
    // expect(response.error.msg).toBe('chacho');
    expect(response.error.loco).toBe('tio');
    // expect(response.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type object second-object no-error', () => {
    const response = setResponseKO(undefined, { loco: 'tio' }, undefined, false);

    expect(response).toEqual({ status: false, error: { loco: 'tio' } });
    expect(response.status).toBe(false);
    // expect(response.tryAgain).toBe(true);
    // expect(response.error.msg).toBe('chacho');
    expect(response.error.loco).toBe('tio');
    // expect(response.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type object object no-error', () => {
    const response = setResponseKO({ foo: 'bar' }, { loco: 'tio' }, undefined, false);

    expect(response).toEqual({ status: false, error: { loco: 'tio', foo: 'bar' } });
    expect(response.status).toBe(false);
    // expect(response.tryAgain).toBe(true);
    // expect(response.error.msg).toBe('chacho');
    expect(response.error.loco).toBe('tio');
    expect(response.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type object-again', () => {
    const response = setResponseKO({ loco: 'tio' }, undefined, true);

    expect(response).toEqual({ status: false, error: { loco: 'tio' }, tryAgain: true });
    expect(response.status).toBe(false);
    expect(response.tryAgain).toBe(true);
    // expect(response.error.msg).toBe('chacho');
    expect(response.error.loco).toBe('tio');
    // expect(response.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type object-again second-object', () => {
    const response = setResponseKO(undefined, { loco: 'tio' }, true);

    expect(response).toEqual({ status: false, error: { loco: 'tio' }, tryAgain: true });
    expect(response.status).toBe(false);
    expect(response.tryAgain).toBe(true);
    // expect(response.error.msg).toBe('chacho');
    expect(response.error.loco).toBe('tio');
    // expect(response.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type object-again object-tryagain', () => {
    const response = setResponseKO(undefined, { loco: 'tio', tryAgain: true });

    expect(response).toEqual({ status: false, error: { loco: 'tio' }, tryAgain: true });
    expect(response.status).toBe(false);
    expect(response.tryAgain).toBe(true);
    // expect(response.error.msg).toBe('chacho');
    expect(response.error.loco).toBe('tio');
    // expect(response.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type object-again object', () => {
    const response = setResponseKO({ foo: 'bar' }, { loco: 'tio' }, true);

    expect(response).toEqual({ status: false, error: { loco: 'tio', foo: 'bar' }, tryAgain: true });
    expect(response.status).toBe(false);
    expect(response.tryAgain).toBe(true);
    // expect(response.error.msg).toBe('chacho');
    expect(response.error.loco).toBe('tio');
    expect(response.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type object-again no-error', () => {
    const response = setResponseKO({ loco: 'tio' }, undefined, true, false);

    expect(response).toEqual({ status: false, error: { loco: 'tio' }, tryAgain: true });
    expect(response.status).toBe(false);
    expect(response.tryAgain).toBe(true);
    // expect(response.error.msg).toBe('chacho');
    expect(response.error.loco).toBe('tio');
    // expect(response.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type objecta-gain second-object no-error', () => {
    const response = setResponseKO(undefined, { loco: 'tio' }, true, false);

    expect(response).toEqual({ status: false, error: { loco: 'tio' }, tryAgain: true });
    expect(response.status).toBe(false);
    expect(response.tryAgain).toBe(true);
    // expect(response.error.msg).toBe('chacho');
    expect(response.error.loco).toBe('tio');
    // expect(response.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type object-again object no-error', () => {
    const response = setResponseKO({ foo: 'bar' }, { loco: 'tio' }, true, false);

    expect(response).toEqual({ status: false, error: { loco: 'tio', foo: 'bar' }, tryAgain: true });
    expect(response.status).toBe(false);
    expect(response.tryAgain).toBe(true);
    // expect(response.error.msg).toBe('chacho');
    expect(response.error.loco).toBe('tio');
    expect(response.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type object-simple', () => {
    const response = setResponseKO('chacho', { loco: 'tio' });

    expect(response).toEqual({ status: false, error: { msg: 'chacho', loco: 'tio' } });
    expect(response.status).toBe(false);
    // expect(response.tryAgain).toBe(true);
    expect(response.error.msg).toBe('chacho');
    expect(response.error.loco).toBe('tio');
    // expect(response.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type object-simple msg-undefined', () => {
    const response = setResponseKO(undefined, { msg: undefined, loco: 'tio' });

    expect(response).toEqual({ status: false, error: { msg: undefined, loco: 'tio' } });
    expect(response.status).toBe(false);
    // expect(response.tryAgain).toBe(true);
    expect(response.error.msg).toBe(undefined);
    expect(response.error.loco).toBe('tio');
    // expect(response.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type object-simple msg w-msg', () => {
    const response = setResponseKO('chacho', { msg: 'loco', loco: 'tio' });

    expect(response).toEqual({ status: false, error: { msg: 'chacho loco', loco: 'tio' } });
    expect(response.status).toBe(false);
    // expect(response.tryAgain).toBe(true);
    expect(response.error.msg).toBe('chacho loco');
    expect(response.error.loco).toBe('tio');
    // expect(response.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type object-simple no-error', () => {
    const response = setResponseKO('chacho', { loco: 'tio' }, undefined, false);

    expect(response).toEqual({ status: false, error: { msg: 'chacho', loco: 'tio' } });
    expect(response.status).toBe(false);
    // expect(response.tryAgain).toBe(true);
    expect(response.error.msg).toBe('chacho');
    expect(response.error.loco).toBe('tio');
    // expect(response.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type object-simple-again', () => {
    const response = setResponseKO('chacho', { loco: 'tio' }, true);

    expect(response).toEqual({ status: false, error: { msg: 'chacho', loco: 'tio' }, tryAgain: true });
    expect(response.status).toBe(false);
    expect(response.tryAgain).toBe(true);
    expect(response.error.msg).toBe('chacho');
    expect(response.error.loco).toBe('tio');
    // expect(response.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type object-simple-again no-error', () => {
    const response = setResponseKO('chacho', { loco: 'tio' }, true, false);

    expect(response).toEqual({ status: false, error: { msg: 'chacho', loco: 'tio' }, tryAgain: true });
    expect(response.status).toBe(false);
    expect(response.tryAgain).toBe(true);
    expect(response.error.msg).toBe('chacho');
    expect(response.error.loco).toBe('tio');
    // expect(response.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type object-simple-again object-tryagain', () => {
    const response = setResponseKO('chacho', { loco: 'tio', tryAgain: true });

    expect(response).toEqual({ status: false, error: { msg: 'chacho', loco: 'tio' }, tryAgain: true });
    expect(response.status).toBe(false);
    expect(response.tryAgain).toBe(true);
    expect(response.error.msg).toBe('chacho');
    expect(response.error.loco).toBe('tio');
    // expect(response.error.foo).toBe('bar');
    // expect(response.error.tryAgain).toBe('tio');
  });
});

describe('fn: setResponseKO (error)', () => {
  test('fn: setResponseKO() type error basic', () => {
    const error = setResponseKO(undefined, undefined, undefined, true);

    expect(type(error)).toBe('error');
    expect(error.name).toBe('responseError');

    expect(error.responseError).toEqual({ status: false });
    expect(error.responseError.status).toBe(false);
    // expect(error.responseError.tryAgain).toBe(true);
    // expect(error.responseError.error.msg).toBe('chacho');
    // expect(error.responseError.error.loco).toBe('tio');
    // expect(error.responseError.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type error basic object-error', () => {
    const error = setResponseKO({ asError: true });

    expect(type(error)).toBe('error');
    expect(error.name).toBe('responseError');

    expect(error.responseError).toEqual({ status: false });
    expect(error.responseError.status).toBe(false);
    // expect(error.responseError.tryAgain).toBe(true);
    // expect(error.responseError.error.msg).toBe('chacho');
    // expect(error.responseError.error.loco).toBe('tio');
    // expect(error.responseError.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type error basic object-error second-object', () => {
    const error = setResponseKO(undefined, { asError: true });

    expect(type(error)).toBe('error');
    expect(error.name).toBe('responseError');

    expect(error.responseError).toEqual({ status: false });
    expect(error.responseError.status).toBe(false);
    // expect(error.responseError.tryAgain).toBe(true);
    // expect(error.responseError.error.msg).toBe('chacho');
    // expect(error.responseError.error.loco).toBe('tio');
    // expect(error.responseError.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type error basic-again', () => {
    const error = setResponseKO(undefined, undefined, true, true);

    expect(type(error)).toBe('error');
    expect(error.name).toBe('responseError');

    expect(error.responseError).toEqual({ status: false, tryAgain: true });
    expect(error.responseError.status).toBe(false);
    expect(error.responseError.tryAgain).toBe(true);
    // expect(error.responseError.error.msg).toBe('chacho');
    // expect(error.responseError.error.loco).toBe('tio');
    // expect(error.responseError.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type error basic-again object-tryagain', () => {
    const error = setResponseKO(undefined, { tryAgain: true }, undefined, true);

    expect(type(error)).toBe('error');
    expect(error.name).toBe('responseError');

    expect(error.responseError).toEqual({ status: false, tryAgain: true });
    expect(error.responseError.status).toBe(false);
    expect(error.responseError.tryAgain).toBe(true);
    // expect(error.responseError.error.msg).toBe('chacho');
    // expect(error.responseError.error.loco).toBe('tio');
    // expect(error.responseError.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type error basic-again object-tryagain-aserror', () => {
    const error = setResponseKO({ tryAgain: true, asError: true });

    expect(type(error)).toBe('error');
    expect(error.name).toBe('responseError');

    expect(error.responseError).toEqual({ status: false, tryAgain: true });
    expect(error.responseError.status).toBe(false);
    expect(error.responseError.tryAgain).toBe(true);
    // expect(error.responseError.error.msg).toBe('chacho');
    // expect(error.responseError.error.loco).toBe('tio');
    // expect(error.responseError.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type error basic-again second-object-tryagain-aserror', () => {
    const error = setResponseKO(undefined, { tryAgain: true, asError: true });

    expect(type(error)).toBe('error');
    expect(error.name).toBe('responseError');

    expect(error.responseError).toEqual({ status: false, tryAgain: true });
    expect(error.responseError.status).toBe(false);
    expect(error.responseError.tryAgain).toBe(true);
    // expect(error.responseError.error.msg).toBe('chacho');
    // expect(error.responseError.error.loco).toBe('tio');
    // expect(error.responseError.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type error simple', () => {
    const error = setResponseKO('chacho', undefined, undefined, true);

    expect(type(error)).toBe('error');
    expect(error.name).toBe('responseError');

    expect(error.responseError).toEqual({ status: false, error: { msg: 'chacho' } });
    expect(error.responseError.status).toBe(false);
    // expect(error.responseError.tryAgain).toBe(true);
    expect(error.responseError.error.msg).toBe('chacho');
    // expect(error.responseError.error.loco).toBe('tio');
    // expect(error.responseError.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type error simple object-aserror', () => {
    const error = setResponseKO('chacho', { asError: true });

    expect(type(error)).toBe('error');
    expect(error.name).toBe('responseError');

    expect(error.responseError).toEqual({ status: false, error: { msg: 'chacho' } });
    expect(error.responseError.status).toBe(false);
    // expect(error.responseError.tryAgain).toBe(true);
    expect(error.responseError.error.msg).toBe('chacho');
    // expect(error.responseError.error.loco).toBe('tio');
    // expect(error.responseError.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type error simple object-msg', () => {
    const error = setResponseKO({ msg: 'chacho' }, undefined, undefined, true);

    expect(type(error)).toBe('error');
    expect(error.name).toBe('responseError');

    expect(error.responseError).toEqual({ status: false, error: { msg: 'chacho' } });
    expect(error.responseError.status).toBe(false);
    // expect(error.responseError.tryAgain).toBe(true);
    expect(error.responseError.error.msg).toBe('chacho');
    // expect(error.responseError.error.loco).toBe('tio');
    // expect(error.responseError.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type error simple object-msg-as-error', () => {
    const error = setResponseKO({ msg: 'chacho', asError: true });

    expect(type(error)).toBe('error');
    expect(error.name).toBe('responseError');

    expect(error.responseError).toEqual({ status: false, error: { msg: 'chacho' } });
    expect(error.responseError.status).toBe(false);
    // expect(error.responseError.tryAgain).toBe(true);
    expect(error.responseError.error.msg).toBe('chacho');
    // expect(error.responseError.error.loco).toBe('tio');
    // expect(error.responseError.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type error simple second-object-msg', () => {
    const error = setResponseKO(undefined, { msg: 'chacho' }, undefined, true);

    expect(type(error)).toBe('error');
    expect(error.name).toBe('responseError');

    expect(error.responseError).toEqual({ status: false, error: { msg: 'chacho' } });
    expect(error.responseError.status).toBe(false);
    // expect(error.responseError.tryAgain).toBe(true);
    expect(error.responseError.error.msg).toBe('chacho');
    // expect(error.responseError.error.loco).toBe('tio');
    // expect(error.responseError.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type error simple second-object-msg-as-error', () => {
    const error = setResponseKO(undefined, { msg: 'chacho', asError: true });

    expect(type(error)).toBe('error');
    expect(error.name).toBe('responseError');

    expect(error.responseError).toEqual({ status: false, error: { msg: 'chacho' } });
    expect(error.responseError.status).toBe(false);
    // expect(error.responseError.tryAgain).toBe(true);
    expect(error.responseError.error.msg).toBe('chacho');
    // expect(error.responseError.error.loco).toBe('tio');
    // expect(error.responseError.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type error simple-again', () => {
    const error = setResponseKO('chacho', undefined, true, true);

    expect(type(error)).toBe('error');
    expect(error.name).toBe('responseError');

    expect(error.responseError).toEqual({ status: false, error: { msg: 'chacho' }, tryAgain: true });
    expect(error.responseError.status).toBe(false);
    expect(error.responseError.tryAgain).toBe(true);
    expect(error.responseError.error.msg).toBe('chacho');
    // expect(error.responseError.error.loco).toBe('tio');
    // expect(error.responseError.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type error simple-again msg second-object-tryagain', () => {
    const error = setResponseKO('chacho', { tryAgain: true }, undefined, true);

    expect(type(error)).toBe('error');
    expect(error.name).toBe('responseError');

    expect(error.responseError).toEqual({ status: false, error: { msg: 'chacho' }, tryAgain: true });
    expect(error.responseError.status).toBe(false);
    expect(error.responseError.tryAgain).toBe(true);
    expect(error.responseError.error.msg).toBe('chacho');
    // expect(error.responseError.error.loco).toBe('tio');
    // expect(error.responseError.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type error simple-again object-msg-tryagain', () => {
    const error = setResponseKO({ msg: 'chacho', tryAgain: true }, undefined, undefined, true);

    expect(type(error)).toBe('error');
    expect(error.name).toBe('responseError');

    expect(error.responseError).toEqual({ status: false, error: { msg: 'chacho' }, tryAgain: true });
    expect(error.responseError.status).toBe(false);
    expect(error.responseError.tryAgain).toBe(true);
    expect(error.responseError.error.msg).toBe('chacho');
    // expect(error.responseError.error.loco).toBe('tio');
    // expect(error.responseError.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type error simple-again second-object-msg-tryagain', () => {
    const error = setResponseKO(undefined, { msg: 'chacho', tryAgain: true }, undefined, true);

    expect(type(error)).toBe('error');
    expect(error.name).toBe('responseError');

    expect(error.responseError).toEqual({ status: false, error: { msg: 'chacho' }, tryAgain: true });
    expect(error.responseError.status).toBe(false);
    expect(error.responseError.tryAgain).toBe(true);
    expect(error.responseError.error.msg).toBe('chacho');
    // expect(error.responseError.error.loco).toBe('tio');
    // expect(error.responseError.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type error simple-again object-msg-tryagain-aserror', () => {
    const error = setResponseKO({ msg: 'chacho', tryAgain: true, asError: true });

    expect(type(error)).toBe('error');
    expect(error.name).toBe('responseError');

    expect(error.responseError).toEqual({ status: false, error: { msg: 'chacho' }, tryAgain: true });
    expect(error.responseError.status).toBe(false);
    expect(error.responseError.tryAgain).toBe(true);
    expect(error.responseError.error.msg).toBe('chacho');
    // expect(error.responseError.error.loco).toBe('tio');
    // expect(error.responseError.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type error simple-again second-object-msg-tryagain-aserror', () => {
    const error = setResponseKO(undefined, { msg: 'chacho', tryAgain: true, asError: true });

    expect(type(error)).toBe('error');
    expect(error.name).toBe('responseError');

    expect(error.responseError).toEqual({ status: false, error: { msg: 'chacho' }, tryAgain: true });
    expect(error.responseError.status).toBe(false);
    expect(error.responseError.tryAgain).toBe(true);
    expect(error.responseError.error.msg).toBe('chacho');
    // expect(error.responseError.error.loco).toBe('tio');
    // expect(error.responseError.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type error object', () => {
    const error = setResponseKO({ loco: 'tio' }, undefined, undefined, true);

    expect(type(error)).toBe('error');
    expect(error.name).toBe('responseError');

    expect(error.responseError).toEqual({ status: false, error: { loco: 'tio' } });
    expect(error.responseError.status).toBe(false);
    // expect(error.responseError.tryAgain).toBe(true);
    // expect(error.responseError.error.msg).toBe('chacho');
    expect(error.responseError.error.loco).toBe('tio');
    // expect(error.responseError.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type error object object-aserror', () => {
    const error = setResponseKO({ loco: 'tio', asError: true });

    expect(type(error)).toBe('error');
    expect(error.name).toBe('responseError');

    expect(error.responseError).toEqual({ status: false, error: { loco: 'tio' } });
    expect(error.responseError.status).toBe(false);
    // expect(error.responseError.tryAgain).toBe(true);
    // expect(error.responseError.error.msg).toBe('chacho');
    expect(error.responseError.error.loco).toBe('tio');
    // expect(error.responseError.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type error object second-object', () => {
    const error = setResponseKO(undefined, { loco: 'tio' }, undefined, true);

    expect(type(error)).toBe('error');
    expect(error.name).toBe('responseError');

    expect(error.responseError).toEqual({ status: false, error: { loco: 'tio' } });
    expect(error.responseError.status).toBe(false);
    // expect(error.responseError.tryAgain).toBe(true);
    // expect(error.responseError.error.msg).toBe('chacho');
    expect(error.responseError.error.loco).toBe('tio');
    // expect(error.responseError.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type error object second-object-aserror', () => {
    const error = setResponseKO(undefined, { loco: 'tio', asError: true });

    expect(type(error)).toBe('error');
    expect(error.name).toBe('responseError');

    expect(error.responseError).toEqual({ status: false, error: { loco: 'tio' } });
    expect(error.responseError.status).toBe(false);
    // expect(error.responseError.tryAgain).toBe(true);
    // expect(error.responseError.error.msg).toBe('chacho');
    expect(error.responseError.error.loco).toBe('tio');
    // expect(error.responseError.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type error object object', () => {
    const error = setResponseKO({ foo: 'bar' }, { loco: 'tio' }, undefined, true);

    expect(type(error)).toBe('error');
    expect(error.name).toBe('responseError');

    expect(error.responseError).toEqual({ status: false, error: { loco: 'tio', foo: 'bar' } });
    expect(error.responseError.status).toBe(false);
    // expect(error.responseError.tryAgain).toBe(true);
    // expect(error.responseError.error.msg).toBe('chacho');
    expect(error.responseError.error.loco).toBe('tio');
    expect(error.responseError.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type error object-again', () => {
    const error = setResponseKO({ loco: 'tio' }, undefined, true, true);

    expect(type(error)).toBe('error');
    expect(error.name).toBe('responseError');

    expect(error.responseError).toEqual({ status: false, error: { loco: 'tio' }, tryAgain: true });
    expect(error.responseError.status).toBe(false);
    expect(error.responseError.tryAgain).toBe(true);
    // expect(error.responseError.error.msg).toBe('chacho');
    expect(error.responseError.error.loco).toBe('tio');
    // expect(error.responseError.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type error object-again object-tryagain-aserror', () => {
    const error = setResponseKO({ loco: 'tio', tryAgain: true, asError: true });

    expect(type(error)).toBe('error');
    expect(error.name).toBe('responseError');

    expect(error.responseError).toEqual({ status: false, error: { loco: 'tio' }, tryAgain: true });
    expect(error.responseError.status).toBe(false);
    expect(error.responseError.tryAgain).toBe(true);
    // expect(error.responseError.error.msg).toBe('chacho');
    expect(error.responseError.error.loco).toBe('tio');
    // expect(error.responseError.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type error object-again second-object', () => {
    const error = setResponseKO(undefined, { loco: 'tio' }, true, true);

    expect(type(error)).toBe('error');
    expect(error.name).toBe('responseError');

    expect(error.responseError).toEqual({ status: false, error: { loco: 'tio' }, tryAgain: true });
    expect(error.responseError.status).toBe(false);
    expect(error.responseError.tryAgain).toBe(true);
    // expect(error.responseError.error.msg).toBe('chacho');
    expect(error.responseError.error.loco).toBe('tio');
    // expect(error.responseError.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type error object-again second-object-tryagain-aserror', () => {
    const error = setResponseKO(undefined, { loco: 'tio', tryAgain: true, asError: true });

    expect(type(error)).toBe('error');
    expect(error.name).toBe('responseError');

    expect(error.responseError).toEqual({ status: false, error: { loco: 'tio' }, tryAgain: true });
    expect(error.responseError.status).toBe(false);
    expect(error.responseError.tryAgain).toBe(true);
    // expect(error.responseError.error.msg).toBe('chacho');
    expect(error.responseError.error.loco).toBe('tio');
    // expect(error.responseError.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type error object-again object object', () => {
    const error = setResponseKO({ foo: 'bar' }, { loco: 'tio' }, true, true);

    expect(type(error)).toBe('error');
    expect(error.name).toBe('responseError');

    expect(error.responseError).toEqual({ status: false, error: { loco: 'tio', foo: 'bar' }, tryAgain: true });
    expect(error.responseError.status).toBe(false);
    expect(error.responseError.tryAgain).toBe(true);
    // expect(error.responseError.error.msg).toBe('chacho');
    expect(error.responseError.error.loco).toBe('tio');
    expect(error.responseError.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type error object-simple', () => {
    const error = setResponseKO('chacho', { loco: 'tio' }, undefined, true);

    expect(type(error)).toBe('error');
    expect(error.name).toBe('responseError');

    expect(error.responseError).toEqual({ status: false, error: { msg: 'chacho', loco: 'tio' } });
    expect(error.responseError.status).toBe(false);
    // expect(error.responseError.tryAgain).toBe(true);
    expect(error.responseError.error.msg).toBe('chacho');
    expect(error.responseError.error.loco).toBe('tio');
    // expect(error.responseError.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type error object-simple object-aserror', () => {
    const error = setResponseKO('chacho', { loco: 'tio', asError: true });

    expect(type(error)).toBe('error');
    expect(error.name).toBe('responseError');

    expect(error.responseError).toEqual({ status: false, error: { msg: 'chacho', loco: 'tio' } });
    expect(error.responseError.status).toBe(false);
    // expect(error.responseError.tryAgain).toBe(true);
    expect(error.responseError.error.msg).toBe('chacho');
    expect(error.responseError.error.loco).toBe('tio');
    // expect(error.responseError.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type error object-simple-again', () => {
    const error = setResponseKO('chacho', { loco: 'tio' }, true, true);

    expect(type(error)).toBe('error');
    expect(error.name).toBe('responseError');

    expect(error.responseError).toEqual({ status: false, error: { msg: 'chacho', loco: 'tio' }, tryAgain: true });
    expect(error.responseError.status).toBe(false);
    expect(error.responseError.tryAgain).toBe(true);
    expect(error.responseError.error.msg).toBe('chacho');
    expect(error.responseError.error.loco).toBe('tio');
    // expect(error.responseError.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type error object-simple-again object-aserror', () => {
    const error = setResponseKO('chacho', { loco: 'tio', asError: true }, true);

    expect(type(error)).toBe('error');
    expect(error.name).toBe('responseError');

    expect(error.responseError).toEqual({ status: false, error: { msg: 'chacho', loco: 'tio' }, tryAgain: true });
    expect(error.responseError.status).toBe(false);
    expect(error.responseError.tryAgain).toBe(true);
    expect(error.responseError.error.msg).toBe('chacho');
    expect(error.responseError.error.loco).toBe('tio');
    // expect(error.responseError.error.foo).toBe('bar');
  });

  test('fn: setResponseKO() type error object-simple-again object-tryagain-aserror', () => {
    const error = setResponseKO('chacho', { loco: 'tio', asError: true, tryAgain: true });

    expect(type(error)).toBe('error');
    expect(error.name).toBe('responseError');

    expect(error.responseError).toEqual({ status: false, error: { msg: 'chacho', loco: 'tio' }, tryAgain: true });
    expect(error.responseError.status).toBe(false);
    expect(error.responseError.tryAgain).toBe(true);
    expect(error.responseError.error.msg).toBe('chacho');
    expect(error.responseError.error.loco).toBe('tio');
    // expect(error.responseError.error.foo).toBe('bar');
  });
});
