import type { Request } from 'express';

export const req: Pick<Request, 'protocol' | 'originalUrl' | 'get'> = {
  protocol: 'https',
  originalUrl: '/',
  get: (key) => {
    const obj: Record<string, any> = { host: 'example.com' };
    return obj[key];
  },
};
