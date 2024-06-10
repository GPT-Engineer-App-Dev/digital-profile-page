import { Container, Text, VStack, Box, Heading, Button, Image, HStack, IconButton } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Box textAlign="center">
          <Image
            borderRadius="full"
            boxSize="150px"
            src="https://via.placeholder.com/150"
            alt="Profile Image"
            mb={4}
          />
          <Heading as="h1" size="2xl" mb={2}>John Doe</Heading>
          <Text fontSize="lg" color="gray.500">Full Stack Developer</Text>
        </Box>
        <Text fontSize="md" textAlign="center" maxW="600px">
          Welcome to my personal website! I am a passionate developer with experience in building web applications using modern technologies. Feel free to explore my work and connect with me.
        </Text>
        <HStack spacing={4}>
          <Button colorScheme="blue" size="lg">View My Work</Button>
          <Button variant="outline" colorScheme="blue" size="lg">Contact Me</Button>
        </HStack>
        <HStack spacing={4}>
          <IconButton
            aria-label="GitHub"
            icon={<FaGithub />}
            size="lg"
            onClick={() => window.open('https://github.com', '_blank')}
          />
          <IconButton
            aria-label="LinkedIn"
            icon={<FaLinkedin />}
            size="lg"
            onClick={() => window.open('https://linkedin.com', '_blank')}
          />
          <IconButton
            aria-label="Twitter"
            icon={<FaTwitter />}
            size="lg"
            onClick={() => window.open('https://twitter.com', '_blank')}
          />
        </HStack>
      </VStack>
    </Container>
  );
};

export default Index;