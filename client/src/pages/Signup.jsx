import React from 'react';
import { Box, Button, FormControl, FormLabel, Input, Heading, Text, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

function Signup() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh" bg="gray.50">
      <Box p={8} maxWidth="400px" borderWidth={1} borderRadius={8} boxShadow="lg" bg="white">
        <Heading as="h2" size="lg" mb={6} textAlign="center">
          Sign Up
        </Heading>
        <form>
          <FormControl mb={4}>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input type="text" id="name" name="name" required />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input type="email" id="email" name="email" required />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input type="password" id="password" name="password" required />
          </FormControl>
          <Button 
            type="submit" 
            colorScheme="blue" 
            width="full" 
            mt={4} 
            bgGradient="linear(to-t, blue.400, blue.500)"
            _hover={{
              bgGradient: "linear(to-b, blue.300, blue.400)"
            }}
          >
            Sign Up
          </Button>
        </form>
        <Text mt={4} textAlign="center">
          Already have an account? <Link as={RouterLink} to="/" color="blue.500">Sign In</Link>
        </Text>
      </Box>
    </Box>
  );
}

export default Signup;
