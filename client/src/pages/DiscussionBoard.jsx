import { useState } from 'react';
import PostForm from '../components/PostForm';
import Post from '../components/Post';

function DiscussionBoard() {
  const [posts, setPosts] = useState([]);

  const addPost = (text) => {
    setPosts([...posts, { id: Date.now(), text }]);
  };

  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <div className="discussion-board">
      <h1>Discussion Board</h1>
      {/* The subscribe button is removed */}
      <PostForm addPost={addPost} />
      <div className="posts">
        {posts.map(post => (
          <Post key={post.id} post={post} deletePost={deletePost} />
        ))}
      </div>
    </div>
  );
}

export default DiscussionBoard;