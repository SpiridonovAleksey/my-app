// const TOGGLE_FOLLOWED = 'TOGGLE_FOLLOWED';
const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

let initialState = {
  users: [ ],
  pageSize: 5,
  totalUsersCount: 21,
  currentPage: 1
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

    case UN_FOLLOW:
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
      return {...state, users: action.users}
    }

    case SET_CURRENT_PAGE: {
      return {...state, currentPage: action.currentPage}
    }

    case SET_TOTAL_USERS_COUNT: {
      return {...state, totalUsersCount: action.count}
    }

    default:
      return (
        state
      )
  }
};

export const followActionCreator = (userId) => ({type: FOLLOW, userId});
export const unFollowActionCreator = (userId) => ({type: UN_FOLLOW, userId});
export const setUsersActionCreator = (users) => ({type: SET_USERS, users});
export const setCurrentPageActionCreator = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage: currentPage});
export const setTotalUsersCountActionCreator = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});

export default usersReducer;
