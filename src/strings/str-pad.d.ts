export type strPad = (
    str: string | number,
    length: number,
    pad?: string | number,
    leftRight?: 'left' | 'right'
) => string;