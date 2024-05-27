import React from 'react';
import { FormattedCurrencyProps } from './formatted-currency.type';
import { CurrencyFormatterService } from '../../configuration';

export const currencyFormatter = new Intl.NumberFormat('en-US', {
  maximumFractionDigits: 0,
});

export const FormattedCurrency: React.FC<FormattedCurrencyProps> = ({
  value,
  isColored = true,
  isCompact = true,
  defaultText = '',
}) => {
  if (value == null) return <span>{defaultText}</span>;

  let text = CurrencyFormatterService?.format(value, isCompact);
  let color = '';

  if (isColored) {
    if (value < 0) color = 'text-danger';
    if (value > 0) color = 'text-success';
  }

  if (value < 0) text = `${text}`;

  return <span className={color}>{text}</span>;
};
