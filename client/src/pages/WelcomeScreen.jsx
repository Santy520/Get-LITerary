import React from 'react';
import { Box, Flex, Heading, Text, Button, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import welcomeImage from '../assets/bg_welcome_screen.png';
import GetAppSection from '../components/GetApp'; 


function WelcomeScreen() {
  const navigate = useNavigate();

  const handleJoinConversation = () => {
    navigate('/Topic'); 
  };

  return (
    <Box 
      bgGradient="linear(to-l, white, gray.100)"
      minH="100vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
    >
      <Flex 
        direction={{ base: "column", md: "row" }} 
        align="center" 
        maxW="1200px"
        mx="auto"
        p={4}
      >
        <Box flex="1" textAlign={{ base: "center", md: "left" }} p={4}>
          <Heading as="h1" size="2xl" mb={4}>
            Welcome to GetLITerary
          </Heading>
          <Text fontSize="lg" mb={6}>
            Discover, join, and create book clubs with ease. Connect with readers and explore new books together.
          </Text>
          <Button colorScheme="teal" size="lg" mb={4} mr={2} onClick={handleJoinConversation}>
            Join a Conversation
          </Button>
        </Box>
        <Box flex="1" display="flex" justifyContent="center" alignItems="center" p={4}>
          <Image 
            src={welcomeImage} 
            alt="Welcome Image"
            // borderRadius="10px"
            boxShadow="0"
          />
        </Box>
      </Flex>
      {/* Render the GetAppSection component only on the WelcomeScreen */}
      <GetAppSection />
    </Box>
  );
}

export default WelcomeScreen;
