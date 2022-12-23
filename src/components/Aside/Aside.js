import React, { useState } from "react";

const Aside = () => {
  const [color, setcolor] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setcolor(!color);
      }}
      onMouseLeave={() => {
        setcolor(!color);
      }}
    >
  
      <div className={`  py-10 showcolor ${color ? "active" : "inactive"}`}>
        <div className="aside_header font-extrabold text-xl md:text-2xl pb-5">Shall We Chat?</div>
        <div className=" aside_text text-3xl md:text-4xl lg:text-6xl font-bold">
          <div className="leading-tight">Let's talk about your</div>
          <div className="leading-tight">product</div>
        </div>
      </div>
    </div>
  );
};

export default Aside;
