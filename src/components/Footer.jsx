import React from 'react'
import footerImg from "../assets/footer_img.png"

const Footer = () => {
    const whatWeDo = ["What we do", "Features", "Blog"]
    const whoWeAre = ["About us","Careers","Privacy"]
    const needHelp = ["Contact Us","Help Center","Download"]


  return (
    <div className='bg-[#00545F] relative mt-48 bottom-0 flex justify-around md:items-center gap-6 flex-col md:flex-row p-4 md:gap-10'>
        <img src={footerImg} className='w-3/5 md:w-1/4' alt='footer'/>
        <div className="text-white text-lg">
          <h1 className='text-2xl underline'>What we do</h1>
          <ul>
            {
              whatWeDo.map((item, index)=>{
               return  <li className="hover:underline cursor-pointer my-1" key={index}>{item}</li>
              })
            }
          </ul>
        </div>
        <div className="text-white text-lg">
          <h1 className='text-2xl underline'>Who we are </h1>
          <ul>
            {
              whoWeAre.map((item, index)=>{
               return  <li className="hover:underline cursor-pointer my-1" key={index}>{item}</li>
              })
            }
          </ul>
        </div>
        <div className="text-white text-lg">
          <h1 className='text-2xl underline'>Need Help?</h1>
          <ul>
            {
              needHelp.map((item, index)=>{
               return  <li className="hover:underline cursor-pointer my-1" key={index}>{item}</li>
              })
            }
          </ul>
        </div>
        </div>
  )
}

export default Footer