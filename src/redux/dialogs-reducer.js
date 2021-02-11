const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';

let initialState = {
  dialogsData: [
    {id: 1, name: 'igor'},
    {id: 2, name: 'ira'},
    {id: 3, name: 'sveta'},
    {id: 4, name: 'miha'},
    {id: 5, name: 'marina'}
  ],
  messagesData: [
    {class: 'message-list__avatar--my',
      text: 'hi',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcL8sho8QEvvpuexofi0rdjTv-5DBpFYH0_A&usqp=CAU'},

    {class: 'message-list__avatar',
      text: 'Урок-шпаргалка поможет вам повторить всю английскую грамматику по учебнику Essential Grammar in Use.\n' +
        '          Английская грамматика для новичков. Чтобы вам было удобно,\n' +
        '          материал содержит обзор всей темы с опорными таблицами, красивыми и понятными схемами.\n' +
        '         К каждой теме мы разбираем примеры английских предложений',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR73bTirPRXy_3cRHyyr5E3Fuv1IAiML_HQFg&usqp=CAU'},

    {class: 'message-list__avatar--my',
      text: 'Чтобы вам было удобно,\n' +
        '          материал содержит обзор всей темы с опорными',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcL8sho8QEvvpuexofi0rdjTv-5DBpFYH0_A&usqp=CAU'}
  ],
  newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_MESSAGE: {
      let newMessage = {
        class: 'message-list__avatar--my',
        text: state.newMessageText,
        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcL8sho8QEvvpuexofi0rdjTv-5DBpFYH0_A&usqp=CAU'
      };

      return {
        ...state,
        messagesData: [...state.messagesData, newMessage],
        newMessageText: ''
      };
    }
    case UPDATE_NEW_MESSAGE_TEXT: {

      return {
        ...state,
        newMessageText: action.newValue
      };
    }
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
