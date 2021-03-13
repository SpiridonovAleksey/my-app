import React from "react";
import './user-item.css'

const UserItem = (props) => {

  if (props.users.length === 0) {
    props.setUsers([{
      userId: 1,
      fullName: 'Sveta Ten',
      status: 'OMG',
      avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQje9S6SNadtFb-a9IGUkQE4HNcPgH8-uPomg&usqp=CAU',
      location: {
        country: 'USA',
        city: 'LA'
      },
      followed: false
    },
      {
        userId: 2,
        fullName: 'Marina May',
        status: 'I like football',
        avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMfwKKvCnC0Vd08mCdVSNUOgmPOQbzSceKQQ&usqp=CAU',
        location: {
          country: 'USA',
          city: 'Boston'
        },
        followed: true
      },
      {
        userId: 3,
        fullName: 'Joseph Francis Tribbiani',
        status: 'an actor',
        avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ74it60KT6BQjGE0KH0TFnGghqe24idV4qnA&usqp=CAU',
        location: {
          country: 'USA',
          city: 'NY'
        },
        followed: true
      }])
  }

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
              user.followed ? <button className='users-list__button' onClick={()=> {props.unFollow(user.userId)}}>unfollow</button>
                            : <button className='users-list__button' onClick={()=> {props.follow(user.userId)}}>follow</button>
            }

          </li>
        );
      })
  );
};

export default UserItem;
