import { setResponseOK } from './set-response-ok';

describe('fn: setResponseOK', () => {
  test('fn: setResponseOK( null )', () => {
    const response = setResponseOK(null);
    expect(response).toEqual({ status: true, msg: 'null' });
  });

  test('fn: setResponseOK( number )', () => {
    const response = setResponseOK(123);
    expect(response).toEqual({ status: true, msg: '123' });
  });

  test('fn: setResponseOK( fn )', () => {
    const response = setResponseOK(() => {});
    expect(response).toEqual({ status: true, msg: '() => {}' });
  });
});
