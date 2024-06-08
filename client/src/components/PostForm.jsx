import { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Textarea, Button, Card, Center } from '@chakra-ui/react'; // Import Chakra UI components

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
    <Card p="4" mb="4">
      <Box as="form" className="post-form" onSubmit={handleSubmit}>
        <Textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write a post..."
          required
          mb="4"
        />
        <Center>
          <Button type="submit" colorScheme="blue" px="8" py="4">Post</Button>
        </Center>
      </Box>
    </Card>
  );
}

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired,
};

export default PostForm;
