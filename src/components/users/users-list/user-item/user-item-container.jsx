import React from "react";
import {connect} from "react-redux";
import UserItem from "./user-item";
import {followActionCreator, unFollowActionCreator} from '../../../../redux/users-reducer.js'
import {setUsersActionCreator} from "../../../../redux/users-reducer";

let MapStateToProps = (state) => {
  return {
    users: state.usersState.users

  }
};

let MapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followActionCreator(userId));
    },
    unFollow: (userId) => {
      dispatch(unFollowActionCreator(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersActionCreator(users));
    }
  }
};

const UserItemContainer = connect(MapStateToProps, MapDispatchToProps)(UserItem);
export default UserItemContainer;
