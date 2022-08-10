import React, { useEffect, useState } from 'react';
import CreatePostPanel from './components/create-post-panel/create-post-panel';
import PostItemList from './components/post-item-list/post-item-list';

import { posts } from './data/posts';
import { IPost } from './interfaces/post';


function App() {
  
  const [postsState, setPostsState ] = useState(posts)

  const updatePosts = (posts : IPost[]) => {
    setPostsState(posts)
  }
  return (
    <div className="container mx-auto py-10">
      <CreatePostPanel setPosts={updatePosts} />
      <PostItemList posts={postsState} setPosts={updatePosts} />
    </div>
  );
}

export default App;
