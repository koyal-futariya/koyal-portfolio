import { Container, Box, Flex, Spinner, Text, Button, useColorModeValue } from '@chakra-ui/react'
import { ExternalLinkIcon, DownloadIcon } from '@chakra-ui/icons'
import Head from 'next/head'
import { useState, useEffect } from 'react'

const RESUME_URL = 'https://drive.google.com/file/d/12nu6df4vzIsZyn9ey2eUtmGS_bXa5Dsz/view?usp=sharing'
const RESUME_PREVIEW_URL = 'https://drive.google.com/file/d/12nu6df4vzIsZyn9ey2eUtmGS_bXa5Dsz/preview'

const Resume = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [iframeHeight, setIframeHeight] = useState('1000px')

  // Set iframe height based on viewport
  useEffect(() => {
    const updateHeight = () => {
      setIframeHeight(`${window.innerHeight - 200}px`)
    }
    
    updateHeight()
    window.addEventListener('resize', updateHeight)
    
    return () => window.removeEventListener('resize', updateHeight)
  }, [])

  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  return (
    <>
      <Head>
        <title>Resume | Koyal Futariya</title>
        <meta name="description" content="Koyal Futariya's Resume" />
      </Head>
      <Container maxW="container.lg" pt={12} minH="calc(100vh - 200px)" mb={4}>
        <Flex justify="flex-end" mb={4} gap={3}>
          <Button
            as="a"
            href={RESUME_URL}
            target="_blank"
            rightIcon={<ExternalLinkIcon />}
            colorScheme="teal"
            variant="outline"
            size="sm"
            _hover={{
              textDecoration: 'none',
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}
          >
            Open in New Tab
          </Button>
          <Button
            as="a"
            href={`https://drive.google.com/uc?export=download&id=12nu6df4vzIsZyn9ey2eUtmGS_bXa5Dsz`}
            download="Koyal_Futariya_Resume.pdf"
            rightIcon={<DownloadIcon />}
            colorScheme="teal"
            size="sm"
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}
          >
            Download PDF
          </Button>
        </Flex>
        
        <Box 
          position="relative"
          borderRadius="md"
          overflow="hidden"
          boxShadow="xl"
          border="1px solid"
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          bg={useColorModeValue('white', 'gray.800')}
        >
          {isLoading && (
            <Flex 
              position="absolute" 
              top={0} 
              left={0} 
              right={0} 
              bottom={0} 
              justify="center" 
              align="center"
              bg="rgba(255, 255, 255, 0.8)"
              _dark={{
                bg: 'rgba(26, 32, 44, 0.8)'
              }}
              zIndex={1}
            >
              <Spinner size="xl" color="teal.500" />
              <Text ml={4} fontSize="lg">Loading resume...</Text>
            </Flex>
          )}
          <Box 
            as="iframe"
            src={RESUME_PREVIEW_URL}
            width="100%"
            height={iframeHeight}
            minH="800px"
            onLoad={handleIframeLoad}
            style={{
              opacity: isLoading ? 0 : 1,
              transition: 'opacity 0.3s ease-in-out',
              border: 'none',
            }}
            allow="autoplay"
          />
        </Box>
      </Container>
    </>
  )
}

export default Resume
