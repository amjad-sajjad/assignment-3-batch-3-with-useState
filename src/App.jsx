import './index.css'
import Addvertisement from './components/Addvertisement'
import Header from './components/Header'
import ProductsBoard from './components/ProductsBoard'
import NewsLatter from './components/NewsLatter'
import Footer from './components/Footer'
import { CartContext, SearchContext } from './context/context'
import { useState } from 'react'
import { products } from './data/data'

function App() {
  const [productCards, setProductCards] = useState(products);
  const [selectedCarts, setSelectedCarts] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [initialProductStock, setInitialProductStock] = useState(products.map(p => ({ id: p.id, stock: p.stock })));


  const handleAddToCart = (cart) => {

    const cartItem = { ...cart, quantity: 1 }
    const found = selectedCarts.find(item => item.id === cart.id);
    if (!found) {

      //কোন কার্ডের এড-টু-কার্ড বাটনে ক্লিক করলে এটি সিলিক্টেড কার্ট হয়ে যাবে এবং ঐ কার্ডের প্রোডাক্ট-কোয়ান্টিটি এক কমে যাবে।
      setProductCards(prev => prev.map(item => item.id === cart.id ? { ...item, stock: item.stock - 1 } : item))
      setSelectedCarts([...selectedCarts, cartItem]);
    }
    else {
      alert("cart is already added...");
    }

  }

  const handleDeleteFromCart = (cartId) => {
    //  deleting the particular card from the cart
    const cartsAfterFilter = selectedCarts.filter(item => item.id !== cartId);

    // Find the original stock from our new state variable
    const originalStock = initialProductStock.find(p => p.id === cartId)?.stock;

    if (originalStock !== undefined) {
      // Reset the product's stock to the value stored in initialProductStock
      setProductCards(prev => prev.map((p) => (p.id === cartId) ? { ...p, stock: originalStock } : p));
    }

    setSelectedCarts(cartsAfterFilter);
  }


  const handleSearch = (text) => {
    setSearchText(text);
  }



  return (
    <>
      <SearchContext.Provider value={{ handleSearch, searchText }}>
        <CartContext.Provider value={{ productCards, setProductCards, selectedCarts, setSelectedCarts, handleAddToCart, handleDeleteFromCart, setInitialProductStock }}>
          <Addvertisement />
          <Header />
          <ProductsBoard />
          <NewsLatter />
          <Footer />
        </CartContext.Provider>
      </SearchContext.Provider>
    </>
  )
}

export default App
