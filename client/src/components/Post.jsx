import 'react';
import PropTypes from 'prop-types';

function Post({ post, deletePost }) {
  return (
    <div className="post">
      <p>{post.text}</p>
      <button className="delete-button" onClick={() => deletePost(post.id)}>Delete</button>
    </div>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  deletePost: PropTypes.func.isRequired,
};

export default Post;

// there is no query here!!!!