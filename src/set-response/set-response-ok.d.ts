export type SResponseOK<T extends object = {}> = { msg?: string; } & T & { status: true; }

export type setResponseOK = <T extends object>
    ( msgOrData?: string | T, data?: T ) => SResponseOK<T>;