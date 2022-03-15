import numeral from "numeral";

export const INT_FROMAT = '0,0';

export const PERCENT_FORMAT = '0.00%';

export const MONEY_FORMAT = '0,0.00';

const formatNum = (num: string | number, format: string): string => numeral(num).format(format);

export default formatNum;