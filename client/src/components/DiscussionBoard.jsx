import { useState } from 'react';
import PostForm from './PostForm';
import Post from './Post';

  function DiscussionBoard() {
    const [posts, setPosts] = useState([]);
    const [subscribed, setSubscribed] = useState(false);
  
    const addPost = (text) => {
      setPosts([...posts, { id: Date.now(), text }]);
    };
  
    const deletePost = (id) => {
      setPosts(posts.filter(post => post.id !== id));
    };
  
    const toggleSubscribe = () => {
      setSubscribed(!subscribed);
    };
  
    return (
      <div className="discussion-board">
        <h1>Discussion Board</h1>
        {/* <button className="subscribe-button" onClick={toggleSubscribe}>
          {subscribed ? 'Unsubscribe' : 'Subscribe'}
        </button> */}
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