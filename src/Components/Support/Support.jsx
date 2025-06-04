import './Support.css'
import { TbTruckDelivery } from "react-icons/tb";
import { FaMedal } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { RiSecurePaymentFill } from "react-icons/ri";
function Support() {
  return (
    <div className='support'>
        <div className="support-container">
            <TbTruckDelivery className='suport-icon'/>
            <div className="support-content">
                <h4>Free Delivery for Orders</h4>
                <p>Available to selected Areas</p>
            </div>
        </div>
        <div className="support-container">
            <FaMedal className='suport-icon'/>
            <div className="support-content">
                <h4>Satisfied or Refunded</h4>
                <p>Talk to us if Product is defferent</p>
            </div>
        </div>
        <div className="support-container">
            <BiSupport className='suport-icon'/>
            <div className="support-content">
                <h4>Top-notch Support</h4>
                <p>Get in touch to disccuss your requirement</p>
            </div>
        </div>
        <div className="support-container">
            <RiSecurePaymentFill className='suport-icon'/>
            <div className="support-content">
                <h4>Secure Payments</h4>
                <p>Visa, Mastercard & Mobile money or Cash on delivery</p>
            </div>
        </div>
    </div>
  )
}

export default Support