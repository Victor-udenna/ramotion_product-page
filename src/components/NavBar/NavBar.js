import React, { Fragment, useState } from "react";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose, AiFillCaretDown } from "react-icons/ai";



const NavBar = () => {

  const [scroll, setScroll] = useState(false);
  const [open, setopen] = useState(false); 
  const [showsubnav, setshowsubnav] = useState(false);
  return (
    <Fragment>
<div className="bg-primaryBg Nab_bar">
<div className="bg-primaryBg flex justify-between items-center px-10 lg:px-20  xl:px-32 py-8 sticky top-0">
        <div>
          <svg height="24" width="15" fill="white">
            <path
              d="M7.54601227,0 L7.54601227,0 L0,0 L0,24 L15,24
                            L9.20245399,14.6769231 C12.5153374,13.8461538 15,10.9846154 15,7.38461538 L15,7.38461538 L15,7.38461538 C15,3.32307692
                            11.6871166,0 7.54601227,0"
              opacity=".62"
            ></path>
            <polygon points="0 24 15 24 0 0"></polygon>
          </svg>
        </div>

    <div className="flex items-center text-lg md:hidden"
    onClick={()=>{
      setopen(!open)
    }}>
    <div className={`text-white shownavbar ${open ? "active" : "inactive"}`}>Menu</div>
        <div className="pl-2"><HiOutlineMenuAlt4 color="white" size={25}/></div>
    </div>
        <div className="hidden md:block">
          <ul className="relative text-lg grid grid-cols-5 gap-4 lg:gap-5">
            <li className="text-white cursor-pointer subnav "
            onMouseEnter={()=>{
              setshowsubnav(!showsubnav)
            }}
            
            onMouseLeave={()=>{
              setshowsubnav(!showsubnav)
            }}>Services</li>
            <li className="cursor-pointer text-white">Work</li>
            <li className="cursor-pointer text-white">About</li>
            <li className="cursor-pointer text-white">Blog</li>
            <li className="cursor-pointer text-white">Contact</li>
          </ul>
          <div className={`subnav drop_down absolute my-7 text-white px-10 py-5 rounded-lg w-[250px] leading-9 bg-[#272727] hidden ${showsubnav ? "active": "inactive"}`}>
<div>Branding</div>
<div>Branding for startups</div>
<div>Web design</div>
<div>Web design for startups</div>
<div>Web app development</div>
<div>UI/UX design</div>
<div>UI/UX for start up</div>
<div>App design</div>
<div>Design system</div>
      </div>
        </div>
      </div>

</div>

<div className={`sidemenu text-white h-screen fix top-0 bg-black px-5 hidden ${open ? "active" : "inactive"}`}>
  {/*  */}
<div className="flex items-center justify-end p-5 text-lg"
onClick={()=>{
  setopen(!open)
}}>
<span>Close</span>
<span className="pl-3"><AiOutlineClose/></span>
</div>



<div className="text-4xl">
<div className="flex items-center">
<div className="font-bold">Services </div>
<span className="mt-3 px-5"><AiFillCaretDown size={15}/></span>
</div>

<ul className="text-lg leading-10">
<li>Branding</li>
<li>Branding for startups</li>
<li>Web design</li>
<li>Web design for startups</li>
<li>Web app development</li>
<li>UI/UX design</li>
<li>UI/UX for start up</li>
<li>App design</li>
<li>Design system</li>
</ul>

<div className="font-bold mb-3">Work</div>
<div className="font-bold mb-3">About</div>
<div className="font-bold mb-3">Blog</div>
<div className="font-bold mb-3">Contact</div>
</div>


</div>
    </Fragment>
  );
};

export default NavBar;