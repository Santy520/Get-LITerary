import { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_TOPICS } from '../utils/queries';
import { ADD_TOPIC } from '../utils/mutations';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  VStack,
  Link,
  Text,
  Spinner,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';

const Topic = () => {
  const { loading, data, error, refetch } = useQuery(GET_TOPICS);
  const [addTopic] = useMutation(ADD_TOPIC);
  const [title, setTitle] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleCreateTopic = async (e) => {
    e.preventDefault();
    try {
      setSubmitting(true);
      await addTopic({ variables: { title } });
      setTitle('');
      refetch(); // Refetch the topics after adding a new one
    } catch (err) {
      console.error('Error creating topic:', err);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Spinner size="xl" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box p={4}>
        <Alert status="error">
          <AlertIcon />
          Error: {error.message}
        </Alert>
      </Box>
    );
  }

  const topics = data?.topics || [];

  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>Here are the topics to discuss....</Heading>
      <Box
        as="form"
        onSubmit={handleCreateTopic}
        mb={8}
        p={4}
        borderWidth="1px"
        borderRadius="lg"
        boxShadow="md"
        bg="white"
        maxW="500px"
        mx="auto"
      >
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Title</FormLabel>
            <Input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormControl>
        </VStack>
        <Button mt={4} type="submit" colorScheme="teal" size="md" isLoading={submitting}>
          Create Topic
        </Button>
      </Box>
      <Box>
        {topics.length === 0 ? (
          <Text>No topics available</Text>
        ) : (
          topics.map((topic) => (
            <Link href={`/topic/${topic._id}`} key={topic._id} style={{ textDecoration: 'none' }}>
              <Box p={4} borderWidth="1px" borderRadius="lg" mb={4}>
                <Heading as="h2" size="md" mb={2}>{topic.title}</Heading>
              </Box>
            </Link>
          ))
        )}
      </Box>
    </Box>
  );
};

export default Topic;
