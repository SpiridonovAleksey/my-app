import React from "react";
import './user-item.css'

const UserItem = (props) => {
  return (
  props.users.map((user) => {
        return (
          <li key={user.userId}>
            <img src={user.avatarUrl}
                 alt="avatar"/>
            <p>{user.fullName}</p>
            <div>
              <p>{user.location.country}</p>
              <p>{user.location.city}</p>
            </div>
            <p>{user.status}</p>

            <button>button</button>
          </li>
        );
      })
  );
};

export default UserItem;
