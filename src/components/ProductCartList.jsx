import React from 'react';
import OrderSummary from './OrderSummary';
import ProductCart from './ProductCart';
import { useProductContext } from '../context/index.js';
import NoFound from './NoFound';

const ProductCartList = () => {
  const {state} = useProductContext();

  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-lg p-6 border border-gray-200">
        <h2 className="text-2xl font-bold mb-6">YOUR CART</h2>

        {/* <!-- Cart Item --> */}
        {
          state.selectedCarts.length > 0 ? state.selectedCarts.map((cartItem) => (<ProductCart
            key={cartItem.id}
            cartItem={cartItem}
          />)): <NoFound textSize="text-xl">Carts</NoFound>
        }
        {/* <!-- Order Summary --> */}
        <OrderSummary />
      </div>
    </div>
  );
};

export default ProductCartList;