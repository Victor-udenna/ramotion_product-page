import React, {Fragment, useState} from 'react'

const FaqComponent = ({faqtitle, faqcontent}) => {

  const [open, setopen] = useState(false);

  return (
    <Fragment>
  <div className=' w-100 md:w-[100%] lg:w-[80%]  text-black faq'>
   <div className='flex items-center justify-between border-2 border-b-0 border-r-0 border-l-0 border-solid border-t-slate-300  py-10 cursor-pointer'
   onClick={()=>{
    setopen(!open)
   }}>
   <div className=  "text-xl md:text-2xl font-bold px-2 show-content">{faqtitle}</div>
    <div className='text-3xl faq_icon font-bold'>{open ? '-' : '+'}</div>
   </div>
      <div className='text-xl lg:text-2xl faq-content leading-10  text-black'>
    {open && <div className="accordion-content">{faqcontent}</div>}
    </div>
  </div>
    </Fragment>
  )
}

export default FaqComponent;
