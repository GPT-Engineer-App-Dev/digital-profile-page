import { useEffect } from "react";
import { Box, Heading, Text, Container } from "@chakra-ui/react";
import confetti from "canvas-confetti";

const ConfettiPage = () => {
  useEffect(() => {
    confetti({
      particleCount: 200,
      spread: 70,
      origin: { y: 0.6 },
    });
  }, []);

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <Box textAlign="center">
        <Heading as="h1" size="2xl" mb={4}>Celebrate with Confetti!</Heading>
        <Text fontSize="lg" color="gray.500">Enjoy the celebration with a burst of confetti.</Text>
      </Box>
    </Container>
  );
};

export default ConfettiPage;