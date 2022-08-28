import React from 'react';
import './App.css';
import BlogCard from './blogCard';

function App() {

  const blogArr =[

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

  const blogCards = blogArr.map((item,pos)=> {

    return(
      <BlogCard key={pos} title={item.title} description={item.desc}/>
      // <div className='blogCard' key={item.id}>
      //   <h3>{item.title}</h3>
      //   <p>{item.desc}</p>
      // </div>
    )
  })

  return (
    <div className="App">
      {blogCards}
    </div>
  );
}

export default App;