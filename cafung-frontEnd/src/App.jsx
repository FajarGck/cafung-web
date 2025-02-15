import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ProductsPage from './pages/ProductsPage'
import NotFound from './pages/NotFound'
import CreateFormProduct from './components/CreateFormProduct';


function App() {
  

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/form" element={<CreateFormProduct />} />
        <Route path="*" element={<NotFound />} />
        
        {/* <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer />
    </>
  )
}

export default App
