import React, { useEffect, useState } from 'react';
import Article from './components/Article';
import { posts } from './data/posts';
import { IPost } from './interfaces/post';

const data: IPost[] = posts;
function App() {
  

  return (
    <div className="container mx-auto py-10">
      {posts.map((p, i) => {
        return (
          <Article key={p.id} post={p} right={i % 2 !== 0} />
        )
      })}
      
      
    </div>
  );
}

export default App;
