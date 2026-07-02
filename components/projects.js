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
      title: "Brain Tumor Detection Using Explainable AI",
      description: [
        "Developed a CNN-based brain tumor detection system using VGG16 with transfer learning for MRI image classification.",
        " Applied Explainable AI techniques (Grad-CAM, LIME) to visualize tumor regions and improve model interpretability.",
        "Performed data preprocessing and image augmentation to enhance model performance and generalization.",
        "Processed 5,000+ MRI images for training and evaluation.",
        "Deployed a web-based interface using React.js for real-time tumor prediction and visualization with confidence scores.",
        "Achieved high classification accuracy (~80%+) on medical imaging datasets.",
      ],
      link: "https://brain-tumor-detection-1.vercel.app/",
      date: "2026",
      technologies: ["React.js", "Python","CNN","VGG16", "TensorFlow", "Pandas", "NumPy", "OpenCV", "Grad-CAM", "LIME"],
      role: "Final Year Project",
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
