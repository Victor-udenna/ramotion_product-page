import React from 'react';
import BrandImg from '../BrandImg/BrandImg';
import logo1 from "../../assets/images/logodatum.svg";
// import logo2 from "../..assets/images/"

const Brands = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4'>
        <BrandImg 
        brandLogo={logo1}
        />


<BrandImg 
        brandLogo={logo1}
        />
    </div>
  )
}


export default  Brands;
