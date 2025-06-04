import './Offers.css'
import { all_products } from '../../assets/data'
import Item from '../Item/Item'

const Offers = () => {
    const offersProduct = all_products.filter((item) => item.category === 'New Laptops').slice(0,4)
  return (
    <div className='offers'>
        <div className="offers-left">
            <h3>New Arivals</h3>
            <p>Amazing Laptops in stock Now!</p>
            <button>Shop Offers</button>
        </div>
        <div className="offers-right">
            {
               offersProduct.map((item,i)=>{
                return <Item key={i}
                            id={item.id}
                            image={item.image}
                            name={item.name}
                            old_price={item.oldPrice}
                            new_price={item.newPrice}
                            />
               }) 
            }
        </div>
    </div>
  )
}

export default Offers