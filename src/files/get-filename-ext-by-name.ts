import { isString } from '../general';
import { getFilenameByPath } from './get-filename-by-path';

export function getFilenameExtByName(filenameOrPath: string): string {
  if (!isString(filenameOrPath)) {
    return '';
  }

  const filename = getFilenameByPath(filenameOrPath);
  return filename.includes('.') ? filename.split('.').pop()! : '';
}
