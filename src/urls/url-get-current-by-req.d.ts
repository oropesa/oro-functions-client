import { Request } from 'express';

export type urlGetCurrentByReq = ( req: Pick<Request, 'originalUrl' | 'protocol'>, isFullpath?: boolean ) => string;