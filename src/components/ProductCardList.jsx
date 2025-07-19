import React, { useContext } from 'react';
import ProductCard from './ProductCard';
import { CartContext, SearchContext } from '../context/context';
import ProductListHeader from './ProductListHeader';
import NoFound from './NoFound';


const ProductCardList = () => {
  const { productCards, setProductCards } = useContext(CartContext);
  const { searchText } = useContext(SearchContext);

  //sort functionality:
  const handleSortProduct = (sortOption) => {

    const sortProducts = [...productCards]
    if (sortOption.toLowerCase() === "most popular") {
      setProductCards(sortProducts.sort((a, b) => b.rating - a.rating))
    }
    else if (sortOption.toLowerCase() === "low to high") {
      setProductCards(sortProducts.sort((a, b) => a.price - b.price))
    }
    else if (sortOption.toLowerCase() === "high to low") {
      setProductCards(sortProducts.sort((a, b) => b.price - a.price))
    }
    else if (sortOption.toLowerCase() === "newest") {
      setProductCards(sortProducts.sort((a, b) => new Date(b.date) - new Date(a.date)));
    }
  }

  //filter functionality:
  const filteredProductCards = productCards.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())
  );


  return (
    <div className="lg:col-span-2">
      <ProductListHeader onSortProduct={handleSortProduct} />

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