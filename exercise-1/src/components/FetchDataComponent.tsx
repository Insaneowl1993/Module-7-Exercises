import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const FetchData = () => {
  const [data, setData] = useState([]);

  // Using useCallback to memoize the fetchData function so it doesn't cause useEffect to re-run
  const fetchData = useCallback(async () => {
    const result = await axios('https://jsonplaceholder.typicode.com/posts');
    setData(result.data);
  }, []); // Empty array ensures this effect will only run once like componentDidMount

  useEffect(() => {
    fetchData();
  }, [fetchData]); // fetchData is now stable and won't cause this effect to re-run

  return (
    <div>
      {data.map((item) => (
        <ChildComponent key={item.id} fetchData={fetchData} title={item.title} />
      ))}
    </div>
  );
};

const ChildComponent = ({ fetchData, title }) => (
  <div>
    <p>{title}</p>
    <button onClick={fetchData}>Fetch Data Again</button>
  </div>
);

export default FetchData;