export type arrayize = <T, O extends object = object, B extends boolean = boolean>( strOrObject: string | O, strict?: B ) => B extends true ? T | null : T | string;