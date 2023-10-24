// type( (new Date()) ); -> "date"

export function type(value: any, strict = false): string {
  let type = Object.prototype.toString
    .call(value)
    .match(/\s([A-Za-z]+)/)![1]
    .toLowerCase();

  if (
    type === 'function' &&
    value.prototype &&
    Object.getOwnPropertyNames(value.prototype).includes('constructor') &&
    /^\s*class/.test(value.toString())
  ) {
    type = 'class';
  }

  if (strict && typeof value === 'object') {
    return value.constructor.name;
  }

  return type;
}
