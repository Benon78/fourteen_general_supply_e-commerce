import './RecentViewed.css'
import Item from './../Item/Item';
import { useContext } from 'react';
import { shopContext } from '../Context/ShopContext';
const RecentViewed = () => {
    const { recentView } = useContext(shopContext)
  return (
    
    recentView && recentView.length > 0 ?(
        <div className='recent'>
       <h1>Recently viewed Products</h1>
       <hr />
       <div className="recent-item">
        {
         recentView.map((item,i)=>{
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
        ): null
  )
}

export default RecentViewed