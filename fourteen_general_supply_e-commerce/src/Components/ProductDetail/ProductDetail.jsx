
import './ProductDetail.css'
import BreadCrum from '../BreadCrum/BreadCrum'
import { useParams } from 'react-router-dom'
const ProductDetail = () => {
  const { productId } = useParams()
  return (
    <div>
      <BreadCrum location={productId}/>
    </div>
  )
}

export default ProductDetail