import React from 'react';
import ProductCard from './ProductCard';
import {  useProductContext } from '../context';
import ProductListHeader from './ProductListHeader';
import NoFound from './NoFound';


const ProductCardList = () => {
  const { filteredProductCards} = useProductContext();

  return (
    <div className="lg:col-span-2">
      <ProductListHeader />

      {/* <!-- Products Grid --> */}
      <div className="product-grid">
        {/* <!-- All Products --> */}
        {filteredProductCards.length > 0 ? (
          filteredProductCards.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <NoFound>Products</NoFound>
        )}
      </div>
    </div >
  )
};

export default ProductCardList