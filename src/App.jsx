import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
function App() {
  return (
    <>
      <Header />
      {/* <HomePage /> */}
      <ProductsPage/>
      <Footer />
    </>
  )
}

export default App
