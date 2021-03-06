import React from "react";

const Posts = (props) => {

  let state = props.postsData;

  let postsItem = state.map(item =>
    <div className="post" key={item.id}>
      <img className="post__avatar"
           src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE4Jz3awyArUnyFZaY0yo3zW09SjnZIH7G-g&usqp=CAU"
           alt=""/>
      <p className="post__content">{item.text}</p>
      <button className="post__like">лайков{item.count}</button>
    </div>
  );

  return (
    <section className="posts-wrap">
      <h2 className="posts-wrap__title visually-hidden">мои публикации</h2>
      {postsItem}
    </section>
  )
};
export default Posts;
