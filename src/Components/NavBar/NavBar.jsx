import "./NavBar.css";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { shopContext } from "../Context/ShopContext";
import { FiMenu } from "react-icons/fi";
const NavBar = () => {
  const {getTotalCartItem} = useContext(shopContext)
  const menuRef = useRef()
  const [windowWidth,setWindowWidth] = useState(window.innerWidth)

    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth)
    }

      useEffect(()=>{
          window.addEventListener('resize',updateWindowWidth)
          return ()=> window.removeEventListener('resize',updateWindowWidth)
      },[])

  const styled = {
    textDecoration: "underline",
    fontSize: windowWidth < 1000 ? " 1rem":"1.25rem",
    fontWeight: "500",
    color: "#FF6A00",
  };

  const dropdownToggle = (e)=>{
    menuRef.current.classList.toggle('nav-links-visible');
  }
  return (
    <div className="navBar">
      <div className="nav-logo">
        <Link to='/'><img src='/Image/Logo.jpg' alt="logo" /></Link>
      </div>
      
      <ul className="nav-links" ref={menuRef}>
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
          <p className="cart-count">{getTotalCartItem()}</p>
        </div>
        <FiMenu onClick={dropdownToggle} className="menu-icon"/>
      </div>
    </div>
  );
};

export default NavBar;
