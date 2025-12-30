import { Badge, Wrap, WrapItem, Tooltip, Link, useColorModeValue } from '@chakra-ui/react'

const OFFICIAL_URLS = {
  'HTML5': 'https://developer.mozilla.org/docs/Web/HTML',
  'CSS3': 'https://developer.mozilla.org/docs/Web/CSS',
  'JavaScript (ES6+)': 'https://developer.mozilla.org/docs/Web/JavaScript',
  'Python': 'https://www.python.org/',
  'C++': 'https://isocpp.org/',
  'TypeScript': 'https://www.typescriptlang.org/',
  'React.js': 'https://react.dev/',
  'Next.js': 'https://nextjs.org/',
  'Node.js': 'https://nodejs.org/',
  'Express': 'https://expressjs.com/',
  'MongoDB': 'https://www.mongodb.com/',
  'PostgreSQL': 'https://www.postgresql.org/',
  'Tailwind CSS': 'https://tailwindcss.com/',
  'Chakra UI': 'https://chakra-ui.com/',
  'Git': 'https://git-scm.com/',
  'GitHub': 'https://github.com/',
  'Vercel': 'https://vercel.com/',
  'Render': 'https://render.com/',
  'Framer Motion': 'https://www.framer.com/motion/'
}

const TechStack = ({ stack, size = 'md', ...props }) => {
  const bgColor = useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')
  const borderColor = useColorModeValue('gray.200', 'gray.600')

  return (
    <Wrap spacing={2} {...props}>
      {stack.map((tech, index) => (
        <WrapItem key={index}>
          <Tooltip 
            label={tech.description || tech.name} 
            aria-label={tech.name}
            hasArrow
            placement="top"
          >
            {(() => {
              const href = tech.url || OFFICIAL_URLS[tech.name]
              const badge = (
                <Badge 
                  px={2} 
                  py={1} 
                  bg={tech.color ? `${tech.color}.500` : bgColor}
                  color={tech.color ? 'white' : 'inherit'}
                  borderWidth="1px"
                  borderColor={borderColor}
                  borderRadius="md"
                  fontSize={size === 'sm' ? 'xs' : 'sm'}
                  fontWeight="medium"
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'md',
                    transition: 'all 0.2s',
                  }}
                >
                  {tech.name}
                </Badge>
              )
              return href ? (
                <Link href={href} isExternal _hover={{ textDecoration: 'none' }}>
                  {badge}
                </Link>
              ) : badge
            })()}
          </Tooltip>
        </WrapItem>
      ))}
    </Wrap>
  )
}

export default TechStack
