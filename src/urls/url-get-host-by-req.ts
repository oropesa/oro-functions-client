import type { Request } from 'express';

export function urlGetHostByReq(req: Pick<Request, 'originalUrl' | 'protocol' | 'get'>): string {
  if (!req || !req.originalUrl) {
    return '';
  }

  return `${req.protocol}://${req.get('host')}`;
}
