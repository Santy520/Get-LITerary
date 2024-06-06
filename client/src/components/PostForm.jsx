import { useState } from 'react';
import PropTypes from 'prop-types';

function PostForm({ addPost }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addPost(text);
      setText('');
    }
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write a post..."
        required
      />
      <button type="submit">Post</button>
    </form>
  );
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default PostForm;