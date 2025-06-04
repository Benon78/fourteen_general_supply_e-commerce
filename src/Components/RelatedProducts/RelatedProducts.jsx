import './RelatedProducts.css'
import Item from './../Item/Item';


const RelatedProducts = (props) => {
  return (
    <div className='related'>
       <h1>Related Products</h1>
       <hr />
       <div className="related-item">
        {
          props.relatedProduct && Array.isArray(props.relatedProduct)? (
         props.relatedProduct.map((item,i)=>{
              return <Item key={i}
                          id={item.id}
                          name={item.name}
                          image={item.image}
                          old_price={item.oldPrice}
                          new_price = {item.newPrice}
                              />
          })
         ): null
        }
       </div>
    </div>
  )
}

export default RelatedProducts