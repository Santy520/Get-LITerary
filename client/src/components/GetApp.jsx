import React from 'react';
import { Box, Flex, Heading, Image, Link } from '@chakra-ui/react';
import playstore from '../assets/google-play.png';
import appstore from '../assets/app-store.png';
import app from '../assets/app.png';

function GetAppSection() {
  return (
    <Box
    bgGradient="linear(to-r, white, gray.100)"
    py={12}
    color="white"
    >
      <Flex 
        direction={{ base: "column", md: "row" }} 
        align="center" 
        width="100%"
        mx="auto"
        px={4}
      >
        <Box flex="1" textAlign={{ base: "center", md: "left" }} p={10}>
          <Heading as="h2" size="lg" mb={4} color="gray.800">
          Access a world of book clubs right at your fingertips. Install the app now.
          </Heading>
          <Flex alignItems="center">
            <Link href="#">
              <Image src={playstore} alt="Google Play" mr={4} boxSize="200px" borderRadius="md" />
            </Link>
            <Link href="#">
              <Image src={appstore} alt="App Store" boxSize="200px" height="50%" borderRadius="md" />
            </Link>
          </Flex>
        </Box>
        <Box flex="1" display={{ base: "none", md: "flex" }} justifyContent="center" alignItems="center" p={4}>
          <Image 
            src={app}
            alt="App Screenshot"
            // borderRadius="10px"
            boxShadow="0"
            maxW="80%"
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default GetAppSection;
