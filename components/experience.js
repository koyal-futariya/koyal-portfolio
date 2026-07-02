import { useState } from "react"
import { Box, Text, Link, Badge, Flex, Collapse } from "@chakra-ui/react"
import { ExternalLinkIcon, ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons"

// Controlled item (no useDisclosure inside)
const ExperienceItem = ({
  title,
  company,
  period,
  description,
  technologies,
  link,
  isOpen,
  onToggle,
}) => {
  return (
    <Box
      borderWidth="1px"
      borderColor="gray.400"
      borderRadius="lg"
      p={4}
      mb={4}
      _hover={{ boxShadow: "md" }}
      transition="all 0.2s"
    >
      <Flex justify="space-between" align="center" cursor="pointer" onClick={onToggle}>
        <Box>
          <Text fontWeight="bold" fontSize="lg">
            {title}
          </Text>
          <Text fontSize="md" color="gray.700">
            {company}
          </Text>
          <Text fontSize="sm" color="gray.500">
            {period}
          </Text>
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
        <Box mt={4} pt={4} borderTopWidth="1px" borderColor="gray.400">
          <Text mb={4}>{description}</Text>

          {technologies && technologies.length > 0 && (
            <>
              <Text fontWeight="medium" mb={2}>
                Technologies Used:
              </Text>
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
  // Only one open at a time
  const [openIndex, setOpenIndex] = useState(null)

  const experiences = [
    {
      title: "Web Developer Intern",
      company: "Atorix IT Solutions",
      period: "06.2025 – 12.2025",
      description:
        "Worked on developing and maintaining web applications using modern technologies. Collaborated with the team to implement new features and improve existing functionality.",
      technologies: ["React.js","Next.js", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Framer Motion"],
      // link: "https://..." // optional
    },
    {
      title: "Software Engineer Intern",
      company: "Aeons Technologies",
      period: "06.2024 – 08.2024",
      description:
        "Assisted in developing responsive web applications and implementing UI/UX designs. Worked closely with senior developers to learn best practices in web development.",
      technologies: ["JavaScript", "HTML5", "CSS3", "React.js", "Tailwind CSS", "Framer Motion"],
      // link: "https://..." // optional
    },
  ]

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }
  return (
    <Box>
      {experiences.map((exp, index) => (
        <ExperienceItem
          key={index}
          {...exp}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </Box>
  )
}
