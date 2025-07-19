
import React from 'react';
import { getImgUrl } from '../utils.js/utility';
import { useProductContext } from '../context';

const ProductCart = ({ cartItem }) => {
    const { state, handleDeleteFromCart, handleQuantity } = useProductContext();
    
    const productInStock = state.productCards.find(p => p.id === cartItem.id);
    const stock = productInStock ? productInStock.stock : 0;

    return (
        <div className="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4">
            <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
                <img src={getImgUrl(cartItem.imgUrl)} alt="Gradient Graphic T-shirt"
                    className="h-full w-auto object-cover" />
            </div>
            <div className="flex-grow">
                <div className="flex justify-between">
                    <h3 className="font-medium">{cartItem.name}</h3>
                    <button
                        onClick={() => handleDeleteFromCart(cartItem.id)}
                    ><span className="text-red-500 text-sm">×</span></button>
                </div>
                <p className="text-sm text-gray-500">Size: Large</p>
                <p className="text-sm text-gray-500">Color: White</p>
                <div className="flex justify-between items-center mt-2">
                    <p className="font-bold">${cartItem.price}</p>
                    <div className="flex items-center space-x-2">
                        <button className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center disabled:opacity-50"
                            onClick={() => handleQuantity("substract", cartItem)}
                            disabled={cartItem.quantity <= 1}
                        >
                            −
                        </button>
                        <span className="text-sm">{cartItem.quantity}</span>
                        <button className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center disabled:opacity-50"
                            onClick={() => handleQuantity("add", cartItem)}
                            disabled={stock <= 0}
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCart;
