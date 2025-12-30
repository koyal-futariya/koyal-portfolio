import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container, useColorModeValue } from '@chakra-ui/react'
import Footer from '../footer'
import VoxelDogLoader from '../voxel-dog-loader'
import { Separator } from '../separator'

const LazyVoxelDog = dynamic(() => import('../voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Koyal's homepage" />
        <meta name="author" content="Koyal Futariya" />
        <meta name="author" content="craftzdog" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Koyal Futariya" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@craftzdog" />
        <meta name="twitter:creator" content="@craftzdog" />
        <meta name="twitter:image" content="https://www.craftz.dog/card.png" />
        <meta property="og:site_name" content="Koyal Futariya" />
        <meta name="og:title" content="Koyal Futariya" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.craftz.dog/card.png" />
        <title>Koyal Futariya - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />
      
      <Box width="100vw" position="relative" left="50%" right="50%" ml="-50vw" mr="-50vw">
       
      </Box>

      <Box display="flex" width="100%" justifyContent="center">
        {/* Left vertical separator */}
        <Box 
          display={{ base: 'none', md: 'block' }}
          position="fixed"
          left="calc((100% - 768px) / 2 - 40px)" /* Adjust based on your container width */
          top="0"
          bottom="0"
          width="1px"
          bg={useColorModeValue('gray.400', 'gray.600')}
        />
        
        <Container maxW="container.md" pt={2}>
          {/* Add padding to account for fixed navbar */}
          <Box h="1px" /> {/* This acts as a spacer for the fixed navbar */}

          {!router.asPath.startsWith('/resume') && <LazyVoxelDog />}

          {/* Main page content with side padding */}
          <Box px={{ base: 4, md: 1 }} pt={6}>
            {children}
          </Box>
        </Container>

        {/* Right vertical separator */}
        <Box 
          display={{ base: 'none', md: 'block' }}
          position="fixed"
          right="calc((100% - 768px) / 2 - 40px)" /* Adjust based on your container width */
          top="0"
          bottom="0"
          width="1px"
          bg={useColorModeValue('gray.400', 'gray.600')}
        />
      </Box>

      <Box width="100vw" position="relative" left="50%" right="50%" ml="-50vw" mr="-50vw" mt={10}>
        <Separator />
      </Box>
      <Footer mt={5} />
    </Box>
  )
}

export default Main
