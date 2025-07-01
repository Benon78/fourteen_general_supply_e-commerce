import './FeaturedProduct.css'
import Item from '../Item/Item';
import { useContext } from 'react';
import { shopContext } from '../Context/ShopContext';
import Carousel from '../Carousel/Carousel'
const FeaturedProduct = () => {
  const {all_products} = useContext(shopContext)
  return (
    <div className='featured'>
       <h1>featured products</h1>
       <hr />
       <Carousel products={all_products}/>
    </div>
  )
}

export default FeaturedProduct