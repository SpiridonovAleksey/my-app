import React from "react";
import "./General-avatar.css"

const GeneralAvatar = () => {
  return (
    <div className="avatar-wrap">
      <img className="avatar__img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfBJb0V9mwKFAoznIFdeWISIB_JR_XzIMYwA&usqp=CAU"
           alt="Avatar"/>
      <button className="avatar__button">correct</button>
    </div>
  );
};
export default GeneralAvatar;
