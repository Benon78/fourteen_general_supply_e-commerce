import './FeaturedProduct.css'
import Item from '../Item/Item';
import { useContext } from 'react';
import { shopContext } from '../Context/ShopContext';
const FeaturedProduct = () => {
  const {all_products} = useContext(shopContext)
    const featuredProduct = all_products.slice(0,5)
  return (
    <div className='featured'>
       <h1>featured products</h1>
       <hr />
       <div className="featured-item">
        {
            featuredProduct.map((item,i)=>{
                return <Item key={i}
                            id={item.id}
                            name={item.name}
                            image={item.image}
                            old_price={item.oldPrice}
                            new_price = {item.newPrice}
                                />
            })
        }
       </div>
    </div>
  )
}

export default FeaturedProduct