export function currencyToNumber(amount: string | undefined) {
  return amount?.replace(/,/g, '');
}

export function isNumber(number: string | undefined) {
  return !!number?.match(/^-?\d+\.?\d*$/);
}

export function parseNumber(txt: string | undefined): number {
  const value = currencyToNumber(txt);
  if (!isNumber(value)) return NaN;
  return Number(value);
}

export function sum(a: any[], unaryOperators?: (1 | -1)[]): number {
  return a.reduce((p, c, i) => {
    if (isNaN(c)) return p;
    return p + c * (unaryOperators?.[i] ?? 1);
  }, 0);
  // return sumBy(a, (e) => (Number.isNaN(e) ? 0 : e));
}
