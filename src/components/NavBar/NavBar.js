import React, { Fragment, useState } from "react";

// import {HiBars2} from 



const NavBar = () => {

  const [scroll, setScroll] = useState(false);
  return (
    <Fragment>
      <div className="bg-primaryBg grid grid-cols-2 px-10 lg:px-20 xl:px-32 py-8 sticky top-0">
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

        <div className="md:hidden">Menu</div>
        <div className="hidden md:block">
          <ul className="flex justify-between items-center">
            <li className="cursor-pointer text-white">Services</li>
            <li className="cursor-pointer text-white">Work</li>
            <li className="cursor-pointer text-white">About</li>
            <li className="cursor-pointer text-white">Blog</li>
            <li className="cursor-pointer text-white">Contact</li>
          </ul>
        </div>
      </div>

      <div>

      </div>
    </Fragment>
  );
};

export default NavBar;