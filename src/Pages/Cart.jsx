import CartItems from '../Components/CartItems/CartItems'
import './CSS/Cart.css'
import Support from './../Components/Support/Support';

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart-contents">
      <h1>My Cart</h1>
      <CartItems/>
      <Support/>
      </div>
    </div>
  )
}

export default Cart