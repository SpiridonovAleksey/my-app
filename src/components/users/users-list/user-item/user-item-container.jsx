import React from "react";
import {connect} from "react-redux";
// import UsersAPIComponent from "./users-API-component";
import {follow, unFollow} from '../../../../redux/users-reducer.js'
import {
  setCurrentPage,
  setUsers,
  setTotalUsersCount, toggleIsFetching
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
        {this.props.isFetching ? <Preloader/> : null}
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

const UserItemContainer = connect(MapStateToProps, {
  //ActionCreators
  follow,
  unFollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching
  })(UsersAPIComponent);
export default UserItemContainer;
