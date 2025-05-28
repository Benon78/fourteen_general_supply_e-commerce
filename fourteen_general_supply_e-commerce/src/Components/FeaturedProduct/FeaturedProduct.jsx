import './FeaturedProduct.css'
import { all_products } from './../../assets/data';
import Item from '../Item/Item';
const FeaturedProduct = () => {
    const featuredProduct = all_products.slice(1,5)
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