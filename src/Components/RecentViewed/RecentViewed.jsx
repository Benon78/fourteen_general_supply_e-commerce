import './RecentViewed.css'
import { useContext } from 'react';
import { shopContext } from '../Context/ShopContext';
import Carousel from '../Carousel/Carousel'

const RecentViewed = () => {
  const { recentView } = useContext(shopContext);
  if (!recentView || recentView.length === 0) return null;
  return (
    <div className='recent'>
      <h2>Recently viewed Products</h2>
      <hr />
      <Carousel products={recentView}/>
    </div>
  );
}

export default RecentViewed;