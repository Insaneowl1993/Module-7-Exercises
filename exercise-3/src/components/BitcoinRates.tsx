import React, { useState, useEffect, useContext } from 'react';
import { MoodContext } from './MoodContext';

function BitcoinRates() {
  const { emoji } = useContext(MoodContext);
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
  }, [currency]);

  return (
    <div>
      <h1>Current Bitcoin Rates</h1>
      <p>Current Mood: {emoji}</p>
      <select value={currency} onChange={e => setCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
      </select>
      <div>
        {loading ? 'Loading...' : `1 BTC = ${rate} ${currency}`}
      </div>
    </div>
  );
}

export default BitcoinRates;