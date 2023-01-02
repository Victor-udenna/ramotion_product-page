import React, {Fragment} from 'react';
import TestimonialComponent from '../TestimonialComponent/TestimonialComponent';
import userimg1  from "../../assets/images/dan brown.jpg";
import userimg2 from "../../assets/images/andrew mason.jpg";
import userimg3 from "../../assets/images/andrew Cramer.jpg";
import userimg4 from "../../assets/images/ratic.jpg";

export const Testimonial = () => {
  return (
  <Fragment>
<div className='px-10 lg:px-20'>
<div className=' font-bold text-6xl text-white'>Testimonial</div>
 <div className=''>
 <TestimonialComponent
 testimonial={"Ramotion was fast and efficient without sacrificing quality. Their team of designers and developers brought our vision to life and we are thankful for their expertise."}
 userimg={userimg1}
 username={"Dan Brown"}
 userrole={"Senior Marketing Manager at"}
 link={"Mozilla"}/>

  <TestimonialComponent
 testimonial={"They’re very responsive and go above and beyond to meet our needs. We continue working with them, which is the best sign of our satisfaction."}
 userimg={userimg2}
 username={"Andrew Mason"}
 userrole={"Senior Marketing Manager at"}
 link={"Groupon"}/>

   <TestimonialComponent
 testimonial={"We built a wait list of over 100,000 email addresses when we were launching our product, and they had a hand in helping us to pull web designs together and build the product after that point. Now, we have thousands of happy customers and testimonials from them"}
 userimg={userimg3}
 username={"Andrew Cramer"}
 userrole={"Head of final"}
 link={" (Acquired by Goldman Sachs)"}/>

<TestimonialComponent
 testimonial={"They hit all of our goals and delivered on the schedule they originally proposed. They accommodated the changes in our initial requirements as we needed them and quickly adapted."}
 userimg={userimg4}
 username={"Ritik Malhotra"}
 userrole={"Co-founder at Elph"}
 link={"(Acquired by Brex)"}/>
 </div>
</div>
  </Fragment>
  )
}
 
export default Testimonial;