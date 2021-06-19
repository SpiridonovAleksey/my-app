import React from "react";
import "./User-info.css"

const UserInfo = (props) => {
  return (
    <div className="user-info">
      <p className="user-info__name">{props.profile.fullName}</p>
      <p className="user-info__age">Возраст:</p>
      <p className="user-info__city">Город:</p>
      <p className="user-info__about">О себе: {props.profile.aboutMe}</p>
    </div>
  );
};
export default UserInfo;
