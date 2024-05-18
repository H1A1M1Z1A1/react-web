import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import location_icon from '../../assets/location-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import white_arrow from '../../assets/white-arrow.png'



const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-col">
<h3>Send us a message <img src={msg_icon} alt="" /></h3>      
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque neque dolor labore explicabo, quaerat laborum, voluptatum impedit nulla eos error sunt aperiam enim autem corporis tempora provident molestiae incidunt obcaecati? Ipsam odio, earum magnam soluta error aliquam ratione exercitationem.</p>
      <ul>
        <li><img src={mail_icon} alt="" />hamzahusain85@gmail.com</li>
        <li><img src={phone_icon} alt="" />+91-9335275340</li>
        <li><img src={location_icon} alt="" />F-37 Muneer Apartment Sir Syed Nagar <br /> Aligarh 202001,Uttar Pradesh, India</li>
      </ul>
      </div>
      <form action="">
        <label>Your Name</label>
        <input type="text" name="name" placeholder='Enter yor name' required />
        <label>Phone Number</label>
        <input type="tel" name='phone' placeholder='Enter your mobile number' required />
        <label>Write your message here</label>
        <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
        <button type='submit' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
      </form>
    </div>
  )
}

export default Contact
