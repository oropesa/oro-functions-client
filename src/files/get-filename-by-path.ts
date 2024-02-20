import { isString } from '../general';
import { sanitizePath } from './sanitize-path';

export function getFilenameByPath(path: string): string {
  if (!isString(path)) {
    return '';
  }

  const filename = sanitizePath(path);
  return filename.slice(filename.lastIndexOf('/') + 1);
}
