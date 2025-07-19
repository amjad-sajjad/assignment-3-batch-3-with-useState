import React from 'react';
import ProductCartList from './ProductCartList';
import ProductCardList from './ProductCardList';

const ProductsBoard = () => {
  
  return (
   <main className="container mx-auto px-4 md:px-8 py-8">
    <div className="grid grid-cols-1 lg:grid-cols-3 border-2 gap-8">
      {/* <!-- Products Section (2/3 width on large screens) --> */}
      <ProductCardList/>
      {/* <!-- Cart Section (1/3 width on large screens) --> */}
     <ProductCartList/>
    </div>
  </main>
  );
};

export default ProductsBoard;