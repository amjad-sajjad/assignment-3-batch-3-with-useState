import React, { useReducer } from 'react';
import { ProductContext } from '../context/index.js';
import { initialState, reducerFunc } from '../reducer/reducer.js';

const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducerFunc, initialState);

    const handleAddToCart = (cart) => {
        const found = state.selectedCarts.find(item => item.id === cart.id);
        if (!found) {
            dispatch({
                type: "ADD_PRODUCT",
                payload: cart
            });
        } else {
            alert("cart is already added...");
        }
    };

    const handleDeleteFromCart = (cartId) => {
        const originalStock = state.initialProductStock.find(p => p.id === cartId)?.stock;
        if (originalStock !== undefined) {
            dispatch({
                type: "DELETE_PRODUCT",
                payload: {
                    originalStock: originalStock,
                    id: cartId
                }
            });
        }
    };

    const handleQuantity = (option, cartItem) => {
        dispatch({
            type: "UPDATE_CART_QUANTITY",
            payload: {
                cart: cartItem,
                option: option
            }
        });
    };

    //sort functionality:
    const handleSortProduct = (sortOption) => {
        dispatch({
            type: "FILTER_CARDS",
            payload: sortOption
        });
    };

    //search functionality:
    const handleSearch = (text) => {
        dispatch({
            type: "SEARCH_CARDS",
            payload: text
        })

    }
    const filteredProductCards = state.productCards.filter((product) =>
        product.name.toLowerCase().includes(state.searchText.toLowerCase())
    );

    return (
        <ProductContext.Provider value={{ state, dispatch, handleAddToCart, handleDeleteFromCart, handleQuantity, handleSortProduct, handleSearch, filteredProductCards }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;