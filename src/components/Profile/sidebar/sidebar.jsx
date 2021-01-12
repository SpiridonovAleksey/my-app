import React from "react";
import './sidebar.css'
import Friends from "./friends/friends.jsx";

const Sidebar = (props) => {

  return (
    <section className="sidebar">
      <Friends friendsData={props.friendsData}/>
    </section>
  )
};

export default Sidebar;
