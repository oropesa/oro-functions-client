export type jsonParse = <T, B extends boolean = boolean>( str: string, strict?: B ) => B extends true ? T | null : T | string;