import React from "react";
import './user-item.css'
import * as axios from "axios";
import userPhoto from '../../../../assets/images/avatar-default.webp'

class UserItem extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items);
      this.props.setTotalUsersCount(response.data.totalCount);
    });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
      this.props.setUsers(response.data.items);
    });
  }

  render() {

    let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize) ;

    let pages = [];
    for (let i= 1; i <= pageCount; i++) {
      pages.push(i);
    }

    return (
      <div>
        <div>
          {pages.map((p) => {
            return(
              <button className={this.props.currentPage === p && 'pagination-button checked'}
              onClick={ (e) => {this.onPageChanged(p);}}>{p}</button>
            );
          })}
        </div>

        {
          this.props.users.map((user) => {
            return (
              <div key={user.id}
                   className='users-list__item'>
                <img src={user.photos.small != null ? user.photos.small : userPhoto}
                     alt=""
                     className='users-list__avatar'/>
                <p className='users-list__name'>{user.name}</p>
                <div className='users-list__location'>
                  <p>{'user.location.country'}</p>
                  <p>{'user.location.city'}</p>
                </div>
                <p className='users-list__status'>{user.status}</p>
                {
                  user.followed ? <button className='users-list__button'
                                          onClick={() => {
                                            this.props.unFollow(user.id)
                                          }}>unfollow</button>
                    : <button className='users-list__button'
                              onClick={() => {
                                this.props.follow(user.id)
                              }}>follow</button>
                }
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default UserItem;
