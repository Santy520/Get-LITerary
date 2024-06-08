import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
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
import loginImage from '../assets/login.png'; 

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

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
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh" bg="gray.50">
      <Box
        display="flex"
        flexDirection={{ base: 'column', md: 'row' }}
        p={8}
        width="100%"
        maxWidth="1200px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
        bg="white"
        height="80vh"
      >
        <Box flex="1" display="flex" justifyContent="center" alignItems="center">
          <Image src={loginImage} alt="Login Image" borderRadius="md" boxShadow="md" />
        </Box>
        <Box flex="1" display="flex" flexDirection="column" justifyContent="center" p={8}>
          <Heading as="h2" size="lg" mb={6} textAlign="center">
            SIGN IN
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
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
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
                Sign In
              </Button>
            </form>
          )}
          <Text mt={4} textAlign="center">
            Do not have an account?{' '}
            <Link as={RouterLink} to="/signup" color="blue.500">
              Sign Up
            </Link>
          </Text>
          {error && (
            <Box my={3} p={3} bg="red.500" color="white" borderRadius="md" textAlign="center">
              {error.message}
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
