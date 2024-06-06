import React from 'react';
import { Box, Button, FormControl, FormLabel, Input, Heading, Text, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function Login() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh" bg="gray.50">
      <Box p={8} maxWidth="400px" borderWidth={1} borderRadius={8} boxShadow="lg" bg="white">
        <Heading as="h2" size="lg" mb={6} textAlign="center">
          Login
        </Heading>
        <form>
          <FormControl mb={4}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input type="email" id="email" name="email" required />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input type="password" id="password" name="password" required />
          </FormControl>
          <Button type="submit" colorScheme="teal" width="full" mt={4}>
            Sign In
          </Button>
        </form>
        <Text mt={4} textAlign="center">
          Do not have an account? <Link as={RouterLink} to="/signup" color="teal.500">Sign Up</Link>
        </Text>
      </Box>
    </Box>
  );
}

export default Login;
