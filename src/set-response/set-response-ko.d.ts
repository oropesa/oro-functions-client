export type SResponseKO<T extends object> = {
    status: false;
    error?: T & { msg?: string; }
    tryAgain?: boolean;
}

export type setResponseKO = <T extends object, E extends boolean = false>(
    msgOrError?: string | T,
    error?: T,
    tryAgain?: boolean,
    asError?: E
) => E extends true
     ? Error & { responseError: SResponseKO<T> }
     : SResponseKO<T>;