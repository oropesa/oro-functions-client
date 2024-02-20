import type { Request } from 'express';

export function urlGetCurrentByReq(req: Pick<Request, 'originalUrl' | 'protocol' | 'get'>, withBase = true): string {
  if (!req || !req.originalUrl) {
    return '';
  }

  return withBase ? `${req.protocol}://${req.get('host')}${req.originalUrl}` : `${req.originalUrl}`;
}
