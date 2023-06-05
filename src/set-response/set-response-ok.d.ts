interface SResponseOK {
    status: true;
    msg?: string;
}

export type setResponseOK = <T extends object>( msgOrData?: string | T, data?: T ) => {
    status: true;
    msg?: string;
} & Omit<T, 'status' | 'msg'>;