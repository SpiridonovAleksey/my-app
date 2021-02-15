// const TOGGLE_FOLLOWED = 'TOGGLE_FOLLOWED';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  users: [
    {
      userId: 1,
      fullName: 'Sveta Ten',
      status: 'omg',
      avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQje9S6SNadtFb-a9IGUkQE4HNcPgH8-uPomg&usqp=CAU',
      location: {
        country: 'USA',
        city: 'Boston'
      },
      followed: true
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
      fullName: 'Jo Tribiani',
      status: 'dfdf',
      avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSasANDDeWubBzgKEnbIPpI7X7t-lsyFFgvNA&usqp=CAU',
      location: {
        country: 'USA',
        city: 'Boston'
      },
      followed: true
    }
  ]
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: true}
          }
          return user
        })
      };

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return {...user, followed: false}
          }
          return user
        })
      };

    case SET_USERS: {
      return {...state, users: [...state.users, action.users]}
    }

    default:
      return {
        state
      };

  }
};

export const followActionCreator = (userId) => ({type: FOLLOW, userId});
export const unfollowActionCreator = (userId) => ({type: UNFOLLOW, userId});
export const setUsersActionCreator = (users) => ({type: SET_USERS, users});

export default usersReducer;
