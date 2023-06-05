import { Request } from 'express';

export type urlGetHostByReq = ( req: Pick<Request, 'originalUrl' | 'protocol' | 'get'> ) => string;