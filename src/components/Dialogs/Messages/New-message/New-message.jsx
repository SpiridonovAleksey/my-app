import React from "react";
import './New-message.css';

const NewMessage = (props) => {

  let newMessageText = React.createRef();

  let sendMessage = () => {
    let text = newMessageText.current.value;
    props.addNewMessage(text);
    newMessageText.current.value = '';
  };

  return (
    <div className='new-message'>
      <textarea className='new-message__text' name="" id="" cols="" rows="" placeholder='Введите сообщение' ref={newMessageText}></textarea>
      <div className='new-message__control'>
        <button className='new-message__button' onClick={sendMessage}>send</button>
      </div>
    </div>
  );
};

export default NewMessage;
