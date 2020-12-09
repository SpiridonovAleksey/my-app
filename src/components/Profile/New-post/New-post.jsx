import React from "react";
import "./New-post.css"

const NewPost = () => {
  return (
    <section className="new-post">
      <img className="new-post__avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfBJb0V9mwKFAoznIFdeWISIB_JR_XzIMYwA&usqp=CAU"
           alt=""/>
      <p className="new-post__title">add new post</p>
      <input className="new-post__message"
             type="text"/>
      <button className="new-post__button" type="submit">add</button>
    </section>
  )
};
export default NewPost;
