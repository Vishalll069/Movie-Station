import { useState } from 'react'
import './App.css'
import { Login } from './components/Login'
import { Box, } from "@chakra-ui/react";
import { Navbar } from './components/Navbar';

function App() {

  return (
    <Box color={'white'} position={'relative'}>
      <Navbar/>
      {/* <Login/> */}
    </Box>
  )
}

export default App
