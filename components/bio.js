import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react"

const TimelineItem = ({ year, children }) => {
  const line = useColorModeValue("blackAlpha.200", "whiteAlpha.200")
  const muted = useColorModeValue("gray.700", "gray.300")
  const yearColor = useColorModeValue("gray.900", "white")
  const dot = useColorModeValue("teal.500", "teal.300")

  return (
    <Flex position="relative" gap={4} pb={5}>
      {/* Left rail (dot + line) */}
      <Flex direction="column" align="center" minW="34px">
        <Box
          w="10px"
          h="10px"
          borderRadius="full"
          bg={dot}
          boxShadow={useColorModeValue("0 0 0 4px rgba(49,151,149,0.15)", "0 0 0 4px rgba(129,230,217,0.12)")}
          mt="6px"
        />
        <Box w="2px" flex="1" bg={line} mt={2} borderRadius="full" />
      </Flex>

      {/* Content */}
      <Box flex="1" minW={0}>
        <Text fontWeight="700" color={yearColor} fontSize="sm" letterSpacing="0.3px">
          {year}
        </Text>
        <Text mt={1} color={muted} lineHeight="tall">
          {children}
        </Text>
      </Box>
    </Flex>
  )
}

export const BioTimeline = () => {
  const border = useColorModeValue("blackAlpha.200", "whiteAlpha.200")
  const bg = useColorModeValue("white", "gray.900")

  return (
    <Box
      borderWidth="1px"
      borderColor={border}
      bg={bg}
      borderRadius="2xl"
      p={{ base: 4, md: 5 }}
    >
      <TimelineItem year="2022">
        Started my B.Tech in Computer Science Engineering and began my journey in software development.
      </TimelineItem>

      <TimelineItem year="2024">
        Joined <strong>Aeons Technologies</strong> as a Software Developer Intern, building responsive web applications and gaining industry experience.
      </TimelineItem>

      <TimelineItem year="2025">
        Worked at <strong>Atorix IT Solutions</strong> as a Web Developer Intern, developing ERP platforms, backend APIs, and business websites using modern web technologies.
      </TimelineItem>

      <TimelineItem year="2026">
        Graduated with a B.Tech in Computer Science Engineering and received an offer from <strong>Infosys</strong> as a System Engineer.
      </TimelineItem>

      {/* Hide the last line extension visually */}
      <Box mt="-20px" ml="14px" h="20px" bg={bg} />
    </Box>
  )
}
