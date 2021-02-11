import React from "react";
import './sidebar.css'
import FriendsContainer from "./friends/friends-container";

const Sidebar = (props) => {

  return (
    <section className="sidebar">
      <FriendsContainer/>
    </section>
  )
};

export default Sidebar;
