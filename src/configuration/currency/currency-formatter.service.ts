import { floor } from 'lodash';

class CurrencyFormatterFactory {
  private currencyFormatter = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 0,
  });

  public format(value: number, compact?: boolean) {
    const number = floor(value);
    const formatNumber = this.currencyFormatter.format(Number.isNaN(number) || !number ? 0 : number);
    return compact ? this.compact(formatNumber) : formatNumber;
  }

  public compact(value: string) {
    const evnEnableCompact = process.env.CURRENCY_ENABLE_COMPACT;
    if (!evnEnableCompact || evnEnableCompact === 'false') {
      return value;
    }

    if (value.match(/[\d,]{8,}/)) return value.replace(/[\d,]{4}$/, 'K');
    return value;
  }
}

export const CurrencyFormatterService = new CurrencyFormatterFactory();
