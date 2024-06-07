import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

function WelcomeScreen() {
  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      height="100vh" 
      bg="gray.100"
    >
      <Box textAlign="center">
        <Heading as="h1" size="xl" mb={4}>
          Welcome Screen
        </Heading>
        <Text fontSize="lg">
          Hello! Welcome to our Project!!!
        </Text>
      </Box>
    </Box>
  );
}

export default WelcomeScreen