import React from "react";
import "./preloader.css"

const Preloader = (props) => {
  return (
    <div className='lds-ring'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
};

export default Preloader;
