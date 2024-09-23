import type { Request } from 'express';

export function urlGetCurrentByReq(
  req: Pick<Request, 'originalUrl' | 'protocol' | 'hostname'>,
  withBase = true,
): string {
  if (!req || !req.originalUrl) {
    return '';
  }

  return withBase ? `${req.protocol}://${req.hostname}${req.originalUrl}` : `${req.originalUrl}`;
}
