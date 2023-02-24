import React, { useState } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import ProductsHeader from '../../components/Product/ProductsHeader/ProductsHeader';
import ProductsTable from '../../components/Product/ProductsTable/ProductsTable';
import NewProduct from './NewProduct/NewProduct';
import useProductMockup from 'src/hooks/useProductMockup';

const Product = () => {
  const [addProduct, setAddProduct] = useState<boolean>(false);
  const { data, product, isLoading, setProduct } = useProductMockup();

  const hanldeAddProduct = (id?: number): void => {
    if (id) {
      setProduct(data[id - 1]);
    } else {
      setProduct({});
    }
    setAddProduct(!addProduct);
  };

  if (addProduct) {
    return (
      <>
        {isLoading ? (
          <ActivityIndicator size={100} />
        ) : (
          <NewProduct hanldeAddProduct={hanldeAddProduct} product={product} />
        )}
      </>
    );
  }

  return (
    <View style={styles.container}>
      <ProductsHeader hanldeAddProduct={hanldeAddProduct} />
      {isLoading ? (
        <ActivityIndicator size={100} />
      ) : (
        <ProductsTable
          hanldeAddProduct={hanldeAddProduct}
          data={data}
          isLoading={isLoading}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Product;
