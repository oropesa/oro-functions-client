import { isString } from '../general';
import { sanitizePath } from './sanitize-path';

export function getFilenameByPath(path: string): string {
  if (!isString(path)) {
    return '';
  }

  let filename = sanitizePath(path);
  return filename.slice(filename.lastIndexOf('/') + 1);
}
