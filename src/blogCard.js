import React, { Component } from "react"
import { dumplogs } from "./util";
import classes from './BlogCard.module.css'

const BlogCard = (props) => {

  // onLikeBtnClick = () => {
  //   this.setState((prevState, prevProp) =>{
  //     return {likeCount : prevState.likeCount+1}
  //   });
  //  }

  dumplogs(props);

  return(
   <div className={classes.blogCard}>
     <h3>{props.title}</h3>
     <p>{props.description}</p>
     <p>Like Count: <span className={classes.likeCount}>{props.likeCount}</span></p>
     <button onClick={props.onLikeBtnClick}>Like</button>
   </div>
   )
  }

export default BlogCard;