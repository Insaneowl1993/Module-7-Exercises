import React, { useState, useEffect } from 'react';

// Clock component to demonstrate the useEffect hook for time updating
function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup function to clear the interval
    return () => clearInterval(interval);
  }, []);

  return <div>{time}</div>;
}

// Component to demonstrate fetching data with useEffect
function DataFetcher() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState('react');

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://hn.algolia.com/api/v1/search?query=${query}`);
      const result = await response.json();
      setData(result.hits);
    };

    fetchData();
  }, [query]);

  return (
    <div>
      <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
      <ul>
        {data.map(item => (
          <li key={item.objectID}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const [showClock, setShowClock] = useState(true);

  return (
    <div>
      {showClock && <Clock />}
      <button onClick={() => setShowClock(!showClock)}>
        {showClock ? 'Hide Clock' : 'Show Clock'}
      </button>
      <DataFetcher />
    </div>
  );
}

export default App;