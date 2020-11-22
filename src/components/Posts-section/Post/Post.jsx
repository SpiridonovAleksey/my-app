import React from "react";
import "./Post.css";

const Post = () => {
  return (
    <div className="post">
      <img className="post__avatar" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfBJb0V9mwKFAoznIFdeWISIB_JR_XzIMYwA&usqp=CAU"
           alt=""/>
           <p className="post__content">Добро пожаловать на просмотр 5 выпуска шоу The Grand Tour!
             И на этот раз в нём будет все, что только может пожелать автолюбитель – торговый центр,
             овцы, взрывы и пустыни. Но все это мы увидим чуть позже, а начнем с более близких
             к автомобилям игрушек.</p>
      <button className="post__like">Like</button>
    </div>
  )
};

export default Post;
