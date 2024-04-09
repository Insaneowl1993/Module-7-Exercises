import React, { useState, useEffect } from 'react';
import ClickCounter from './components/ClickCounter';
import TodoApp from './components/TodoApp';
import PostListReducer from './components/UseReducer';
import Child from './components/Child';
import MemoChild from './components/MemoChild';
import DataFetcher from './components/DataFetcher';
import Fibonacci from './components/Fibonacci';

function BitcoinRates() {
  const [currency, setCurrency] = useState('USD');
  const [rate, setRate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      // Simulate fetching data from an API
      setTimeout(() => {
        const fakeApiResponse = {
          USD: '20,000',
          EUR: '18,000',
          GBP: '16,000',
        };
        setRate(fakeApiResponse[currency]);
        setLoading(false);
      }, 1000);
    };
    

    fetchData();

    // Cleanup function to cancel the API request if the component unmounts
    return () => clearTimeout(fetchData);
  }, [currency]);

  return (
    <div>
      <h1>Current Bitcoin Rate</h1>
      <select value={currency} onChange={e => setCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
      </select>
      <div>
        {loading ? 'Loading...' : `1 BTC = ${rate} ${currency}`}
      </div>
      <DataFetcher />
      <ClickCounter />
      <TodoApp />
      <PostListReducer />
      <Child name="John" />
      <MemoChild name="John" />
      <Fibonacci />
    </div>
  );
}

export default BitcoinRates;