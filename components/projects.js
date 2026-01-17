import { useState } from "react"
import {
  Box,
  Text,
  Link,
  Badge,
  Flex,
  Collapse,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react"
import { ExternalLinkIcon, ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons"

const ProjectItem = ({
  title,
  description,
  link,
  date,
  technologies,
  role,
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
          <Text fontSize="sm" color="gray.500">
            {date}
          </Text>
        </Box>

        <Flex align="center">
          <Link href={link} isExternal mr={3} onClick={(e) => e.stopPropagation()}>
            <ExternalLinkIcon color="teal.500" />
          </Link>
          {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        </Flex>
      </Flex>

      {/* Chakra Collapse is controlled via in={boolean} */}
      <Collapse in={isOpen} animateOpacity>
        <Box mt={4} pt={4} borderTopWidth="1px" borderColor="gray.400">
          {Array.isArray(description) ? (
            <Box mb={4}>
              <Text mb={4}>{description[0]}</Text>
              <UnorderedList spacing={2} pl={5}>
                {description.slice(1).map((point, i) => (
                  <ListItem key={i}>{point}</ListItem>
                ))}
              </UnorderedList>
            </Box>
          ) : (
            <Text mb={4}>{description}</Text>
          )}

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

          <Text>
            <Text as="span" fontWeight="medium">
              Role:
            </Text>{" "}
            {role}
          </Text>
        </Box>
      </Collapse>
    </Box>
  )
}

export const Projects = () => {
  // openIndex holds the currently opened project index; null = none open
  const [openIndex, setOpenIndex] = useState(null)

  const projects = [
    {
      title: "Connecting Dots ERP",
      description: [
        "A fully responsive ERP training institute website built with Next.js and Node.js, featuring dynamic course content, blog management, and a secure, role-based admin dashboard.",
        "Built a fully responsive website for a SAP & IT training institute",
        "Displayed dynamic course details, blogs, announcements, and institute info",
        "Developed a secure admin dashboard with role-based authentication",
        "Created and enhanced the blog management panel for adding & editing posts",
        "Built backend API routes for secure data handling and content storage",
        "Designed a clean, professional UI aligned with the brand",
      ],
      link: "https://connectingdotserp.com",
      date: "06.2025 – 10.2025",
      technologies: ["React.js", "Next.js", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Framer Motion"],
      role: "Web Developer ",
    },
    {
      title: "Atorix IT",
      description: [
        "A professional corporate website built for Atorix IT Solutions, a leading SAP implementation and consulting company, designed to showcase services, industry expertise, and SAP offerings with a modern, responsive user experience.",
        "Created a professional services website showcasing offerings and portfolio",
        "Showcased comprehensive SAP services including implementation, support, integration, and consulting for businesses",
        "Integrated content sections for clients, testimonials, and company capabilities",
        "Ensured smooth navigation, clean UI, and brand-consistent design",
      ],
      link: "https://www.atorixit.com",
      date: "11.2025 – 12.2025",
    technologies: ["React.js", "Next.js","3js","Node.js", "Tailwind CSS", "Framer Motion"],
      role: "Frontend Developer ",
    },
  ]

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <Box>
      {projects.map((project, index) => (
        <ProjectItem
          key={index}
          {...project}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </Box>
  )
}
