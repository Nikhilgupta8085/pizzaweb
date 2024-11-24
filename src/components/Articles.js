import React from 'react';
import { Box, Grid, Heading, Card, CardBody, Text, Image, Button } from '@chakra-ui/react';

const articles = [
  { title: 'Grilled Tomatoes at Home', image: 'a1.PNG' },
  { title: 'Snacks for Travel', image: 'a2.PNG' },
  { title: 'Post-workout Recipes', image: 'a3.PNG' },
  { title: 'How to Grill Corn', image: 'a4.PNG' },
  { title: 'Crunchwrap Supreme', image: 'a5.PNG' },
  { title: 'Broccoli Cheese Soup', image: 'a6.PNG' },
];

function Articles() {
  return (
    <Box py={10}>
      <Heading as="h2" size="lg" textAlign="center" mb={8}>
        Latest Articles
      </Heading>
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' }}
        gap={6}
        maxW="1200px"
        mx="auto"
        px={5}
      >
        {articles.map((article, index) => (
          <Card key={index} boxShadow="md" borderRadius="lg">
            <Image src={article.image} alt={article.title} borderRadius="lg" />
            <CardBody>
              <Heading as="h4" size="md" mb={2}>
                {article.title}
              </Heading>
              <Button colorScheme="blue" size="sm">
                Read More
              </Button>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </Box>
  );
}

export default Articles;
