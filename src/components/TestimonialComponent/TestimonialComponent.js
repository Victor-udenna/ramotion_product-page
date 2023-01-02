import React, {Fragment} from 'react';

 const TestimonialComponent = ({testimonial, userimg, username, userrole, link}) => {
  return (
   <Fragment>
     <div className='my-10'>
      <div className='font-semibold text-xl  md:font-bold lg:text-2xl lg:leading-10 w-100 lg:w-[80%] py-5'> "{testimonial}"</div>
    <div className='flex'>

    <div>
        <img src={userimg}  alt="user" className='rounded-full w-[50px]'/>
      </div>

      <div className='px-4'>
        <div className='text-black text-lg'>{username}</div>
       <div className='flex items-center'>
       <div className='text-grey text-slate-400 text-md'>{userrole}</div>
        <div className=' underline text-slate-400 px-1 hover:text-blue-400 cursor-pointer'>{link}</div>
       </div>
      </div>
    </div>
    </div>
    </Fragment>
  )
}

export default TestimonialComponent;
