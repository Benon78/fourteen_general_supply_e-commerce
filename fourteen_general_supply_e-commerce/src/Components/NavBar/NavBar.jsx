import "./NavBar.css";
import logo_img from "../../assets/images/Logo.jpg";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
  const styled = {
    textDecoration: "underline",
    fontSize: "1.25rem",
    fontWeight: "500",
    color: "#FF6A00",
  };
  return (
    <div className="navBar">
      <div className="nav-logo">
        <Link to='/'><img src={logo_img} alt="logo" /></Link>
      </div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" style={({isActive}) => (isActive ? styled : null)}>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            style={({isActive}) => (isActive ? styled : null)}
          >
            SHOP
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            style={({isActive}) => (isActive ? styled : null)}
          >
            CONTACT
          </NavLink>
        </li>
      </ul>
      <div className="nav-search">
        <input type="text" placeholder="Search..." />
        <button>
          <FaSearch />
        </button>
      </div>
      <div className="login-cart-btn">
        <Link to='/login'><button>Login</button></Link>
        <div className="cart-icon-container">
          <Link to='/cart'><FaShoppingCart className="cart-icon"/></Link>
          <p className="cart-count">0</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
