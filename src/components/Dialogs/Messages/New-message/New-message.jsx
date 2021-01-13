import React from "react";
import './New-message.css';

const NewMessage = (props) => {

  return (
    <div className='new-message'>
      <textarea className='new-message__text' name="" id="" cols="" rows="" placeholder='Введите сообщение'></textarea>
      <div className='new-message__control'>
        <button className='new-message__button'>send</button>
      </div>
    </div>
  );
};

export default NewMessage;
