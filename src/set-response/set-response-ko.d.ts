interface SResponseKO {
    status: false;
    error: { msg?: string; }
    tryAgain?: boolean;
}

export type setResponseKO = <T extends object, E extends boolean = false>(
    msgOrError?: string | T,
    error?: T,
    tryAgain?: boolean,
    asError?: E
) => E extends true
     ? Error & {
         responseError: {
             status: false;
             error: {
                 msg?: string;
             } & Omit<T, 'msg'>
             tryAgain?: boolean;
         }
     }
     : {
         status: false;
         error: {
             msg?: string;
         } & Omit<T, 'msg'>
         tryAgain?: boolean;
     };