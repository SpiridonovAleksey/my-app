const ADD_NEW_POST = 'ADD_NEW_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
  friendsData: [
    {name: 'boris', url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTip_VRWHVZ9Hs-duJcIjB6SxFk5q-QGNitnw&usqp=CAU'},
    {name: 'vadim', url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSasANDDeWubBzgKEnbIPpI7X7t-lsyFFgvNA&usqp=CAU'},
    {name: 'alina', url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQje9S6SNadtFb-a9IGUkQE4HNcPgH8-uPomg&usqp=CAU'},
    {name: 'lena', url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMfwKKvCnC0Vd08mCdVSNUOgmPOQbzSceKQQ&usqp=CAU'},
    {name: 'tolik', url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxjV5mgzlLBAls49xJ01gEyH7O-THex1PqKw&usqp=CAU'}
  ],
  postsData: [
    {text: 'материал содержит обзор всей темы с опорными таблицами, красивыми',
      count: 11},
    {text: 'sdfsdfdsfsdf',
      count: 32},
    {text: 'sdfsdfdsfsdfшпаргалка поможет вам повторить всю',
      count: 32},
    {text: 'шпаргалка поможет вам повторить всю английскую грамматику по учебнику Essential',
      count: 44}
  ],
  newPostText: ''
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_POST:
      let newPost = {
        text: state.newPostText,
        count: 99
      };

      state.postsData.push(newPost);
      state.newPostText = '';
      return state;

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newValue;
      return state;

    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return {type: ADD_NEW_POST};
};

export const onPostChangeActionCreator = (newText) => {
  return {type: UPDATE_NEW_POST_TEXT,
    newValue: newText};
};

export default profileReducer;
