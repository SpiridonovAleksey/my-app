import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

const ADD_NEW_POST = 'ADD_NEW_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';


let store = {
  _state: {
    profileState: {
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
    },

    dialogsState: {
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
    }
  },

  _callSubscriber() {
    console.log('State change');
  },

  getState() {
    return this._state;
  },
  subscribe(observer)  {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profileState = profileReducer(this._state.profileState, action);
    this._state.dialogsState = dialogsReducer(this._state.dialogsState, action);

    this._callSubscriber(this._state);
  }

};

export const addPostActionCreator = () => {
  return {type: ADD_NEW_POST};
};

export const onPostChangeActionCreator = (newText) => {
  return {type: UPDATE_NEW_POST_TEXT,
          newValue: newText};
};

export const addMessageActionCreator = () => {
  return {type: ADD_NEW_MESSAGE};
};

export const updateNewMessageTextActionCreator = (newText) => {
  return {type: UPDATE_NEW_MESSAGE_TEXT,
          newValue: newText};
};

export default store;
window.store = store;
