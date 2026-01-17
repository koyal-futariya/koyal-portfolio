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
    <Box as="main" pb={8} overflowX="hidden" width="100%" maxWidth="100vw">
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
      
      <Box 
        width="100%" 
        display={{ base: 'none', md: 'block' }}
        overflowX="hidden"
      >
        {/* This box is kept for potential future use but hidden on mobile */}
      </Box>

      <Box display="flex" width="100%" justifyContent="center" px={{ base: 4, md: 0 }}>
        {/* Left vertical separator - only visible on md and up */}
        <Box 
          display={{ base: 'none', md: 'block' }}
          position="fixed"
          left={{ base: 4, md: 'calc((100% - 768px) / 2 - 40px)' }}
          top="0"
          bottom="0"
          width="1px"
          bg={useColorModeValue('gray.400', 'gray.600')}
        />
        
        <Container 
          maxW="container.md" 
          pt={{ base: 4, md: 2 }}
          px={{ base: 0, md: 4 }}
        >
          <Box h={{ base: '60px', md: '1px' }} /> {/* Larger spacer for mobile navbar */}

          {!router.asPath.startsWith('/resume') && (
            <Box px={{ base: 4, md: 0 }}>
              <LazyVoxelDog />
            </Box>
          )}

          {/* Main page content with responsive padding */}
          <Box 
            px={{ base: 4, md: 1 }} 
            pt={{ base: 4, md: 6 }}
            pb={6}
          >
            {children}
          </Box>
        </Container>

        {/* Right vertical separator - only visible on md and up */}
        <Box 
          display={{ base: 'none', md: 'block' }}
          position="fixed"
          right={{ base: 4, md: 'calc((100% - 768px) / 2 - 40px)' }}
          top="0"
          bottom="0"
          width="1px"
          bg={useColorModeValue('gray.400', 'gray.600')}
        />
      </Box>

      <Box 
        width="100%" 
        mt={{ base: 6, md: 10 }}
        overflowX="hidden"
      >
        <Separator />
      </Box>
      <Footer mt={5} />
    </Box>
  )
}

export default Main
