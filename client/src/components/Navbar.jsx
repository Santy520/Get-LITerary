import { Box, Flex, Link, Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.100", "gray.900");

  return (
    <Box bg={bg} px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Flex alignItems="center">
          <Link as={RouterLink} to="/WelcomeScreen" px={2}>Home</Link>
          <Link as={RouterLink} to="/Discussion" px={2}>Discussion</Link>
          <Link as={RouterLink} to="/Profile" px={2}>Profile</Link>
        </Flex>
        <Button onClick={toggleColorMode}>
          {colorMode === "light" ? "Dark" : "Light"} Mode
        </Button>
      </Flex>
    </Box>
  );
};

export default Navbar;
