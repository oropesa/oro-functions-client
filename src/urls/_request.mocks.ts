import type { Request } from 'express';

export const req: Pick<Request, 'protocol' | 'originalUrl' | 'hostname'> = {
  protocol: 'https',
  originalUrl: '/',
  hostname: 'example.com',
};
