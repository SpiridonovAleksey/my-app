const ADD_NEW_POST = 'ADD_NEW_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const profileReducer = (state, action) => {
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
