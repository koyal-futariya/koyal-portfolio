import { forwardRef, useState, useEffect } from 'react'
import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? 'grassTeal' : undefined}
      color={active ? '#202023' : inactiveColor}
      target={target}
      {...props}
    >
      {children}
    </Link>
  )
}

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
))

const Navbar = props => {
  const { path } = props
  const [prevScrollY, setPrevScrollY] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > prevScrollY && currentScrollY > 10) {
        // Scrolling down
        setVisible(false)
      } else if (currentScrollY < prevScrollY) {
        // Scrolling up
        setVisible(true)
      }
      
      setPrevScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollY])

  return (
    
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      as="nav"
      w="100%"
      bg={useColorModeValue('#f0e7db', 'rgba(32, 32, 35, 0.8)')}
      style={{
        backdropFilter: 'blur(10px)',
        transition: 'transform 0.3s ease-in-out',
        transform: visible ? 'translateY(0)' : 'translateY(-100%)'
      }}
      zIndex={1000}
      {...props}
      
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
        transition="all 0.3s ease-in-out"
        position="relative"
        _after={{
          content: '""',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          bg: useColorModeValue('gray.300', 'gray.600')
        }}
      >
        <Flex align="center" w="100%" justify="space-between">
          <Box display="flex" alignItems="center">
            <Box 
          display={{ base: 'none', md: 'block' }}
          position="fixed"
          left="calc((100% - 768px) / 2 - 40px)" /* Adjust based on your container width */
          top="0"
          bottom="0"
          width="1px"
          bg={useColorModeValue('gray.400', 'gray.600')}
        />
            <Heading as="h1" size="lg" letterSpacing={'tighter'}>
              <Logo />
            </Heading>
          </Box>
          
          <Box display="flex" alignItems="center">
            <Stack
              direction="row"
              display={{ base: 'none', md: 'flex' }}
              alignItems="center"
              spacing={6}
              mr={4}
            >
              <LinkItem href="/resume" path={path}>
                Resume
              </LinkItem>
              <LinkItem
                target="_blank"
                href="https://github.com/koyal-futariya"
                path={path}
                display="inline-flex"
                alignItems="center"
                style={{ gap: 4 }}
              >
                <IoLogoGithub />
                <span>Source</span>
              </LinkItem>
            </Stack>
            <ThemeToggleButton />
            
            <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
              <Menu isLazy id="navbar-menu">
                <MenuButton
                  as={IconButton}
                  icon={<HamburgerIcon />}
                  variant="outline"
                  aria-label="Options"
                />
                <MenuList>
                  <MenuItem as={MenuLink} href="/">
                    About
                  </MenuItem>
                  <MenuItem as={MenuLink} href="/works">
                    Works
                  </MenuItem>
                  <MenuItem as={MenuLink} href="https://store.craftz.dog/">
                    Wallpapers
                  </MenuItem>
                  <MenuItem as={MenuLink} href="/posts">
                    Posts
                  </MenuItem>
                  <MenuItem as={MenuLink} href="https://uses.craftz.dog/">
                    Uses
                  </MenuItem>
                  <MenuItem as={MenuLink} href="/Resume">
                    Resume
                  </MenuItem>
                  <MenuItem
                    as={Link}
                    href="https://github.com/craftzdog/craftzdog-homepage"
                    target="_blank"
                  >
                    View Source
                  </MenuItem>
                </MenuList>
              </Menu>
              
            </Box>
            <Box 
              display={{ base: 'none', md: 'block' }}
              position="fixed"
              right="calc((100% - 768px) / 2 - 40px)"
              top="0"
              bottom="0"
              width="1px"
              bg={useColorModeValue('gray.400', 'gray.600')}
            />
          </Box>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar
