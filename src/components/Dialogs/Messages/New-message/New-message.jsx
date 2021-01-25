import React from "react";
import './New-message.css';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../../redux/state";

const NewMessage = (props) => {
  let newMessageText = React.createRef();

  let sendMessage = () => {
    props.dispatch(addMessageActionCreator());
  };

  let onMessageChange = () => {
    let newText = newMessageText.current.value;
    props.dispatch(updateNewMessageTextActionCreator(newText));
  };

  return (
    <div className='new-message'>
      <textarea className='new-message__text'
                name=""
                id=""
                cols=""
                rows=""
                placeholder='Введите сообщение'
                ref={newMessageText}
                onChange={onMessageChange}
                value={props.newMessageText}/>
      <div className='new-message__control'>
        <button className='new-message__button' onClick={sendMessage}>send</button>
      </div>
    </div>
  );
};

export default NewMessage;
