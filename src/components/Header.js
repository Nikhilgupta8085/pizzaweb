import React from 'react';
import { Box, Button, Heading, Text, Image, Flex } from '@chakra-ui/react';

function Header() {
  return (
    <Box bg="red.50" py={10}>
      <Flex
        maxW="1200px"
        mx="auto"
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="space-between"
        px={5}
      >
        <Box>
          <Heading as="h1" size="2xl" mb={4}>
            Discover the Best Food and Drinks
          </Heading>
          <Text mb={6}>
            Naturally made Healthcare Products for the better care & support of your daily life.
          </Text>
          <Button colorScheme="red" size="lg">
            Explore Now!
          </Button>
        </Box>
        <Image
          src="pizza.webp" // Replace with your radiant URL
          alt="Pizza"
          maxW={{ base: '100%', md: '50%' }}
          borderRadius="md"
        />
      </Flex>
    </Box>
  );
}

export default Header;
