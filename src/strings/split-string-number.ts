import { isNumber, isString } from '../general';

// splitStringNumber( 'chacho123' ); -> [ 'chacho', '123' ]
// splitStringNumber( '123.456' ); -> [ '123', '.', '456' ]
// splitStringNumber( '123.456', '.' ); -> [ '123', '456' ]
// splitStringNumber( 'chacho loco', ' ' ); -> [ 'chacho', 'loco' ]

export function splitStringNumber(str: string, sep = '|'): string[] {
  let string = str;
  isNumber(string) && (string = String(string));

  if (!isString(string)) {
    return [];
  }

  return string
    .replace(/(\d+)/g, `${sep}$1${sep}`)
    .split(sep)
    .filter((s) => !!s);
}
