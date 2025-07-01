import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaInstagramSquare,
  FaLinkedin,
  FaFacebookSquare,
} from "react-icons/fa";

function Footer() {
  const date = new Date();
  const getFullYear = date.getFullYear();
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-about">
          <h3>About Us</h3>
          <p>
            Fourteen General Supply is a shop for all your computer needs
            located in Dar es Salaam, Tanzania. With a wide range of products at
            affordable prices, Visit us today and let us help you find the
            perfect device to fit your needs.
          </p>
        </div>
        <div className="footer-links">
          <h3>Help & Support</h3>
          <ul>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link>FAQ</Link>
            </li>
            <li>
              <Link>Privacy Policy</Link>
            </li>
            <li>
              <Link>Shiping Policy</Link>
            </li>
            <li>
              <Link>Returns & Refunds</Link>
            </li>
          </ul>
        </div>
        <div className="footer-account">
          <h3>My Account</h3>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/cart">My Orders</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="footer-copyright">
        <div className="copyright">
          Copyright <span>&copy;</span> {getFullYear} Fourteen General Supply.
          All rights reserved.
        </div>
        <div className="social-icon">
          <Link to="https://www.instagram.com/fourteengeneral/" target="blank">
            <FaInstagramSquare className="icon" />
          </Link>
          <Link>
            <FaLinkedin className="icon" />
          </Link>
          <Link>
            <FaFacebookSquare className="icon" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
