import './Offers.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { shopContext } from './../Context/ShopContext';
import Carousel from '../Carousel/Carousel'

const Offers = () => {
  const {all_products} = useContext(shopContext)
    const offersProduct = all_products.filter((item) => item.category === 'New Laptops');
  return (
    <div className='offers'>
        <div className="offers-left">
            <h3>New Arivals</h3>
            <p>Amazing Laptops in stock Now!</p>
           <Link to='/products/laptops'><button>Shop Offers</button></Link> 
        </div>
        <div className="offers-right">
          <Carousel products={offersProduct}/>
        </div>
    </div>
  )
}

export default Offers