import React from "react";
import './user-item.css'
import userPhoto from '../../../../assets/images/avatar-default.webp'
import {NavLink} from "react-router-dom";

const UserItem = (props) => {

  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <button className={props.currentPage === p && 'pagination-button checked'}
                    onClick={(e) => {
                      props.onPageChanged(p)
                    }}>{p}</button>
          );
        })}
      </div>

      {
        props.users.map((user) => {
          return (
            <div key={user.id}
                 className='users-list__item'>
              <NavLink to={'/profile/' + user.id}>
                <img src={user.photos.small != null ? user.photos.small : userPhoto}
                     alt=""
                     className='users-list__avatar'/>
              </NavLink>
              <p className='users-list__name'>{user.name}</p>
              <div className='users-list__location'>
                <p>{'user.location.country'}</p>
                <p>{'user.location.city'}</p>
              </div>
              <p className='users-list__status'>{user.status}</p>
              {
                user.followed ? <button className='users-list__button'
                                        onClick={() => {
                                          props.unFollow(user.id)
                                        }}>unfollow</button>
                  : <button className='users-list__button'
                            onClick={() => {
                              props.follow(user.id)
                            }}>follow</button>
              }
            </div>
          )
        })
      }
    </div>
  );
};
// }

export default UserItem;
