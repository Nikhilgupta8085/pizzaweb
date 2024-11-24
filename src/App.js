import React from 'react';
import { Box } from '@chakra-ui/react';
import Header from './components/Header';
import About from './components/About';
import Articles from './components/Articles';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <Box>
        <Navbar/>
      <Header />
      <About />
      <Articles />
      <Footer />
    </Box>
  );
}

export default App;
