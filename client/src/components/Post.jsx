// import React from 'react';
// import PropTypes from 'prop-types';
// import { Box, Text, Button, Card, Center } from '@chakra-ui/react'; // Import Chakra UI components

// function Post({ post, deletePost }) {
//   return (
//     <Center>
//       <Card className="post" p="4" mb="4" width="50%">
//         <Text mb="4">{post.text}</Text>
//         <Center>
//           <Button colorScheme="red" onClick={() => deletePost(post.id)} px="8" py="4">Delete</Button>
//         </Center>
//       </Card>
//     </Center>
//   );
// }

// Post.propTypes = {
//   post: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     text: PropTypes.string.isRequired,
//   }).isRequired,
//   deletePost: PropTypes.func.isRequired,
// };

// export default Post;
import { useState } from 'react';
import { Text, Button, Card, Center } from '@chakra-ui/react'; // Import Chakra UI components

function Post() {
  const [posts, setPosts] = useState([
    { id: 1, text: 'This is the first post.' },
    { id: 2, text: 'This is the second post.' },
  ]);

  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <>
      {posts.map(post => (
        <Center key={post.id}>
          <Card className="post" p="4" mb="4" width="50%">
            <Text mb="4">{post.text}</Text>
            <Center>
              <Button colorScheme="red" onClick={() => deletePost(post.id)} px="8" py="4">Delete</Button>
            </Center>
          </Card>
        </Center>
      ))}
    </>
  );
}

export default Post;
