import React, {Fragment, useState} from 'react'

const FaqComponent = () => {

  const [open, setopen] = useState(false);

  return (
    <Fragment>
  <div className='py-10 w-100 md:w-[100%] lg:w-[50%]'>
   <div className='flex items-center justify-between border-2 border-b-0 border-r-0 border-l-0 border-solid border-t-slate-400  py-10 cursor-pointer'>
   <div className='text-2xl font-bold px-2'>How is your web design agency different from the competitors?</div>
    <div className='text-3xl font-bold'>+</div>
   </div>
    <div className='text-2xl faq-content leading-10'>
    Our team is intentionally small and slim. For more than ten years, we have worked with tech companies with unique technology leverage.

In addition to designing and developing websites, we act as a UI/UX design company, branding agency, app designers, web app development agency, and design systems studio. It allows us to provide much more valuable and complete results.
    </div>
  </div>
    </Fragment>
  )
}

export default FaqComponent;
