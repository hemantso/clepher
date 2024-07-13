import React, { useState } from 'react';
import StockData from './components/StockData';
import Dropdown from './components/Dropdown';
import { symbols, functions } from './constants/stocks';

const App: React.FC = () => {
  const [symbol, setSymbol] = useState<string>(symbols[0].value);
  const [func, setFunc] = useState<string>(functions[0].value);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4">Alpha Vantage Stock Data</h1>
        <Dropdown options={symbols} value={symbol} onChange={setSymbol} />
        <Dropdown options={functions} value={func} onChange={setFunc} />
        
      </div>
      <StockData symbol={symbol} func={func} />
    </div>
  );
};

export default App;
