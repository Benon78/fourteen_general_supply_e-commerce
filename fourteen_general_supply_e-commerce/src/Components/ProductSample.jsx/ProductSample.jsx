import './ProductSample.css'
import Laptop_sample from '../../assets/images/8.webp'
import Printer_sample from '../../assets/images/printer.avif'
import Accessories_sample from '../../assets/images/accessories.webp'

const ProductSample = () => {
  return (
    <div className='product-sample-container'>
        <div className="product-sample">
            <h2>laptops</h2>
            <p>Working from home? get your Laptop here!</p>
            <div className="product-icon">
                <button>Shop laptops</button>
                <img src={Laptop_sample} alt="Laptop-sample" />
            </div>
        </div>
        <div className="product-sample">
            <h2>printers</h2>
            <p>Great deals on entry level printers for your office</p>
            <div className="product-icon">
                <button>Shop printers</button>
                <img src={Printer_sample} alt="Printer-sample" />
            </div>
        </div>
        <div className="product-sample">
            <h2>Accessories</h2>
          <p>Available Accessories for your styling</p>
            <div className="product-icon">
                <button>Shop Accessories</button>
                <img src={Accessories_sample} alt="Laptop-sample" />
            </div>
        </div>
    </div>
  )
}

export default ProductSample