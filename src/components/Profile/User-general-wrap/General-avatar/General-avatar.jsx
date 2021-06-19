import React from "react";
import "./General-avatar.css"

const GeneralAvatar = (props) => {
  return (
    <div className="avatar-wrap">
      <img className="avatar__img" src={props.photo}
           alt="Avatar"/>
      <button className="avatar__button">изменить</button>
    </div>
  );
};
export default GeneralAvatar;
