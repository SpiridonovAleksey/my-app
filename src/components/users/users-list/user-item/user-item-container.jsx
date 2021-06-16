import React from "react";
import {connect} from "react-redux";
import UsersAPIComponent from "./users-API-component";
import {followActionCreator, unFollowActionCreator} from '../../../../redux/users-reducer.js'
import {setCurrentPageActionCreator, setUsersActionCreator, setTotalUsersCountActionCreator} from "../../../../redux/users-reducer";

let MapStateToProps = (state) => {
  return {
    users: state.usersState.users,
    pageSize: state.usersState.pageSize,
    totalUsersCount: state.usersState.totalUsersCount,
    currentPage: state.usersState.currentPage
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
    },
    setCurrentPage (pageNumber) {
      dispatch(setCurrentPageActionCreator(pageNumber))
    },
    setTotalUsersCount (totalCount) {
      dispatch(setTotalUsersCountActionCreator(totalCount))
    }
  }
};

const UserItemContainer = connect(MapStateToProps, MapDispatchToProps)(UsersAPIComponent);
export default UserItemContainer;
