import React, {useState} from 'react';
import { Fragment } from 'react';
import {VideoCard} from '../../components';
// media (images and videos)
import image1 from "../../assets/images/descript.jpg"
import image2 from "../../assets/images/coinread.jpg";
import image3 from "../../assets/images/mozilla.jpg";
import image4 from "../../assets/images/clause.jpg";
import image5 from "../../assets/images/transcend.jpg";
import image6 from "../../assets/images/wizeline.jpg";

import video1 from "../../assets/videos/descript_MW.mp4";
import video2 from "../../assets/videos/CoinreadCover.mp4";
import video3 from "../../assets/videos/Mozilla_Labs.mp4";
import video5 from  "../../assets/videos/Transcend.mp4";
import video6 from "../../assets/videos/wizeline_MW.mp4";

// 
import {BsArrowUpRight} from 'react-icons/bs';


// import {VideocardData} from '../../data';

const Card = () => {
  const [color, setcolor] = useState(false);
  return (
   
    <Fragment>

       {/* <div className='grid gird-cols-12 md:grid-cols-3'>
       {VideocardData?.cardData?.map((item)=> {
        return(
          <VideoCard
          cardImage={item.image}
          cardVideo={item.video}
          cardTitle={item.title}
          cardDescription={item.description}
          key={item.id}
          />
        );
       })}
       </div> */}

       <div className='bg-primaryBg px-10 lg:px-20  grid gird-cols-12 md:grid-cols-3  gap-10'>
        <VideoCard
        cardImage={image1}
        cardVideo={video1}
        cardTitle="Descript"
        cardDescription="Website front-end and visuals for the world first's audio processor"/>
        <VideoCard
        cardImage={image2}
        cardVideo={video2}
        cardTitle="Coinread"
        cardDescription="Branding, web app design and development for a product that helps to find crypto market information"/>

               {/* <VideoCard
        cardImage={image3}
        cardVideo={video3}
        cardTitle="Mozilla Labs"
        cardDescription="Designing a website for innovative projects by Mozilla"
        arrow={<BsArrowUpRight className='arrow_icon'/>}/> */}






    <VideoCard
        cardImage={image3}
        cardVideo={video3}
        cardTitle="Mozilla Labs"
        cardDescription="Designing a website for innovative projects by Mozilla "
        arrow={<BsArrowUpRight className='arrow_icon'/>}/>


<div  className="card w-[300px] md:w-[210px] lg:w-[280px] xl:w-[350px] my-10" onMouseEnter={()=> {
      setcolor(!color)
    }} 
    
    onMouseLeave={()=>{
      setcolor(!color)
    }}
    >
    <div className={` showcolor card ${color ? "active": "inactive"}`}>
        <div className="">
          <div className="">
          <img src={image4} alt="card_img" className="rounded-md" />
          </div>
        </div>

        <div className="text-white">
    <h1 className="flex items-center">      <div className="font-bold py-3 text-3xl lg:text-4xl title">Clause</div> <div className="inline px-2 arrow_icon  w-10"><BsArrowUpRight/> </div></h1>
          <p className="description text-lg text-[#ffffff8f]">
          Web design for a company that connects contracts post-signature to APIs 
          </p>
        </div>
      </div>
    </div>



               <VideoCard
        cardImage={image5}
        cardVideo={video5}
        cardTitle="Transcend"
        cardDescription="Branding and website for a data privacy company"/>

<VideoCard
        cardImage={image6}
        cardVideo={video6}
        cardTitle="Wizeline"
        cardDescription="Website design for a technology company that provides software solutions company"
        arrow={<BsArrowUpRight className='arrow_icon'/>}/>
        </div>
    </Fragment>
  )
}

export default Card;
