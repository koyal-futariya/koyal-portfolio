import { Container, Box, Flex, Spinner, Text, Button, useColorModeValue, useBreakpointValue } from '@chakra-ui/react'
import { ExternalLinkIcon, DownloadIcon } from '@chakra-ui/icons'
import Head from 'next/head'
import { useState, useEffect, useRef } from 'react'

const RESUME_URL = 'https://drive.google.com/file/d/12nu6df4vzIsZyn9ey2eUtmGS_bXa5Dsz/view?usp=sharing'
const RESUME_PREVIEW_URL = 'https://drive.google.com/file/d/12nu6df4vzIsZyn9ey2eUtmGS_bXa5Dsz/preview'

const Resume = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [iframeHeight, setIframeHeight] = useState('1000px')
  const isMobile = useBreakpointValue({ base: true, md: false })
  const containerRef = useRef(null)
  const buttonSize = useBreakpointValue({ base: 'sm', md: 'sm' })
  const buttonVariant = useBreakpointValue({ base: 'solid', md: 'outline' })
  const borderColor = useColorModeValue('gray.200', 'gray.700')
  const bgColor = useColorModeValue('white', 'gray.800')
  const loadingBg = useColorModeValue('rgba(255, 255, 255, 0.9)', 'rgba(26, 32, 44, 0.9)')
  const loadingTextColor = useColorModeValue('gray.700', 'gray.300')

  // Set iframe height based on viewport
  useEffect(() => {
    const updateHeight = () => {
      if (isMobile) {
        // For mobile, use viewport height minus header and some padding
        const headerHeight = 60
        const padding = 40
        setIframeHeight(`${window.innerHeight - headerHeight - padding}px`)
      } else {
        // For desktop, keep original calculation
        const headerHeight = 60 // Approx height of header
        const buttonGroupHeight = 100 // Approx height of button group
        const padding = 80 // Additional padding
        const calculatedHeight = window.innerHeight - headerHeight - buttonGroupHeight - padding
        setIframeHeight(Math.max(600, calculatedHeight).toString())
      }
    }
    
    updateHeight()
    const resizeTimer = setTimeout(updateHeight, 100) // Small delay to ensure proper calculation
    window.addEventListener('resize', updateHeight)
    
    return () => {
      clearTimeout(resizeTimer)
      window.removeEventListener('resize', updateHeight)
    }
  }, [isMobile])

  const handleIframeLoad = () => {
    setIsLoading(false)
  }

  return (
    <>
      <Head>
        <title>Resume | Koyal Futariya</title>
        <meta name="description" content="Koyal Futariya's Resume" />
      </Head>
      <Container 
        maxW="container.lg" 
        pt={{ base: 4, md: 12 }} 
        px={{ base: 0, md: 4 }}
        minH={{ base: 'calc(100vh - 100px)', md: 'calc(100vh - 200px)' }}
        mb={4}
        ref={containerRef}
      >
        <Flex 
          justify={{ base: 'center', md: 'flex-end' }}
          flexWrap="wrap"
          gap={3} 
          px={{ base: 4, md: 0 }}
          mb={4}
        >
          <Button
            as="a"
            href={RESUME_URL}
            target="_blank"
            rightIcon={<ExternalLinkIcon />}
            colorScheme="teal"
            variant={buttonVariant}
            size={buttonSize}
            flex={{ base: '1 1 100%', sm: '0 1 auto' }}
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
            size={buttonSize}
            variant="solid"
            flex={{ base: '1 1 100%', sm: '0 1 auto' }}
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
          borderRadius={{ base: 'none', md: 'md' }}
          overflow="hidden"
          boxShadow={{ base: 'none', md: 'xl' }}
          border="1px solid"
          borderColor={borderColor}
          bg={bgColor}
          mx={{ base: 0, md: 0 }}
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
              bg={loadingBg}
              zIndex={1}
              flexDirection="column"
              p={4}
              textAlign="center"
            >
              <Spinner 
                size="sm"
                color="teal.500" 
                thickness="3px"
                speed="0.65s"
                emptyColor="gray.200"
                mb={4}
              />
              <Text fontSize={{ base: 'md', md: 'lg' }} color={loadingTextColor}>
                Loading resume...
              </Text>
            </Flex>
          )}
          <Box 
            as="iframe"
            src={RESUME_PREVIEW_URL}
            width="100%"
            height={`${iframeHeight}px`}
            minH={{ base: 'calc(100vh - 200px)', md: '800px' }}
            onLoad={handleIframeLoad}
            style={{
              opacity: isLoading ? 0 : 1,
              transition: 'opacity 0.3s ease-in-out',
              border: 'none',
            }}
            allowFullScreen
            loading="eager"
            title="Koyal Futariya's Resume"
            sx={{
              '@media (max-width: 768px)': {
                minHeight: 'calc(100vh - 200px)',
              },
            }}
          />
        </Box>
      </Container>
    </>
  )
}

export default Resume
