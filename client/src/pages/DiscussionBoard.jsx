import React from 'react';
import { useState } from 'react';
import { Box, Heading, Center, Card } from '@chakra-ui/react'; // Import Chakra UI components
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
    <Center>
      <Card p="4" width="95%">
        <Center>
          <Heading as="h1" size="xl" mb="4">Discussion Board</Heading>
        </Center>
        <PostForm addPost={addPost} />
        <Box className="posts">
          {posts.map(post => (
            <Post key={post.id} post={post} deletePost={deletePost} />
          ))}
        </Box>
      </Card>
    </Center>
  );
}

export default DiscussionBoard;