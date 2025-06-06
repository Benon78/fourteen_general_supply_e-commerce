import "./ProductDisc.css";
import {
  FaInstagramSquare,
  FaLinkedin,
  FaFacebookSquare,
} from "react-icons/fa";

import PropTypes from "prop-types";
import { useState, useEffect, useContext } from "react";
import { shopContext } from "../Context/ShopContext";
import { Link } from "react-router-dom";

const ProductDisc = (props) => {
  const { description, image, name, newPrice, subImages, id } = props.product;
  const { addToCart, getRecentViewed} = useContext(shopContext)
  const [mainImg, setMainImg] = useState(image)

  const handleClick = (productId) =>{
          addToCart(productId)
          getRecentViewed(productId)
  }

    useEffect(() => {
    setMainImg(image);
  }, [image]);
  return (
    <div className="product-disc">
      <div className="product-image">
        <div className="product-image-smalls">
          {subImages && Array.isArray(subImages)
            ? subImages.map((subImg, i) => (
                <img key={i} src={subImg} alt={name}  onClick={()=>setMainImg(subImg)}/>
              ))
            : null}
        </div>
        <div className="product-image-large">
          <img src={mainImg} alt={name} />
        </div>
      </div>

      <div className="product-details">
        <div className="product-details-header">
          <h3>{name}</h3>
          <div className="details-header-row">
            <p>Fourteen General Supply</p>
            <div className="social-icon">
                <Link to='https://www.instagram.com/fourteengeneral/' target="blank"><FaInstagramSquare className='icon'/></Link>  
                <Link><FaLinkedin className='icon'/></Link> 
                <Link><FaFacebookSquare className='icon'/></Link>
            </div>
          </div>
        </div>
        <div className="product-details-content">
          <div className="details-content">
            {description && typeof description === "object" ? (
              <ul>
                {Object.entries(description).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key}:</strong>{" "}
                    {Array.isArray(value) ? value.join(", ") : value}
                  </li>
                ))}
              </ul>
            ) : (
              description
            )}
          </div>
          <div className="prices">
            <p><strong>Price:</strong> <span>{newPrice}TZS</span></p>
          </div>
          <button onClick={()=>handleClick(id)}>ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

ProductDisc.propTypes = {
  product: PropTypes.shape({
    description: PropTypes.string,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    newPrice: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    subImages: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default ProductDisc;
