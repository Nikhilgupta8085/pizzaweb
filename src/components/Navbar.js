import React from "react";
import { Box, Flex, Image, Button, Spacer } from "@chakra-ui/react";


const Navbar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="10px 20px"
      bg="white"
      boxShadow="sm"
    >
      {/* Left Side: Logo */}
      <Image src="bike.PNG" alt="Logo" boxSize="80px" />

      <Spacer />

      {/* Right Side: Get in Touch Button */}
      <Button
        colorScheme="red"
        size="md"
        onClick={() => alert("Get in Touch clicked!")} // Replace with your logic
      >
        Get in Touch
      </Button>
    </Flex>
  );
};

export default Navbar;
