import { isString } from '../general';
import { slugify } from '../strings';
import { getFilenameByPath } from './get-filename-by-path';
import { getFilenameExtByName } from './get-filename-ext-by-name';
import { getFilenameWOutExtByName } from './get-filename-wout-ext-by-name';

export function slugifyFilename(filenameOrPath: string): string {
  if (!isString(filenameOrPath)) {
    return '';
  }

  const filename = getFilenameByPath(filenameOrPath);

  return filename.lastIndexOf('.') === -1
    ? slugify(getFilenameWOutExtByName(filename))
    : `${slugify(getFilenameWOutExtByName(filename))}.${getFilenameExtByName(filename)}`;
}
