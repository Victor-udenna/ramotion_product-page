import React, {Fragment} from 'react';


 const Footer = () => {
  return (
    <Fragment>
        <div className='px-10 lg:px-20'>
          <div className='py-10  text-[#818181] grid grid-cols-2 md:grid-cols-4 lg:py-20'>
            <div>
              <div className='text-xl font-bold md:text-2xl'>Locations</div>
              <div className=' py-1 md:text-xl hover:text-blue-600 hover:underline'>San Francisco, CA</div>
              <div className=' py-1 md:text-xl hover:text-blue-600 hover:underline'>Los Angeles, CA</div>
              <div className=' py-1 md:text-xl hover:text-blue-600 hover:underline'>New York, NY</div>
            </div>

            <div>
              <div className='text-xl font-bold md:text-2xl'>Portfolio</div>
              <div className=' py-1 md:text-xl hover:text-blue-600 hover:underline'>Awwards</div>
              <div className=' py-1 md:text-xl hover:text-blue-600 hover:underline'>Dribble</div>
              <div className=' py-1 md:text-xl hover:text-blue-600 hover:underline'>Bēhance</div>
              <div className=' py-1 md:text-xl hover:text-blue-600 hover:underline'>GitHub</div>
            </div>

            <div>
              <div className='text-xl font-bold md:text-2xl'>Social media</div>
              <div className=' py-1  md:text-xl hover:text-blue-600 hover:underline'>LinkedIn</div>
              <div className=' py-1 md:text-xl hover:text-blue-600 hover:underline'>Twitter</div>
              <div className=' py-1 md:text-xl hover:text-blue-600 hover:underline'>instagram</div>
              <div className=' py-1 md:text-xl hover:text-blue-600 hover:underline'>Facebook</div>
            </div>

            <div>
              <div className='text-xl font-bold md:text-2xl'>Get in touch</div>
              <div className=' py-1 md:text-xl hover:text-blue-600 hover:underline'>+1 415 831 7880</div>
              <div className=' py-1 md:text-xl hover:text-blue-600 hover:underline'>Contact us</div>
            </div>

          </div>
          <div className='py-10'>© 2022, Ramotion Inc. | <span className='underline hover:text-blue-600 px-1'>Sitemap</span> | <span className='underline hover:text-blue-600 px-1'>Privacy Policy</span> | <span className='underline hover:text-blue-600 px-1'>Terms of Use</span> | <span className='underline hover:text-blue-600 px-1'>Cookie Policy</span></div>
        </div>
      
    </Fragment>
  )
}

export default Footer;
