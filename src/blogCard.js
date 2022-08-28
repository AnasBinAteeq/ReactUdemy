import React from "react"

const BlogCard = (props) => {

    return(
      <div className='blogCard'>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    )
  }

export default BlogCard;