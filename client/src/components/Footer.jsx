import { Box, Flex, Heading, Text, Input, Textarea, Button, Link, Icon } from '@chakra-ui/react';
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram } from 'react-icons/ai';

function Footer() {
    return (
        <Box as="footer" bgGradient="linear(to-b, blue.800, blue.900)" color="white" py={12}>
            <Flex
                justifyContent="space-between"
                maxW="1200px"
                mx="auto"
                flexWrap="wrap"
                flexDirection={{ base: 'column', md: 'row' }}
                alignItems={{ base: 'flex-start', md: 'center' }}
            >
                <Box flex="1" mr={{ base: 0, md: 8 }} mb={{ base: 8, md: 0 }}>
                    <Heading as="h2" mb={4}>About</Heading>
                    <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente ratione illo, fugiat vero vel 
                        eum nihil debitis nisi adipisci ut velit dolores dignissimos sunt harum facere. Optio qui nemo recusandae..
                    </Text>
                </Box>
                <Box flex="1" mr={{ base: 0, md: 8 }} mb={{ base: 8, md: 0 }}>
                    <Heading as="h2" mb={4}>Connect With Us</Heading>
                    <Text>Join the Bookclubs newsletter for monthly reading recommendations,
                        book club tips, giveaways, and more.
                    </Text>
                </Box>
                <Box flex="1">
                    <Heading as="h2" mb={4}>Contact</Heading>
                    <Box as="form">
                        <Input type="email" name="email" mb={4} placeholder="Your email address" />
                        <Textarea rows={4} mb={4} placeholder="Your message" />
                        <Button type="submit" bg="#ffc107" color="black" _hover={{ bg: '#ffdb4d' }}>Send</Button>
                    </Box>
                </Box>
            </Flex>
            <Flex
                justifyContent="space-between"
                maxW="1200px"
                mx="auto"
                mt={8}
                alignItems="center"
                flexDirection={{ base: 'column', md: 'row' }}
                textAlign={{ base: 'center', md: 'left' }}
            >
                <Text mb={{ base: 4, md: 0 }}>&copy; 2024 Book Club | Designed by TEAM_1</Text>
                <Box display="flex" alignItems="center" justifyContent={{ base: 'center', md: 'flex-end' }}>
                    <Link href="#" mx={2}>
                        <Box bg="blue.900" borderRadius="full" p={2}>
                            <Icon as={AiFillFacebook} boxSize={10} />
                        </Box>
                    </Link>
                    <Link href="#" mx={2}>
                        <Box bg="blue.900" borderRadius="full" p={2}>
                            <Icon as={AiFillTwitterSquare} boxSize={10} />
                        </Box>
                    </Link>
                    <Link href="#" mx={2}>
                        <Box bg="blue.900" borderRadius="full" p={2}>
                            <Icon as={AiFillInstagram} boxSize={10} />
                        </Box>
                    </Link>
                </Box>
            </Flex>
        </Box>
    );
}

export default Footer;
