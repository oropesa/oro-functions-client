import type { Request } from 'express';

export function urlGetCurrentByReq(
  req: Pick<Request, 'originalUrl' | 'protocol' | 'get'>,
  isFullpath = true,
): string {
  if (!req || !req.originalUrl) {
    return '';
  }

  return isFullpath
    ? `${req.protocol}://${req.get('host')}${req.originalUrl}`
    : `${req.originalUrl}`;
}
