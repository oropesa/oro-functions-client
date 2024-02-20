import { setResponseKO } from './set-response-ko';

describe('fn: setResponseKO', () => {
  test('fn: setResponseKO( null )', () => {
    const response = setResponseKO(null);
    expect(response).toEqual({ status: false, error: { msg: 'null' } });
  });

  test('fn: setResponseKO( number )', () => {
    const response = setResponseKO(123);
    expect(response).toEqual({ status: false, error: { msg: '123' } });
  });

  test('fn: setResponseKO( fn )', () => {
    const response = setResponseKO(() => {});
    expect(response).toEqual({ status: false, error: { msg: '() => {}' } });
  });
});
