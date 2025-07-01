import "./CSS/ProductCategory.css";
import { Link, useOutletContext } from "react-router-dom";
import Item from "./../Components/Item/Item";

const ProductCategory = () => {
  // Filter products by category, or show all if category is null
  const {products , showFlex} = useOutletContext();

  return products && products.length > 0 ? (
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
    <div className="product-empty">
      <h3>No Product found</h3>
      <p>Please select category to view products </p>
      <Link to="/products">
        <button>View All</button>
      </Link>
    </div>
  );
};

export default ProductCategory;
