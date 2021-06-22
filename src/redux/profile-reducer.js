const ADD_NEW_POST = 'ADD_NEW_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
  friendsData: [
    {
      id: 1,
      name: 'boris',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTip_VRWHVZ9Hs-duJcIjB6SxFk5q-QGNitnw&usqp=CAU'
    },
    {
      id: 2,
      name: 'vadim',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSasANDDeWubBzgKEnbIPpI7X7t-lsyFFgvNA&usqp=CAU'
    },
    {
      id: 3,
      name: 'alina',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQje9S6SNadtFb-a9IGUkQE4HNcPgH8-uPomg&usqp=CAU'
    },
    {
      id: 4,
      name: 'lena',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMfwKKvCnC0Vd08mCdVSNUOgmPOQbzSceKQQ&usqp=CAU'
    },
    {
      id: 5,
      name: 'tolik',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxjV5mgzlLBAls49xJ01gEyH7O-THex1PqKw&usqp=CAU'
    }
  ],
  postsData: [
    {
      id: 1,
      text: 'материал содержит обзор всей темы с опорными таблицами, красивыми',
      count: 11
    },
    {
      id: 2,
      text: 'sdfsdfdsfsdf',
      count: 32
    },
    {
      id: 3,
      text: 'sdfsdfdsfsdfшпаргалка поможет вам повторить всю',
      count: 32
    },
    {
      id: 4,
      text: 'шпаргалка поможет вам повторить всю английскую грамматику по учебнику Essential',
      count: 44
    }
  ],
  newPostText: '',
  profile: 'wert'
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_POST: {
      let newPost = {
        text: state.newPostText,
        count: 99
      };

      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: ''
      };
    }

    case UPDATE_NEW_POST_TEXT: {

      return {
        ...state,
        newPostText: action.newValue
      };
    }

    case SET_USER_PROFILE: {

      return {
        ...state,
        profile: action.profile
      };
    }

    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {type: ADD_NEW_POST};
};

export const onPostChangeActionCreator = (newText) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newValue: newText
  };
};

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile
  };
};

export default profileReducer;
