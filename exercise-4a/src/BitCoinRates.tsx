import React, { useState, useEffect } from 'react';

function BitcoinRates() {
  const [currency, setCurrency] = useState('USD');
  const [rate, setRate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
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
    }

    fetchData();
  }, [currency]); // Dependency array ensures fetchData is called when currency changes

  return (
    <div>
      <h1>Current Bitcoin Rates</h1>
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
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