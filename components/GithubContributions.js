// components/GithubContributions.js
import { Box, Flex, Text, Tooltip, useColorModeValue, Heading } from '@chakra-ui/react';
import { useEffect, useMemo, useState } from 'react';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Gray color scheme (levels 0-4)
const GITHUB_COLORS = {
  light: ['#d1d5db', '#9ca3af', '#6b7280', '#4b5563', '#1f2937'],
  dark: ['#1f2937', '#4b5563', '#6b7280', '#9ca3af', '#d1d5db'],
};

export default function GithubContributions({ username }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const colorMode = useColorModeValue('light', 'dark');
  const scrollbarThumb = useColorModeValue('gray.300', 'gray.600');
  const scrollbarHover = useColorModeValue('gray.400', 'gray.500');

  useEffect(() => {
    const fetchContributions = async () => {
      if (!username) {
        setError('GitHub username is required');
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`/api/github/contributions?username=${username}`);
        if (!response.ok) {
          throw new Error('Failed to fetch contributions');
        }
        const result = await response.json();
        setData(result.contributions || []);
      } catch (err) {
        console.error('Error fetching GitHub contributions:', err);
        setError(err.message || 'Failed to load contributions');
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, [username]);

  // Visual constants
  const CELL = 13; // 11x11 pixel cells
  const GAP = 1;   // 1px gap between cells
  const WEEK_COL_W = CELL + GAP;

  // Calculate contribution level based on count
  const getLevel = (count) => {
    if (!count) return 0;
    if (count <= 0) return 0;
    if (count === 1) return 1;
    if (count <= 4) return 2;
    if (count <= 9) return 3;
    return 4; // 10+ contributions
  };

  // Build weeks (columns)
  const weeks = useMemo(() => {
    if (!data?.length) return [];
    const w = [];
    let cur = [];

    data.forEach((day, idx) => {
      if (idx % 7 === 0 && cur.length) {
        w.push(cur);
        cur = [];
      }
      cur.push(day);
    });

    if (cur.length) w.push(cur);
    return w;
  }, [data]);

  // Month labels aligned to week columns
  const monthLabels = useMemo(() => {
    if (!weeks.length) return [];
    const labels = [];
    let lastMonth = -1;

    weeks.forEach((week, weekIndex) => {
      const firstDay = week?.[0];
      if (!firstDay?.date) return;

      const d = new Date(firstDay.date);
      const m = d.getMonth();

      if (m !== lastMonth) {
        labels.push({ month: m, weekIndex });
        lastMonth = m;
      }
    });

    return labels;
  }, [weeks]);

  if (loading) {
    return (
      <Box p={4} textAlign="center">
        <Text>Loading contributions...</Text>
      </Box>
    );
  }

  if (error) {
    return (
      <Box p={4} color="red.500">
        Error: {error}
      </Box>
    );
  }

  if (!data?.length) {
    return (
      <Box p={4}>
        <Text>No contribution data available</Text>
      </Box>
    );
  }

  return (
    <Box w="full">
      <Heading as="h3" size="md" mb={4}>
        GitHub Contributions
      </Heading>

      <Box 
        position="relative"
        w="full"
        maxW={{ base: '100%', md: 'fit-content' }}
      >
        {/* Month labels */}
        <Box position="relative" height="14px" mb={1}>
          {monthLabels.map(({ month, weekIndex }, i) => {
            // Hide a leading December label at the very start of the graph
            if (i === 0 && month === 11) return null;
            const next = monthLabels[i + 1];
            const spanWeeks = (next ? next.weekIndex : weeks.length) - weekIndex;

            return (
              <Box
                key={`${month}-${weekIndex}`}
                position="absolute"
                left={`${weekIndex * WEEK_COL_W}px`}
                width={`${spanWeeks * WEEK_COL_W}px`}
              >
                <Text fontSize="xs" color="gray.500">
                  {MONTHS[month]}
                </Text>
              </Box>
            );
          })}
        </Box>

        {/* Contribution grid */}
        <Box 
          display="flex" 
          gap={`${GAP}px`}
          overflowX={{ base: 'auto', md: 'visible' }}
          pb={2} // Add some padding for scrollbar
          css={{
            '&::-webkit-scrollbar': {
              height: '6px',
            },
            '&::-webkit-scrollbar-track': {
              background: 'transparent',
            },
            '&::-webkit-scrollbar-thumb': {
              background: scrollbarThumb,
              borderRadius: '3px',
            },
            '&::-webkit-scrollbar-thumb:hover': {
              background: scrollbarHover,
            },
          }}
        >
          {weeks.map((week, weekIndex) => (
            <Box key={weekIndex} display="flex" flexDirection="column" gap={`${GAP}px`}>
              {week.map((day, dayIndex) => {
                const count = day?.count || 0;
                const level = getLevel(count);
                const tooltip = count > 0
                  ? `${count} contribution${count !== 1 ? 's' : ''} on ${new Date(day.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}`
                  : 'No contributions';
                
                return (
                  <Tooltip
                    key={`${weekIndex}-${dayIndex}`}
                    label={tooltip}
                    placement="top"
                    hasArrow
                    bg="gray.700"
                    color="white"
                    borderRadius="md"
                    px={2}
                    py={1}
                  >
                    <Box
                      width={`${CELL}px`}
                      height={`${CELL}px`}
                      bg={GITHUB_COLORS[colorMode][level]}
                      borderRadius="2px"
                      _hover={{
                        opacity: 0.8,
                      }}
                      aria-label={tooltip}
                    />
                  </Tooltip>
                );
              })}
            </Box>
          ))}
        </Box>
      </Box>

      {/* Legend - Left aligned */}
      <Flex mt={4} justify="flex-start" fontSize="xs" color="gray.500" align="center" gap={4} ml="-4px">
        <Text>Less</Text>
        <Flex gap={`${GAP}px`} align="center">
          {GITHUB_COLORS[colorMode].map((color, i) => (
            <Box
              key={i}
              w={`${CELL}px`}
              h={`${CELL}px`}
              bg={color}
              borderRadius="2px"
            />
          ))}
        </Flex>
        <Text>More</Text>
      </Flex>
    </Box>
  );
}
