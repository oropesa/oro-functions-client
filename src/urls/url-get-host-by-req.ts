import type { Request } from 'express';

export function urlGetHostByReq(req: Pick<Request, 'originalUrl' | 'protocol' | 'hostname'>): string {
  if (!req || !req.originalUrl) {
    return '';
  }

  return `${req.protocol}://${req.hostname}`;
}
