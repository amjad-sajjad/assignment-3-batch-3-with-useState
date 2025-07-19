import React, { useContext } from 'react';
import { getImgUrl } from '../utils.js/utility';
import Rating from './Rating';
import { CartContext } from '../context/context';

const ProductCard = ({ product }) => {

  const { handleAddToCart, handleDeleteFromCart, selectedCarts } = useContext(CartContext);

  const isInCart = selectedCarts.find(item => item.id === product.id);
  let date
  if (product.date) {
    date = new Date(product.date);

  }
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <img src={getImgUrl(product.imgUrl)} alt="Gradient Graphic T-shirt"
          className="h-full w-auto object-cover" />
      </div>
      <div className="p-4">
        <h3 className="font-medium">{product.name} </h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center my-1">
            <Rating number={product.rating} />
            <span className="text-xs text-gray-500 ml-1">{product.rating}/5</span>
          </div>
          <span className="text-xs text-gray-700">({product.stock} pcs left)</span>
        </div>
        <div className='flex justify-between'>
          <p className="text-xs text-gray-700 ">{date.toDateString().slice(3)}</p>
          <p className="font-bold">${product.price} </p>
        </div>

        {
          (isInCart && product.stock > 0) ? (
            <button
              className="w-full mt-2 bg-red-800 py-1 text-gray-100 rounded flex items-center justify-center"
              onClick={() => handleDeleteFromCart(product.id)}
            >
              Remove from Cart
            </button>
          ) : (
            <button
              disabled={product.stock === 0}
              className="disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900 "
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          )
        }


      </div>
    </div>
  );
};

export default ProductCard;