import { Box, Flex, Text, VStack, Link, Container } from "@chakra-ui/react";
import { FaHome, FaUser, FaBriefcase, FaEnvelope } from "react-icons/fa";

const NavBar = () => (
  <Flex as="nav" w="100%" bg="brand.800" color="white" p={3} justifyContent="space-between" alignItems="center">
    <Text fontSize="xl" fontWeight="bold" ml={5}>MyPortfolio</Text>
    <Box>
      <Link href="#home" p={3}><FaHome /></Link>
      <Link href="#about" p={3}><FaUser /></Link>
      <Link href="#portfolio" p={3}><FaBriefcase /></Link>
      <Link href="#contact" p={3}><FaEnvelope /></Link>
    </Box>
  </Flex>
);

const HomeSection = () => (
  <Container id="home" centerContent maxW="container.md" py={10}>
    <VStack spacing={4}>
      <Text fontSize="3xl" fontWeight="bold">Welcome to My Portfolio</Text>
      <Text fontSize="xl">Discover my projects and skills</Text>
    </VStack>
  </Container>
);

const AboutSection = () => (
  <Container id="about" centerContent maxW="container.md" py={10}>
    <VStack spacing={4}>
      <Text fontSize="3xl" fontWeight="bold">About Me</Text>
      <Text fontSize="xl">I am a passionate software developer with a knack for building scalable web applications.</Text>
    </VStack>
  </Container>
);

const PortfolioSection = () => (
  <Container id="portfolio" centerContent maxW="container.md" py={10}>
    <VStack spacing={4}>
      <Text fontSize="3xl" fontWeight="bold">Portfolio</Text>
      <Text fontSize="xl">Here are some of my recent projects.</Text>
    </VStack>
  </Container>
);

const ContactSection = () => (
  <Container id="contact" centerContent maxW="container.md" py={10}>
    <VStack spacing={4}>
      <Text fontSize="3xl" fontWeight="bold">Contact Me</Text>
      <Text fontSize="xl">Feel free to reach out for collaborations or just a chat!</Text>
    </VStack>
  </Container>
);

const Index = () => {
  return (
    <Box>
      <NavBar />
      <HomeSection />
      <AboutSection />
      <PortfolioSection />
      <ContactSection />
    </Box>
  );
};

export default Index;