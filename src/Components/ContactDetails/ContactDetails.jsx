import { FaPhone } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaInstagramSquare, FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import './ContactDetails.css'
import { useState } from "react";

function ContactDetails() {

    const [inputValue, setInputValue] = useState({
        fullName: '',
        email:'',
        phoneNumber: '',
        message: '',
    })

    const handleChange = (e) =>{
            setInputValue({...inputValue, [e.target.name]: e.target.value})
    }
  return (
      <div className="contact-details">
        <div className="contact-details-left">
          <div className="left-content">
            <h3>Address</h3>
            <p>Faykat Tower, Kumbukumbu Street <br/> Dar es salaam,Tanzania</p>
          </div>
          <div className="left-content">
            <h3>Contact</h3>
            <p><FaPhone className="contact-icon"/> +2557-8973-3300</p>
            <p><FaWhatsapp className="contact-icon"/> +2557-6442-2305</p>
            <p><FaTelegramPlane className="contact-icon"/> fourteengeneralsupplies@gmail.com</p>
          </div>
          <div className="left-content">
            <h3>Hour of operation</h3>
            <p><span>Mon - Sat:</span> 08:00 AM - 20:00 PM</p>
            <p><span>Sun:</span> 10:00 AM - 12:30 PM</p>
          </div>
          <div className="left-content">
            <h3>Follow Us</h3>
            <div className="social-icon">
                <Link to='https://www.instagram.com/fourteengeneral/' target='blank'><FaInstagramSquare className='icon'/></Link>  
                <Link><FaLinkedin className='icon'/></Link> 
                <Link><FaFacebookSquare className='icon'/></Link>
            </div>
          </div>
        </div>
        <div className="contact-details-right">
            <h3>Get in Touch</h3>
            <div className="contact-form">
                <div className="form-group">
                    <label htmlFor="fullName">Name:</label>
                    <input 
                    type="text" 
                    id="fullName" 
                    name="fullName"
                    value={inputValue.fullName}
                    required
                    onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={inputValue.email}
                    required
                    onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phoneNumber">Phone:</label>
                    <input 
                    type="text" 
                    id="phoneNumber" 
                    name="phoneNumber"
                    value={inputValue.phoneNumber}
                    required
                    onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea 
                    name="message" 
                    id="message"
                    rows='8'
                    required
                    value={inputValue.message}
                    onChange={handleChange}
                    ></textarea>
                </div>
                <button type="submit"> Submit</button>
            </div>
        </div>
      </div>
  )
}

export default ContactDetails