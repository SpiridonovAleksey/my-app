import React from "react";
import './New-message.css';

const NewMessage = (props) => {
  let newMessageText = React.createRef();

  let onSendMessage = () => {
    props.sendMessage();
  };

  let onMessageChange = () => {
    let newText = newMessageText.current.value;
    props.messageChange(newText);
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
        <button className='new-message__button'
                onClick={onSendMessage}>send
        </button>
      </div>
    </div>
  );
};

export default NewMessage;
