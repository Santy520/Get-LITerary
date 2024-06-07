import React from 'react';
import { Box, Button, FormControl, FormLabel, Input, Heading, Text, Link, Image } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import SignupImage from '../assets/signup.png'; 

function Signup() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh" bg="gray.50" p={4}>
      <Box 
        display="flex" 
        flexDirection={{ base: "column", md: "row" }} 
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
          <Image src={SignupImage} alt="Signup Image" borderRadius="1px" boxShadow="1px" width="80%" height="80%" />
        </Box>
        <Box flex="1" display="flex" flexDirection="column" justifyContent="center" p={8}>
          <Heading as="h2" size="lg" mb={6} textAlign="center">
            SIGN UP
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
    </Box>
  );
}

export default Signup;
