import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

const ChildComponent = ({ fetchData, title }) => (
  <div>
    <p>{title}</p>
    <button onClick={fetchData}>Fetch Data Again</button>
  </div>
);

const DataFetcher = () => {
  const [data, setData] = useState([]);

  // useCallback is used to memoize the fetchData function so that it isn't recreated on every render
  const fetchData = useCallback(async () => {
    try {
      const result = await axios('https://jsonplaceholder.typicode.com/posts');
      setData(result.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      {data.map((item) => (
        <ChildComponent key={item.id} fetchData={fetchData} title={item.title} />
      ))}
    </div>
  );
};

export default DataFetcher;