import { isString } from '../general';

// eslint-disable-next-line complexity
export function phpIsSerialized(str: string, strict = true): boolean {
  let string = str;
  // if it isn't a string, it isn't serialized.
  if (!isString(string)) {
    return false;
  }

  string = string.trim();
  if (string === 'N;') {
    return true;
  }
  if (string.length < 4) {
    return false;
  }
  if (string[1] !== ':') {
    return false;
  }
  if (strict) {
    const lastc = string.slice(-1);
    if (lastc !== ';' && lastc !== '}') {
      return false;
    }
  } else {
    const semicolon = string.indexOf(';');
    const brace = string.indexOf('}');
    // Either ; or } must exist.
    if (semicolon === -1 && brace === -1) {
      return false;
    }
    // But neither must be in the first X characters.
    if (semicolon !== -1 && semicolon < 3) {
      return false;
    }
    if (brace !== -1 && brace < 4) {
      return false;
    }
  }

  let end: string;
  const token = string[0];
  switch (token) {
    case 's':
      if (strict) {
        if (string.slice(-2, -1) !== '"') {
          return false;
        }
      } else if (!string.includes('"')) {
        return false;
      }
    // or else fall through
    case 'a':
    case 'O':
      return new RegExp(`^${token}:[0-9]+:`, 's').test(string);
    case 'b':
    case 'i':
    case 'd':
      end = strict ? '$' : '';
      return new RegExp(`^${token}:[0-9.E+-]+;${end}`).test(string);
  }
  return false;
}
