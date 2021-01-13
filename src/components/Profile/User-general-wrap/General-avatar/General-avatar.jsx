import React from "react";
import "./General-avatar.css"

const GeneralAvatar = () => {
  return (
    <div className="avatar-wrap">
      <img className="avatar__img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE4Jz3awyArUnyFZaY0yo3zW09SjnZIH7G-g&usqp=CAU"
           alt="Avatar"/>
      <button className="avatar__button">correct</button>
    </div>
  );
};
export default GeneralAvatar;
