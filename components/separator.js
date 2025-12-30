// components/separator.js
import { Box, useColorModeValue } from '@chakra-ui/react'

// Define gradient styles outside the component
const lightGradient = 'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(66,153,225,0.5) 50%, rgba(0,0,0,0) 100%)';
const darkGradient = 'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(90, 103, 216, 0.5) 50%, rgba(0,0,0,0) 100%)';

export const Separator = ({ 
  orientation = 'horizontal', 
  thickness = '2px',
  gradient = true,
  ...props 
}) => {
  const gradientBg = useColorModeValue(lightGradient, darkGradient)
  const horizontalBorderColor = useColorModeValue('gray.200', 'gray.600')
  
  const gradientStyle = gradient ? {
    background: gradientBg,
    height: '2px',
    width: '100%',
    borderRadius: 'full'
  } : {}
  
  const horizontalStyles = {
    width: '100%',
    height: '0px',
    borderTopWidth: '1px',
    borderTopStyle: 'solid',
    my: 6,
    borderColor: horizontalBorderColor
  }
  
  const verticalStyles = {
    width: '0px',
    height: '100%',
    borderLeftWidth: thickness,
    borderLeftStyle: 'solid',
  
  }

  const style = orientation === 'horizontal' ? horizontalStyles : verticalStyles

  if (gradient && orientation === 'horizontal') {
    return (
      <Box
        as="div"
        {...gradientStyle}
        {...props}
      />
    )
  }

  return (
    <Box
      as="hr"
      {...style}
      {...props}
    />
  )
}