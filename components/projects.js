import { Box, Text, Link, List, ListItem, Button, HStack, Icon, Badge, Flex, useDisclosure, Collapse } from '@chakra-ui/react'
import { ExternalLinkIcon, ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'

const ProjectItem = ({ title, description, link, date, technologies, role }) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Box 
      borderWidth="1px" 
      borderColor="gray.400"
      borderRadius="lg" 
      p={4} 
      mb={4}
      _hover={{ boxShadow: 'md' }}
      transition="all 0.2s"
    >
      <Flex justify="space-between" align="center" cursor="pointer" onClick={onToggle}>
        <Box>
          <Text fontWeight="bold" fontSize="lg">{title}</Text>
          <Text fontSize="sm" color="gray.500">{date}</Text>
        </Box>
        <Flex align="center">
          <Link href={link} isExternal mr={3} onClick={(e) => e.stopPropagation()}>
            <ExternalLinkIcon color="teal.500" />
          </Link>
          {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </Flex>
      </Flex>
      
      <Collapse in={isOpen} animateOpacity>
        <Box mt={4} pt={4} borderTopWidth="1px">
          <Text mb={4}>{description}</Text>
          
          <Text fontWeight="medium" mb={2}>Technologies Used:</Text>
          <Flex flexWrap="wrap" gap={2} mb={4}>
            {technologies.map((tech, i) => (
              <Badge key={i} colorScheme="teal" variant="subtle" px={2} py={1}>
                {tech}
              </Badge>
            ))}
          </Flex>
          
          <Text><Text as="span" fontWeight="medium">Role:</Text> {role}</Text>
        </Box>
      </Collapse>
    </Box>
  )
}

export const Projects = () => {
  const projects = [
    {
      title: "Connecting Dots ERP",
      description: "A comprehensive Enterprise Resource Planning system designed to streamline business processes and improve efficiency across various departments including inventory, sales, and customer relationship management.",
      link: "https://connectingdotserp.com",
      date: "08.2025 – Present",
      technologies: ["Next.js", "Node.js", "MongoDB", "Express", "Redux", "Chakra UI"],
      role: "Full Stack Developer | Led the development of core modules and integrated third-party services"
    },
    {
      title: "Atorix IT",
      description: "A professional services website for Atorix IT Solutions, showcasing their services, portfolio, and providing a platform for client engagement and project inquiries.",
      link: "https://www.atorixit.com",
      date: "03.2024 – Present",
      technologies: ["React", "Gatsby", "GraphQL", "Tailwind CSS", "Netlify CMS"],
      role: "Frontend Developer | Implemented responsive design and content management system"
    }
  ]

  return (
    <Box>
      {projects.map((project, index) => (
        <ProjectItem key={index} {...project} />
      ))}
    </Box>
  )
}
