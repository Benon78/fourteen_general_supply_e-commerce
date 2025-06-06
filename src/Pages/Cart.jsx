import CartItems from '../Components/CartItems/CartItems'
import './CSS/Cart.css'
import Support from './../Components/Support/Support';
import RecentViewed from '../Components/RecentViewed/RecentViewed';
import { usePageTittle } from '../Components/utils/Helper';


const Cart = () => {
  usePageTittle('Cart - Fourteen General Supply');
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