import { getProducts } from '../api/getProducts';
import React, { useEffect, useState } from 'react';

const useNewsMockup = () => {
  const [isLoading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<[]>([]);
  const [product, setProduct] = useState<{
    id?: number;
    title?: string;
    price?: string;
    cathegory?: string;
    description?: string;
    image?: string;
  }>({});

  useEffect(() => {
    getProducts(setData, setLoading, setProduct);
  }, []);

  return { data, product, isLoading, setProduct, setData, setLoading };
};
export default useNewsMockup;
