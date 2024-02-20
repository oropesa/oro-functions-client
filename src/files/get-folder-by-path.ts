import { isNumeric } from '../numbers';
import { sanitizePath } from './sanitize-path';

export function getFolderByPath(path: string, deep = 1): string {
  let filename = sanitizePath(path);
  if (filename.slice(-1) === '/') {
    filename = filename.slice(0, -1);
  }

  const folderDeep = !isNumeric(deep) || Number(deep) < 1 ? 1 : Number(deep);
  for (let index = 0; index < folderDeep; index++) {
    const lastBar = filename.lastIndexOf('/');
    if (lastBar === -1) {
      return '';
    }

    filename = filename.slice(0, lastBar);
  }

  return filename;
}
