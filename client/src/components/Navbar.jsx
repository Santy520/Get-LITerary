import React from 'react';
import { Box, Flex, Link, Spacer } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <Flex
      as="nav"
      p={4}
      bgGradient="linear(to-t, blue.600, blue.700)"
      color="white"
      alignItems="center"
    >
      <Box fontSize="xl">Book Club</Box>
      <Spacer />
      <Box>
        <Link as={NavLink} to="/" mx={2} _hover={{ textDecoration: 'none' }} color="white">
          Login
        </Link>
        <Link as={NavLink} to="/WelcomeScreen" mx={2} _hover={{ textDecoration: 'none' }} color="white">
          Welcome Screen
        </Link>
        <Link as={NavLink} to="/discussion" mx={2} _hover={{ textDecoration: 'none' }} color="white">
          Discussion Page
        </Link>
      </Box>
    </Flex>
  );
}

export default Navbar;
