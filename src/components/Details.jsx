import { Box } from '@chakra-ui/react';
import React from 'react'
import { useParams } from 'react-router-dom'

export const Details = () => {

    // const {title} = useParams();

    console.log('hello dets page')
  return (
    <Box position={'relative'} fontSize={'20rem'} color={'white'} mt={'10rem'}>Details page</Box>
  )
}
