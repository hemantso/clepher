import { DropdownOption } from '../types/alphaVantage';

export const symbols: DropdownOption[] = [
  { value: 'AAPL', label: 'AAPL' },
  { value: 'GOOGL', label: 'GOOGL' },
  { value: 'MSFT', label: 'MSFT' },
  { value: 'AMZN', label: 'AMZN' },
  { value: 'TSLA', label: 'TSLA' },
];

export const functions: DropdownOption[] = [
  { value: 'TIME_SERIES_DAILY', label: 'Daily' },
  { value: 'TIME_SERIES_WEEKLY', label: 'Weekly' },
  { value: 'TIME_SERIES_MONTHLY', label: 'Monthly' },
];
