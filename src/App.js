import { render } from '@testing-library/react';
import React, { Component } from 'react';
import './App.css';
import BlogCard from './blogCard';
import { isArrayEmpty } from './util';

class App extends Component {

  state ={
    showBlogs : true
  }

  blogArr =[

    {
      id:1,
      title: 'Blog Title 1',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consequat iaculis turpis semper bibendum.'
    },
    {
      id:2,
      title: 'Blog Title 2',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consequat iaculis turpis semper bibendum.'
    },
    {
      id:3,
      title: 'Blog Title 3',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consequat iaculis turpis semper bibendum.'
    }

  ];

  blogCards = isArrayEmpty(this.blogArr) ? [] : this.blogArr.map((item,pos)=> {

    return(
      <BlogCard key={pos} title={item.title} description={item.desc}/>
      // <div className='blogCard' key={item.id}>
      //   <h3>{item.title}</h3>
      //   <p>{item.desc}</p>
      // </div>
    )
  })

  onHideBtnClick = () => {
    // let updatedState = !this.state.showBlogs;
    this.setState((prevState, prevProps) => {
      return {showBlogs: !prevState.showBlogs}
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.onHideBtnClick}>{this.state.showBlogs ? 'Hide List' : 'Show List'}</button>
        <br></br>
        { 
        this.state.showBlogs ? this.blogCards : null
        }
      </div>
    );
  }
}

export default App;