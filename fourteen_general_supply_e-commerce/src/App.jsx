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
function App() {
 
  return (
  <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/products' element={<Product/>}>
        <Route path='laptops' element={<ProductCategory category='laptops'/>}/>
        <Route path='tablets' element={<ProductCategory category='tablets'/>}/>
        <Route path='desktops' element={<ProductCategory category='desktops'/>}/>
        <Route path='mobile-phones' element={<ProductCategory category='mobile-phones'/>}/>
        <Route path='accessories' element={<ProductCategory category='accessories'/>}/>
        <Route path='printers' element={<ProductCategory category='printers'/>}/>
      </Route>
      <Route path='/products/:productId' element={<ProductDetail/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<LoginSignup/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
