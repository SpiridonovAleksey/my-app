import React from "react";
import './user-item.css'

const UserItem = (props) => {
  return (
  props.users.map((user) => {
        return (
          <li key={user.userId} className='users-list__item'>
            <img src={user.avatarUrl}
                 alt=""
            className='users-list__avatar'/>
            <p className='users-list__name'>{user.fullName}</p>
            <div className='users-list__location'>
              <p>{user.location.country}</p>
              <p>{user.location.city}</p>
            </div>
            <p className='users-list__status'>{user.status}</p>
            {
              user.followed ? <button className='users-list__button' onClick={()=> {props.unfollow(user.userId)}}>unfollow</button>
                            : <button className='users-list__button' onClick={()=> {props.follow(user.userId)}}>follow</button>
            }

          </li>
        );
      })
  );
};

export default UserItem;
