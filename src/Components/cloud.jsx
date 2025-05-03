import React from "react";

const Cloud = () => {
  return (
    <>
      <div
        className="cloud-svg"
      >
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          {/* Shadow Layer */}
          <path
            fill="var(--cloud-color)"
            d="
              M0,320 
              L0,140 
              Q120,80 240,140 
              Q480,20 720,140 
              Q840,80 960,140 
              Q1080,200 1200,140 
              Q1320,80 1440,140 
              L1440,320 
              Z
            "
          />
          {/* White Main Cloud */}
          <path
            fill="#ffffff"
            d="
              M0,320 
              L0,180 
              Q120,120 240,180   
              Q480,20 720,180   
              Q840,120 960,180   
              Q1080,240 1200,180
              Q1320,120 1440,180
              L1440,320 
              Z
            "
          />
        </svg>
      </div>
    </>
  );
};

export default Cloud;
