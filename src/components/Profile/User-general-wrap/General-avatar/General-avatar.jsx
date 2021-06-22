import React from "react";
import "./General-avatar.css"

const GeneralAvatar = (props) => {
  // console.log(props.profile);
  return (
    <div className="avatar-wrap">
      <img className="avatar__img" src={props.photos.large}
           alt="Avatar"/>
      <button className="avatar__button">изменить</button>
    </div>
  );
};
export default GeneralAvatar;
