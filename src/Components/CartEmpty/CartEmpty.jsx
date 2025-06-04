import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
function CartEmpty() {
  return (
    <div className="cart-empty">
            <FaShoppingCart className="cart-icon"/>
            <p>Your Cart Is Empty</p>
            <Link to='/products'><button>Shop Our Products</button></Link>
    </div>
  )
}

export default CartEmpty