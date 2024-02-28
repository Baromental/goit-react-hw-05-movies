import { useState, useEffect } from 'react';

export const useAsync = (fn, param) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fn(param);
        setData(result);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [fn, param]);

  return [data, setData, error];
};
