import Brands from "../Components/Brands/Brands"
import FeaturedProduct from "../Components/FeaturedProduct/FeaturedProduct"
import Hero from "../Components/Hero/Hero"
import Offers from "../Components/Offers/Offers"
import ProductSample from "../Components/ProductSample.jsx/ProductSample"
import { usePageTittle } from "../Components/utils/Helper"


const Shop = () => {
   usePageTittle('Shop - Fourteen General Supply');
  return (
    <div className="shop-container">
      <Hero/>
      <ProductSample/>
      <FeaturedProduct/>
      <Offers/>
      <Brands/>
    </div>
  )
}

export default Shop