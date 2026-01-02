import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  Heading,
  Center,
  Image,
  useColorMode
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => {
  const { colorMode } = useColorMode()
  
  return (
  <Layout title="Koyal Portfolio">
    <Container>
      <Title>
        Personal Portfolio Website <Badge>2025</Badge>
      </Title>

      <P>
        Designed and developed a personal portfolio website to showcase projects, skills, and professional experience in a clean, recruiter-friendly format.
      </P>
      <P>
        Built with modern frontend best practices, focusing on responsive UI, fast page loads, and a consistent design system.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://koyal-portfolio.vercel.app/" target="_blank">
            https://koyal-portfolio.vercel.app/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Role</Meta>
          <span>Web Developer</span>
        </ListItem>

        <ListItem>
          <Meta>Platform</Meta>
          <span>Web</span>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js, React, Chakra UI, Vercel</span>
        </ListItem>

        <ListItem>
          <Meta>Key work</Meta>
          <span>
            Component-based UI, reusable layout system, SEO-friendly pages, and deployment workflow on Vercel.
          </span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>Screenshots</Center>
      </Heading>

      {/* Replace these images with your actual portfolio screenshots */}
      <WorkImage src={`/images/works/portfolio-${colorMode === 'light' ? 'd' : 'w'}.png`} alt="Portfolio home page" />
      <WorkImage src={`/images/works/resume-${colorMode === 'light' ? 'd' : 'w'}.png`} alt="Projects section" />

    </Container>
  </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
