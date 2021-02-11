import React from "react";
import "./Posts-wrap.css";
import {connect} from "react-redux";
import Posts from "./posts/posts";

function mapStateToProps(state) {
  return {
    postsData: state.profileState.postsData
  }
}

const PostsContainer = connect(mapStateToProps)(Posts);

export default PostsContainer;
