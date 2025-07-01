import './Carousel.css'
import Item from './../Item/Item';
import {  useRef, useState, useEffect, useCallback } from 'react';

const RecentViewed = ({products}) => {
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

  return (
      <div className="carousel-controls">
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
        <div className="item-carousel" ref={scrollRef}>
          {products.map((item, i) => (
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
  );
}

export default RecentViewed;