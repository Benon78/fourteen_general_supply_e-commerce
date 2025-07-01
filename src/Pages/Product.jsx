import { Await, Link, NavLink, Outlet, useLocation } from "react-router-dom";
import BreadCrum from "../Components/BreadCrum/BreadCrum";
import "./CSS/Product.css";
import { Suspense, useEffect, useMemo, useState } from "react";
import { MdViewModule, MdViewList } from "react-icons/md";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import {
  getFilteredProduct,
  usePageTittle,
} from "../Components/utils/Helper.js";
import Item from "../Components/Item/Item.jsx";
import Support from "../Components/Support/Support.jsx";
import Loading from "../Components/Loading/Loading.jsx";
import RecentViewed from "./../Components/RecentViewed/RecentViewed";

const Product = () => {
  const [selected, setSelected] = useState("featured");
  const [showorder, setShowOrder] = useState(false);
  const [showFlex, setShowFlex] = useState(false);

  const styled = {
    color: "#FF6A00",
  };

  // Refactor location detection
  const category = useLocation().pathname.split("/").pop();
  const [location, setLocation] = useState("");

  useEffect(() => {
    if (category === "products") {
      setLocation("all products");
    } else {
      setLocation(category);
    }
  }, [category]);

  let products = useMemo(
    async () => await getFilteredProduct(location),
    [location]
  );
  usePageTittle(`${location} - Fourteen General Supply`);
  const renderProductsElements = (products) => {
    return location === "all products" ? (
      <div
        className={
          showFlex ? "product-category-item-view" : "product-category-item"
        }
      >
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
      </div>
    ) : (
      <div>
        <Outlet context={{products,showFlex}} />
      </div>
    );
  };

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };
  return (
    <div className="product">
      <BreadCrum location={location} />
      <div className="product-container">
        <div className="product-nav">
          <h3>Main menu</h3>
          <ul>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? styled : null)}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? styled : null)}
                to="/about"
              >
                About fourteen General
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? styled : null)}
                to="./laptops"
              >
                Laptops
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? styled : null)}
                to="./desktops"
              >
                Desktops
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? styled : null)}
                to="./macbooks"
              >
                Macbooks
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? styled : null)}
                to="./tablets"
              >
                Tablets
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? styled : null)}
                to="./printers"
              >
                Printers
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? styled : null)}
                to="./accessories"
              >
                External Hard Disks
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? styled : null)}
                to="./mobile-phones"
              >
                Mobile Phones
              </NavLink>
            </li>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? styled : null)}
                to="./torners"
              >
                Toners & Cartridges
              </NavLink>
            </li>
            <div className="more-products-div">
              <div
                className="show-categories"
                onClick={() => setShowOrder(!showorder)}
              >
                <p>More Categories</p>
                {showorder ? (
                  <FaAngleDown className="order-icon" />
                ) : (
                  <FaAngleUp className="order-icon" />
                )}
              </div>
              {showorder ? (
                <ul>
                  <li>
                    <NavLink
                      style={({ isActive }) => (isActive ? styled : null)}
                      to="./projectors"
                    >
                      Projectors
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      style={({ isActive }) => (isActive ? styled : null)}
                      to="./ups"
                    >
                      UPS
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      style={({ isActive }) => (isActive ? styled : null)}
                      to="./flash-disk"
                    >
                      flash disk
                    </NavLink>
                  </li>
                </ul>
              ) : null}
            </div>
            <li>
              <NavLink
                style={({ isActive }) => (isActive ? styled : null)}
                to="/contact"
              >
                Contact us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="product-list">
          <div className="product-category">
            <Suspense fallback={<Loading />}>
              <Await resolve={products}>
                {(resolvedProducts) => (
                  <>
                    <div className="category-header">
                      <h3>{location}</h3>
                      <div className="category-sort">
                        <div className="sort-items-count">
                          Showing: {resolvedProducts.length} of{" "}
                          {resolvedProducts.length} products
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
                            <option value="low-to-high">
                              Price, low to high
                            </option>
                            <option value="high-to-low">
                              Price, high to low
                            </option>
                            <option value="old-to-new">Date, old to new</option>
                            <option value="new-to-old">Date, new to old</option>
                          </select>
                        </div>
                        {/* <div className="view">
                          View:{" "}
                          <MdViewModule
                            onClick={() => setShowFlex(false)}
                            className="view-icon"
                          />{" "}
                          <MdViewList
                            onClick={() => setShowFlex(true)}
                            className="view-icon"
                          />
                        </div> */}
                      </div>
                    </div>
                    <hr />
                    {renderProductsElements(resolvedProducts)}
                  </>
                )}
              </Await>
            </Suspense>
          </div>
        </div>
      </div>
      <RecentViewed />
      <Support />
    </div>
  );
};

export default Product;
