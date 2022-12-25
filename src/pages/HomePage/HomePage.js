import React, {Fragment} from 'react';
import { NavBar } from '../../components';
import { Banner } from '../../components';
import { Card } from "../../components";
import { Features } from '../../components';
import { Testimonial } from "../../components";
import { Faq } from "../../components";
import { Aside } from "../../components";
import { Footer } from "../../components";
 const HomePage = () => {
  return (
   <Fragment>

   <div>
 <div className='bg-primaryBg'>
 <NavBar/>
     <Banner/>
     <Card/>
 </div>
     <Features/>
     <Testimonial/>
     <Faq/>
     <Aside/>
     <Footer/>
   </div>
   </Fragment>
  )
}

export default HomePage;
