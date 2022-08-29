import React from "react"
import { dumplogs } from "./util";

const BlogCard = (props) => {

   dumplogs(props);

    return(
      <div className='blogCard'>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    )
  }

export default BlogCard;