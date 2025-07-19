import { products } from "../data/data";

const initialState = {
  productCards: [...products],
  selectedCarts: [],
  searchText: "",
  initialProductStock: [...products.map((p) => ({ id: p.id, stock: p.stock }))],
};

const reducerFunc = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT": {
      console.log(action.payload);
      const cartItem = { ...action.payload, quantity: 1 };
      return {
        ...state,
        productCards: state.productCards.map((item) =>
          item.id === action.payload.id
            ? { ...item, stock: item.stock - 1 }
            : item
        ),
        selectedCarts: [...state.selectedCarts, cartItem],
      };
    }
    case "DELETE_PRODUCT": {
      return {
        ...state,
        productCards: [
          ...state.productCards.map((p) =>
            p.id === action.payload.id
              ? { ...p, stock: action.payload.originalStock }
              : p
          ),
        ],
        selectedCarts: [
          ...state.selectedCarts.filter(
            (item) => item.id !== action.payload.id
          ),
        ],
      };
    }
    case "CHECKOUT_CARTS": {
      // Update productCards stock after checkout
      const updatedProductCards = state.productCards.map((product) => {
        const cartItem = state.selectedCarts.find(
          (item) => item.id === product.id
        );
        if (cartItem) {
          // This is where the stock is permanently reduced
          return { ...product, stock: product.stock };
        }
        return product;
      });

      // Also update the initial stock so that it reflects the new stock in the productCards
      const updatedInitialStock = updatedProductCards.map((p) => ({
        id: p.id,
        stock: p.stock,
      }));

      return {
        ...state,
        productCards: updatedProductCards,
        initialProductStock: updatedInitialStock,
        selectedCarts: [],
      };
    }
    case "UPDATE_CART_QUANTITY": {
      const { option, cart } = action.payload;
      const foundCard = state.productCards.find((item) => item.id === cart.id);

      if (option === "add" && foundCard.stock > 0) {
        return {
          ...state,
          selectedCarts: state.selectedCarts.map((item) =>
            item.id === cart.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
          productCards: state.productCards.map((item) =>
            item.id === cart.id ? { ...item, stock: item.stock - 1 } : item
          ),
        };
      }

      if (option === "substract" && cart.quantity > 1) {
        return {
          ...state,
          selectedCarts: state.selectedCarts.map((item) =>
            item.id === cart.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          ),
          productCards: state.productCards.map((item) =>
            item.id === cart.id ? { ...item, stock: item.stock + 1 } : item
          ),
        };
      }
      return state; // Return current state if conditions are not met
    }
    case "FILTER_CARDS":{
      const sortProducts = [...state.productCards]
    if (action.payload.toLowerCase() === "most popular") {
      return {
        ...state,
        productCards:sortProducts.sort((a, b) => b.rating - a.rating)
      }
    }
    else if (action.payload.toLowerCase() === "low to high") {
      return {
        ...state,
        productCards:sortProducts.sort((a, b) => a.price - b.price)
      }
    }
    else if (action.payload.toLowerCase() === "high to low") {
      return {
        ...state,
        productCards:sortProducts.sort((a, b) => b.price - a.price)
      }
    }
    else if (action.payload.toLowerCase() === "newest") {
      return {
        ...state,
        productCards:sortProducts.sort((a, b) => new Date(b.date) - new Date(a.date))
      }
    }
    return state;
    }
    case "SEARCH_CARDS":{
      return {
        ...state,
        searchText:action.payload
      }
    }
    default:
      return state;
  }
};

export { initialState, reducerFunc };
