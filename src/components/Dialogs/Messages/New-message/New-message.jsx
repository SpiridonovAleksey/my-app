import React from "react";
import './New-message.css';

const NewMessage = (props) => {

  let newMessageText = React.createRef();

  let sendMessage = () => {
    props.addNewMessage();
    props.updateNewMessageText('');
  };

  let onMessageChange = () => {
    let text = newMessageText.current.value;
    props.updateNewMessageText(text);
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
                value={props.newMessageText}
                onChange={onMessageChange}/>
      <div className='new-message__control'>
        <button className='new-message__button' onClick={sendMessage}>send</button>
      </div>
    </div>
  );
};

export default NewMessage;
