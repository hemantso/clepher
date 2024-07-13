import React, { useState, useEffect } from 'react';
import { getStockData } from '../services/alphaVantage';
import { StockDataProps, StockApiResponse } from '../types/alphaVantage';
import StockTable from './StockTable';
import Pagination from './Pagination';
import Loading from './Loading';
import Error from './Error';
import NoData from './NoData';

const StockData: React.FC<StockDataProps> = ({ symbol, func }) => {
  const [data, setData] = useState<StockApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const rowsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      setCurrentPage(1);
      try {
        const result = await getStockData(symbol, func);
        setData(result);
      } catch (err) {
        setError('Failed to fetch data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [symbol, func]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} />;
  }

  if (!data || (!data['Time Series (Daily)'] && !data['Weekly Time Series'] && !data['Monthly Time Series'])) {
    return <NoData />;
  }

  const timeSeries = data['Time Series (Daily)'] || data['Weekly Time Series'] || data['Monthly Time Series'] || {};
  const entries = Object.entries(timeSeries);
  const totalPages = Math.ceil(entries.length / rowsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const currentEntries = entries.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md overflow-x-auto">
      <h2 className="text-xl font-bold mb-4 text-center">{symbol} Stock Data</h2>
      <StockTable data={currentEntries} />
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default StockData;
