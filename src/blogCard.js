import React, { Component } from "react"
import { dumplogs } from "./util";
import classes from './BlogCard.module.css'

class BlogCard extends Component{

   state = {
    likeCount : 0
   }

   onLikeBtnClick = () => {
    this.setState((prevState, prevProp) =>{
      return {likeCount : prevState.likeCount+1}
    });
   }

    render(){

      dumplogs(this.props);

      return(
        <div className={classes.blogCard}>
          <h3>{this.props.title}</h3>
          <p>{this.props.description}</p>
          <p>Like Count: <span className={classes.likeCount}>{this.state.likeCount}</span></p>
          <button onClick={this.onLikeBtnClick}>Like</button>
        </div>
      )
    }
  }

export default BlogCard;