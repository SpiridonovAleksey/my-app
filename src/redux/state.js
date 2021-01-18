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
    if (action.type === 'ADD_NEW_POST') {
      let newPost = {
        text: this._state.profileState.newPostText,
        count: 99
      };

      this._state.profileState.postsData.push(newPost);
      text: this._state.profileState.newPostText = '';
      this._callSubscriber(this._state);

    } else if (action.type === 'UPDATE_NEW_POST_TEXT') {

      this._state.profileState.newPostText = action.newValue;
      this._callSubscriber(this._state);

    };
  },








  //
  // addNewPost()  {
  //
  //   let newPost = {
  //       text: this._state.profileState.newPostText,
  //       count: 99
  //     };
  //
  //   this._state.profileState.postsData.push(newPost);
  //   text: this._state.profileState.newPostText = '';
  //   this._callSubscriber(this._state);
  // },
  // updateNewPostText(newValue)  {
  //   this._state.profileState.newPostText = newValue;
  //   this._callSubscriber(this._state);
  // },

  addNewMessage()  {
    let newMessage = {
      class: 'message-list__avatar--my',
      text: this._state.dialogsState.newMessageText,
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcL8sho8QEvvpuexofi0rdjTv-5DBpFYH0_A&usqp=CAU'
    };

    this._state.dialogsState.messagesData.push(newMessage);
    text: this._state.dialogsState.newMessageText = '';
    this._callSubscriber(this._state);
  },
  updateNewMessageText(newText)  {
    this._state.dialogsState.newMessageText = newText;
    this._callSubscriber(this._state);
  }

};

export default store;
window.store = store;
