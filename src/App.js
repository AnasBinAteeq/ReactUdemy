import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';
import BlogCard from './blogCard';
import { isArrayEmpty } from './util';

class App extends Component {

  state ={
    showBlogs : true,

    blogArr : [

      {
        id:1,
        title: 'Blog Title 1',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consequat iaculis turpis semper bibendum.',
        likeCount : 0,
      },
      {
        id:2,
        title: 'Blog Title 2',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consequat iaculis turpis semper bibendum.',
        likeCount : 0,
      },
      {
        id:3,
        title: 'Blog Title 3',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consequat iaculis turpis semper bibendum.',
        likeCount : 0,
      }
  
    ]
  
  }

  
  onLikeBtnClick = (pos) => {
    const updatedBlogList = this.state.blogArr;
    const updatedBlogObj = updatedBlogList[pos];
    
    updatedBlogObj.likeCount = updatedBlogObj.likeCount + 1;
    updatedBlogList[pos]=updatedBlogObj;
    this.setState({blogArr: updatedBlogList})
  }

    onHideBtnClick = () => {
    // let updatedState = !this.state.showBlogs;
    this.setState((prevState, prevProps) => {
      return {showBlogs: !prevState.showBlogs}
    })
  }

  render() {

    const blogCards = isArrayEmpty(this.state.blogArr) ? [] : this.state.blogArr.map((item,pos)=> {

      return(
        <BlogCard key={pos} title={item.title} description={item.desc} likeCount={item.likeCount} 
        onLikeBtnClick={() => this.onLikeBtnClick(pos)}/>
        // <div className='blogCard' key={item.id}>
        //   <h3>{item.title}</h3>
        //   <p>{item.desc}</p>
        // </div>
      )
    })

    return (
      <div className="App">
        <button onClick={this.onHideBtnClick}>{this.state.showBlogs ? 'Hide List' : 'Show List'}</button>
        <br></br>
        { 
        this.state.showBlogs ? blogCards : null
        }
      </div>
    );
  }
}

export default App;