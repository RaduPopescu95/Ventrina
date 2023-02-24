import { getNews } from 'src/api/getNews';
import React, { useEffect, useState } from 'react';

const useNewsMockup = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    getNews(setData, setLoading);
  }, []);

  return { data, isLoading, setData, setLoading };
};
export default useNewsMockup;
