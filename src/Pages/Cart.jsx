import CartItems from '../Components/CartItems/CartItems'
import './CSS/Cart.css'
import Support from './../Components/Support/Support';
import RecentViewed from '../Components/RecentViewed/RecentViewed';

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart-contents">
      <h1>My Cart</h1>
      <CartItems/>
      <RecentViewed/>
      <Support/>
      </div>
    </div>
  )
}

export default Cart