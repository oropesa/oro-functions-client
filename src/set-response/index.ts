export { setResponseKO, SResponseKO, SResponseError } from './set-response-ko';
export { setResponseOK, SResponseOK } from './set-response-ok';

import { SResponseKO, SResponseError } from './set-response-ko';
import { SResponseOK } from './set-response-ok';

export type SResponse<
  OK extends object,
  KO extends object,
  E extends boolean = false
> = E extends true
    ? SResponseOK<OK> | SResponseError<KO>
    : SResponseOK<OK> | SResponseKO<KO>