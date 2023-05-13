import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

const ShowAds = ({companyName,primaryText,headline,description,CTA,imageUrl}) => {
  return (
    <Box>
        <Text fontSize={"xl"}>{companyName}</Text>
        <Text fontSize={"xl"}>{primaryText}</Text>
        <Text fontSize={"xl"}>{headline}</Text>
        <Text fontSize={"xl"}>{description}</Text>
        <Image src ={imageUrl}/>
    </Box>
  )
}

export default ShowAds
