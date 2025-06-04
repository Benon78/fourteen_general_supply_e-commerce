import { useEffect, useState } from 'react';
import { getProduct } from '../utils/Helper.js';
import './BreadCrum.css'
import { MdNavigateNext } from "react-icons/md";
const BreadCrum = (props) => {
  const [item, setItem] = useState({})
     let location = isNaN(props.location) ? props.location : null;
  
    useEffect(()=>{
        if(!isNaN(props.location)){
            setItem(getProduct(props.location))
          }
    },[props.location])
  return (
    props.location && isNaN(props.location)
    ?(

      <div className='breadcrum'>
          HOME <MdNavigateNext className='navigate-icon'/> {location}
      </div>
    )
    :(
      <div className='breadcrum'>
          HOME <MdNavigateNext className='navigate-icon'/> {item.category} <MdNavigateNext className='navigate-icon'/> {item.name}
      </div>

    )
  )
}

export default BreadCrum