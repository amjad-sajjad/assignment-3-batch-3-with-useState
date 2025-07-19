import './index.css'
import Addvertisement from './components/Addvertisement'
import Header from './components/Header'
import ProductsBoard from './components/ProductsBoard'
import NewsLatter from './components/NewsLatter'
import Footer from './components/Footer'
import ProductProvider from './provider/ProductProvider'


function App() {



  return (
    <>
        <ProductProvider>
          <Addvertisement />
          <Header />
          <ProductsBoard />
          <NewsLatter />
          <Footer />
        </ProductProvider>
    </>
  )
}

export default App
