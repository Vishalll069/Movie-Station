import { useState } from 'react'
import './App.css'
import { Login } from './components/Login'
import { Box, } from "@chakra-ui/react";
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { AllRoutes } from './Routes/AllRoutes';

function App() {

  return (
    <Box color={'white'} position={'relative'}>
      <Navbar/>
      <AllRoutes/>
    </Box>
  )
}

export default App
