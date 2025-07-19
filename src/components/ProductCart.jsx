
import React, { useContext } from 'react';
import { getImgUrl } from '../utils.js/utility';
import { CartContext } from '../context/context';

const ProductCart = ({ cartItem }) => {
    const { productCards, setProductCards, handleDeleteFromCart, setSelectedCarts } = useContext(CartContext);




    const handleQuantity = (type) => {
        const foundCard = productCards.find(item => item.id === cartItem.id)

        if (type === "add" && foundCard.stock > 0) {
            // কার্টের মধ্যে ঐ কার্ডের কোয়ান্টিটি পার ক্লিকে ১ করে বাড়ানো হচ্ছে একই সাথে কার্ডলিস্টের মধ্যে ঐ কার্ডের কোয়ান্টিটি ১ করে কমানো হচ্ছে।
            //implement with updater function:
           setProductCards(prev => prev.map(item => item.id === cartItem.id ? { ...item, stock: item.stock - 1 } : item));
           //implement with updater function:
            setSelectedCarts((prev) => prev.map(item => item.id === cartItem.id ? { ...item, quantity: item.quantity + 1 } : item));
            
        }
        if (type === "substract" && cartItem.quantity > 1) {
            // কার্টের মধ্যে ঐ কার্ডের কোয়ান্টিটি পার ক্লিকে ১ করে কমানো হচ্ছে একই সাথে কার্ডলিস্টের মধ্যে ঐ কার্ডের কোয়ান্টিটি ১ করে বাড়ানো হচ্ছে।
            //implement with updater function:
            setProductCards(prev => prev.map(item => item.id === cartItem.id ? { ...item, stock: item.stock + 1 } : item));
            //implement with updater function:
            setSelectedCarts((prev) => prev.map(item => item.id === cartItem.id ? { ...item, quantity: item.quantity - 1 } : item));

        }
    }


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
                        <button className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center"
                            onClick={() => handleQuantity("substract", cartItem)}
                        >
                            −
                        </button>
                        <span className="text-sm">{cartItem.quantity}</span>
                        <button className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center"
                            onClick={() => handleQuantity("add", cartItem)}
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
