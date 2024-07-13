import React from 'react';
import { StockDataPoint } from '../types/alphaVantage';
import { formatDate } from '../utils/formatDate';

interface StockTableProps {
  data: [string, StockDataPoint][];
}

const StockTable: React.FC<StockTableProps> = React.memo(({ data }) => (
  <table className="min-w-full table-auto">
    <thead>
      <tr className="bg-gray-200 text-center">
        <th className="py-2 px-4 border-b">Date</th>
        <th className="py-2 px-4 border-b">Open</th>
        <th className="py-2 px-4 border-b">High</th>
        <th className="py-2 px-4 border-b">Low</th>
        <th className="py-2 px-4 border-b">Close</th>
        <th className="py-2 px-4 border-b">Volume</th>
      </tr>
    </thead>
    <tbody>
      {data.map(([date, stockData], index) => (
        <tr key={date} className={`text-center ${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}>
          <td className="py-2 px-4 border-b whitespace-nowrap">{formatDate(date)}</td>
          <td className="py-2 px-4 border-b whitespace-nowrap">{stockData['1. open']}</td>
          <td className="py-2 px-4 border-b whitespace-nowrap">{stockData['2. high']}</td>
          <td className="py-2 px-4 border-b whitespace-nowrap">{stockData['3. low']}</td>
          <td className="py-2 px-4 border-b whitespace-nowrap">{stockData['4. close']}</td>
          <td className="py-2 px-4 border-b whitespace-nowrap">{stockData['5. volume']}</td>
        </tr>
      ))}
    </tbody>
  </table>
));

export default StockTable;
