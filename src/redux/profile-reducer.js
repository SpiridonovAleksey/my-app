const ADD_NEW_POST = 'ADD_NEW_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

const profileReducer = (state, action) => {
  if (action.type === 'ADD_NEW_POST') {
    let newPost = {
      text: state.newPostText,
      count: 99
    };

    state.postsData.push(newPost);
    state.newPostText = '';

  } else if (action.type === 'UPDATE_NEW_POST_TEXT') {
    state.newPostText = action.newValue;
  }
  return state;
};

export default profileReducer;
