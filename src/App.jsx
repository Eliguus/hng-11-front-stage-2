import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
function App() {
  return (
    <>
      <Header />
      {/* <HomePage /> */}
      {/* <ProductsPage/> */}
      {/* <CartPage/> */}
      <CheckoutPage />
      <Footer />
    </>
  )
}

export default App
