import React, { useEffect, useState } from 'react';
import CreatePostPanel from './components/create-post-panel/create-post-panel';

import { posts } from './data/posts';
import { IPost } from './interfaces/post';


function App() {
  

  return (
    <div className="container mx-auto py-10">
      <CreatePostPanel />
     
    </div>
  );
}

export default App;
