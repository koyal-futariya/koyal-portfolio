import { List, ListItem, ListIcon, Text } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'

export const Skills = () => (
  <List spacing={3}>
    <ListItem>
      <ListIcon as={ChevronRightIcon} color="teal.500" />
      <b>Frontend:</b> React.js, Next.js, HTML5, CSS3, JavaScript, Tailwind CSS
    </ListItem>
    <ListItem>
      <ListIcon as={ChevronRightIcon} color="teal.500" />
      <b>Backend:</b> Node.js, Express, MongoDB
    </ListItem>
    <ListItem>
      <ListIcon as={ChevronRightIcon} color="teal.500" />
      <b>Tools & Technologies:</b> Git, GitHub, VS Code, Postman
    </ListItem>
    <ListItem>
      <ListIcon as={ChevronRightIcon} color="teal.500" />
      <b>Soft Skills:</b> Problem Solving, Team Collaboration, Communication
    </ListItem>
  </List>
)
