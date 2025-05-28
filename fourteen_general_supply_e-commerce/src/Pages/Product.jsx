import { Link, Outlet, useLocation } from "react-router-dom";
import BreadCrum from "../Components/BreadCrum/BreadCrum";
import "./CSS/Product.css";
import { useEffect, useState } from "react";
import { MdViewModule, MdViewList } from "react-icons/md";
import { getFilteredProduct } from "../Components/utils/Helper.js";
import Item from "../Components/Item/Item.jsx";
import Support from "../Components/Support/Support.jsx";

const Product = () => {
  const [selected, setSelected] = useState("featured");
  
  // Refactor location detection
  const category = useLocation().pathname.split("/").pop(); 
  const [location, setLocation] = useState(" ");
 
  useEffect(() => {
    if (category === "products") {
      setLocation("all products");
    } else {
      setLocation(category);
    }
  }, [category]);

  let products = getFilteredProduct(location);
 
  
  const handleSelect = (e) => {
    setSelected(e.target.value);
  };
  return (
    <div className="product">
      <BreadCrum location={location}/>
      <div className="product-container">
        <div className="product-nav">
          <h3>Main menu</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Fourteen General</Link>
            </li>
            <li>
              <Link to="./laptops">Laptops</Link>
            </li>
            <li>
              <Link to="./desktops">Desktops</Link>
            </li>
            <li>
              <Link to="./macbooks">Macbooks</Link>
            </li>
            <li>
              <Link to="./tablets">Tablets</Link>
            </li>
            <li>
              <Link to="./printers">Printers</Link>
            </li>
            <li>
              <Link to="./accessories">External Hard Disks</Link>
            </li>
            <li>
              <Link to="./mobile-phones">Mobile Phones</Link>
            </li>
          </ul>
        </div>
        <div className="product-list">
          <div className="product-category">
            <div className="category-header">
              <h3>{location}</h3>
              <div className="category-sort">
                <div className="sort-items-count">
                  Showing: {products.length} of {products.length} products
                </div>
                <div className="sort-items">
                  Sort by:{" "}
                  <select
                    className="select"
                    value={selected}
                    onChange={handleSelect}
                  >
                    <option value="featured">Featured</option>
                    <option value="best-selling">Best Selling</option>
                    <option value="low-to-high">Pice, low to high</option>
                    <option value="high-to-low">Pice, high to low</option>
                    <option value="old-to-new">Date, old to new</option>
                    <option value="new-to-old">Date, new to old</option>
                  </select>
                </div>
                <div className="view">
                  View: <MdViewModule className="view-icon" />{" "}
                  <MdViewList className="view-icon" />
                </div>
              </div>
            </div>
            <hr />
            {
              location === 'all products' ?
                     (<div className="product-category-item">
                            {products.map((item) => (
                             <Item
                            key={item.id}
                            id={item.id}
                            image={item.image}
                            name={item.name}
                            old_price={item.oldPrice}
                            new_price={item.newPrice}
                          />
                        ))}
                        </div>)
              :
                  <div>
                    <Outlet context={products}/>
                  </div>

            }
          </div>
        </div>
      </div>
      <Support/>
    </div>
  );
};

export default Product;
