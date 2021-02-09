import React from "react";
import './friends.css'
import StoreContext from "../../../../StoreContext";
import {connect} from "react-redux";
import Friends from "./friends";

function mapStateToProps(state) {
  return {
    friendsData: state.profileState.friendsData
  }
}

const FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer;
