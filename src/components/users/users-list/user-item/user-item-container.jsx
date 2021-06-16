import React from "react";
import {connect} from "react-redux";
// import UsersAPIComponent from "./users-API-component";
import {followActionCreator, unFollowActionCreator} from '../../../../redux/users-reducer.js'
import {
  setCurrentPageActionCreator,
  setUsersActionCreator,
  setTotalUsersCountActionCreator, toggleIsFetchingActionCreator
} from "../../../../redux/users-reducer";

import * as axios from "axios";
import UserItem from "./user-item";
import Preloader from "../../../common/Preloader/preloader";

class UsersAPIComponent extends React.Component {

  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
    });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(response.data.items);
    });
  };

  render() {

    return (<>
        { this.props.isFetching ? <Preloader /> : null }
        <UserItem totalUsersCount={this.props.totalUsersCount}
                  pageSize={this.props.pageSize}
                  currentPage={this.props.currentPage}
                  onPageChanged={this.onPageChanged}
                  users={this.props.users}
                  follow={this.props.follow}
                  unFollow={this.props.unFollow}
        />
      </>
    );
  }
}

let MapStateToProps = (state) => {
  return {
    users: state.usersState.users,
    pageSize: state.usersState.pageSize,
    totalUsersCount: state.usersState.totalUsersCount,
    currentPage: state.usersState.currentPage,
    isFetching: state.usersState.isFetching
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
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageActionCreator(pageNumber))
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountActionCreator(totalCount))
    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetchingActionCreator(isFetching))
    }
  }
};

const UserItemContainer = connect(MapStateToProps, MapDispatchToProps)(UsersAPIComponent);
export default UserItemContainer;
