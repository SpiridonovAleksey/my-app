import React from "react";
import "./New-post.css"

const NewPost = (props) => {

  let newPostText = React.createRef();

  let addPost = () => {

    let newText = newPostText.current.value;
    props.addNewPost(newText);
    newPostText.current.value = '';
  };

  return (
    <section className="new-post">
      <img className="new-post__avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE4Jz3awyArUnyFZaY0yo3zW09SjnZIH7G-g&usqp=CAU"
           alt=""/>
      <p className="new-post__title">add new post</p>
      <textarea className="new-post__message" ref={newPostText}></textarea>
      <button className="new-post__button" onClick={addPost}>add</button>
    </section>
  )
};
export default NewPost;
