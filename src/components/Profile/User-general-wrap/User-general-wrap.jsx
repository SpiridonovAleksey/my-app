import React from "react";
import "./User-general-wrap.css"
import GeneralAvatar from "./General-avatar/General-avatar.jsx";
import UserInfo from "./User-info/User-info.jsx";

const UserGeneralWrap = () => {
  return (
    <section className="user-general-wrap">
      <GeneralAvatar/>
      <UserInfo/>
    </section>
  );
};
export default UserGeneralWrap;
