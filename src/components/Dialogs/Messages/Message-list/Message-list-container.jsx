import React from "react";
import './Message-list.css'
import StoreContext from "../../../../StoreContext";
import {connect} from "react-redux";
import MessageList from "./Message-list";

// const MessageList = (props) => {
//
//   // return (
//   //   <StoreContext.Consumer>
//   //     {
//   //       (store) => {
//
//   let state = props.messagesData;
//
//   let messageItem = state.map(item =>
//     <li className='message-list__item'>
//       <img className={item.class}
//            src={item.url}
//            alt=""/>
//       <p className='message-list__text'>{item.text}</p>
//     </li>
//   );
//
//   return (
//     <ul className='message-list'>
//       {messageItem}
//     </ul>
//   )
//   // };
//   //     }
//   //   </StoreContext.Consumer>
//   // );
// };

let MapStateToProps = (state) => {
  return {
    messagesData: state.dialogsState.messagesData
  }
}


const MessageListContainer = connect(MapStateToProps)(MessageList);

export default MessageListContainer;

