import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Heading,
  Text,
  Link,
  Image,
} from '@chakra-ui/react';
import Auth from '../utils/auth';
import SignupImage from '../assets/signup.png';

const Signup = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" bg="gray.50" p={{ base: 4, md: 8 }} mt={{ base: 4, md: 0 }}>
      <Box
        display="flex"
        flexDirection={{ base: 'column', md: 'row' }}
        p={{ base: 4, md: 8 }}
        width="100%"
        maxWidth="1200px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
        bg="white"
        minHeight={{ base: 'auto', md: '80vh' }}
      >
        <Box flex="1" display="flex" justifyContent="center" alignItems="center" mb={{ base: 8, md: 0 }}>
          <Image src={SignupImage} alt="Signup Image" borderRadius="md" boxShadow="1px" maxW={{ base: '100%', md: '400px' }} />
        </Box>
        <Box flex="1" display="flex" flexDirection="column" justifyContent="center" p={{ base: 4, md: 8 }}>
          <Heading as="h2" size="lg" mb={6} textAlign="center">
            SIGN UP
          </Heading>
          {data ? (
            <Text textAlign="center">
              Success! You may now head{' '}
              <Link as={RouterLink} to="/">
                back to the homepage.
              </Link>
            </Text>
          ) : (
            <form onSubmit={handleFormSubmit}>
              <FormControl mb={4}>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel htmlFor="password">Password</FormLabel>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="******"
                  value={formState.password}
                  onChange={handleChange}
                  required
                />
              </FormControl>
              <Button
                type="submit"
                colorScheme="blue"
                width="full"
                mt={4}
                bgGradient="linear(to-t, blue.400, blue.500)"
                _hover={{
                  bgGradient: 'linear(to-b, blue.300, blue.400)',
                }}
              >
                Sign Up
              </Button>
            </form>
          )}
          {error && (
            <Box my={3} p={3} bg="red.500" color="white" borderRadius="md" textAlign="center">
              {error.message}
            </Box>
          )}
          <Text mt={4} textAlign="center">
            Already have an account?{' '}
            <Link as={RouterLink} to="/" color="blue.500">
              Sign In
            </Link>
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
