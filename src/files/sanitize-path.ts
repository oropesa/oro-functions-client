import { isString } from '../general';

export function sanitizePath(path: string): string {
  if (!isString(path)) {
    return '';
  }

  let sanitizedPath = path.replace(/[/\\]+/g, '/');
  if (path.indexOf('\\\\') === 0) {
    sanitizedPath = `\\\\${sanitizedPath.slice(1)}`;
  }

  return sanitizedPath;
}
