import { isString } from '../general';
import { getFilenameByPath } from './get-filename-by-path';

export function getFilenameWOutExtByName(filenameOrPath: string): string {
  if (!isString(filenameOrPath)) {
    return '';
  }

  const filename = getFilenameByPath(filenameOrPath);
  return filename.includes('.') ? filename.split('.').slice(0, -1).join('.') : filename;
}
