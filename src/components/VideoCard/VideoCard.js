import React, { Fragment, useEffect, useRef, useState } from "react";
// import cardvideo1 from "../../assets/videos/CoinreadCover.mp4";
// import cardimage1 from "../../assets/images/coinread.jpg";

const VideoCard = ({cardImage, cardVideo, cardTitle, cardDescription, arrow}) => {

  const [playVideo, setplayVideo] = useState(false)
  ;
  const vidRef=useRef();

  useEffect(() => { vidRef.current.play(); },[]);

  
  return (
    <Fragment>
    <div  className=" w-[320px] md:w-[210px] lg:w-[350px] m-10" onMouseEnter={()=> {
      setplayVideo(!playVideo)
    }} 
    
    onMouseLeave={()=>{
      setplayVideo(!playVideo)
    }}
    >
    <div className={` show_video ${playVideo ? "active": "inactive"}`}>
        <div className="">
          <div className="card_img">
          <img src={cardImage} alt="card_img" className="rounded-md" />
          </div>

          <video ref={ vidRef } controls={false} autoPlay={true} loop={true} className=" hidden card_video rounded-md">
            <source src={cardVideo} type="video/mp4" />
          </video>
        </div>

        <div className="text-white">
    <div className="flex items-center">      <div className="font-bold py-3 text-3xl lg:text-4xl title">{cardTitle}</div> <div className="inline px-2  w-10">{arrow}</div></div>
          <p className="description text-lg text-[#ffffff8f]">
            {cardDescription} 
          </p>
        </div>
      </div>
    </div>
    </Fragment>
  );
};
export default VideoCard;
