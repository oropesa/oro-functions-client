export type numberPrintDecimals = (
    num: number | string,
    decimalLength?: number | false,
    allowAllRightZeros?: boolean,
    minRightZeros?: number | boolean,
) => string;
