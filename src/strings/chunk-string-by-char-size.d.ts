export type chunkStringByCharSize = (
    str: string,
    char: string,
    size: number,
    orientation?: 'left' | 'right'
) => string;