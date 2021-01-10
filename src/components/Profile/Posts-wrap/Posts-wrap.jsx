import React from "react";
import Post from "./Post/Post.jsx";
import "./Posts-wrap.css";

const PostsWrap = () => {
  return (
    <section className="posts-wrap">
      <h2 className="posts-wrap__title">my publications</h2>
      <Post message="Добро пожаловать на просмотр 5 выпуска шоу The Grand Tour!
             И на этот раз в нём будет все, что только может пожелать автолюбитель – торговый центр,
             овцы, взрывы и пустыни. Но все это мы увидим чуть позже, а начнем с более близких
             к автомобилям игрушек." count="4"/>
      <Post message="The Grand Tour 2 сезон 5 серия - По морям, по волнам и по фермерским полям на русском языке!
       перевод BMIRussian!" count="3"/>
      <Post message="Джеймс Мэй будут вести шоу из Котсуолда постоянно, однако большие путешествия
       останутся неотъемлемой частью каждого выпуска!" count="10"/>
    </section>
  )
};

export default PostsWrap;
