import { Box, Text, Link, Badge, Flex, useDisclosure, Collapse } from '@chakra-ui/react'
import { ExternalLinkIcon, ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'

const ExperienceItem = ({ title, company, period, description, technologies, link }) => {
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
          <Text fontSize="md" color="gray.700">{company}</Text>
          <Text fontSize="sm" color="gray.500">{period}</Text>
        </Box>
        <Flex align="center">
          {link && (
            <Link href={link} isExternal mr={3} onClick={(e) => e.stopPropagation()}>
              <ExternalLinkIcon color="teal.500" />
            </Link>
          )}
          {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </Flex>
      </Flex>
      
      <Collapse in={isOpen} animateOpacity>
        <Box mt={4} pt={4} borderTopWidth="1px">
          <Text mb={4}>{description}</Text>
          
          {technologies && technologies.length > 0 && (
            <>
              <Text fontWeight="medium" mb={2}>Technologies Used:</Text>
              <Flex flexWrap="wrap" gap={2} mb={4}>
                {technologies.map((tech, i) => (
                  <Badge key={i} colorScheme="teal" variant="subtle" px={2} py={1}>
                    {tech}
                  </Badge>
                ))}
              </Flex>
            </>
          )}
        </Box>
      </Collapse>
    </Box>
  )
}

export const Experience = () => {
  const experiences = [
    {
      title: "Web Developer Intern",
      company: "Atorix IT Solutions",
      period: "03.2024 – 08.2024",
      description: "Worked on developing and maintaining web applications using modern technologies. Collaborated with the team to implement new features and improve existing functionality.",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Redux"],
      
    },
    {
      title: "Web Developer Intern",
      company: "Aeons Technologies",
      period: "01.2023 – 02.2024",
      description: "Assisted in developing responsive web applications and implementing UI/UX designs. Worked closely with senior developers to learn best practices in web development.",
      technologies: ["JavaScript", "HTML5", "CSS3", "Bootstrap", "jQuery"],
    
    }
  ]

  return (
    <Box>
      {experiences.map((exp, index) => (
        <ExperienceItem key={index} {...exp} />
      ))}
    </Box>
  )
}
