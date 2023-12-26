import React from 'react'
import footerImg from "../assets/footer_img.png"

const Footer = () => {
    const whatWeDo = ["What we do", "Features", "Blog"]
    const whoWeAre = ["About us","Careers","Brand Center","Privacy"]
    const needHelpS = ["Contact Us","Help Center","Download","Security Advisories"]


  return (
    <div className='bg-[#00545F] flex items-center gap-6 flex-col md:flex-row p-4 md:gap-10'>
        <img src={footerImg} alt='footer'/>
        </div>
  )
}

export default Footer