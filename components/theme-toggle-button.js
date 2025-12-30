import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import { useEffect, useRef } from 'react'

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()
  const audioRef = useRef(null)

  useEffect(() => {
    // Load audio file when component mounts
    audioRef.current = new Audio('/toggle.wav')
    
    // Clean up audio when component unmounts
    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [])

  const handleToggle = () => {
    // Play the toggle sound
    if (audioRef.current) {
      audioRef.current.currentTime = 0 // Rewind to the start if already playing
      audioRef.current.play().catch(error => {
        console.warn('Audio playback failed:', error)
      })
    }
    
    // Toggle the theme
    toggleColorMode()
  }

  return (
    <AnimatePresence mode='wait' initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          aria-label="Toggle theme"
          colorScheme={useColorModeValue('purple', 'orange')}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          onClick={handleToggle}
        ></IconButton>
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemeToggleButton
