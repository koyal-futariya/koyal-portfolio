import {
  Box,
  Text,
  Badge,
  Flex,
  HStack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorModeValue,
} from "@chakra-ui/react"

// --- Reusable “premium” highlight chip ---
const HighlightChip = ({ children, colorScheme = "teal" }) => {
  const border = useColorModeValue(`${colorScheme}.200`, "whiteAlpha.200")
  const text = useColorModeValue(`${colorScheme}.800`, `${colorScheme}.100`)
  const bg = useColorModeValue(`${colorScheme}.50`, "whiteAlpha.100")
  const dot = useColorModeValue(`${colorScheme}.500`, `${colorScheme}.300`)

  return (
    <Badge
      px={2}
      py={1}
      borderRadius="md"
      borderWidth="1px"
      borderColor={border}
      bg={bg}
      color={text}
      fontSize="xs"
      fontWeight="600"
      textTransform="none"
    >
      <Text as="span" lineHeight="1">
        {children}
      </Text>
    </Badge>
  )
}

export const Education = () => {
  const education = [
    {
      institution: "GH Raisoni College of Engineering and Management",
      degree: "B-Tech",
      period: "2022 – Present",
      details: [
        "◦ Actively developing core skills in programming, software development, and emerging technologies while participating in academic and co-curricular activities to enhance teamwork and leadership abilities.",
        "◦ CGPA: 7.86/10"
      ],
      highlights: ["DSA", "Web Development", "Databases", "OS"],
    },
    {
      degree: "Class 12 (Higher Secondary Education)",
      institution: "Dinanath High School and Junior College",
      period: "2020 - 2022",
      details: [
        "◦ Successfully completed senior secondary education specializing in Science and Mathematics, building a strong analytical foundation.",
        "◦ Percentage: 63.7 %"
      ],
      highlights: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
    },
    {
      degree: "Class 10 (Secondary Education)",
      institution: "Kurvey's New Model Public School",
      period: "2019 - 2020",
      details: [
        "◦ Successfully completed 10th Standard, building solid fundamentals in core subjects while actively engaging in co-curricular activities that contributed to overall personality development and leadership qualities.",
        "◦ Percentage: 80.1 %"
      ],
      highlights: ["Mathematics", "Science", "English"],
    },
  ]

  // Page/card tokens
  const bg = useColorModeValue("white", "gray.900")
  const border = useColorModeValue("blackAlpha.200", "whiteAlpha.200")
  const muted = useColorModeValue("gray.600", "gray.300")
  const title = useColorModeValue("gray.900", "white")
  const panelBg = useColorModeValue("blackAlpha.50", "whiteAlpha.50")
  const leftBg = useColorModeValue("white", "gray.950")

  return (
    <Box
      borderWidth="1px"
      borderColor={border}
      bg={bg}
      borderRadius="2xl"
      overflow="hidden"
    >
      <Tabs orientation="vertical" variant="enclosed" colorScheme="teal" defaultIndex={0}>
        <Flex direction={{ base: "column", md: "row" }} minH={{ md: "280px" }}>
          {/* Left side: list */}
          <Box
            w={{ base: "full", md: "360px" }}
            borderRightWidth={{ base: 0, md: 1 }}
            borderBottomWidth={{ base: "1px", md: "0" }}
            borderColor={border}
            bg={leftBg}
            p={3}
          >
            <Text px={3} py={2} fontSize="sm" fontWeight="800" color={muted} letterSpacing="0.4px">
              Education
            </Text>

            <TabList display="grid" gap={2}>
              {education.map((ed, idx) => (
                <Tab key={idx} justifyContent="flex-start" p={0} _selected={{}}>
                  <Box
                    w="full"
                    textAlign="left"
                    px={3}
                    py={3}
                    borderRadius="xl"
                    borderWidth="1px"
                    borderColor={border}
                    transition="all 0.2s ease"
                    _selected={{
                      borderColor: "teal.300",
                      bg: useColorModeValue("teal.50", "whiteAlpha.100"),
                    }}
                    _hover={{
                      borderColor: useColorModeValue("teal.300", "teal.200"),
                    }}
                  >
                    <Text fontWeight="800" color={title} fontSize="sm" noOfLines={2}>
                      {ed.institution}
                    </Text>

                    <Flex direction="column" mt={2} gap={0.5}>
                      {ed.institution && (
                        <Text fontSize="xs" color={muted} noOfLines={1}>
                          {ed.degree}
                        </Text>
                      )}
                      {ed.period && (
                        <Text fontSize="xs" color={muted} opacity={0.8}>
                          {ed.period}
                        </Text>
                      )}
                    </Flex>
                  </Box>
                </Tab>
              ))}
            </TabList>
          </Box>

          {/* Right side: details */}
          <Box flex="1" p={{ base: 4, md: 6 }} bg={panelBg}>
            <TabPanels>
              {education.map((ed, idx) => (
                <TabPanel key={idx} px={0}>
                  <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="900" color={title}>
                    {ed.institution}
                  </Text>

                 

                  {ed.details && (
                    <Box mt={4}>
                      {Array.isArray(ed.details) ? (
                        ed.details.map((detail, i) => (
                          <Text key={i} color={muted} lineHeight="tall" fontSize="sm" mb={i < ed.details.length - 1 ? 2 : 0}>
                            {detail}
                          </Text>
                        ))
                      ) : (
                        <Text color={muted} lineHeight="tall" fontSize="sm">
                          {ed.details}
                        </Text>
                      )}
                    </Box>
                  )}

                  {ed.highlights?.length > 0 && (
                    <>
                      <Text mt={6} mb={1} fontSize="sm" fontWeight="800" color={title}>
                        Highlights
                      </Text>

                      <Flex wrap="wrap" gap={1.5}>
                        {ed.highlights.map((h, i) => (
                          <HighlightChip key={i} colorScheme="teal">
                            {h}
                          </HighlightChip>
                        ))}
                      </Flex>
                    </>
                  )}
                </TabPanel>
              ))}
            </TabPanels>
          </Box>
        </Flex>
      </Tabs>
    </Box>
  )
}
