export interface StockDataPoint {
  '1. open': string;
  '2. high': string;
  '3. low': string;
  '4. close': string;
  '5. volume': string;
}

export interface StockApiResponse {
  'Time Series (Daily)'?: {
    [date: string]: StockDataPoint;
  };
  'Weekly Time Series'?: {
    [date: string]: StockDataPoint;
  };
  'Monthly Time Series'?: {
    [date: string]: StockDataPoint;
  };
}

export interface StockDataProps {
  symbol: string;
  func: string;
}

export interface DropdownOption {
  value: string;
  label: string;
}
