import React from "react";
import "./New-post.css"

const NewPost = (props) => {
  let someNewPostText = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let newText = someNewPostText.current.value;
    props.postChange(newText);
  };


  return (
    <section className="new-post">
      <img className="new-post__avatar"
           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE4Jz3awyArUnyFZaY0yo3zW09SjnZIH7G-g&usqp=CAU"
           alt=""/>
      <p className="new-post__title">добавить пост</p>
      <textarea className="new-post__message"
                ref={someNewPostText}
                onChange={onPostChange}
                value={props.newPostText}/>
      <button className="new-post__button"
              onClick={onAddPost}>добавить
      </button>
    </section>
  )
};
export default NewPost;
