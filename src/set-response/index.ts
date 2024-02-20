import type { SResponseError, SResponseKO } from './set-response-ko';
import type { SResponseOK } from './set-response-ok';

export * from './set-response-ok';
export * from './set-response-ko';

export type SResponse<
  OK extends Record<string, any> = NonNullable<Record<string, any>>,
  KO extends Record<string, any> = NonNullable<Record<string, any>>,
  E extends boolean = false,
> = E extends true ? SResponseOK<OK> | SResponseError<KO> : SResponseOK<OK> | SResponseKO<KO>;
