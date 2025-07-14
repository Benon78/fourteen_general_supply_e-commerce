
import './ProductDetail.css'
import BreadCrum from '../BreadCrum/BreadCrum'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getProduct, getRelatedProduct, usePageTittle } from '../utils/Helper'
import ProductDisc from '../ProductDisc/ProductDisc'
import Support from './../Support/Support';
import RelatedProducts from '../RelatedProducts/RelatedProducts'
const ProductDetail = () => {
  const { productId } = useParams()
  // 

  const [product, setProduct] = useState({});
  const [relatedProduct, setRelatedProduct] = useState([])
  const { type } = product;
    usePageTittle(`${type} - Fourteen General Supply`);
  useEffect(()=>{
    productId && setProduct(getProduct(productId))
    productId && setRelatedProduct(getRelatedProduct(productId))
  },[productId])
  return (
    <div className='productcontainer'>
      <BreadCrum location={productId}/>
      <ProductDisc product={product}/>
      <RelatedProducts relatedProduct={relatedProduct}/>
      <Support/>
    </div>
  )
}

export default ProductDetail