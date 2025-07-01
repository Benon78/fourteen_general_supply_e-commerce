import './RelatedProducts.css'
import Carousel from '../Carousel/Carousel'


const RelatedProducts = ({relatedProduct}) => {
  return (
    <div className='related'>
       <h1>Related Products</h1>
       <hr />
        {
          relatedProduct && Array.isArray(relatedProduct)? (
            <Carousel products={relatedProduct} />
         ): null
        }
    </div>
  )
}

export default RelatedProducts