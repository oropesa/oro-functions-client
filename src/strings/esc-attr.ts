import { htmlspecialchars } from 'oro-php-locutus';

import { isNully, isString } from '../general';

export function escAttr(str: string) {
  let string = isNully(str) ? '' : !isString(str) ? String(str) : str;

  // wp_check_invalid_utf8 / .match fails when it encounters invalid UTF8 in $string.
  if (string.length === 0 || !/^./su.test(string) || string.match(/^./su)?.length !== 1) {
    return '';
  }

  // _wp_specialchars / Don't bother if there are no specialchars - saves some processing.
  if (!/["&'<>]/.test(string)) {
    return string;
  }

  // wp_kses_normalize_entities / Disarm all entities by converting & to &amp;
  string = string.replace(/&/g, '&amp;');

  string = htmlspecialchars(string, 'ENT_QUOTES', null, false);

  return string;
}
