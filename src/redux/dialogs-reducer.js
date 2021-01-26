const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE:
      let newMessage = {
        class: 'message-list__avatar--my',
        text: state.newMessageText,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcL8sho8QEvvpuexofi0rdjTv-5DBpFYH0_A&usqp=CAU'
      };

      state.messagesData.push(newMessage);
      state.newMessageText = '';
      return state;

    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newValue;
      return state;

    default:
      return state;
  }
};

export const addMessageActionCreator = () => {
  return {type: ADD_NEW_MESSAGE};
};

export const updateNewMessageTextActionCreator = (newText) => {
  return {type: UPDATE_NEW_MESSAGE_TEXT,
    newValue: newText};
};

export default dialogsReducer;
