export type SResponseKO<T extends object> = {
    status: false;
    error?: T & { msg?: string; }
    tryAgain?: boolean;
}

export type SResponseError<T extends object> = Error & {
    responseError: SResponseKO<T>
};

export type setResponseKO = <T extends object, E extends boolean = false>(
    msgOrError?: string | T,
    error?: T,
    tryAgain?: boolean,
    asError?: E
) => E extends true ? SResponseError<T> : SResponseKO<T>;