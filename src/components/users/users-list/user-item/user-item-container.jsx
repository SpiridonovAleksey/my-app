import React from "react";
import {connect} from "react-redux";
import UserItem from "./user-item";
import {followActionCreator, unfollowActionCreator} from '../../../../redux/users-reducer.js'
import {setUsersActionCreator} from "../../../../redux/users-reducer";

let MapStateToProps = (state) => {
  return {
    users: state.usersState.state.users

  }
};

let MapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followActionCreator(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowActionCreator(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersActionCreator(users));
    }
  }
};

const UserItemContainer = connect(MapStateToProps, MapDispatchToProps)(UserItem);
export default UserItemContainer;