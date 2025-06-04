import './ProductSample.css'
import Laptop_sample from '../../assets/images/8.webp'
import Printer_sample from '../../assets/images/printer.avif'
import Accessories_sample from '../../assets/images/accessories.webp'
import { Link } from 'react-router-dom'

const ProductSample = () => {
  return (
    <div className='product-sample-container'>
        <div className="product-sample">
            <h2>laptops</h2>
            <p>Working from home? get your Laptop here!</p>
            <div className="product-icon">
                <Link to='/products/laptops'><button>Shop laptops</button></Link>
                <img src={Laptop_sample} alt="Laptop-sample" />
            </div>
        </div>
        <div className="product-sample">
            <h2>printers</h2>
            <p>Great deals on entry level printers for your office</p>
            <div className="product-icon">
               <Link to='/products/printers'><button>Shop printers</button></Link> 
                <img src={Printer_sample} alt="Printer-sample" />
            </div>
        </div>
        <div className="product-sample">
            <h2>Accessories</h2>
          <p>Available Accessories for your styling</p>
            <div className="product-icon">
                <Link to='/products/accessories'><button>Shop Accessories</button></Link>
                <img src={Accessories_sample} alt="Laptop-sample" />
            </div>
        </div>
    </div>
  )
}

export default ProductSample