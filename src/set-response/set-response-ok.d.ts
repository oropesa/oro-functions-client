export type SResponseOK<T extends object> = T & { status: true; msg?: string; }

export type setResponseOK = <T extends object>
    ( msgOrData?: string | T, data?: T ) => SResponseOK<T>;