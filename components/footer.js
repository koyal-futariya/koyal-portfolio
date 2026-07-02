import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box
      align="center"
      opacity={0.4}
      fontSize={{ base: 'xs', md: 'sm' }}
      mt={{ base: 4, md: 6 }}
      px={{ base: 4, md: 0 }}
      py={{ base: 2, md: 0 }}
    >
      &copy; {new Date().getFullYear()} Koyal Futariya. All Rights Reserved.
    </Box>
  )
}

export default Footer
