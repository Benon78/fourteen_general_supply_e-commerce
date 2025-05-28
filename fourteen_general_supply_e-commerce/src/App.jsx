import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar/NavBar.jsx'
import Shop from './Pages/Shop.jsx'
import Product from './Pages/Product';
import Contact from './Pages/Contact';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import About from './Pages/About';
import NotFoundPage from './Pages/NotFoundPage.jsx';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import ProductCategory from './Pages/ProductCategory';
import Footer from './Components/Footer/Footer.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
function App() {
 
  return (
  <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' errorElement={<ErrorPage/>} element={<Shop/>}/>
      <Route path='/products' errorElement={<ErrorPage/>} element={<Product/>}>
        <Route path=':category' errorElement={<ErrorPage/>} element={<ProductCategory/>}/>
      </Route>
      <Route path='/product/:productId' errorElement={<ErrorPage/>} element={<ProductDetail/>}/>
      <Route path='/contact' errorElement={<ErrorPage/>} element={<Contact/>}/>
      <Route path='/login' errorElement={<ErrorPage/>} element={<LoginSignup/>}/>
      <Route path='/cart' errorElement={<ErrorPage/>} element={<Cart/>}/>
      <Route path='/about' errorElement={<ErrorPage/>} element={<About/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
  )
}

export default App
