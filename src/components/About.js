import React from 'react';
import { Box, Heading, Text, Image, Flex } from '@chakra-ui/react';

function About() {
  return (
    <Box py={10} bg="gray.50">
      <Flex
        maxW="1200px"
        mx="auto"
        direction={{ base: 'column', md: 'row' }}
        align="center"
        px={5}
        gap={8}
      >
        <Image
          src="about.PNG"
          alt="About Us"
          maxW={{ base: '100%', md: '50%' }}
          borderRadius="md"
        />
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            About Us
          </Heading>
          <Text>
            Learn more about us! A culinary hub for the greatest recipes and food inspiration. From kitchen essentials to
            delicious snacks, we have it all.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default About;
