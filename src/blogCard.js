import React from "react"
import { dumplogs } from "./util";
import classes from './BlogCard.module.css'

const BlogCard = (props) => {

   dumplogs(props);

    return(
      <div className={classes.blogCard}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    )
  }

export default BlogCard;