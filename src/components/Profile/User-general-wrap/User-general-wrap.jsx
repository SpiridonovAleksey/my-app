import React from "react";
import "./User-general-wrap.css"
import GeneralAvatar from "./General-avatar/General-avatar.jsx";
import UserInfo from "./User-info/User-info.jsx";

const UserGeneralWrap = (props) => {
  return (
    <section className="user-general-wrap">
      <GeneralAvatar photos={props.profile.photos}/>
      <UserInfo profile={props.profile}/>
    </section>
  );
};
export default UserGeneralWrap;
