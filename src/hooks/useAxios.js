import { useState } from 'react';
import axios from 'axios';

export const useAxios = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const doPost = async (method,url, postData) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios[method](url, postData);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, data, error, doPost };
};

