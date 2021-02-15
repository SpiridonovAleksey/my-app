import React from "react";
import "./User-info.css"

const UserInfo = () => {
  return (
    <div className="user-info">
      <p className="user-info__name">Имя пользователя</p>
      <p className="user-info__age">Возраст:</p>
      <p className="user-info__city">Город:</p>
    </div>
  );
};
export default UserInfo;
