import React from "react";
import { Box, Flex, VStack, HStack, Text, Image, Link, Icon } from "@chakra-ui/react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const ResponsiveFooter = () => {
  return (
    <Box bg="gray.50" py={10} px={5}>
      {/* Container for the footer */}
      <Flex
        direction={["column", "column", "row"]}
        justify="space-between"
        align={["center", "flex-start"]}
        wrap="wrap"
        gap={8}
        maxW="1200px"
        mx="auto"
      >
        {/* Section 1: Logo */}
        <VStack align={["center", "flex-start"]} spacing={3}>
          <Image src="bike.PNG" alt="Food Truck Logo" boxSize="70px" />
        </VStack>

        {/* Section 2: Contact Us */}
        <VStack align={["center", "flex-start"]} spacing={3} textAlign={["center", "left"]}>
          <Text fontSize="lg" fontWeight="bold" color="blue.900">
            Contact Us
          </Text>
          <Text fontSize="sm" color="gray.600">
            Lorem Ipsum Pvt Ltd. <br />
            5/1, Magalton Road, <br />
            Phartosh Gate near YTM Market, <br />
            XYZ-343434
          </Text>
          <Text fontSize="sm" color="gray.600">example2020@gmail.com</Text>
          <Text fontSize="sm" color="gray.600">(904) 443-0343</Text>
        </VStack>

        {/* Section 3: More Links */}
        <VStack align={["center", "flex-start"]} spacing={3} textAlign={["center", "left"]}>
          <Text fontSize="lg" fontWeight="bold" color="blue.900">
            More
          </Text>
          <Link href="#" fontSize="sm" color="gray.600" _hover={{ color: "blue.600" }}>
            About Us
          </Link>
          <Link href="#" fontSize="sm" color="gray.600" _hover={{ color: "blue.600" }}>
            Products
          </Link>
          <Link href="#" fontSize="sm" color="gray.600" _hover={{ color: "blue.600" }}>
            Career
          </Link>
          <Link href="#" fontSize="sm" color="gray.600" _hover={{ color: "blue.600" }}>
            Contact Us
          </Link>
        </VStack>

        {/* Section 4: Social Links */}
        <VStack align={["center", "flex-start"]} spacing={3}>
          <Text fontSize="lg" fontWeight="bold" color="blue.900">
            Social Links
          </Text>
          <HStack spacing={4}>
            <Link href="#" isExternal>
              <Icon as={FaInstagram} boxSize={5} color="blue.800" _hover={{ color: "blue.600" }} />
            </Link>
            <Link href="#" isExternal>
              <Icon as={FaTwitter} boxSize={5} color="blue.800" _hover={{ color: "blue.600" }} />
            </Link>
            <Link href="#" isExternal>
              <Icon as={FaFacebookF} boxSize={5} color="blue.800" _hover={{ color: "blue.600" }} />
            </Link>
          </HStack>
        </VStack>
      </Flex>

      {/* Footer Bottom Section */}
      <Text textAlign="center" fontSize="sm" color="gray.500" mt={10}>
        © 2022 Food Truck Example
      </Text>
    </Box>
  );
};

export default ResponsiveFooter;
