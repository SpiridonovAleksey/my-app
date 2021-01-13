import React from "react";
import "./New-post.css"

const NewPost = () => {
  return (
    <section className="new-post">
      <img className="new-post__avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE4Jz3awyArUnyFZaY0yo3zW09SjnZIH7G-g&usqp=CAU"
           alt=""/>
      <p className="new-post__title">add new post</p>
      <textarea className="new-post__message"></textarea>
      <button className="new-post__button" type="submit">add</button>
    </section>
  )
};
export default NewPost;
