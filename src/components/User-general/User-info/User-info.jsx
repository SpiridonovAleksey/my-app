import React from "react";
import "./User-info.css"

const UserInfo = () => {
  return (
    <div className="user-info">
      <p className="user-info__name">User Name</p>
      <p className="user-info__age">Age:</p>
      <p className="user-info__city">city:</p>
    </div>
  );
};
export default UserInfo;
