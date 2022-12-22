import React, {Fragment} from 'react';
import { NavBar } from '../../components';
import { Banner } from '../../components';
import { Card } from "../../components";
import { Features } from '../../components';
import { Testimonial } from "../../components";
import { Faq } from "../../components";
 const HomePage = () => {
  return (
   <Fragment>

   <div>
   <NavBar/>
     <Banner/>
     <Card/>
     <Features/>
     <Testimonial/>
     <Faq/>
   </div>
   </Fragment>
  )
}

export default HomePage;
