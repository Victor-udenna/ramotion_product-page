import React, { Fragment } from 'react';
import Brands from '../Brands/Brands';

 const Features = () => {
  return (
<Fragment>
<div className='bg-white px-10 lg:px-20 py-20'>
<div>
<div className='py-5 lg:py-10'>
<div className='text-4xl font-bold py-5'>Marketing website design approach</div>
<div>We see marketing websites as an essential tool that allows brands to tell their story and showcase what makes them unique. Marketing websites should carry a tone of voice that syncs with the chosen brand attributes to help send the right message to the target audience. While designing websites, we apply key brand identity elements to create a cohesive experience that reflects both the state of the brand today and their strategic goals and aspirations for the future.</div>
        </div>

        <div className='py-5 lg:py-10'>
        <div className='text-4xl font-bold py-5'>Our capabilities in web design services</div>
<div>Our web design process generates a consistent website or app that reflects the brand strategy, visual identity, and verbal identity of the brand. It also helps to establish a prominent position on the market.</div>
        </div>
</div>

<div className=' py-5 lg:py-7  md:flex justify-between items-center'>
  <div className='leading-10'>
    <div className='text-2xl  font-bold py-3'>User experience</div>
    <div>- Discovery</div>
    <div>- UI/UX audit</div>
    <div>Information architecture</div>
    <div>- Copy and CTAs</div>
    <div>- Layout prototypes</div>
  </div>

<div className='leading-10'>
<div className='text-2xl  font-bold py-3'>Design & front-end</div>
<div>- Visual design & interactions</div>
<div>- Front-end development</div>
<div>- CMS</div>
<div>- Iconography & illustrations</div>
<div>- 3rd party integrations</div>
</div>

<div className='leading-10'>
<div className='text-2xl 

 font-bold py-3'>Technology stack</div>
<div>- ReactJS</div>
<div>- Gatsby</div>
<div>- Webflow</div>
<div>- Contentful</div>
<div>- DatoCMS</div>
</div>


</div>

<div className='py-10'>
  <div className='text-4xl font-bold py-5'>Website design clients</div>
  <div className='text-lg md:text-xl'>Established brands and growing startups backed by top VC firms around the world.</div>
</div>


<div>
  <Brands/>
</div>
    </div>
</Fragment>
  )
}



export default Features;