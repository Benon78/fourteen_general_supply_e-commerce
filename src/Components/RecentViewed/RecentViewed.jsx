import './RecentViewed.css'
import Item from './../Item/Item';
import { useContext, useRef, useState, useEffect, useCallback } from 'react';
import { shopContext } from '../Context/ShopContext';

const RecentViewed = () => {
  const { recentView } = useContext(shopContext);
  const scrollRef = useRef(null);
  
  // State for dynamic scroll amount based on viewport size
  const [scrollAmount, setScrollAmount] = useState(300); // default for small screens
  
 // Update scroll amount based on window size
  useEffect(() => {
    const updateScrollAmount = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setScrollAmount(300);
      } else if (width >= 768) {
        setScrollAmount(200);
      } else {
        setScrollAmount(150);
      }
    };

    window.addEventListener('resize', updateScrollAmount);
    updateScrollAmount();

    return () => window.removeEventListener('resize', updateScrollAmount);
  }, []);
  

  const scrollLeft = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollAmount*5, behavior: 'smooth' });
    }
  }, [scrollAmount]);

  const scrollRight = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollAmount*5, behavior: 'smooth' });
    }
  }, [scrollAmount]);

  if (!recentView || recentView.length === 0) return null;

  return (
    <div className='recent'>
      <h1>Recently viewed Products</h1>
      <hr />
      <div className="recent-carousel-controls">
        <button
          className="scroll-btn left"
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); scrollLeft(); }}
          aria-label="Scroll left"
          style={{
            cursor: 'pointer',
            transition: 'opacity 0.3s'
          }}
        >
          &lt;
        </button>
        <div className="recent-item-carousel" ref={scrollRef}>
          {recentView.map((item, i) => (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              old_price={item.oldPrice}
              new_price={item.newPrice}
            />
          ))}
        </div>
        <button
          className="scroll-btn right"
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); scrollRight(); }}
          aria-label="Scroll right"
          style={{
            cursor: 'pointer',
            transition: 'opacity 0.3s'
          }}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default RecentViewed;